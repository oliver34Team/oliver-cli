import downloadGit from 'download-git-repo';

export const downloadLocal = async (projectName) => {
  const api = 'oliver34Team/oliver-cli-template';
  return new Promise((resolve, reject) => {
    downloadGit(api, projectName, (err) => {
      console.log(api);
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};
