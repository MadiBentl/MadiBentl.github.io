import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="flex-vertical justify-center items-center min-h-[30vh] p-8">
          <div className="relative w-full h-160 flex items-center justify-center">
            <Image
              src="/blob.svg"
              alt="blob background"
              fill
              className="object-contain"
            />
            <div className="relative text-center z-10 bg-(--color-magenta)">
              <h2 className="text-5xl font-bold text-white">Madison Bentley</h2>
              <p className="text-2xl text-white">Senior Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
