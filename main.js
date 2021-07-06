var images = ["515BniafrYL._SX258_BO1,204,203,200_.jpg", "Papa.jpg", "mommy.jpg", "Aanya.jpg", "Parv.jpg"];
var names = ["FAMILY BOOK","Kishan Kumar", "Nisha Saini", "Aanya Saini", "Me" ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
