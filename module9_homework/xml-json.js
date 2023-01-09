// const jsonText = {
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic' },
//     { name: 'Vova', age: 60, prof: 'pilot' },
//   ],
// };

// const jsonObj = JSON.stringify(jsonText);
// console.log(jsonObj);

// const stringResult =
//   '{"list":[{"name":"Petr","age":20,"prof":"mechanic"},{"name":"Vova","age":60,"prof":"pilot"}]}';

// const jsonParse = JSON.parse(stringResult);
// console.log(jsonParse);

const xmlText = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

// console.log(xmlText);

const parser = new DOMParser();
xmlDom = parser.parseFromString(xmlText, 'text/xml');
// console.log(xmlDom);

const listNode = xmlDom.querySelector('list');
const student1Node = listNode.querySelectorAll('student')[0];
const student2Node = listNode.querySelectorAll('student')[1];
const name1Node = student1Node.querySelector('name');
const firstName1Node = name1Node.querySelector('first').textContent;
const secondName1Node = name1Node.querySelector('second').textContent;
const age1Node = student1Node.querySelector('age').textContent;
const prof1Node = student1Node.querySelector('prof').textContent;
const lang1Node = name1Node.getAttribute('lang');
const name2Node = student2Node.querySelector('name');
const firstName2Node = name2Node.querySelector('first').textContent;
const secondName2Node = name2Node.querySelector('second').textContent;
const age2Node = student2Node.querySelector('age').textContent;
const prof2Node = student2Node.querySelector('prof').textContent;
const lang2Node = name2Node.getAttribute('lang');

const result = {
  list: [
    {
      name: `${firstName1Node} ${secondName1Node}`,
      age: age1Node,
      prof: prof1Node,
      lang: lang1Node,
    },
    {
      name: `${firstName2Node} ${secondName2Node}`,
      age: age2Node,
      prof: prof2Node,
      lang: lang2Node,
    },
  ],
};
console.log(result);
