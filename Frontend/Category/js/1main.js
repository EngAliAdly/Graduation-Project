var categoryNameInput =document.getElementById('categoryName');
var categoryParentInput =document.getElementById('categoryParent');
var categoryOrderInput =document.getElementById('categoryOrder');
var categoryTypeInput =document.getElementById('categoryType');
var categoryTitleInput =document.getElementById('categoryTitle');
var categoryDescInput =document.getElementById('categoryDesc');
var categoryAttriInput =document.getElementById('categoryAttri');
var categoryName =document.getElementById('categoryName');
var categoryContainer= [];



function add()
{
    var categories = 
    {
        name:categoryNameInput.value,
        parent:categoryParentInput.value,
        order:categoryOrderInput.value,
        type:categoryTypeInput.value,
        title:categoryTitleInput.value,
        desc:categoryDescInput.value,
        attri:categoryAttriInput.value,
    }
    console.log(categorys)
    categoryContainer.push(categories);
    displayCategory();
    
}

function displayCategory()
{
    var cartoona = ``;
    for(var i = 0 ; i < categoryContainer.length ; i++)
    {
        cartoona +=` <tr> 
        <th scope="row">1</th>
        <td>${categoryContainer[i].name}</td>
        <td>${categoryContainer[i].parent}</td>
        <td>${categoryContainer[i].order}</td>
   
        <td>
        </td>
      
        
      </tr>`;


    }
     document.getElementById("table").innerHTML=cartoona;


}