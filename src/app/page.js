import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <h1></h1>
      <img
        src="https://scontent.ftbs3-1.fna.fbcdn.net/v/t1.15752-9/431346604_3613763545507188_2878860993630188080_n.png?stp=dst-png_s720x720&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=uJ6LGwj4mvwQ7kNvgGKnbUh&_nc_zt=23&_nc_ht=scontent.ftbs3-1.fna&_nc_gid=AKBDokIbF_c65RkcdOOcTLg&oh=03_Q7cD1QFyoCcBtOtaZCoyhjEME-FvNNcqkGe30azeYBKjhisp3w&oe=6745A3A8"
        className="h-100 w-full bg-center bg-fixed"
        alt="..."
      />
    </div>
  );
}
