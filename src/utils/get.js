import downloadGit from 'download-git-repo';
import { getAll } from './rc';

const dowloadLocal = async (templateName, projectName) => {
  const config = await getAll();
  const api = `${config.registry}/${templateName}`;

  return new Promise((resolve, reject) => {
    downloadGit(api, projectName, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

export default dowloadLocal;
