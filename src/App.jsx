import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UI from "./Components/UI";
import Tables from "./Components/Tables";
import AddTable from "./Components/Addtable";
import Welcome from "./Components/Welcome"; 
import "./Styles/App.css";

const queryClient = new QueryClient();

export default function App() {
  const [inputRows, setInputRows] = useState(""); 
  const [inputCols, setInputCols] = useState("");
  const [rows, setRows] = useState(null);
  const [cols, setCols] = useState(null);

  const handleGenerate = () => {
    if (inputRows && inputCols && inputRows > 0 && inputCols > 0) {
      setRows(inputRows);
      setCols(inputCols);
    } else {
      setRows(null);
      setCols(null);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Header />

      
          <Welcome /> 
       

        <UI
          rows={inputRows}
          cols={inputCols}
          setRows={setInputRows}
          setCols={setInputCols}
          onGenerate={handleGenerate}
        />

        {rows && cols && (
          <>
            <Tables rows={rows} cols={cols} />
            <AddTable rows={rows} cols={cols} />
          </>
        )}

        <Footer />
      </div>
    </QueryClientProvider>
  );
}
