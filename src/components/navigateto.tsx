import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavigateTo({ path }: { path: string }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(path);
  }, []);
  return <></>;
}

export default NavigateTo;
