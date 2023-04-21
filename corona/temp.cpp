#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int t, p;
    cin >> t;
    for (int i = 0; i < t; i++)
    {
        cin >> p;
        int d = 0, a = 0;
        while (p)
        {
            if (p % 2 == 1)
                a = a + 1;
            p = p / 2;
            d = d + 1;
        }
        cout << a << " " << d << endl;
    }
    return 0;
}
