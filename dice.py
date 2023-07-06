def dice(arr):
    def helper(arr, t):
            while t in arr:
                arr.remove(t)
            return arr
    def pair_helper(dic):
        c = 0 
        for v in dic.values():
            if v == 2:
                c += 1
        if c == 3:
            return True
        return False
    def two3(dic):
        c = 0
        tot = 0
        for k, v in dic.items():
            if v == 3:
                c +=1
                if k != 1:
                    tot += k * 100
                else:
                    tot += 1000
        if c == 2:
            return tot
        if two3(key) > 0:
            return two3(key)
    def last_helper(arr):
        tot = 0
        for a in arr:
            if a == 1:
                tot += 100
            elif a == 5:
                tot += 50
        return tot
    if len(arr) < 3:
        if last_helper(arr) > 0:
            return last_helper(arr)
        return 'Zonk'
    if list(set(arr))==arr:
        return 1000
    key = {}
    ans = "Zonk"
    for a in arr:
        if a not in key:
            key[a] = 1
        else:
            key[a] += 1
    for k, v in key.items():
        if v == 6:
            if k != 1: 
                return k * 400
            else:
                return 1000 * 4
        if v == 5:
            if k != 1: 
                ans =  k * 300
                for x in helper(arr, k):
                    if x == 1:
                        ans += 100
                    elif x == 5:
                        ans += 50
                return ans
            else:
                ans = 1000 * 3
                for x in helper(arr, k):
                    if x == 1:
                        ans += 100
                    elif x == 5:
                        ans += 50
                return ans
        elif v == 4:
            if k != 1: 
                ans = k * 200
                for x in helper(arr, k):
                    if x == 1:
                        ans += 100
                    elif x == 5:
                        ans += 50
                return ans
            else:
                ans = 1000 * 2
                for x in helper(arr, k):
                    if x == 1:
                        ans += 100
                    elif x == 5:
                        ans += 50
                return ans
    if pair_helper(key):
        return 750
    for k, v in key.items():
        if v == 3:
            if k != 1:
                ans = k * 100
            else:
                ans = 1000
            for x in helper(arr, k):
                    if x == 1:
                        ans += 100
                    elif x == 5:
                        ans += 50
            return ans
    if last_helper(arr) > 0:
        return last_helper(arr)
    return ans


print(dice([2,2,3,3,6,6]))