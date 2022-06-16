import Header from "./header";

export default function Layout(props: { children: JSX.Element }) {
  return (
    <div className={`bg-fuchsia-200 h-screen`}>
      <Header />
      
      <main className={`px-20 py-10`}>
        {props.children}
      </main>
    </div>
  );
}