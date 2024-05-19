import React from "react";
import Link from "@components/Link";
import { MappedDataType } from "@lib/types";

interface MappedItemProps {
  title: string;
  data: Array<MappedDataType>;
}

export default function MappedNav({ title, data }: MappedItemProps) {
  return (
    <div className="col-12 col-md">
      <div className="collapse-item">
        <div className="collapse-title">{title}</div>
        <ul className="nav flex-column">
          {data?.map((item) => (
            <li className="nav-item" key={item?.id}>
              <Link href={item?.url} className="nav-link">
                {item?.id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
