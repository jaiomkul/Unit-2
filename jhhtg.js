function convert(size,target,arr){
    var count=0;
    var count1=0;
    for(i=0; i<size; i++)
    {
        if(arr[i]<=target)
        {
            count1++;
        }
        else if(arr[i]>=target && count<1)
        {
            count++;
        }
        else
        {
            break;
        }
    }
    console.log(count1);