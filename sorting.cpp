##sarah-spider  
//sodagudi 106117086
#include <stdio.h>
#include <math.h>
void insertionSort(int arr[], int n)
{
   int i, k, j;
   for (i = 1; i < n; i++)
   {
       k = arr[i];
       j = i-1;  
       while (j >= 0 && arr[j] > k)
       {
           arr[j+1] = arr[j];
           j = j-1;
       }
       arr[j+1] = k;
   }
}
