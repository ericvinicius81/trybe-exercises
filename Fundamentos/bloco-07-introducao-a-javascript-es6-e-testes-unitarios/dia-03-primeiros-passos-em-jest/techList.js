const techList = (list, name) => {
  const sortlist = list.sort();
  const objectTech = [];

  if (list.length === 0) return 'Vazio!';
  
  for (let index = 0; index < sortlist.length; index += 1) {
    objectTech.push({
      tech: sortlist[index],
      name,
    });
  }

  return objectTech;
 
};

module.exports = techList;
