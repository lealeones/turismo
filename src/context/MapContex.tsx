import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type filterMaps = {
  busquedaString: string;
  tipo: string;
};

export type MapContextType = {
  filter: filterMaps;
  tipo: string;
  busquedaString: string;
  setBusquedaString: Dispatch<SetStateAction<string>>;
  setTipo: Dispatch<SetStateAction<string>>;
};

export const MapContext = createContext<MapContextType>({} as MapContextType);
export const useMapContext = () => useContext(MapContext);

export const MapContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tipo, setTipo] = useState<string>("");
  const [busquedaString, setBusquedaString] = useState<string>("");

  const initialValues = {
    filter: {
      busquedaString,
      tipo,
    },
    busquedaString,
    tipo,
    setBusquedaString,
    setTipo,
  };
  return (
    <MapContext.Provider value={initialValues}>{children}</MapContext.Provider>
  );
};
