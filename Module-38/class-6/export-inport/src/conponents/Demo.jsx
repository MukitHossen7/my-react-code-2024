// const Demo = ({ task = "N/A", isDone }) => {
//   if (isDone) {
//     return <li>Finish: {task}</li>;
//   }
//   return <li>Way on: {task}</li>;
// };

// const Demo = ({ task = "N/A", isDone }) => {
//   return (
//     <li>
//       {isDone ? "Finished" : "Try it"}: {task}
//     </li>
//   );
// };

// const Demo = ({ task = "N/A", isDone }) => {
//   return (
//     <li>
//       {task} : {isDone && "Finished"}
//     </li>
//   );
// };

const Demo = ({ task = "N/A", isDone }) => {
  return (
    <li>
      {task} : {isDone || "Try"}
    </li>
  );
};
export default Demo;
