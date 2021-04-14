import chalk from "chalk";

export const ansii_logo = (): boolean => {
  console.log(
    chalk.red(`
                    ssssssssssss
                   ssssssssssssssss
                 ssssssssssssssssssss
                ssssssssssssssssssssss
                ssssssssssssssssssssss
                 ssssssssssssssssssss
                  sssssssssssssssss
                    sssssssssssss
                    
                  ssssssssssssss
                 ssssssssssssss
                ssssssssssssss
               ssssssssssssss
              ssssssssssssss
             sssssssssssssssssssssss
            sssssssssssssssssssssss
           ssssssssssssssssssssss
                  ssssssssssss
                 ssssssssss
                ssssssss
               sssssss
              ssssss
             ssss
            sss
  `)
  );
  return true;
};
