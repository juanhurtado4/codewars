def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        biggest_so_far = 0
        for ind, char in enumerate(s):
            sub_str = char
            sub_str_len = len(sub_str)
            biggest_so_far = biggest_so_far if biggest_so_far > sub_str_len else sub_str_len

            if ind + 1 == len(s): break

            for sub_ind in range(ind + 1, len(s)):
                if s[sub_ind] not in sub_str:
                    sub_str += s[sub_ind]
                    sub_str_len = len(sub_str)
                    biggest_so_far = biggest_so_far if biggest_so_far > sub_str_len else sub_str_len
                    
                else: break

        return biggest_so_far
