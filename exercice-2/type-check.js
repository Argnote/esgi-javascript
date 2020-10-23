function type_check_v1(value,type)
{
    if(typeof(value)===type)
        return true;
    return false;
}

// console.log(type_check_v1("ttt","number"));