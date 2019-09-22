#!/usr/bin/env python
# coding: utf-8

# ### Assignment - 2

In 1949, Dr. Rudolf Flesch published The Art of Readable Writing, in which he proposed
a measure of text readability known as the Flesch Index. This index is based on
the average number of syllables per word and the average number of words per sentence
in a piece of text. Index scores usually range from 0 to 100, and they indicate
readable prose for the following grade levels:

Flesch Index   Grade Level of Readability
0–30             College
50–60            High School
90–100           Fourth Grade


In this case study, we develop a program that computes the Flesch Index for
a text file.

Request

Write a program that computes the Flesch Index and grade level for text stored in a
text file.

Analysis

The input to this program is the name of a text file. The outputs are the number of
sentences, words, and syllables in the file, as well as the file’s Flesch Index and Grade
Level Equivalent.

During analysis, we consult experts in the problem domain to learn any information
that might be relevant in solving the problem. For our problem, this information
includes the definitions of sentence, word, and syllable. For the purposes of this program,
these terms are defined below.

Word          Any sequence of non-whitespace characters.
Sentence      Any sequence of words ending in a period, question mark, exclamation point,colon, or semicolon.
Syllable      Any word of three characters or less; or any vowel (a, e, i, o, u) or pair of consecutive vowels, except for a                      final -es, -ed, or -e that is not -le.Note that the definitions of word and sentence are approximations. Some words, such
as doubles and kettles, end in -es but will be counted as having one syllable, and an
ellipsis ( … ) will be counted as three syllables.

Flesch’s formula to calculate the index F is the following:
    
F = 5206.835 − 1.015 × (words / sentences) − 84.6 × (syllables / words)

The Flesch-Kincaid Grade Level Formula is used to compute the Equivalent Grade
Level G:
    
G = 50.39 × (words / sentences)111.8 × (syllables / words) − 15.59


Design

This program will perform the following tasks:
1. Receive the filename from the user, open the file for input, and input the text.
2. Count the sentences in the text.
3. Count the words in the text.
4. Count the syllables in the text.
5. Compute the Flesch Index.
6. Compute the Grade Level Equivalent.
7. Print these two values with the appropriate labels, as well as the counts from
tasks 2–4.

The first and last tasks require no design. Let’s assume that the text is input as a single
string from the file and is then processed in tasks 2–4. These three tasks can be
designed as code segments that use the input string and produce an integer value.
Task 5, computing the Flesch Index, uses the three integer results of tasks 2–4 to
compute the Flesch Index. Lastly, task 6 is a code segment that uses the same integers
and computes the Grade Level Equivalent. The five tasks are listed in Table ,
where text is a variable that refers to the string read from the file.

All the real work is done in the tasks that count the items:
    
•• Add the number of characters in text that end the sentences. These characters
were specified in analysis, and the string method count is used to count them in
the algorithm.

•• Split text into a list of words and determine the text length.

•• Count the syllables in each word in text.

Task                                  What it Does
count the sentences                Counts the number of sentences in text.
count the words                    Counts the number of words in text.
count the syllables                Counts the number of syllables in text.
compute the Flesch Index     Computes the Flesch Index for the given numbers of sentences,words, and syllables.
compute the grade level      Computes the Grade Level Equivalent for the given numbers of sentences, words, and syllables.
# The last task is the most complex. For each word in the text, we must count the
# syllables in that word. From analysis, we know that each distinct vowel counts as a
# syllable, unless it is in the endings -ed, -es, or -e (but not -le). For now, we ignore the
# possibility of consecutive vowels.

# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:




