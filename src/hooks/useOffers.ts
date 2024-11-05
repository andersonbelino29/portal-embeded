import { Offer } from "@/interfaces/offer.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchOffers = async (): Promise<Offer[]> => {
  const token = "56sa4d65as5d65a4sd65ad";
  const response = await axios.get(
    "https://apihml.izio.com.br/GestorCampanhaRest/api/campanha",
    {
      params: {
        cod_empresa: 1,
        cod_campanha: 1,
        page_size: 10,
        page_number: 1,
        bol_somente_ativas: false,
      },
      headers: {
        accept: "application/json",
        tokenAutenticacao: token,
      },
    }
  );
  return response.data;
};

export const useOffers = () => {
  return useQuery<Offer[], Error>({
    queryKey: ["offers"],
    queryFn: fetchOffers,
  });
};
