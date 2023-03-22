function threeSum(arr, target) {
// write your code here

	let n=arr.length;let Nearsum=1000;
	for(let i=0;i<n-2;i++)
		{
			for(let j=i+1;j<n-1;j++)
				{
					for(let k=j+1;j<n;j++)
						{
							if(arr[i]+arr[j]+arr[k]===target)
								{
									return target;
								}

							else
							{
								let sum=arr[i]+arr[j]+arr[k];
								
								if(Math.abs(target-sum)<Math.abs(target-Nearsum))
									Nearsum=sum;
							}
						}
				}
		}
	return Nearsum;
  
}

module.exports = threeSum;
