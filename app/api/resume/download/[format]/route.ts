import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseAdmin';

const bucket = 'resume';

const mimeTypes: Record<string, string> = {
  pdf: 'application/pdf',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ format: string }> }
) {
  const { format } = await params;

  if (!['pdf', 'docx'].includes(format)) {
    return NextResponse.json(
      { message: 'Invalid file format' },
      { status: 400 }
    );
  }

  const filePath = `AlemayehuDabi_Resume.${format}`;

  try {
    // 1. Generate signed URL (valid for 60 seconds)
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUrl(filePath, 60);

    if (error || !data?.signedUrl) {
      console.error(error);
      return NextResponse.json(
        { message: 'Failed to retrieve the file' },
        { status: 500 }
      );
    }

    // 2. Fetch the file content from the signed URL
    const fileRes = await fetch(data.signedUrl);
    if (!fileRes.ok) {
      console.error('Failed to fetch file from signed URL');
      return NextResponse.json(
        { message: 'Failed to fetch file content' },
        { status: 500 }
      );
    }

    // 3. Convert to ArrayBuffer and send
    const fileBuffer = await fileRes.arrayBuffer();

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': mimeTypes[format],
        'Content-Disposition': `attachment; filename="${filePath}"`,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
