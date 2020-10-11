import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const AvoDetail = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();

  const { id } = request.query;

  const entry = await db.getById(id as string);

  response.status(200).json(entry);
}

export default AvoDetail;