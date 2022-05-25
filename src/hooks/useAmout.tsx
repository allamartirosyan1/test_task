const useAmout = () => {
  const convertIntoNumber = (amout: string) => {
    const sum = amout.match(/[0-9]+/g);
    const result = sum ? Number(sum.join("")) : 0;
    return result;
  };

  return {
    convertIntoNumber,
  };
};

export default useAmout;
