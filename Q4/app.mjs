import { exec, execFile } from "child_process";

exec('echo "TEST"', (error, stdout, stderr) => {
  console.log("error:", error);
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
});
