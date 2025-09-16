import { Sidebar } from "@/components/sidebar/sidebar";

import { AuditTable } from "@/components/audit/audit-table";

export default function AuditPage() {

  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-3xl font-bold mb-6">
          Audit Logs
        </h1>

        <AuditTable />

      </div>

    </div>
  );
}