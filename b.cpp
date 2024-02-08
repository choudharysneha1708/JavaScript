#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define lp(n) for (int i = 0; i < n; ++i)
#define vi vector<int>;
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        ll n;
        cin>>n;
        ll a[n];
        lp(n){
            cin>>a[i];
        }
 
        set<int>ind;
   
        for(int i=0; i<n; ++i){
         

            if(i!=0 && a[i]!=a[i-1]){
                ind.insert(i);
            }
        }
        ll q ;
        cin>>q;
        while(q--){
            int l, r;
            cin>>l>>r;
          
              auto i = ind.lower_bound(l);
      
              if(*i+1<=r){
                cout<<*i<<" "<<*i+1<<endl;
              }else{
                  cout << -1 << " " << -1 << endl;
              } 
            
        }
    }
}
