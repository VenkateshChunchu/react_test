
import convert from "xml-js";

// This implementation is based on how xml is converted to json by the converter
// This can be more simplified or we can find the better xml parser to do this job
export const formatXmlToJSON = (data: any) => {
  const json = JSON.parse(convert.xml2json(data));
  const resultSet: any[] = [];
  json["elements"].forEach((x: any) => {
    x.elements.forEach((y: any) => {
      let obj = {};
      y.elements.forEach((z: any) => {
        let val = z?.elements[0]?.text;
        val = isNaN(val) ? val : parseInt(val, 10);
        // Only adding uniq properties
        if (!obj.hasOwnProperty(z?.name)) {
          Object.assign(obj, {
            [z?.name]: val,
          });
        }
      });
      resultSet.push(obj);
    });
  });
  return resultSet;
};
