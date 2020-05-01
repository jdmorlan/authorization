module.exports = () => ({ policy, writer }) => {
  const { command } = policy;
  writer.write(`default ${command.key} = ${command.value}`);
};
