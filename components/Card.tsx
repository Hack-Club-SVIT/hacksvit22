export default function Card({ title }: { title: string }) {
  return (
    <div className="h-full w-1/2 bg-cyclamen flex flex-col items-center basis-auto grow-0 shrink-0 m-5 snap-start snap-always">
      <div className="h-40">Image here</div>
      <div className="justify-self-start">{title}</div>
    </div>
  );
}
