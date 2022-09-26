import React, { useState } from "react";
import DocumentCard, { DocumentData } from "../components/documentcard";
import Page from "../components/page";

function Documents() {
  const [docs, setDocs] = useState<DocumentData[]>([
    {
      name: "chem-module.pdf",
      _id: "1234567890",
      batch: "Backlog 2.0",
    },
    {
      name: "chem-module.pdf",
      _id: "1234567890",
      batch: "Backlog 2.0",
    },
    {
      name: "chem-module.pdf",
      _id: "1234567890",
      batch: "Backlog 2.0",
    },
    {
      name: "chem-module.pdf",
      _id: "1234567890",
      batch: "Backlog 2.0",
    },
    {
      name: "chem-module.pdf",
      _id: "1234567890",
      batch: "Backlog 2.0",
    },
    {
      name: "chem-module.pdf",
      _id: "1234567890",
      batch: "Backlog 2.0",
    },
  ]);

  return (
    <Page>
      <div className="w-screen h-screen flex flex-col gap-4 px-10 py-10">
        <div className="font-bold text-xl">My Documents</div>
        <div className="overflow-auto px-4 mb-20 rounded-lg bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200">
          <div className="snap-y py-4 justify-center items-center snap-mandatory rounded-sm overflow-auto flex flex-col gap-4">
            {docs.map((doc: DocumentData, idx: number) => (
              <DocumentCard key={idx} documentData={doc} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Documents;
