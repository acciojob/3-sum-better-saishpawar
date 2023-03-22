function threeSum(arr, target) {
// write your code here

	let n=arr.length;
	for(let i=0;i<n;i++)
		{
			for(let j=i+1;j<n;j++)
				{
					for(let k=j+1;j<n;j++)
						{
							if(arr[i]+arr[j]+arr[k]===target)
								return target;
						}
				}
		}
  
}

module.exports = threeSum;
