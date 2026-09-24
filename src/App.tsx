export default function App() {
  return (
    <div className="flex flex-col gap-6 mx-auto max-w-[582px] px-4 md:pt-20 pt-8 pb-10">
      <article className="flex flex-col gap-6">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-[15px] font-medium text-foreground">
            Subhrajit Guchait
          </h1>
          <h3 className="text-sm text-foreground opacity-40">@subh0x</h3>
        </div>
        <div className="flex flex-col gap-4 text-sm leading-6 font-[450]">
          <p>
            I work in AI Application Development for Improving Workflows, at PwC India.
          </p>
          <p>
            You can reach me at{' '}
            <a
              target="_self"
              className="inline-flex gap-0.5 items-center cursor-pointer text-indigo-500 hover:text-indigo-400"
              href="mailto:subhrajitguchait20@gmail.com"
            >
              subhrajitguchait20@gmail.com
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}
