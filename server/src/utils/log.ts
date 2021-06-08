import BitacoraRepository from "../repositories/BitacoraRepository";

const log = async (description: string) => {
  await BitacoraRepository.insert(description);
};

export default log;
