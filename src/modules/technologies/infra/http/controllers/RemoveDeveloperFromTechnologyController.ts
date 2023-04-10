import { Request, Response } from "express";
import RemoveDeveloperFromTechnologyService from "../../../services/RemoveDeveloperFromTechnologyService";

class RemoveDeveloperFromTechnologyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { developerId } = req.body;
    const technology = await RemoveDeveloperFromTechnologyService.execute(id, developerId);
    return res.sendStatus(204);
  }
}

export default new RemoveDeveloperFromTechnologyController();
