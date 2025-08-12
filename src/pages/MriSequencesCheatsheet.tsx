import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MadeWithDyad } from "@/components/made-with-dyad";

const MriSequencesCheatsheet = () => {
  const sequences = [
    {
      name: "T1-weighted (T1W)",
      characteristics: "Short TR, Short TE",
      appearance: "Fat is bright, water/CSF is dark, gray matter is darker than white matter.",
      use: "Anatomy, post-contrast imaging (gadolinium enhances bright areas).",
    },
    {
      name: "T2-weighted (T2W)",
      characteristics: "Long TR, Long TE",
      appearance: "Water/CSF is bright, fat is intermediate, gray matter is brighter than white matter.",
      use: "Pathology (edema, inflammation, tumors often appear bright).",
    },
    {
      name: "FLAIR (Fluid-Attenuated Inversion Recovery)",
      characteristics: "Long TR, Long TE, Inversion Pulse (nulls CSF signal)",
      appearance: "Similar to T2W, but CSF is dark. Lesions near CSF are better visualized.",
      use: "Periventricular lesions (e.g., MS plaques), subarachnoid hemorrhage, edema.",
    },
    {
      name: "DWI (Diffusion-Weighted Imaging)",
      characteristics: "Sensitive to water molecule movement",
      appearance: "Areas with restricted diffusion (e.g., acute stroke, high cellularity tumors) appear bright.",
      use: "Acute stroke, abscesses, highly cellular tumors.",
    },
    {
      name: "STIR (Short Tau Inversion Recovery)",
      characteristics: "Inversion Pulse (nulls fat signal)",
      appearance: "Fat is dark, water/edema is bright.",
      use: "Fat suppression (e.g., musculoskeletal imaging for bone marrow edema, soft tissue lesions).",
    },
    {
      name: "GRE (Gradient Echo)",
      characteristics: "No 180-degree refocusing pulse, sensitive to susceptibility effects",
      appearance: "Blood products, calcifications, and air appear dark.",
      use: "Hemorrhage, vascular malformations, cartilage imaging.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">MRI Sequences Cheatsheet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
            A quick reference guide to common MRI sequences and their key characteristics.
          </p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Sequence</TableHead>
                  <TableHead>Characteristics</TableHead>
                  <TableHead>Appearance</TableHead>
                  <TableHead>Common Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sequences.map((seq) => (
                  <TableRow key={seq.name}>
                    <TableCell className="font-medium">{seq.name}</TableCell>
                    <TableCell>{seq.characteristics}</TableCell>
                    <TableCell>{seq.appearance}</TableCell>
                    <TableCell>{seq.use}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="text-center mt-8">
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      <MadeWithDyad />
    </div>
  );
};

export default MriSequencesCheatsheet;