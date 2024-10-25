"use client";

import RegularButton from "@/components/01-Atoms/Button/RegularButton";
import Select from "@/components/01-Atoms/Form/Select";
import DateRangePicker from "@/components/02-Molecules/Form/DateRangePicker";
import { faUndo, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between gap-x-3">
        <div className="w-1/4">
          <DateRangePicker />
        </div>

        <div className="w-1/4">
          <Select
            label="Klinik"
            placeholder="Pilih klinik"
            options={[]}
          />
        </div>
        <div className="w-1/4">
          <Select
            label="Camcode"
            placeholder="Pilih camcode"
            options={[]}
          />
        </div>
        <div className="w-1/4">
          <Select
            label="Janji temu untuk"
            placeholder="Pilih janji temu"
            options={[]}
          />
        </div>
        <div className="w-1/4">
          <Select
            label="Duplikat"
            placeholder="Pilih"
            options={[]}
          />
        </div>
      </div>

      <div className="flex space-x-3">
        <RegularButton
          text="Search"
          type="primary"
          icon={faSearch}
          onClick={() => null}
        />
        <RegularButton
          text="Reset"
          type="secondary"
          icon={faUndo}
          onClick={() => null}
        />
      </div>
    </div>
  );
}
