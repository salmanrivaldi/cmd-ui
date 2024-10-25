import StandarCard from "@/components/02-Molecules/Card/StandarCard";
import { faCalendarAlt, faStethoscope, faHandsHelping, faPills } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Index() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <StandarCard title="Data Masuk">
        <div className="grid grid-cols-2">
          <div className="transition-colors group hover:bg-slate-100">
            <div className="flex items-center gap-5 p-5">
              <div className="">
                <div className="rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-white h-14 w-14">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="text-teal-500"
                  />
                </div>
              </div>
              <div className="text-sm flex flex-col gap-[2px]">
                <div className="font-semibold">Reservasi</div>
                <div className="text-gray-400 text-[13px]">7220 Reservasi</div>
                <div className="text-gray-400 text-[13px]">478 Terkonfirmasi</div>
              </div>
            </div>
          </div>
          <div className="transition-colors group hover:bg-slate-100">
            <div className="flex items-center gap-5 p-5">
              <div className="">
                <div className="rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-white h-14 w-14">
                  <FontAwesomeIcon
                    icon={faHandsHelping}
                    className="text-rose-500"
                  />
                </div>
              </div>
              <div className="text-sm flex flex-col gap-[2px]">
                <div className="font-semibold">Aku Peduli</div>
                <div className="text-gray-400 text-[13px]">2 Klien</div>
                <div className="text-gray-400 text-[13px]">2 Pasangan/anak</div>
              </div>
            </div>
          </div>
          <div className="transition-colors group hover:bg-slate-100">
            <div className="flex items-center gap-5 p-5">
              <div className="">
                <div className="rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-white h-14 w-14">
                  <FontAwesomeIcon
                    icon={faStethoscope}
                    className="text-rose-500"
                  />
                </div>
              </div>
              <div className="text-sm flex flex-col gap-[2px]">
                <div className="font-semibold">Skrining Mandiri</div>
                <div className="text-gray-400 text-[13px]">34 Pemohon</div>
                <div className="text-gray-400 text-[13px]">2 Kit</div>
              </div>
            </div>
          </div>
          <div className="transition-colors group hover:bg-slate-100">
            <div className="flex items-center gap-5 p-5">
              <div className="">
                <div className="rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-white h-14 w-14">
                  <FontAwesomeIcon
                    icon={faPills}
                    className="text-rose-500"
                  />
                </div>
              </div>
              <div className="text-sm flex flex-col gap-[2px]">
                <div className="font-semibold">Info PrEP</div>
                <div className="text-gray-400 text-[13px]">0 Via CSO</div>
                <div className="text-gray-400 text-[13px]">0 Via PKM</div>
              </div>
            </div>
          </div>
        </div>
      </StandarCard>

      <StandarCard title="Aku Peduli Terbaru">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-2 font-semibold text-[13px]">#</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Tanggal</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Camcode</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Nama/UIC</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Pasangan/Anak</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-600">
              <td
                className="p-4 text-center bg-slate-50 text-[13px]"
                colSpan={5}
              >
                Data belum tersedia
              </td>
            </tr>
          </tbody>
        </table>
      </StandarCard>

      <StandarCard title="Reservasi Terbaru">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-2 font-semibold text-[13px]">#</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Tanggal</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Camcode</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Rescode</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Layanan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-600">
              <td
                className="p-4 text-center bg-slate-50 text-[13px]"
                colSpan={5}
              >
                Data belum tersedia
              </td>
            </tr>
          </tbody>
        </table>
      </StandarCard>

      <StandarCard title="Reservasi Terbaru">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-2 font-semibold text-[13px]">#</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Tanggal</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Camcode</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Nama/UIC</th>
              <th className="px-4 py-2 font-semibold text-[13px]">Permintaan Kit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-600">
              <td
                className="p-4 text-center bg-slate-50 text-[13px]"
                colSpan={5}
              >
                Data belum tersedia
              </td>
            </tr>
          </tbody>
        </table>
      </StandarCard>
    </div>
  );
}
