module.exports = () => ({ policy, writer }) => {
  const { imports } = policy;

  const importsLength = imports.length;

  imports.forEach((item, index) => {
    const lastItem = index !== importsLength - 1;
    writer.write(`import ${item}`);

    if (importsLength !== 1 && lastItem) {
      writer.write("\n");
    }
  });
};
