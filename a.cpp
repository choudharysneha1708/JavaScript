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
        ll n,m,k;
        cin>>n>>m>>k;
        ll a[n];
        ll b[m];
        lp(n){
            cin>>a[i];
        }
        lp(m){
            cin>>b[i];
        }
        vector<vector<int>>c(k);
        for(int i=0; i<n; ++i){
            if(a[i]<=k){
                if(c[a[i]-1].size()==0){
                    c[a[i]-1].push_back(1);
                }
            }
        }
        for(int j=0; j<m; ++j){
            if(b[j]<=k){
                if (c[b[j] - 1].size() == 0){
                    c[b[j] - 1].push_back(2);
                }
               else if (c[b[j] - 1][c[b[j] - 1].size() - 1] != 2)
                {
                    c[b[j] - 1].push_back(2);
                }
            }
        }
        int x =0;
        int y =0;
        for(int i=0; i<k; ++i){
            if(c[i].size()==1){
                if(c[i][0]==1){
                    x++;
                }else{
                    y++;
                }
                c[i].pop_back();
            }
        }
        if(x<k/2){
            for (int i = 0; i < k; ++i)
            {
                if (c[i].size() == 2  && x<k/2){
                    x++;
                   c[i][0]=3;
                }
            }
        }
        if(y<k/2){
            for (int i = 0; i < k; ++i)
            {
                if (c[i].size() == 2 && c[i][0]!=3 )
                {
                    y++;
                    c[i].pop_back();
                }
            }
        }
        if(x>=k/2 && y>=k/2){
            cout<<"Yes"<<endl;
        }else{
            cout<<"No"<<endl;
        }
    }
}
