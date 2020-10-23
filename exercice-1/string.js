function ucfirst(chaine)
{
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine)
{
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(s => ucfirst(s.charAt(0)+ s.slice(1).toLocaleLowerCase())).join(' ');
}

function camelCase(chaine)
{
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(s => ucfirst(s.charAt(0)+ s.slice(1).toLocaleLowerCase())).join('');
}

function snake_case(chaine)
{
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(s=> s.toLocaleLowerCase()).join('_');
}
    //console.log(capitalize('ipsum DOLOR'));
// console.log(snake_case('je sUIs UN test'));