var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " Version 2.0.0 (now with Runestone)  copyright  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This textbook is intended for a second course in linear algebra, for students who have completed a first course focused on procedures rather than proofs. (That is, a course covering systems of equations, matrix algebra, determinants, but not vector spaces.)  Linear algebra is a mature, rich subject, full of both fascinating theory and useful applications. One of the things you might have taken away from a first course in the subject is that there's a lot of tedious calculation involved. This is true, if you're a human. But the algorithms you learned are easily implemented on a computer. If we want to be able to discuss any of the interesting applications of linear algebra, we're going to need to learn how to do linear algebra on a computer.  There are many good mathematical software products that can deal with linear algebra, like Maple, Mathematica, and MatLab. But all of these are proprietary, and expensive. Sage is a popular open source system for mathematics, and students considering further studies in mathematics would do well to learn Sage. Since we want to prepare students for careers other than mathematician , we'll try to do everything in Python.  Python is a very popular programming language, partly because of its ease of use. Those of you enrolled in Education may find yourself teaching Python to your students one day. Also, if you do want to use Sage, you're in luck: Sage is an amalgamation of many different software tools, including Python. So any Python code you encounter in this course can also be run on Sage. You do not have to be a programmer to run the code in this book. We'll be primarily working with the SymPy Python library, which provides many easy to use functions for operations like determinant and inverse.  These notes originally began as an attempt to make Python-based worksheets that could be exported from PreTeXt to Jupyter, for use in the classroom. It quickly became apparent that something more was needed, and the worksheets morphed into lecture notes. These are intended to serve as a textbook for Math 3410, but with some work they can also be used in class. The notes are written in PreTeXt , and can be converted to both Jupyter notebooks and reveal.js slides.  It should be noted that Jupyter conversion is not perfect. In particular, wherever there are code cells present within an example or exercise, the resulting notebook will not be valid. However, all of the worksheets in the book will successfully convert to Jupyter notebooks, and are intended to be used as such.  I initially wrote these notes during the Fall 2019 semester, for Math 3410 at the University of Lethbridge. The original textbook for the course was Linear Algebra with Applications , by Keith Nicholson. This book is available as an open education resource from Lyryx Learning .  Since the notes were written for a course that used Nicholson's textbook, the influence of his book is evident throughout. In particular, much of the notation agrees with that of Nicholson, and there are places where I refer to his book for further details. I taught a previous offering of this course using Sheldon Axler's beautiful Linear Algebra Done Right , which certainly had an effect on how I view the subject, and it is quite likely that this has impacted how I present some of the material in this book.  This new edition of the book features exercises written using some of the interactive features provided by the partnership between PreTeXt and Runestone . I have also tried to provide additional guidance on understanding (and constructing) the proofs that appear in an upper division course on linear algebra.  "
},
{
  "id": "p-4",
  "level": "2",
  "url": "preface-1.html#p-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "SymPy "
},
{
  "id": "sec-vec-sp",
  "level": "1",
  "url": "sec-vec-sp.html",
  "type": "Section",
  "number": "1.1",
  "title": "Definition and examples",
  "body": " Definition and examples  Let's recall what we know about vectors in . Writing for the vector pointing from to , we define:   Addition:     Scalar multiplication: , where is a real number, or scalar .     We can then observe a number of properties enjoyed by these operations. In your first course, you may have observed some of these properties geometrically, using the tip-to-tail rule for vector addition, as shown in     Two vectors in the plane, with the tail of the second vector placed at the tip of the first. The vector drawn from the tail of the first vector to the tip of the second is the sum of the two vectors.        Vector addition is commutative . That is, for any vectors and , we have .  This is true because addition is commutative for the real numbers: .    Vector addition is associative . That is, for any vectors and , we have . This tells us that placement of parentheses doesn't matter, which is essential for extending addition (which is defined as an operation on two vectors) to sums of three or more vectors.  Again, this property is true because it is true for real numbers: .    Vector addition has an identity element . This is a vector that has no effect when added to another vector, or in other words, the zero vector. Again, it inherits its property from the behaviour of the real number 0.  For any , the vector satisfies : .    Every vector has an inverse with respect to addition, or, in other words, a negative . Given a vector , the vector satisfies . (We will leave this one for you to check.)    Scalar multiplication is compatible with addition in two different ways. First, it is distributive over vector addition: for any scalar and vectors , we have .  Unsurprisingly, this property is inherited from the distributive property of the real numbers: .    Second, scalar multiplication is also distributive with respect to scalar addition: for any scalars and and vector , we have .  Again, this is because real number addition is distributive: .    Scalar multiplication is also associative . Given scalars and a vector , we have .  This is inherited from the associativity of real number multiplication: .    Finally, there is a normalization result for scalar multiplication. For any vector , we have . That is, the real number acts as an identity element with respect to scalar multiplication. (You can check this one yourself.)     You might be wondering why we bother to list the last property above. It's true, but why do we need it? One reason comes from basic algebra, and solving equations. Suppose we have the equation , where is some nonzero scalar, and we want to solve for . Very early in our algebra careers, we learn that to solve, we divide by .  Division doesn't quite make sense in this context, but it certainly does make sense to multiply both sides by , the multiplicative inverse of . We then have , and since scalar multiplication is associative, . We know that , so this boils down to . It appears that we've solved the equation, but only if we know that .  For an example where this fails, take our vectors as above, but redefine the scalar multiplication as . The distributive and associative properties for scalar multiplication will still hold, but the normalization property fails. Algebra becomes very strange with this version of scalar multiplication. In particular, we can no longer conclude that if , then !   Given an example of vectors and such that , but , if scalar multiplication is defined as above.   In a first course in linear algebra, these algebraic properties of vector addition and scalar multiplication are presented as a theorem . (After all, we have just demonstrated the truth of these results.) A second course in linear algebra (and in particular, abstract linear algebra), begins by taking that theorem and turning it into a definition . We will then do some exploration, to see if we can come up with some other examples that fit the definition; the significance of this is that we can expect the algebra in these examples to behave in essentially the same way as the vectors we're familiar with.    A real vector space (or vector space over ) is a nonempty set , whose objects are called vectors , equipped with two operations:    Addition , which is a map from to that associates each ordered pair of vectors to a vector , called the sum of and .     Scalar multiplication , which is a map from to that associates each real number and vector to a vector .     The operations of addition and scalar multiplication are required to satisfy the following axioms :   A1.  If , then . (Closure under addition)    A2.  For all , . (Commutativity of addition)    A3.  For all , . (Associativity of addition)    A4.  There exists an element such that for each . (Existence of a zero vector)    A5.  For each , there exists a vector such that . (Existence of negatives)    S1.  If , then for all . (Closure under scalar multiplication)    S2.  For all and , . (Distribution over vector addition)    S3.  For all and , . (Distribution over scalar addition)    S4.  For all and , . (Associativity of scalar multiplication)    S5.  For all , . (Normalization of scalar multiplication)       Note that a zero vector must exist in every vector space. This simple observation is a key component of many proofs and counterexamples in linear algebra. In general, we may define a vector space whose scalars belong to a field  . A field is a set of objects whose algebraic properties are modelled after those of the real numbers.  The axioms for a field are not all that different than those for a vector space. The main difference is that in a field, multiplication is defined between elements of the field (and produces another element of the field), while scalar multiplication combines elements of two different sets.    A field is a set , equipped with two binary operations : , such that the following axioms are satisfied:   A1: for all .    A2: for all     A3: there exists an element such that for all .    A4: for each , there exists an element such that .    M1: for all , .    M2: for all , .    M3: there exists an element such that for all .    M4: for each with , there exists an element such that .    D: for all , .       Note how the axioms for multiplication in a field mirror the addition axioms much more closely than in a vector space. The only difference is the fact that there is one element without a multiplicative inverse; namely, the zero element.  While it is possible to study linear algebra over finite fields (like the integers modulo a prime number) we will only consider two fields: the real numbers , and the complex numbers .   Before we move on, let's look at one example involving finite fields. Let , with addition and multiplication defined modulo . (For example, in , since .)   Show that is a field.   You will need to recall properties of congruence from your introduction to proofs course.   Show that is not a field.   Why does this work for but not for ? For which do you think will be a field?   A vector space whose scalars are complex numbers will be called a complex vector space . While many students are initially intimidated by the complex numbers, most results in linear algebra work exactly the same over as they do over . And where the results differ, things are usually easier with complex numbers, owing in part to the fact that all complex polynomials can be completely factored.  To help us gain familiarity with the abstract nature of , let us consider some basic examples.    The following are examples of vector spaces. We leave verification of axioms as an exercise. (Verification will follow a process very similar to the discussion at the beginning of this section.)   The set of -tuples of real numbers, where we define . We will also often use to refer to the vector space of column matrices , where addition and scalar multiplication are defined as for matrices (and the same as the above, with the only difference being the way in which we choose to write our vectors). If the distinction between -tuples and column matrices is ever important, it will be made clear.    The set of all sequences of real numbers . Addition and scalar multiplication are defined in the same way as ; the only difference is that elements of contain infinitely many entries.    The set of matrices, equipped with the usual matrix addition and scalar multiplication.    The set of all polynomials of degree less than or equal to , where, for we define and . The zero vector is the polynomial .  This is the same as the addition and scalar multiplication we get for functions in general, using the pointwise evaluation definition: for polynomials and and a scalar , we have and .  Notice that although this feels like a very different example, the vector space is in fact very similar to (or rather, , to be precise). If we associate the polynomial with the vector , the addition and scalar multiplication for either space behaves in exactly the same way. We will make this observation precise in .    The set of all polynomials of any degree. The algebra works the same as it does in , but there is an important difference: in both and , every element in the set can be generated by setting values for a finite collection of coefficients. (In , every polynomial can be obtained by choosing values for the coefficients .) But if we remove the restriction on the degree of our polynomials, there is then no limit on the number of coefficients we might need. (Even if any individual polynomial has a finite number of coefficients!)    The set of all functions , where we define and . The zero function is the function satisfying for all , and the negative of a function is given by for all .  Note that while the vector space has an infinite nature that does not, the vector space is somehow more infinite! Using the language of , we can say that is finite dimensional , while and are infinite dimensional . In a more advanced course, one might make a further distinction: the dimension of is countably infinite, while the dimension of is uncountable .       Other common examples of vector spaces can be found online; for example, on Wikipedia . It is also interesting to try to think of less common examples.    Can you think of a way to define a vector space structure on the set of all positive real numbers?   How should we define addition and scalar multiplication? Since the usual addition and scalar multiplication wont work, let's denote addition by , for , and scalar multiplication by , for and .   Note: you can format any math in your answers using LaTeX, by putting a $ before and after the math. For example, is $x\\oplus y$ , and is $x\\odot y$ .   Note that the function has domain and range . What does it do to a sum? To a product?   To get a vector space structure on , we will define an addition on by , where the right hand side is the usual product of real numbers, and for and , we will define a scalar multiplication by .   Show that the addition you defined satisfies the commutative and associative properties.   You can assume that these properties are true for real number multiplication.   For any , we have: .   Which of the following is the identity element in ?          Remember that the identity needs to be an element of the set!           Correct! Since nothing happens when we multiply by 1, we get for any .     Remember that an identity element must satisfy for any .   What is the inverse of an element ?   Remember that an inverse must satisfy , where is the identity element. What is , and how is addition defined?   Let be any element of . Since , we know in particular that , so we can define , where denotes the usual reciprocal of a real number. We then have , and we saw above that is the identity element of .   Show that, for any and , .   We assume some properties of exponents from high school algebra: .   Show that for any and , .   This again follows from properties of exponents: .   Show that for any and , .   We have .   Show that for any .   The last one is possibly the easiest: .    True or false: the set of all polynomials with real number coefficients and degree less than or equal to three is a vector space, using the usual polynomial addition and scalar multiplication.   This is the vector space from .    True or false: the set of all polynomials with real number coefficients and degree greater than or equal to three, together with the zero polynomial, is a vector space, using the usual polynomial addition and scalar multiplication.   The set is not closed under addition. What happens if you add the polynomials and ?   Remember that a vector space must be closed under the operations of addition and scalar multiplication.    True or false: the set of all vectors of unit length (that is, such that ) is a vector space with respect to the usual addition and scalar multiplication in .   The zero vector does not have unit length. Also, the sum of two unit vectors will usually not be a unit vector.        Let . For and define vector addition by and scalar multiplication by . It can be shown that is a vector space over the scalar field . Find the following:  (a) The sum  (b) The scalar multiple  (c) The zero vector,  (d) The additive inverse of ,                             Let . For and define vector addition by and scalar multiplication by . It can be shown that is a vector space over the scalar field . Find the following:  (a) The sum  (b) The scalar multiple  (c) The additive inverse of ,  (d) The zero vector,  (e) The additive inverse of ,                                 "
},
{
  "id": "fig-vector-addition",
  "level": "2",
  "url": "sec-vec-sp.html#fig-vector-addition",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "  Two vectors in the plane, with the tail of the second vector placed at the tip of the first. The vector drawn from the tail of the first vector to the tip of the second is the sum of the two vectors.    "
},
{
  "id": "ex-vsp-intro-strange-mult",
  "level": "2",
  "url": "sec-vec-sp.html#ex-vsp-intro-strange-mult",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": " Given an example of vectors and such that , but , if scalar multiplication is defined as above.  "
},
{
  "id": "def-vector-space",
  "level": "2",
  "url": "sec-vec-sp.html#def-vector-space",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  A real vector space (or vector space over ) is a nonempty set , whose objects are called vectors , equipped with two operations:    Addition , which is a map from to that associates each ordered pair of vectors to a vector , called the sum of and .     Scalar multiplication , which is a map from to that associates each real number and vector to a vector .     The operations of addition and scalar multiplication are required to satisfy the following axioms :   A1.  If , then . (Closure under addition)    A2.  For all , . (Commutativity of addition)    A3.  For all , . (Associativity of addition)    A4.  There exists an element such that for each . (Existence of a zero vector)    A5.  For each , there exists a vector such that . (Existence of negatives)    S1.  If , then for all . (Closure under scalar multiplication)    S2.  For all and , . (Distribution over vector addition)    S3.  For all and , . (Distribution over scalar addition)    S4.  For all and , . (Associativity of scalar multiplication)    S5.  For all , . (Normalization of scalar multiplication)      "
},
{
  "id": "def-field",
  "level": "2",
  "url": "sec-vec-sp.html#def-field",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  A field is a set , equipped with two binary operations : , such that the following axioms are satisfied:   A1: for all .    A2: for all     A3: there exists an element such that for all .    A4: for each , there exists an element such that .    M1: for all , .    M2: for all , .    M3: there exists an element such that for all .    M4: for each with , there exists an element such that .    D: for all , .      "
},
{
  "id": "ex-vsp-intro-finite-field",
  "level": "2",
  "url": "sec-vec-sp.html#ex-vsp-intro-finite-field",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": " Before we move on, let's look at one example involving finite fields. Let , with addition and multiplication defined modulo . (For example, in , since .)   Show that is a field.   You will need to recall properties of congruence from your introduction to proofs course.   Show that is not a field.   Why does this work for but not for ? For which do you think will be a field?  "
},
{
  "id": "ex-vector-spaces",
  "level": "2",
  "url": "sec-vec-sp.html#ex-vector-spaces",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  The following are examples of vector spaces. We leave verification of axioms as an exercise. (Verification will follow a process very similar to the discussion at the beginning of this section.)   The set of -tuples of real numbers, where we define . We will also often use to refer to the vector space of column matrices , where addition and scalar multiplication are defined as for matrices (and the same as the above, with the only difference being the way in which we choose to write our vectors). If the distinction between -tuples and column matrices is ever important, it will be made clear.    The set of all sequences of real numbers . Addition and scalar multiplication are defined in the same way as ; the only difference is that elements of contain infinitely many entries.    The set of matrices, equipped with the usual matrix addition and scalar multiplication.    The set of all polynomials of degree less than or equal to , where, for we define and . The zero vector is the polynomial .  This is the same as the addition and scalar multiplication we get for functions in general, using the pointwise evaluation definition: for polynomials and and a scalar , we have and .  Notice that although this feels like a very different example, the vector space is in fact very similar to (or rather, , to be precise). If we associate the polynomial with the vector , the addition and scalar multiplication for either space behaves in exactly the same way. We will make this observation precise in .    The set of all polynomials of any degree. The algebra works the same as it does in , but there is an important difference: in both and , every element in the set can be generated by setting values for a finite collection of coefficients. (In , every polynomial can be obtained by choosing values for the coefficients .) But if we remove the restriction on the degree of our polynomials, there is then no limit on the number of coefficients we might need. (Even if any individual polynomial has a finite number of coefficients!)    The set of all functions , where we define and . The zero function is the function satisfying for all , and the negative of a function is given by for all .  Note that while the vector space has an infinite nature that does not, the vector space is somehow more infinite! Using the language of , we can say that is finite dimensional , while and are infinite dimensional . In a more advanced course, one might make a further distinction: the dimension of is countably infinite, while the dimension of is uncountable .      "
},
{
  "id": "ex-positive-reals-vecsp",
  "level": "2",
  "url": "sec-vec-sp.html#ex-positive-reals-vecsp",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": " Can you think of a way to define a vector space structure on the set of all positive real numbers?   How should we define addition and scalar multiplication? Since the usual addition and scalar multiplication wont work, let's denote addition by , for , and scalar multiplication by , for and .   Note: you can format any math in your answers using LaTeX, by putting a $ before and after the math. For example, is $x\\oplus y$ , and is $x\\odot y$ .   Note that the function has domain and range . What does it do to a sum? To a product?   To get a vector space structure on , we will define an addition on by , where the right hand side is the usual product of real numbers, and for and , we will define a scalar multiplication by .   Show that the addition you defined satisfies the commutative and associative properties.   You can assume that these properties are true for real number multiplication.   For any , we have: .   Which of the following is the identity element in ?          Remember that the identity needs to be an element of the set!           Correct! Since nothing happens when we multiply by 1, we get for any .     Remember that an identity element must satisfy for any .   What is the inverse of an element ?   Remember that an inverse must satisfy , where is the identity element. What is , and how is addition defined?   Let be any element of . Since , we know in particular that , so we can define , where denotes the usual reciprocal of a real number. We then have , and we saw above that is the identity element of .   Show that, for any and , .   We assume some properties of exponents from high school algebra: .   Show that for any and , .   This again follows from properties of exponents: .   Show that for any and , .   We have .   Show that for any .   The last one is possibly the easiest: .  "
},
{
  "id": "ex-tf-vsp-eg1",
  "level": "2",
  "url": "sec-vec-sp.html#ex-tf-vsp-eg1",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": " True or false: the set of all polynomials with real number coefficients and degree less than or equal to three is a vector space, using the usual polynomial addition and scalar multiplication.   This is the vector space from .  "
},
{
  "id": "ex-tf-vsp-eg2",
  "level": "2",
  "url": "sec-vec-sp.html#ex-tf-vsp-eg2",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": " True or false: the set of all polynomials with real number coefficients and degree greater than or equal to three, together with the zero polynomial, is a vector space, using the usual polynomial addition and scalar multiplication.   The set is not closed under addition. What happens if you add the polynomials and ?   Remember that a vector space must be closed under the operations of addition and scalar multiplication.  "
},
{
  "id": "ex-tf-vsp-eg3",
  "level": "2",
  "url": "sec-vec-sp.html#ex-tf-vsp-eg3",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": " True or false: the set of all vectors of unit length (that is, such that ) is a vector space with respect to the usual addition and scalar multiplication in .   The zero vector does not have unit length. Also, the sum of two unit vectors will usually not be a unit vector.     "
},
{
  "id": "ex-ww-vs1",
  "level": "2",
  "url": "sec-vec-sp.html#ex-ww-vs1",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": "  Let . For and define vector addition by and scalar multiplication by . It can be shown that is a vector space over the scalar field . Find the following:  (a) The sum  (b) The scalar multiple  (c) The zero vector,  (d) The additive inverse of ,                          "
},
{
  "id": "ex-ww-vs2",
  "level": "2",
  "url": "sec-vec-sp.html#ex-ww-vs2",
  "type": "Exercise",
  "number": "1.1.6",
  "title": "",
  "body": "  Let . For and define vector addition by and scalar multiplication by . It can be shown that is a vector space over the scalar field . Find the following:  (a) The sum  (b) The scalar multiple  (c) The additive inverse of ,  (d) The zero vector,  (e) The additive inverse of ,                               "
},
{
  "id": "sec-vsp-properties",
  "level": "1",
  "url": "sec-vsp-properties.html",
  "type": "Section",
  "number": "1.2",
  "title": "Properties",
  "body": " Properties  There are a number of other algebraic properties that are common to all vector spaces; for example, it is true that for all vectors in any vector space . The reason these are not included is that the ten axioms in are the ones deemed essential  all other properties can be deduced from the axioms. To demonstrate, we next give the proof that .  The focus on proofs may be one place where your second course in linear algebra differs from your first. Learning to write proofs (and to know when a proof you have written is valid) is a difficult skill that takes time to develop. Some of the proofs in this section are clever , in the sense that they require you to apply vector space axioms in ways that may not seem obvious. Proofs in later sections will more often be more straightforward direct proofs of conditional (if then) statements, although they may not feel straightforward on your first encounter.    In any vector space , we have for all .    Strategy  The goal is to show that multiplying by the scalar produces the vector . We all learn early on that anything times zero is zero , but why is this true? A few strategies that show up frequently when working with the axioms are:   Adding zero (the scalar, or the vector) does nothing, including when you add it to itself.    We can always add the same thing to both sides of an equation.    Liberal use of the distributive property!     What we do here is to start with a very simple statement: . The reason for doing so is that when we multiply by , we have an opportunity to use the distributive property.    Since , we have . Using the distributive axiom S3, this becomes . By axiom A5, there is an element such that . Adding this to both sides of the equation above, we get: . Now, apply the associative property (A3) on the left, and A5 on the right, to get . Using A5 again on the left, we get . Finally, axiom A4 guarantees .     Tactics similar to the ones used in can be used to establish the following results, which we leave as an exercise. Solutions are included in at the end of the book , but it will be worth your while in the long run to wrestle with these.  Show that the following properties are valid in any vector space :   If , then .   Remember that every vector in a vector space has an additive inverse .   Suppose . By adding on the left of each side, we obtain: , which is what we needed to show.   For any scalar , .   Your approach should be quite similar to the one used in .   We have , by A4 and S2, respectively. Adding to both sides gives us . Using associativity (A3), this becomes , and since by A5, we get . Finally, we apply A4 on the right hand side to get , as required.   The zero vector is the unique vector such that for all .   If you want to prove something is unique, try assuming that you have more than one! If any two different elements with the same property have to be equal, then all such elements must, in fact, be the same element.   Suppose there are two vectors that act as additive identities. Then So any two vectors satisfying the property in A4 must, in fact, be the same.   The negative of any vector is unique.   Let , and suppose there are vectors such that and . Then .     Prove the following statement:  Let be a vector space. For any , .  Indicate all axioms needed in the proof.    This proof will be far more detailed than what you'll see in later sections. (We usually do not bother to take note of the axioms, one by one.) We will also try to explain our reasoning as we go, to help you get used to the sort of careful reasoning involved in a proof. Lines that should actually be included in the proof will be set aside in block quotes.  First, we are proving a for all (universally quantified) statement. This means we should be careful not to assume anything about the vector we choose, so that our argument can apply to any vector we want:   Let be any vector in .   Next, you might want to remind yourself of the goal: we want to show that . You can state that this is what you want to show, but it's not absolutely necessary to do this. A common trick that shows up in a lot of mathematical proofs is a simple bit of arithmetic: is the same thing as ! So really, what we want to show is that .  Now, remember that , and , so what we want to show is equivalent to . Remove the , and we're left with , and that we definitely know is true! (Of course, we can't just remove , but we can use the distributive property!)  This is basically the proof, but we need to state all the axioms we use, and best practice in logical arguments is that we should begin with our assumptions, and statements we agree are true, and proceed from those to the desired conclusion.   Since we know that , it follows that . On the left hand side, we can use the distributive property S3 to get . On the right hand side, we can use to get . Therefore, . By axiom S5, , so we have .   OK, that's more or less where we said we wanted to get to, and then we can just move to the other side as , and we're done. But we want to be careful to state all axioms! The rest of the proof involves carefully stepping through this process.  Another way to proceed, which shortcuts this whole process, is to use of : since the additive inverse of is the unique vector such that , and , it must be the case that .  This approach is completely valid, and you are free to use it, but we will take the long route to demonstrate further use of the axioms.   Since , we can add to both sides of the equation, giving . By the associative property (axiom A3), , and by the identity axiom A5, . This gives us . By axiom A5, , so . Finally, we use axiom A4 one last time, and we have our result: .     Note that in the above example, we could have shortened the proof: In we showed that additive inverses are unique. So once we reach the step where , we can conclude that , since is the unique vector that satisfies this equation.  To finish off this section, here is one more problem similar to the one above. This result will be useful in the future, and students often find the logic tricky, so it is worth your time to ensure you understand it.   Rearrange the blocks to create a valid proof of the following statement:  If , then either or .    Let be a scalar, and let be a vector.  Suppose that .    By the law of the excluded middle, either , or .    If , then or , and we're done.    Suppose then that .    Since , there is a scalar such that .    Since , .    Therefore, , using S4 and of .    Since , we have , using S5.    Since , or .    In either case, we conclude that or , so the result is proven.    The main difficulty with this problem is getting the logic of the statement correct, and making sure you know what it is you're trying to prove. Consider a proof by cases: either or . In the first case, there is nothing to prove (why?). In the second case, use the fact (see ) that for any nonzero scalar , there exists a scalar such that .   "
},
{
  "id": "thm-zero-mult",
  "level": "2",
  "url": "sec-vsp-properties.html#thm-zero-mult",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "",
  "body": "  In any vector space , we have for all .    Strategy  The goal is to show that multiplying by the scalar produces the vector . We all learn early on that anything times zero is zero , but why is this true? A few strategies that show up frequently when working with the axioms are:   Adding zero (the scalar, or the vector) does nothing, including when you add it to itself.    We can always add the same thing to both sides of an equation.    Liberal use of the distributive property!     What we do here is to start with a very simple statement: . The reason for doing so is that when we multiply by , we have an opportunity to use the distributive property.    Since , we have . Using the distributive axiom S3, this becomes . By axiom A5, there is an element such that . Adding this to both sides of the equation above, we get: . Now, apply the associative property (A3) on the left, and A5 on the right, to get . Using A5 again on the left, we get . Finally, axiom A4 guarantees .   "
},
{
  "id": "ex-more-props",
  "level": "2",
  "url": "sec-vsp-properties.html#ex-more-props",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": " Tactics similar to the ones used in can be used to establish the following results, which we leave as an exercise. Solutions are included in at the end of the book , but it will be worth your while in the long run to wrestle with these.  Show that the following properties are valid in any vector space :   If , then .   Remember that every vector in a vector space has an additive inverse .   Suppose . By adding on the left of each side, we obtain: , which is what we needed to show.   For any scalar , .   Your approach should be quite similar to the one used in .   We have , by A4 and S2, respectively. Adding to both sides gives us . Using associativity (A3), this becomes , and since by A5, we get . Finally, we apply A4 on the right hand side to get , as required.   The zero vector is the unique vector such that for all .   If you want to prove something is unique, try assuming that you have more than one! If any two different elements with the same property have to be equal, then all such elements must, in fact, be the same element.   Suppose there are two vectors that act as additive identities. Then So any two vectors satisfying the property in A4 must, in fact, be the same.   The negative of any vector is unique.   Let , and suppose there are vectors such that and . Then .  "
},
{
  "id": "ex-minus-one-negative",
  "level": "2",
  "url": "sec-vsp-properties.html#ex-minus-one-negative",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Prove the following statement:  Let be a vector space. For any , .  Indicate all axioms needed in the proof.    This proof will be far more detailed than what you'll see in later sections. (We usually do not bother to take note of the axioms, one by one.) We will also try to explain our reasoning as we go, to help you get used to the sort of careful reasoning involved in a proof. Lines that should actually be included in the proof will be set aside in block quotes.  First, we are proving a for all (universally quantified) statement. This means we should be careful not to assume anything about the vector we choose, so that our argument can apply to any vector we want:   Let be any vector in .   Next, you might want to remind yourself of the goal: we want to show that . You can state that this is what you want to show, but it's not absolutely necessary to do this. A common trick that shows up in a lot of mathematical proofs is a simple bit of arithmetic: is the same thing as ! So really, what we want to show is that .  Now, remember that , and , so what we want to show is equivalent to . Remove the , and we're left with , and that we definitely know is true! (Of course, we can't just remove , but we can use the distributive property!)  This is basically the proof, but we need to state all the axioms we use, and best practice in logical arguments is that we should begin with our assumptions, and statements we agree are true, and proceed from those to the desired conclusion.   Since we know that , it follows that . On the left hand side, we can use the distributive property S3 to get . On the right hand side, we can use to get . Therefore, . By axiom S5, , so we have .   OK, that's more or less where we said we wanted to get to, and then we can just move to the other side as , and we're done. But we want to be careful to state all axioms! The rest of the proof involves carefully stepping through this process.  Another way to proceed, which shortcuts this whole process, is to use of : since the additive inverse of is the unique vector such that , and , it must be the case that .  This approach is completely valid, and you are free to use it, but we will take the long route to demonstrate further use of the axioms.   Since , we can add to both sides of the equation, giving . By the associative property (axiom A3), , and by the identity axiom A5, . This gives us . By axiom A5, , so . Finally, we use axiom A4 one last time, and we have our result: .    "
},
{
  "id": "ex-parsons-zero-prop",
  "level": "2",
  "url": "sec-vsp-properties.html#ex-parsons-zero-prop",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": " Rearrange the blocks to create a valid proof of the following statement:  If , then either or .    Let be a scalar, and let be a vector.  Suppose that .    By the law of the excluded middle, either , or .    If , then or , and we're done.    Suppose then that .    Since , there is a scalar such that .    Since , .    Therefore, , using S4 and of .    Since , we have , using S5.    Since , or .    In either case, we conclude that or , so the result is proven.    The main difficulty with this problem is getting the logic of the statement correct, and making sure you know what it is you're trying to prove. Consider a proof by cases: either or . In the first case, there is nothing to prove (why?). In the second case, use the fact (see ) that for any nonzero scalar , there exists a scalar such that .  "
},
{
  "id": "sec-subspace",
  "level": "1",
  "url": "sec-subspace.html",
  "type": "Section",
  "number": "1.3",
  "title": "Subspaces",
  "body": " Subspaces  We begin with a motivating example. Let be a nonzero vector in some vector space . Consider the set . Given , notice that is also an element of , since is again a real number. Moreover, for any real number , is an element of .  There are two important observations: one is that performing addition or scalar multiplication on elements of produces a new element of . The other is that this addition and multiplication is essentially that of . The vector is just a placeholder. Addition simply involves the real number addition . Scalar multiplication becomes the real number multiplication . So we expect that the rules for addition and scalar multiplication in follow those in , so that is like a copy of inside of . In particular, addition and scalar multiplication in will satisfy all the vector space axioms, so that deserves to be considered a vector space in its own right.  A similar thing happens if we consider a set , where are two vectors in a vector space . Given two elements , we have , which is again an element of , and the addition rule looks an awful lot like the addition rule in . Scalar multiplication follows a similar pattern.  In general we are often interested in subsets of vectors spaces that behave like copies of smaller vector spaces contained within the larger space. The technical term for this is subspace .    Let be a vector space, and let be a subset. We say that is a subspace of if is itself a vector space when using the addition and scalar multiplication of .    If we were to follow the definition, then verifying that a subset is a subspace would involve checking all ten vector space axioms. Fortunately, this is not necessary. Since the operations are those of the vector space , most properties follow automatically, being inherited from those of .   Subspace Test   Let be a vector space and let be a subset. Then is a subspace of if and only if the following conditions are satisfied:    , where is the zero vector of .     is closed under addition. That is, for all , we have .     is closed under scalar multiplication. That is, for all and , .       If is a vector space, then clearly the second and third conditions must hold. Since a vector space must be nonempty, there is some , from which it follows that .  Conversely, if all three conditions hold, we have axioms A1, A4, and S1 by assumption. Axioms A2 and A3 hold since any vector in is also a vector in ; the same reasoning shows that axioms S2, S3, S4, and S5 hold. Finally, axiom A5 holds because condition 3 ensures that for any , and we know that by Exercise .    In some texts, the condition that is replaced by the requirement that be nonempty. Existence of then follows from the fact that . However, it is usually easy to check that a set contains the zero vector, so it's the first thing one typically looks for when confirming that a subset is nonempty.    For any vector space , the set is a subspace, known as the trivial subspace .  If is the vector space of all polynomials, then for any natural number , the subset of all polynomials of degree less than or equal to is a subspace of . Another common type of polynomial subspace is the set of all polynomials with a given root. For example, the set is easily confirmed to be a subspace. However, a condition such as would not define a subspace, since this condition is not satisfied by the zero polynomial.  In , we can define a subspace using one or more homogeneous linear equations. For example, the set is a subspace of . A non-homogeneous equation won't work, however, since it would exclude the zero vector. Of course, we should expect that any non-linear equation fails to define a subspace, although one is still expected to verify this by confirming the failure of one of the axioms. For example, the set is not a subspace; although it contains the zero vector (since ), we have , but does not belong to .      In the vector space , we can visualize subspaces geometrically. There are precisely four types:   The trivial vector space , consisting of the origin alone.    Subspaces of the form . These are lines through the origin, in the direction of the vector .    Subspaces of the form , where are both nonzero vectors that are not parallel . These are planes through the origin.  Note that we must insist that is not parallel to . If for some scalar , then , and every vector in our set would be a multiple of ; in other words, we'd once again have a line.  If you encountered the cross product in your first course in linear algebra, or in a calculus course, then you can state the non-parallel condition by the requirement that . The vector is then a normal vector for the plane.    The entire vector space also counts as a subspace: every vector space is a subspace of itself.         Often we define subsets of a vector space by an equation. For example, instead of specifying a plane through the origin in using a pair of vectors, as we did in , we could define it using a single equation, of the form , where , and are coordinates in .  Given a vector space and some equation (or other condition) that defines a subset, one of the things we need to be able to do is determine whether or not the subset is in fact a subspace. We do so using . Applying the subspace test is relatively straightforward, but we would also like to develop some intiution to help us decide whether or not a subset is likely to be a subspace, before attempting a proof.  There are a few relatively easy things we can check before we begin:   Does the subset contain the zero vector?  This is part of the subspace test, of course, but it tends to be easy to check, and if the answer is no, then we've already ruled out the possibility that this subset could be a subspace.    Is the equation defining the subset linear?  If not, your subset is probably not a subspace, and you should look for a counterexample. For example, the set contains zero, but it is defined by the nonlinear equation . This tells us that our set is unlikely to be a subspace, but we still have to demonstrate this. Typically, we do so by showing that one of the two closure axioms fails. For example, we know that and belong to the subset, but , and since , the subset is not closed under addition, and therefore is not a subspace.    Is the equation defining the subset homogeneous?  Even if an equation is linear, it may fail to define a subspace due to the special role played by the zero vector. For example, the plane in defined by the equation is not a subspace. The fastest way to see this is to note that the equation is not satisfied by the zero vector! But both closure conditions fail as well. For example, the point is on the plane. But is not, since .        Determine whether or not the following subsets of vector spaces are subspaces.   The subset of consisting of all polynomials such that .   This equation may not appear linear, but it is: if , then is a homogeneous linear equation. The zero poloynomial is zero everywhere, including at . If and , then , and for any scalar , .   The subset of consisting of all irreducible quadratics.   We can immediately rule this out as a subspace because the zero polynomial is neither irreducible nor quadratic. Furthermore, it is not closed under addition: consider the sum of and .   The set of all vectors such that .   The equation is homogeneous, but it is not linear. Although this set contains the zero vector, it is not closed under addition: the vectors and belong to the set, but their sum does not.   The set of all vectors such that .   The defining equation can be rearranged as , which you might recognize as the equation of a plane through the origin. Since , the set contains the zero vector. To check closure under addition, suppose and are in the set. This means that , and . For the sum , we have , so the sum is in the set. And for any scalar , , so is in the set as well.   Let's try a few more examples.    Determine whether or not the following subsets are subspaces.    The subset    The clue here that this is not a subspace is the presence of the 2 in the second component. Typically for a subspace, we expect to see linear expressions involving our variables, but in linear algebra, the adjective linear doesn't imply the inclusion of constant terms the way it does in calculus. The reason, again, is the special role of zero in a vector space.  While it's true that this set doesn't contain the zero vector (which rules it out as a subspace), it's not as obvious: perhaps there are values of and that give us , and as well? Solving a system of equations would tell us that indeed, this is not possible.  We could also show that the closure conditions fail. Putting gives the element , and putting gives the element . Adding these, we get the vector . Why is this not in the set? We would need , so . Then implies , but .    The subset .   At first glance, it may not be clear whether the condition is linear. One approach is to write out our polynomial in terms of coefficients. If , then implies , or , which is a homogeneous linear equation. This isn't yet a proof we still have to apply the subspace test!  We can use the subspace test in terms of coefficients with the condition , or we can use the original condition directly. First, the zero polynomial satisfies , since it's equal to zero everywhere. Next, suppose we have polynomials with and . Then , and for any scalar , . This shows that the set is closed under both addition and scalar multiplication.    The subset .   Here, we have the condition , which is homogeneous, but is it linear? If you remember a bit about the determinant, you might recall that it behaves well with respect to multiplication, but not addition, and indeed, this is going to mean that we don't have a subspace.  To see that this is the case, consider closure under addition. The matrices and both have determinant , but has determinant 1. Therefore, and both belong to the set, but does not.    In the next section, we'll encounter perhaps the most fruitful source of subspaces: sets of linear combinations (or spans ). We will see that such sets are always subspaces, so if we can identify a subset as a span, we know automatically that it is a subspace.  For example, in the last part of above, if the vector satisfies , then we have , so every vector in the set is a linear combination of the vectors and .    Determine whether or not each of the following sets is a subspace of :     The set       The set       The set       The set        A square matrix is idempotent if .  Let be the vector space of all matrices with real entries. Let be the set of all idempotent matrices with real entries. Is a subspace of the vector space ?  (a) Does contain the zero vector of ?  (b) Is closed under addition?  (Hint: to show that is not closed under addition, it is sufficient to find two idempotent matrices and such that .)  (c) Is closed under scalar multiplication?  (Hint: to show that is not closed under scalar multiplication, it is sufficient to find a real number and an idempotent matrix such that .)  (d) Is a subspace of the vector space ?  You should be able to justify your answer by writing a complete, coherent, and detailed proof based on your answers to parts a-c.                             The trace of a square matrix is the sum of the entries on its main diagonal.  Let be the vector space of all matrices with real entries.  Let be the set of all matrices with real entries that have trace . Is a subspace of the vector space ?  (a) Does contain the zero vector of ?  (b) Is closed under addition?  (Hint: to show that is not closed under addition, it is sufficient to find two trace zero matrices and such that has nonzero trace.)  (c) Is closed under scalar multiplication?  (Hint: to show that is not closed under scalar multiplication, it is sufficient to find a real number and a trace zero matrix such that has nonzero trace.)  (d) Is a subspace of the vector space ?  You should be able to justify your answer by writing a complete, coherent, and detailed proof based on your answers to parts a-c.                             The trace of a square matrix is the sum of the entries on its main diagonal.  Let be the vector space of all matrices with real entries. Let be the set of all matrices with real entries that have trace . Is a subspace of the vector space ?  (a) Does contain the zero vector of ?  (b) Is closed under addition?  (Hint: to show that is not closed under addition, it is sufficient to find two trace one matrices and such that has trace not equal to one.)  (c) Is closed under scalar multiplication?  (Hint: to show that is not closed under scalar multiplication, it is sufficient to find a real number and a trace one matrix such that has trace not equal to one.)  (d) Is a subspace of the vector space ?  You should be able to justify your answer by writing a complete, coherent, and detailed proof based on your answers to parts a-c.                            "
},
{
  "id": "def-subspace",
  "level": "2",
  "url": "sec-subspace.html#def-subspace",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  Let be a vector space, and let be a subset. We say that is a subspace of if is itself a vector space when using the addition and scalar multiplication of .   "
},
{
  "id": "thm-subspace-test",
  "level": "2",
  "url": "sec-subspace.html#thm-subspace-test",
  "type": "Theorem",
  "number": "1.3.2",
  "title": "Subspace Test.",
  "body": " Subspace Test   Let be a vector space and let be a subset. Then is a subspace of if and only if the following conditions are satisfied:    , where is the zero vector of .     is closed under addition. That is, for all , we have .     is closed under scalar multiplication. That is, for all and , .       If is a vector space, then clearly the second and third conditions must hold. Since a vector space must be nonempty, there is some , from which it follows that .  Conversely, if all three conditions hold, we have axioms A1, A4, and S1 by assumption. Axioms A2 and A3 hold since any vector in is also a vector in ; the same reasoning shows that axioms S2, S3, S4, and S5 hold. Finally, axiom A5 holds because condition 3 ensures that for any , and we know that by Exercise .   "
},
{
  "id": "ex-subspace-basic-examples",
  "level": "2",
  "url": "sec-subspace.html#ex-subspace-basic-examples",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  For any vector space , the set is a subspace, known as the trivial subspace .  If is the vector space of all polynomials, then for any natural number , the subset of all polynomials of degree less than or equal to is a subspace of . Another common type of polynomial subspace is the set of all polynomials with a given root. For example, the set is easily confirmed to be a subspace. However, a condition such as would not define a subspace, since this condition is not satisfied by the zero polynomial.  In , we can define a subspace using one or more homogeneous linear equations. For example, the set is a subspace of . A non-homogeneous equation won't work, however, since it would exclude the zero vector. Of course, we should expect that any non-linear equation fails to define a subspace, although one is still expected to verify this by confirming the failure of one of the axioms. For example, the set is not a subspace; although it contains the zero vector (since ), we have , but does not belong to .   "
},
{
  "id": "ex-subspace-lines-and-planes",
  "level": "2",
  "url": "sec-subspace.html#ex-subspace-lines-and-planes",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  In the vector space , we can visualize subspaces geometrically. There are precisely four types:   The trivial vector space , consisting of the origin alone.    Subspaces of the form . These are lines through the origin, in the direction of the vector .    Subspaces of the form , where are both nonzero vectors that are not parallel . These are planes through the origin.  Note that we must insist that is not parallel to . If for some scalar , then , and every vector in our set would be a multiple of ; in other words, we'd once again have a line.  If you encountered the cross product in your first course in linear algebra, or in a calculus course, then you can state the non-parallel condition by the requirement that . The vector is then a normal vector for the plane.    The entire vector space also counts as a subspace: every vector space is a subspace of itself.      "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-subspace.html#remark-1",
  "type": "Remark",
  "number": "1.3.5",
  "title": "",
  "body": "  Often we define subsets of a vector space by an equation. For example, instead of specifying a plane through the origin in using a pair of vectors, as we did in , we could define it using a single equation, of the form , where , and are coordinates in .  Given a vector space and some equation (or other condition) that defines a subset, one of the things we need to be able to do is determine whether or not the subset is in fact a subspace. We do so using . Applying the subspace test is relatively straightforward, but we would also like to develop some intiution to help us decide whether or not a subset is likely to be a subspace, before attempting a proof.  There are a few relatively easy things we can check before we begin:   Does the subset contain the zero vector?  This is part of the subspace test, of course, but it tends to be easy to check, and if the answer is no, then we've already ruled out the possibility that this subset could be a subspace.    Is the equation defining the subset linear?  If not, your subset is probably not a subspace, and you should look for a counterexample. For example, the set contains zero, but it is defined by the nonlinear equation . This tells us that our set is unlikely to be a subspace, but we still have to demonstrate this. Typically, we do so by showing that one of the two closure axioms fails. For example, we know that and belong to the subset, but , and since , the subset is not closed under addition, and therefore is not a subspace.    Is the equation defining the subset homogeneous?  Even if an equation is linear, it may fail to define a subspace due to the special role played by the zero vector. For example, the plane in defined by the equation is not a subspace. The fastest way to see this is to note that the equation is not satisfied by the zero vector! But both closure conditions fail as well. For example, the point is on the plane. But is not, since .      "
},
{
  "id": "ex-subspace-check",
  "level": "2",
  "url": "sec-subspace.html#ex-subspace-check",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": " Determine whether or not the following subsets of vector spaces are subspaces.   The subset of consisting of all polynomials such that .   This equation may not appear linear, but it is: if , then is a homogeneous linear equation. The zero poloynomial is zero everywhere, including at . If and , then , and for any scalar , .   The subset of consisting of all irreducible quadratics.   We can immediately rule this out as a subspace because the zero polynomial is neither irreducible nor quadratic. Furthermore, it is not closed under addition: consider the sum of and .   The set of all vectors such that .   The equation is homogeneous, but it is not linear. Although this set contains the zero vector, it is not closed under addition: the vectors and belong to the set, but their sum does not.   The set of all vectors such that .   The defining equation can be rearranged as , which you might recognize as the equation of a plane through the origin. Since , the set contains the zero vector. To check closure under addition, suppose and are in the set. This means that , and . For the sum , we have , so the sum is in the set. And for any scalar , , so is in the set as well.  "
},
{
  "id": "eg-subspace-check",
  "level": "2",
  "url": "sec-subspace.html#eg-subspace-check",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": "  Determine whether or not the following subsets are subspaces.    The subset    The clue here that this is not a subspace is the presence of the 2 in the second component. Typically for a subspace, we expect to see linear expressions involving our variables, but in linear algebra, the adjective linear doesn't imply the inclusion of constant terms the way it does in calculus. The reason, again, is the special role of zero in a vector space.  While it's true that this set doesn't contain the zero vector (which rules it out as a subspace), it's not as obvious: perhaps there are values of and that give us , and as well? Solving a system of equations would tell us that indeed, this is not possible.  We could also show that the closure conditions fail. Putting gives the element , and putting gives the element . Adding these, we get the vector . Why is this not in the set? We would need , so . Then implies , but .    The subset .   At first glance, it may not be clear whether the condition is linear. One approach is to write out our polynomial in terms of coefficients. If , then implies , or , which is a homogeneous linear equation. This isn't yet a proof we still have to apply the subspace test!  We can use the subspace test in terms of coefficients with the condition , or we can use the original condition directly. First, the zero polynomial satisfies , since it's equal to zero everywhere. Next, suppose we have polynomials with and . Then , and for any scalar , . This shows that the set is closed under both addition and scalar multiplication.    The subset .   Here, we have the condition , which is homogeneous, but is it linear? If you remember a bit about the determinant, you might recall that it behaves well with respect to multiplication, but not addition, and indeed, this is going to mean that we don't have a subspace.  To see that this is the case, consider closure under addition. The matrices and both have determinant , but has determinant 1. Therefore, and both belong to the set, but does not.   "
},
{
  "id": "ex-rs-sub1",
  "level": "2",
  "url": "sec-subspace.html#ex-rs-sub1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": " Determine whether or not each of the following sets is a subspace of :     The set       The set       The set       The set     "
},
{
  "id": "ex-ww-sub2",
  "level": "2",
  "url": "sec-subspace.html#ex-ww-sub2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  A square matrix is idempotent if .  Let be the vector space of all matrices with real entries. Let be the set of all idempotent matrices with real entries. Is a subspace of the vector space ?  (a) Does contain the zero vector of ?  (b) Is closed under addition?  (Hint: to show that is not closed under addition, it is sufficient to find two idempotent matrices and such that .)  (c) Is closed under scalar multiplication?  (Hint: to show that is not closed under scalar multiplication, it is sufficient to find a real number and an idempotent matrix such that .)  (d) Is a subspace of the vector space ?  You should be able to justify your answer by writing a complete, coherent, and detailed proof based on your answers to parts a-c.                          "
},
{
  "id": "ex-ww-sub3",
  "level": "2",
  "url": "sec-subspace.html#ex-ww-sub3",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  The trace of a square matrix is the sum of the entries on its main diagonal.  Let be the vector space of all matrices with real entries.  Let be the set of all matrices with real entries that have trace . Is a subspace of the vector space ?  (a) Does contain the zero vector of ?  (b) Is closed under addition?  (Hint: to show that is not closed under addition, it is sufficient to find two trace zero matrices and such that has nonzero trace.)  (c) Is closed under scalar multiplication?  (Hint: to show that is not closed under scalar multiplication, it is sufficient to find a real number and a trace zero matrix such that has nonzero trace.)  (d) Is a subspace of the vector space ?  You should be able to justify your answer by writing a complete, coherent, and detailed proof based on your answers to parts a-c.                          "
},
{
  "id": "ex-ww-sub4",
  "level": "2",
  "url": "sec-subspace.html#ex-ww-sub4",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  The trace of a square matrix is the sum of the entries on its main diagonal.  Let be the vector space of all matrices with real entries. Let be the set of all matrices with real entries that have trace . Is a subspace of the vector space ?  (a) Does contain the zero vector of ?  (b) Is closed under addition?  (Hint: to show that is not closed under addition, it is sufficient to find two trace one matrices and such that has trace not equal to one.)  (c) Is closed under scalar multiplication?  (Hint: to show that is not closed under scalar multiplication, it is sufficient to find a real number and a trace one matrix such that has trace not equal to one.)  (d) Is a subspace of the vector space ?  You should be able to justify your answer by writing a complete, coherent, and detailed proof based on your answers to parts a-c.                          "
},
{
  "id": "sec-span",
  "level": "1",
  "url": "sec-span.html",
  "type": "Section",
  "number": "1.4",
  "title": "Span",
  "body": " Span  Recall that a linear combination of a set of vectors is a vector expression of the form where are scalars.  It's important to make sure you don't get lost in the notation here. Be sure that you can keep track of which symbols are vectors, and which are scalars! Note that in a sense, this is the most general sort of expression you can form using the two operations of a vector space: addition, and scalar multiplication. We multiply some collection of vectors by scalars, and then use addition to combine them into a single vector.    In , let , , and . With scalars we can form the linear combination . Notice how the end result is a single vector, and we've lost all information regarding the vectors it came from. Sometimes we want the end result, but often we are more interested in details of the linear combination itself.  In the vector space of all real-valued continuous functions on , we can consider linear combinations such as . (This might, for example, be a particular solution to some differential equation.) Note that in this example, there is no nice way to combine these functions into a single term.    The span of those same vectors is the set of all possible linear combinations that can be formed:   Span   Let be a set of vectors in a vector space . The span of this set of vectors is the subset of defined by .    The vectors can be thought of as the generators of the span. Every other vector in the set can be obtained as a linear combination of these vectors. Note that even though we have finitely many generators, because the set (usually ) from which we choose our scalars is infinite, there are infinitely many elements in the span.  Since span is defined in terms of linear combinations, what the question Is the vector in ? is really asking is, Can be written as a linear combination of ?    Let be a set of vectors. Which of the following statements are equivalent to the statement, The vector belongs to the span of . ?      .    This is a tricky one: the statement implies that , but it is not equivalent, since the converse is not necessarily true.      For some scalars , .    Yes! This is the definition of span.      The vector is a linear combination of the vectors in .    Correct.      For any scalars , .    The only way this statement could be true for all possible scalars is if all the vectors involved are zero. Otherwise, changing a scalar is going to change the resulting linear combination.       for some .    Although each vector in belongs to the span of , the span of contains much more than just the vectors in !     With the appropriate setup, all such questions become questions about solving systems of equations. Here, we will look at a few such examples.    Determine whether the vector is in the span of the vectors .    This is really asking: are there scalars such that ? And this, in turn, is equivalent to the system , which is the same as the matrix equation Solving the system confirms that there is indeed a solution, so the answer to our original question is yes.  To confirm your work for the above exercise, we can use the computer. This first code cell loads the sympy Python library, and then configures the output to look nice. For details on the code used below, see the Appendix .   The above code produces the reduced row-echelon form of the augmented matrix for our system. (The tuple lists the pivot columns note that Python indexes the columns starting at rather than . If you'd rather just get the reduced matrix without this extra information, try adding pivots=False as an optional argument, in the empty parentheses of the rref command.) Do you remember how to get the answer from here? Here's another approach.    Of course, this second approach only works if we know the matrix is invertible. With a bit of experience, you'll probably guess that invertibility of this matrix guarantees that any vector can be written as the span of its columns.    Our next example involves polynomials. At first this looks like a different problem, but it's essentially the same once we set it up.    Determine whether belongs to .    We seek scalars such that . On the left-hand side, we expand and gather terms: . These two polynomials are equal if and only if we can solve the system .  Adding the second and third equations gives , so . The third equation then gives . With three equations and two unknowns, there is a risk that our system could be inconsistent. (In fact, this is the point: if the system is consistent, then is in the span. If the system is inconsistent, is not in the span.) We still need to check if our values work in the first equation: , which shows that our system is inconsistent, and therefore, does not belong to the span of the other two polynomials.  Of course, we can also use matrices (and the computer) to help us solve the problem.   Based on this output, can you tell whether or not in the span? Why or why not?     Can we determine what polynomials are in the span? Let's consider a general polynomial . A bit of thought tells us that the coefficients should replace the constants above.   Asking the computer to reduce this matrix to RREF won't produce the desired result. But we can always specify row operations.   In the elementary_row_op function called above, we are asking the computer to change row (the second row) by adding times row (the first row). See Section for complete details on this syntax.  Now we repeat. Here is another cell to work with:   Another option is to replace the rref() function with the echelon_form() function, which doesn't simplify quite as far:   For a consistent system, we need . Therefore, .   One of the reasons we care about linear combinations and span is that it gives us an easy means of generating subspaces, as the following theorem suggests.    Let be a vector space, and let be vectors in . Then:    is a subspace of .     is the smallest subspace of containing , in the sense that if is a subspace and , then .       Strategy  For the first part, we will rely on our trusty . The proof is essentially the same as the motivating example from the beginning of , modified to allow an arbitrary number of vectors. First, we will write the zero vector as a linear combination of the given vectors. (What should the scalars be?) Then we check addition and scalar multiplication.  How do we show that a subspace is smallest ? As suggested in the statement above, show that if a subspace contains the vectors , then it must contain every vector in . This must be the case because is closed under addition and scalar multiplication, and every vector in is formed using these operations.    Let . Then , since . If and are vectors in , then is in , and is in , so by Theorem , is a subspace.  To see that is the smallest subspace containing , we need only note that if , where is a subspace, then since is closed under scalar multiplication, we know that for any scalars , and since is closed under addition, . Thus, contains all linear combinations of , which is to say that contains .     Let be a vector space, and let . Show that if , then .   Your goal is to show that any linear combination of vectors in can also be written as a linear combination of vectors in . What value should you choose for the scalars in front of any vectors that belong to but not ?    True or false: the vectors span .   The only way to get as the third component of is to set . But the scalar multiples of do not generate all vectors of the form .   We end with a result that will be important as we work on our understanding of the structure of vector spaces.    Let be a vector space, and let . If , then .    Strategy  We need to first recall that the span of a set of vectors is, first and foremost, a set. That means that we are proving the equality of two sets. Recall that this typically requires us to prove that each set is a subset of the other.  This means that we need to show that any linear combination of the vectors can be written as a linear combination of the vectors , and vice-versa. In one direction, we will need our hypothesis: . In the other direction, we come back to a trick we've already seen: adding zero does nothing. That is, if a vector is missing from a linear combination, we can include it, using for its coefficient.    Suppose that . This means that can be written as a linear combination of the vectors , so there must exist scalars such that . Now, let . Then we must have for scalars . From our hypothesis (using ), we get . Since can be written as a linear combination of , , and therefore .  On the other hand, let . Then there exist scalars for which we have . Therefore, , which proves the opposite conclusion, and therefore the result.    The moral of Theorem is that one vector in a set is a linear combination of the others, we can remove it from the set without affecting the span. This suggests that we might want to look for the most efficient spanning sets those in which no vector in the set can be written in terms of the others. Such sets are called linearly independent , and they are the subject of Section .     Let be the vector space of symmetric matrices and be the subspace  (a) Find a nonzero element in .  (b) Find an element in that is not in .                   Let be the vector space of polynomials in with degree less than 3 and be the subspace  (a) Find a nonzero polynomial in .  (b) Find a polynomial in that does not belong to .                   If possible, write as a linear combination of and .        .              Let be a vector that is not a linear combination of the vectors . Select the best statement.     We only know that .       is a proper subset of .      We only know that .      There is no obvious relationship between and .       .       Let be a linear combination of the vectors . Select the best statement.     There is no obvious relationship between and .      We only know that .      We only know that .      .      Let be (non-zero) vectors and suppose .  If , then    .  Using the calculation above, mark the statements below that must be true.    Span(x, y, z) = Span(w, x, y)    Span(w, z) = Span(y, z)    Span(x, z) = Span(y, z)    Span(w, y, z) = Span(w, z)    Span(w, x, z) = Span(x, y)                    "
},
{
  "id": "p-290",
  "level": "2",
  "url": "sec-span.html#p-290",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "eg-linear-comb",
  "level": "2",
  "url": "sec-span.html#eg-linear-comb",
  "type": "Example",
  "number": "1.4.1",
  "title": "",
  "body": "  In , let , , and . With scalars we can form the linear combination . Notice how the end result is a single vector, and we've lost all information regarding the vectors it came from. Sometimes we want the end result, but often we are more interested in details of the linear combination itself.  In the vector space of all real-valued continuous functions on , we can consider linear combinations such as . (This might, for example, be a particular solution to some differential equation.) Note that in this example, there is no nice way to combine these functions into a single term.   "
},
{
  "id": "p-294",
  "level": "2",
  "url": "sec-span.html#p-294",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "span "
},
{
  "id": "def-span",
  "level": "2",
  "url": "sec-span.html#def-span",
  "type": "Definition",
  "number": "1.4.2",
  "title": "Span.",
  "body": " Span   Let be a set of vectors in a vector space . The span of this set of vectors is the subset of defined by .   "
},
{
  "id": "p-296",
  "level": "2",
  "url": "sec-span.html#p-296",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generators "
},
{
  "id": "ex-rs-mc-span",
  "level": "2",
  "url": "sec-span.html#ex-rs-mc-span",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": " Let be a set of vectors. Which of the following statements are equivalent to the statement, The vector belongs to the span of . ?      .    This is a tricky one: the statement implies that , but it is not equivalent, since the converse is not necessarily true.      For some scalars , .    Yes! This is the definition of span.      The vector is a linear combination of the vectors in .    Correct.      For any scalars , .    The only way this statement could be true for all possible scalars is if all the vectors involved are zero. Otherwise, changing a scalar is going to change the resulting linear combination.       for some .    Although each vector in belongs to the span of , the span of contains much more than just the vectors in !    "
},
{
  "id": "ex-span-check1",
  "level": "2",
  "url": "sec-span.html#ex-span-check1",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  Determine whether the vector is in the span of the vectors .    This is really asking: are there scalars such that ? And this, in turn, is equivalent to the system , which is the same as the matrix equation Solving the system confirms that there is indeed a solution, so the answer to our original question is yes.  To confirm your work for the above exercise, we can use the computer. This first code cell loads the sympy Python library, and then configures the output to look nice. For details on the code used below, see the Appendix .   The above code produces the reduced row-echelon form of the augmented matrix for our system. (The tuple lists the pivot columns note that Python indexes the columns starting at rather than . If you'd rather just get the reduced matrix without this extra information, try adding pivots=False as an optional argument, in the empty parentheses of the rref command.) Do you remember how to get the answer from here? Here's another approach.    Of course, this second approach only works if we know the matrix is invertible. With a bit of experience, you'll probably guess that invertibility of this matrix guarantees that any vector can be written as the span of its columns.   "
},
{
  "id": "ex-span-poly",
  "level": "2",
  "url": "sec-span.html#ex-span-poly",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Determine whether belongs to .    We seek scalars such that . On the left-hand side, we expand and gather terms: . These two polynomials are equal if and only if we can solve the system .  Adding the second and third equations gives , so . The third equation then gives . With three equations and two unknowns, there is a risk that our system could be inconsistent. (In fact, this is the point: if the system is consistent, then is in the span. If the system is inconsistent, is not in the span.) We still need to check if our values work in the first equation: , which shows that our system is inconsistent, and therefore, does not belong to the span of the other two polynomials.  Of course, we can also use matrices (and the computer) to help us solve the problem.   Based on this output, can you tell whether or not in the span? Why or why not?   "
},
{
  "id": "remark-poly-span",
  "level": "2",
  "url": "sec-span.html#remark-poly-span",
  "type": "Remark",
  "number": "1.4.6",
  "title": "",
  "body": " Can we determine what polynomials are in the span? Let's consider a general polynomial . A bit of thought tells us that the coefficients should replace the constants above.   Asking the computer to reduce this matrix to RREF won't produce the desired result. But we can always specify row operations.   In the elementary_row_op function called above, we are asking the computer to change row (the second row) by adding times row (the first row). See Section for complete details on this syntax.  Now we repeat. Here is another cell to work with:   Another option is to replace the rref() function with the echelon_form() function, which doesn't simplify quite as far:   For a consistent system, we need . Therefore, .  "
},
{
  "id": "thm-span-is-subspace",
  "level": "2",
  "url": "sec-span.html#thm-span-is-subspace",
  "type": "Theorem",
  "number": "1.4.7",
  "title": "",
  "body": "  Let be a vector space, and let be vectors in . Then:    is a subspace of .     is the smallest subspace of containing , in the sense that if is a subspace and , then .       Strategy  For the first part, we will rely on our trusty . The proof is essentially the same as the motivating example from the beginning of , modified to allow an arbitrary number of vectors. First, we will write the zero vector as a linear combination of the given vectors. (What should the scalars be?) Then we check addition and scalar multiplication.  How do we show that a subspace is smallest ? As suggested in the statement above, show that if a subspace contains the vectors , then it must contain every vector in . This must be the case because is closed under addition and scalar multiplication, and every vector in is formed using these operations.    Let . Then , since . If and are vectors in , then is in , and is in , so by Theorem , is a subspace.  To see that is the smallest subspace containing , we need only note that if , where is a subspace, then since is closed under scalar multiplication, we know that for any scalars , and since is closed under addition, . Thus, contains all linear combinations of , which is to say that contains .   "
},
{
  "id": "ex=span-subsets",
  "level": "2",
  "url": "sec-span.html#ex=span-subsets",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": " Let be a vector space, and let . Show that if , then .   Your goal is to show that any linear combination of vectors in can also be written as a linear combination of vectors in . What value should you choose for the scalars in front of any vectors that belong to but not ?  "
},
{
  "id": "ex-tf-span",
  "level": "2",
  "url": "sec-span.html#ex-tf-span",
  "type": "Exercise",
  "number": "1.4.9",
  "title": "",
  "body": " True or false: the vectors span .   The only way to get as the third component of is to set . But the scalar multiples of do not generate all vectors of the form .  "
},
{
  "id": "theorem-surplus-span",
  "level": "2",
  "url": "sec-span.html#theorem-surplus-span",
  "type": "Theorem",
  "number": "1.4.10",
  "title": "",
  "body": "  Let be a vector space, and let . If , then .    Strategy  We need to first recall that the span of a set of vectors is, first and foremost, a set. That means that we are proving the equality of two sets. Recall that this typically requires us to prove that each set is a subset of the other.  This means that we need to show that any linear combination of the vectors can be written as a linear combination of the vectors , and vice-versa. In one direction, we will need our hypothesis: . In the other direction, we come back to a trick we've already seen: adding zero does nothing. That is, if a vector is missing from a linear combination, we can include it, using for its coefficient.    Suppose that . This means that can be written as a linear combination of the vectors , so there must exist scalars such that . Now, let . Then we must have for scalars . From our hypothesis (using ), we get . Since can be written as a linear combination of , , and therefore .  On the other hand, let . Then there exist scalars for which we have . Therefore, , which proves the opposite conclusion, and therefore the result.   "
},
{
  "id": "p-345",
  "level": "2",
  "url": "sec-span.html#p-345",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly independent "
},
{
  "id": "ex-ww-span1",
  "level": "2",
  "url": "sec-span.html#ex-ww-span1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "  Let be the vector space of symmetric matrices and be the subspace  (a) Find a nonzero element in .  (b) Find an element in that is not in .                "
},
{
  "id": "ex-ww-span2",
  "level": "2",
  "url": "sec-span.html#ex-ww-span2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "  Let be the vector space of polynomials in with degree less than 3 and be the subspace  (a) Find a nonzero polynomial in .  (b) Find a polynomial in that does not belong to .                "
},
{
  "id": "ex-ww-span3",
  "level": "2",
  "url": "sec-span.html#ex-ww-span3",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "  If possible, write as a linear combination of and .        .           "
},
{
  "id": "ex-ww-span4",
  "level": "2",
  "url": "sec-span.html#ex-ww-span4",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": " Let be a vector that is not a linear combination of the vectors . Select the best statement.     We only know that .       is a proper subset of .      We only know that .      There is no obvious relationship between and .       .    "
},
{
  "id": "ex-ww-span5",
  "level": "2",
  "url": "sec-span.html#ex-ww-span5",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": " Let be a linear combination of the vectors . Select the best statement.     There is no obvious relationship between and .      We only know that .      We only know that .      .   "
},
{
  "id": "ex-ww-span6",
  "level": "2",
  "url": "sec-span.html#ex-ww-span6",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": "  Let be (non-zero) vectors and suppose .  If , then    .  Using the calculation above, mark the statements below that must be true.    Span(x, y, z) = Span(w, x, y)    Span(w, z) = Span(y, z)    Span(x, z) = Span(y, z)    Span(w, y, z) = Span(w, z)    Span(w, x, z) = Span(x, y)                  "
},
{
  "id": "worksheet-span",
  "level": "1",
  "url": "worksheet-span.html",
  "type": "Worksheet",
  "number": "1.5",
  "title": "Worksheet: understanding span",
  "body": " Worksheet: understanding span   In this worksheet, we will attempt to understand the concept of span. Recall from that the span of a set of vectors in a vector space is the set of all linear combinations that can be generated from those vectors.  Therefore, the question Does the vector belong to the span of ? is equivalent to asking, Can I write as a linear combination of the ? , which, in turn, is equivalent to asking:  Do there exist scalars such that ?  In any finite-dimensional vector space, this last question can be turned into a system of equations. If that system has a solution, then yes your vector is in the span. If the system is inconsistent, then the answer is no.     Determine whether or not the vector in belongs to the span of the vectors .   To assist with solving this problem, a code cell is provided below. Once you have determined the augmented matrix of your system of equations, see for details on how to enter your matrix, and then compute its reduced row-echelon form.    Determine whether or not the polynomial belongs to the span of the polynomials .       For our next activity, we are going to look at RGB colours. Here, RGB stands for Red, Green, Blue. All colours displayed by your computer monitor can be expressed in terms of these colours.  First, we load some Python libraries we'll need. These are intended for use in a Jupyter notebook and won't run properly if you are using Sagecell in the HTML textbook.   Next, we will create a widget that lets us select values for red, green, and blue. The RGB colour system assigns 8-bit values to each colour. Possible values for each range from 0 to 255; this indicates how much of each colour will be blended to create the colour you want. Extensive information on the RGB colour system can be found on wikipedia , and there are a number of good online resources about the use of RGB in web design, such as this one from w3schools .   By moving the sliders generated above, you can create different colours. To see what colour you've created by moving the sliders, run the code below.      In what ways can you explain the RGB colour system in terms of span?     Why would it nonetheless be inappropriate to describe the set of all RGB colours as a vector space?     "
},
{
  "id": "ex-ws-span-1",
  "level": "2",
  "url": "worksheet-span.html#ex-ws-span-1",
  "type": "Worksheet Exercise",
  "number": "1.5.1",
  "title": "",
  "body": " Determine whether or not the vector in belongs to the span of the vectors .  "
},
{
  "id": "ex-ws-span-2",
  "level": "2",
  "url": "worksheet-span.html#ex-ws-span-2",
  "type": "Worksheet Exercise",
  "number": "1.5.2",
  "title": "",
  "body": " Determine whether or not the polynomial belongs to the span of the polynomials .  "
},
{
  "id": "ex-ws-span-3",
  "level": "2",
  "url": "worksheet-span.html#ex-ws-span-3",
  "type": "Worksheet Exercise",
  "number": "1.5.3",
  "title": "",
  "body": " In what ways can you explain the RGB colour system in terms of span?  "
},
{
  "id": "ex-ws-span-4",
  "level": "2",
  "url": "worksheet-span.html#ex-ws-span-4",
  "type": "Worksheet Exercise",
  "number": "1.5.4",
  "title": "",
  "body": " Why would it nonetheless be inappropriate to describe the set of all RGB colours as a vector space?  "
},
{
  "id": "sec-independence",
  "level": "1",
  "url": "sec-independence.html",
  "type": "Section",
  "number": "1.6",
  "title": "Linear Independence",
  "body": " Linear Independence  Recall that in , we had to take care to insist that the vectors spanning our plane were not parallel. Otherwise, what we thought was a plane would, in fact, be only a line. Similarly, we said that a line is given by the set of all vectors of the form , where is a scalar, and  is not the zero vector . Otherwise, if , we would have for all , and our line would be the trivial subspace.  When we define a subspace as the span of a set of vectors, we want to have an idea of the size (or perhaps complexity) of the subspace. Certainly the number of vectors we use to generate the span gives a measure of this, but it is not the whole story: we also need to know how many of these vectors depend on other vectors in the generating set. As tells us, when one of the vectors in our generating set can be written as a linear combination of the others, we can remove it as a generator without changing the span.  Given a set of vectors , an important question is therefore: can any of these vectors be written as a linear combination of other vectors in the set? If the answer is no, we say that is linearly independent . This is a difficult condition to check, however: first, we would have to show that cannot be written as a linear combination of . Then, that cannot be written in terms of , and so on.  This could amount to solving different systems of equations in variables! But the systems are not all unrelated. The equation can be rewritten as , where we happen to have set .  In fact, we can do the same thing for each of these systems, and in each case we end up with the same thing: a single homogeneous system with one extra variable. (We get back each of the systems we started with by setting one of the variables equal to .) This not only is far more efficient, it changes the question: it is no longer a question of existence of solutions to a collection of non-homogeneous systems, but a question of uniqueness for the solution of a single homogeneous system.    Let be a set of vectors in a vector space . We say that this set is linearly independent if, for scalars , the equation implies that .  A set of vectors that is not linearly indepdendent is called linearly dependent .     True or false: if , where , then is linearly independent.   The definition of independence is a conditional statement: if  , then  . It is important to get the order of the logic correct here, as the converse is always true.    Recall that the trivial solution , where all variables are zero, is always a solution to a homogeneous system of linear equations. When checking for independence (or writing proofs of related theorems), it is vitally important that we do not assume in advance that our scalars are zero. Otherwise, we are simply making the assertion that , which is, indeed, trivial.  When we prove linear independence, we are trying to show that the trivial solution is the only solution.   Note that the definition of independence asserts that there can be no non-trivial linear combinations that add up to the zero vector. Indeed, if even one scalar can be nonzero, then we can solve for the corresponding vector. Say, for example, that we have a solution to with . Then we can move all other vectors to the right-hand side, and multiply both sides by to give .   Proofs involving linear independence  Note that the definition of linear independence is a conditional statement: if  for some , then  .  When we want to conclude that a set of vectors is linearly independent, we should assume that for some , and then try to show that the scalars must be zero. It's important that we do not assume anything about the scalars to begin with.  If the hypothesis of a statement includes the assumption that a set of vectors is independent, we know that if we can get a linear combination of those vectors equal to the zero vector, then the scalars in that linear combination are automatically zero.    Which of the following are equivalent to the statement, The set of vectors is linearly independent. ?     If , then .    Yes! This is essentially the definition.      If , then .    Remember that a conditional statement is not equivalent to its converse. This statement is true for any set of vectors.      The only scalars for which are .    Correct!      For all scalars , .    The only way this can be true is if all the vectors in the set are the zero vector!      For some scalars , .    Such scalars always exist, because we can choose them to be zero. Independence means that this is the only possible choice.     When looking for vectors that span a subspace, it is useful to find a spanning set that is also linearly independent. Otherwise, as tells us, we will have some redundant vectors, in the sense that removing them as generators does not change the span.    In any vector space :   If , then is independent.    If contains the zero vector, then is dependent.       Strategy  This time, we will outline the strategy, and leave the execution to you. Both parts are about linear combinations. What does independence look like for a single vector? We would need to show that if for some scalar , then . Now recall that in , we showed that if , either or . We're assuming , so what does that tell you about ?  In the second part, if we have a linear combination involving the zero vector, does the value of the scalar in front of matter? (Can it change the value of the linear combination?) If not, is there any reason that scalar would have to be zero?    The definition of linear independence tells us that if is an independent set of vectors, then there is only one way to write as a linear combination of these vectors; namely, . In fact, more is true: any vector in the span of a linearly independent set can be written in only one way as a linear combination of those vectors.   Computationally, questions about linear independence are just questions about homogeneous systems of linear equations. For example, suppose we want to know if the vectors are linearly independent in . This question leads to the vector equation , which becomes the matrix equation .  We now apply some basic theory from linear algebra. A unique (and therefore, trivial) solution to this system is guaranteed if the matrix is invertible, since in that case we have .   The approach in is problematic, however, since it won't work if we have 2 vectors, or 4. In general, we should look at the reduced row-echelon form. A unique solution corresponds to having a leading 1 in each column of . Let's check this condition.   One observation is useful here, and will lead to a better understanding of independence. First, it would be impossible to have 4 or more linearly independent vectors in . Why? (How many leading ones can you have in a matrix?) Second, having two or fewer vectors makes it more likely that the set is independent.  The largest set of linearly independent vectors possible in contains three vectors. You might have also observed that the smallest number of vectors needed to span is 3. Hmm. Seems like there's something interesting going on here. But first, some more computation. (For the first two exercises, once you've tried it yourself, you can find a solution using a Sage cell for computation at the end of the book .)   Determine whether the set is linearly independent in .   We set up a matrix and reduce:   Notice that this time we don't get a unique solution, so we can conclude that these vectors are not independent. Furthermore, you can probably deduce from the above that we have . Now suppose that . In how many ways can we write as a linear combination of these vectors?    Which of the following subsets of are independent?    In each case, we set up the defining equation for independence, collect terms, and then analyze the resulting system of equations. (If you work with polynomials often enough, you can probably jump straight to the matrix. For now, let's work out the details.)  Suppose . Then , so .  And in this case, we don't even need to ask the computer. The first equation gives right away, and putting that into the third equation gives , and the second equation then gives .  Since is the only solution, the set is independent.  Repeating for leads to the equation This gives us:     Determine whether or not the set is linearly independent in .   We set a linear combination equal to the zero vector, and combine: .  We could proceed, but we might instead notice right away that equations 1 and 4 are identical, and so are equations 2 and 3. With only two distinct equations and 4 unknowns, we're certain to find nontrivial solutions.   We end with one last exercise, which provides a result that often comes in handy.   Prove that any nonempty subset of a linearly independent set is linearly independent.   Start by assigning labels: let the larger set be , and let the smaller set be , where . What happens if the smaller set is not independent?      Let be a linearly independent set of vectors. Select the best statement.      is never a linearly independent set of vectors.      The independence of the set depends on the vectors chosen.       is always a linearly independent set of vectors.       Let be a linear combination of . Select the best statement.      is never a linearly independent set of vectors.       is always a linearly independent set of vectors.      We can't conclude whether or not is a linearly independent set of vectors.      The set must be a linearly independent set of vectors.      The set cannot be a linearly independent set of vectors.       Assume is not a linear combination of the vectors . Select the best statement.     The set is always linearly independent.      The set is never linearly independent.      The set is linearly independent provided that is linearly independent.       Are the vectors , and linearly independent?  If they are linearly dependent, find scalars that are not all zero such that the equation below is true.  If they are linearly independent, find the only scalars that will make the equation below true.       .              Are the vectors , and linearly independent?  If they are linearly dependent, find scalars that are not all zero such that the equation below is true.  If they are linearly independent, find the only scalars that will make the equation below true.       .              Are the vectors and linearly independent?  If the vectors are independent, enter zero in every answer blank below, since zeros are only the values that make the equation below true.  If they are dependent, find numbers, not all zero, that make the equation below true. You should be able to explain and justify your answer.                     Are the vectors and linearly independent?  If the vectors are independent, enter zero in every answer blank since zeros are only the values that make the equation below true.  If they are dependent, find numbers, not all zero, that make the equation below true. You should be able to explain and justify your answer.                     Determine whether or not the following sets of matrices are linearly independent.                       "
},
{
  "id": "p-397",
  "level": "2",
  "url": "sec-independence.html#p-397",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly independent "
},
{
  "id": "def-independent",
  "level": "2",
  "url": "sec-independence.html#def-independent",
  "type": "Definition",
  "number": "1.6.1",
  "title": "",
  "body": "  Let be a set of vectors in a vector space . We say that this set is linearly independent if, for scalars , the equation implies that .  A set of vectors that is not linearly indepdendent is called linearly dependent .   "
},
{
  "id": "ex-tf-li",
  "level": "2",
  "url": "sec-independence.html#ex-tf-li",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": " True or false: if , where , then is linearly independent.   The definition of independence is a conditional statement: if  , then  . It is important to get the order of the logic correct here, as the converse is always true.  "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-independence.html#remark-3",
  "type": "Remark",
  "number": "1.6.3",
  "title": "Proofs involving linear independence.",
  "body": " Proofs involving linear independence  Note that the definition of linear independence is a conditional statement: if  for some , then  .  When we want to conclude that a set of vectors is linearly independent, we should assume that for some , and then try to show that the scalars must be zero. It's important that we do not assume anything about the scalars to begin with.  If the hypothesis of a statement includes the assumption that a set of vectors is independent, we know that if we can get a linear combination of those vectors equal to the zero vector, then the scalars in that linear combination are automatically zero.  "
},
{
  "id": "ex-rs-mc-indep",
  "level": "2",
  "url": "sec-independence.html#ex-rs-mc-indep",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": " Which of the following are equivalent to the statement, The set of vectors is linearly independent. ?     If , then .    Yes! This is essentially the definition.      If , then .    Remember that a conditional statement is not equivalent to its converse. This statement is true for any set of vectors.      The only scalars for which are .    Correct!      For all scalars , .    The only way this can be true is if all the vectors in the set are the zero vector!      For some scalars , .    Such scalars always exist, because we can choose them to be zero. Independence means that this is the only possible choice.    "
},
{
  "id": "lemma-basic-independent",
  "level": "2",
  "url": "sec-independence.html#lemma-basic-independent",
  "type": "Lemma",
  "number": "1.6.5",
  "title": "",
  "body": "  In any vector space :   If , then is independent.    If contains the zero vector, then is dependent.       Strategy  This time, we will outline the strategy, and leave the execution to you. Both parts are about linear combinations. What does independence look like for a single vector? We would need to show that if for some scalar , then . Now recall that in , we showed that if , either or . We're assuming , so what does that tell you about ?  In the second part, if we have a linear combination involving the zero vector, does the value of the scalar in front of matter? (Can it change the value of the linear combination?) If not, is there any reason that scalar would have to be zero?   "
},
{
  "id": "rem-independent-homogeneous",
  "level": "2",
  "url": "sec-independence.html#rem-independent-homogeneous",
  "type": "Remark",
  "number": "1.6.6",
  "title": "",
  "body": " Computationally, questions about linear independence are just questions about homogeneous systems of linear equations. For example, suppose we want to know if the vectors are linearly independent in . This question leads to the vector equation , which becomes the matrix equation .  We now apply some basic theory from linear algebra. A unique (and therefore, trivial) solution to this system is guaranteed if the matrix is invertible, since in that case we have .  "
},
{
  "id": "ex-li-r3",
  "level": "2",
  "url": "sec-independence.html#ex-li-r3",
  "type": "Exercise",
  "number": "1.6.7",
  "title": "",
  "body": " Determine whether the set is linearly independent in .   We set up a matrix and reduce:   Notice that this time we don't get a unique solution, so we can conclude that these vectors are not independent. Furthermore, you can probably deduce from the above that we have . Now suppose that . In how many ways can we write as a linear combination of these vectors?  "
},
{
  "id": "ex-li-p2",
  "level": "2",
  "url": "sec-independence.html#ex-li-p2",
  "type": "Exercise",
  "number": "1.6.8",
  "title": "",
  "body": " Which of the following subsets of are independent?    In each case, we set up the defining equation for independence, collect terms, and then analyze the resulting system of equations. (If you work with polynomials often enough, you can probably jump straight to the matrix. For now, let's work out the details.)  Suppose . Then , so .  And in this case, we don't even need to ask the computer. The first equation gives right away, and putting that into the third equation gives , and the second equation then gives .  Since is the only solution, the set is independent.  Repeating for leads to the equation This gives us:   "
},
{
  "id": "ex-li-m22",
  "level": "2",
  "url": "sec-independence.html#ex-li-m22",
  "type": "Exercise",
  "number": "1.6.9",
  "title": "",
  "body": " Determine whether or not the set is linearly independent in .   We set a linear combination equal to the zero vector, and combine: .  We could proceed, but we might instead notice right away that equations 1 and 4 are identical, and so are equations 2 and 3. With only two distinct equations and 4 unknowns, we're certain to find nontrivial solutions.  "
},
{
  "id": "ex-li-subset",
  "level": "2",
  "url": "sec-independence.html#ex-li-subset",
  "type": "Exercise",
  "number": "1.6.10",
  "title": "",
  "body": " Prove that any nonempty subset of a linearly independent set is linearly independent.   Start by assigning labels: let the larger set be , and let the smaller set be , where . What happens if the smaller set is not independent?  "
},
{
  "id": "ex-ww-li1",
  "level": "2",
  "url": "sec-independence.html#ex-ww-li1",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": " Let be a linearly independent set of vectors. Select the best statement.      is never a linearly independent set of vectors.      The independence of the set depends on the vectors chosen.       is always a linearly independent set of vectors.    "
},
{
  "id": "ex-ww-li2",
  "level": "2",
  "url": "sec-independence.html#ex-ww-li2",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": " Let be a linear combination of . Select the best statement.      is never a linearly independent set of vectors.       is always a linearly independent set of vectors.      We can't conclude whether or not is a linearly independent set of vectors.      The set must be a linearly independent set of vectors.      The set cannot be a linearly independent set of vectors.    "
},
{
  "id": "ex-ww-li3",
  "level": "2",
  "url": "sec-independence.html#ex-ww-li3",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "",
  "body": " Assume is not a linear combination of the vectors . Select the best statement.     The set is always linearly independent.      The set is never linearly independent.      The set is linearly independent provided that is linearly independent.    "
},
{
  "id": "ex-ww-li4",
  "level": "2",
  "url": "sec-independence.html#ex-ww-li4",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": "  Are the vectors , and linearly independent?  If they are linearly dependent, find scalars that are not all zero such that the equation below is true.  If they are linearly independent, find the only scalars that will make the equation below true.       .           "
},
{
  "id": "ex-ww-li5",
  "level": "2",
  "url": "sec-independence.html#ex-ww-li5",
  "type": "Exercise",
  "number": "1.6.5",
  "title": "",
  "body": "  Are the vectors , and linearly independent?  If they are linearly dependent, find scalars that are not all zero such that the equation below is true.  If they are linearly independent, find the only scalars that will make the equation below true.       .           "
},
{
  "id": "ex-ww-li6",
  "level": "2",
  "url": "sec-independence.html#ex-ww-li6",
  "type": "Exercise",
  "number": "1.6.6",
  "title": "",
  "body": "  Are the vectors and linearly independent?  If the vectors are independent, enter zero in every answer blank below, since zeros are only the values that make the equation below true.  If they are dependent, find numbers, not all zero, that make the equation below true. You should be able to explain and justify your answer.                  "
},
{
  "id": "ex-ww-li7",
  "level": "2",
  "url": "sec-independence.html#ex-ww-li7",
  "type": "Exercise",
  "number": "1.6.7",
  "title": "",
  "body": "  Are the vectors and linearly independent?  If the vectors are independent, enter zero in every answer blank since zeros are only the values that make the equation below true.  If they are dependent, find numbers, not all zero, that make the equation below true. You should be able to explain and justify your answer.                  "
},
{
  "id": "ex-ww-li8",
  "level": "2",
  "url": "sec-independence.html#ex-ww-li8",
  "type": "Exercise",
  "number": "1.6.8",
  "title": "",
  "body": "  Determine whether or not the following sets of matrices are linearly independent.                     "
},
{
  "id": "sec-dimension",
  "level": "1",
  "url": "sec-dimension.html",
  "type": "Section",
  "number": "1.7",
  "title": "Basis and dimension",
  "body": " Basis and dimension  Next, we begin with an important result, sometimes known as the Fundamental Theorem :   Fundamental Theorem (Steinitz Exchange Lemma)   Suppose . If is a linearly independent set of vectors in , then .    Strategy  We won't give a complete proof of this theorem. The idea is straightforward, but checking all the details takes some work. Since is a spanning set, each of the vectors in our independent set can be written as a linear combination of . In particular, we can write for scalars , and these scalars can't all be zero. (Why? And why is this important?)  The next step is to argue that ; that is, that we can replace by without changing the span. This will involve chasing some linear combinations, and remember that we need to check both inclusions to prove set equality. (This step requires us to have assumed that the scalar is nonzero. Do you see why?)  Next, we similarly replace with . Note that we can write , and at least one of the must be nonzero. (Why can't they all be zero? What does tell you about ?)  If we assume that is one of the nonzero scalars, we can solve for in the equation above, and replace by in our spanning set. At this point, you will have successfully argued that .  Now, we repeat the process. If , we eventually run out of vectors, and all is well. The question is, what goes wrong if ? Then we run out of vectors first. We'll be able to write , and there will be some vectors leftover. Why is this a problem? (What assumption about the will we contradict?)    If a set of vectors spans a vector space , but it is not independent, we observed that it is possible to remove a vector from the set and still span using a smaller set. This suggests that spanning sets that are also linearly independent are of particular importance, and indeed, they are important enough to have a name.    Let be a vector space. A set is called a basis of if is linearly independent, and .    The importance of a basis is that vector vector can be written in terms of the basis, and this expression as a linear combination of basis vectors is unique . Another important fact is that every basis has the same number of elements.   Invariance Theorem   If and are both bases of a vector space , then .    Strategy  One way of proving the equality is to show that and . We know that since both sets are bases, both sets are independent, and they both span . Can you see a way to use (twice)?    Let and let . Since both and are bases, both sets are linearly independent, and both sets span . Since is independent and , we must have , by . Similarly, since and is independent, we must have , and therefore, .    Suppose . If this set is not linearly independent, Theorem tells us that we can remove a vector from the set, and still span . We can repeat this procedure until we have a linearly independent set of vectors, which will then be a basis. These results let us make a definition.    Let be a vector space. If can be spanned by a finite number of vectors, then we call a finite-dimensional vector space. If is finite-dimensional (and non-trivial), and is a basis of , we say that has dimension  , and write . If cannot be spanned by finitely many vectors, we say that is infinite-dimensional .     Find a basis for , if    Let . Then , and , so the condition requires: .  So , in which case the first equation is trivial, and we are left with the single equation . Thus, our matrix must be of the form . Since the matrices and are not scalar multiples of each other, they must be independent, and therefore, they form a basis for . (Why do we know these matrices span ?)    Standard bases   Most of the vector spaces we work with come equipped with a standard basis . The standard basis for a vector space is typically a basis such that the scalars needed to express a vector in terms of that basis are the same scalars used to define the vector in the first place. For example, we write an element of as (or , or , or ). We can also write . The set is the standard basis for . In general, the vector space (written this time as column vectors) has standard basis . From this, we can conclude (unsurprisingly) that .  Similarly, a polynomial is usually written as , suggesting the standard basis . As a result, we see that .  For one more example, we note that a matrix can be written as , which suggests a standard basis for , with similar results for any other matrix space. From this, we can conclude (exercise) that .     Show that the following sets are bases of .       We need to show that the set is independent, and that it spans.  The set is independent if the equation has as its only solution. This equation is equivalent to the system .  We know that the solution to this system is unique if the coefficient matrix is invertible. Note that the columns of this matrix are vectors in our set.  We can determine invertibility either by showing that the RREF of is the identity, or by showing that the determinant of is nonzero. Either way, this is most easily done by the computer:   Our set of vectors is therefore linearly independent. Now, to show that it spans, we need to show that for any vector , the equation has a solution. But we know that this system has the same coefficient matrix as the one above, and that existence of a solution again follows from invertibility of , which we have already established.  Note that for three vectors in , once independence has been confirmed, span is automatic. We will soon see that this is not a coincidence.       Based on what we learned from the first set, determining whether or not this set is a basis is equivalent to determining whether or not the matrix whose columns consist of the vectors in the set is invertible. We form the matrix and then check invertibility using the computer.   Since the determinant is nonzero, our set is a basis.   The next two exercises are left to the reader to solve. In each case, your goal should be to turn the questions of independence and span into a system of equations, which you can then solve using the computer.   Show that the following is a basis of : .   For independence, consider the linear combination . Combine the left-hand side, and then equate entries of the matrices on either side to obtain a system of equations.     Show that is a basis for .   For independence, consider the linear combination . When dealing with polynomials, we need to collect like terms and equate coefficients: , so the coefficients must all equal zero.     Find a basis and dimension for the following subspaces of :       By definition, , and these vectors are independent, since neither is a scalar multiple of the other. Since there are two vectors in this basis, .       If , then for some polynomial . Since is a subspace of , the degree of is at most 2. Therefore, for some , and . Since was arbitrary, this shows that .  The set is also independent, since neither vector is a scalar multiple of the other. Therefore, this set is a basis, and .       If , then is an even polynomial, and therefore for . (If you didn't know this it's easily verified: if , we can immediately cancel from each side, and since , we can cancel as well. This leaves , or , which implies that .)  It follows that the set spans , and since this is a subset of the standard basis of , it must be independent, and is therefore a basis of , letting us conclude that .   We've noted a few times now that if , then If is not in the span, we can make another useful observation:   Independent Lemma   Suppose is a linearly independent set of vectors in a vector space . If but , then is independent.    Strategy  We want to show that a set of vectors is linearly independent, so we should begin by setting a linear combination of these vectors equal to the zero vector. Our goal is to show that all the coefficients have to be zero.  Since the vector is special , its coefficient gets a different treatment, using a familiar tautology: either this coefficient is zero, or it isn't.  what if the coefficient of is nonzero? Does that contradict one of our assumptions? If the coefficient of is zero, then it disappears from our linear combination. What assumption applies to the remaining vectors?    Suppose is independent, and that . Suppose we have for scalars . We must have ; otherwise, we can multiply by and rearrange to obtain , but this would mean that , contradicting our assumption.  With we're left with , and since we assumed that the set is independent, we must have . Since we already showed , this shows that is independent.    This is, in fact, an if and only if result. If , then is not independent. Above, we argued that if is finite dimensional, then any spanning set for can be reduced to a basis. It probably won't surprise you that the following is also true.    Let be a finite-dimensional vector space, and let be any subspace of . Then any independent set of vectors in can be enlarged to a basis of .    Strategy  We have an independent set of vectors that doesn't span our subspace. That means there must be some vector in that isn't in the span, so applies: we can add that vector to our set, and get a larger independent set.  Now it's just a matter of repeating this process until we get a spanning set. But there's one gap: how do we know the process has to stop? Why can't we just keep adding vectors forever, getting larger and larger independent sets?    This follows from . If our independent set of vectors spans , then it's a basis and we're done. If not, we can find some vector not in the span, and add it to our set to obtain a larger set that is still independent. We can continue adding vectors in this fashion until we obtain a spanning set.  Note that this process must terminate: is finite-dimensional, so there is a finite spanning set for . By the Steinitz Exchange lemma, our independent set cannot get larger than this spanning set.      Any finite-dimensional (non-trivial) vector space has a basis. Moreover:   If can be spanned by vectors, then .    Given an independent set in that does not span , and a basis of , we can enlarge to a basis of by adding elements of .       Strategy  Much of this theorem sums up some of what we've learned so far: As long as a vector space contains a nonzero vector , the set is independent and can be enlarged to a basis, by . The size of any spanning set is at least as big as the dimension of , by .  To understand why we can enlarge a given independent set using elements of an existing basis, we need to think about why there must be some vector in this basis that is not in the span of our independent set, so that we can apply .    Let be a finite-dimensional, non-trivial vector space. If is a vector in , then is linearly independent. By , we can enlarge this set to a basis of , so has a basis.  Now, suppose , and let be a basis for . By definition, we have , and by , since is linearly independent, we must have .  Let us now consider an independent set . Since is independent and spans , we must have . If , there must be some element of that is not in the span of : if every element of is in , then by . And since is a basis, it spans , so every element of is in the span of , and we similarly have that , so .  Since we can find an element of that is not in the span of , we can add that element to , and the resulting set is still independent. If the new set spans , we're done. If not, we can repeat the process, adding another vector from . Since the set is finite, this process must eventually end.     Find a basis of that contains the vectors .   By the previous theorem, we can form a basis by adding vectors from the standard basis . It's easy to check that is not in the span of . To get a basis, we need one more vector. Observe that all three of our vectors so far have a zero in the -entry. Thus, cannot be in the span of the first three vectors, and adding it gives us our basis.    Extend the set to a basis of .   Again, we only need to add one vector from the standard basis , and it's not too hard to check that any of them will do.    Give two examples of infinite-dimensional vector spaces. Support your answer.    Determine whether the following statements are true or false.   A set of 2 vectors can span .   We know that the standard basis for contains three vectors, and as a basis, it is linearly independent. According to , a spanning set cannot be larger than an independent set.   It is possible for a set of 2 vectors to be linearly independent in .   There are many such examples, including .   A set of 4 vectors can span .   Add any vector you want to a basis for , and the resulting set will span.   It is possible for a set of 4 vectors to be linearly independent in .   We know that 3 vectors can span , and an independent set cannot be larger than a spanning set.   Let's recap our results so far:   A basis for a vector space is an independent set of vectors that spans .    The number of vectors in any basis of is a constant, called the dimension of .    The number of vectors in any independent set is always less than or equal to the number of vectors in a spanning set.    In a finite-dimensional vector space, any independent set can be enlarged to a basis, and any spanning set can be cut down to a basis by deleting vectors that are in the span of the remaining vectors.   Another important aspect of dimension is that it reduces many problems, such as determining equality of subspaces, to counting problems.    Let and be subspaces of a finite-dimensional vector space .   If , then .    If and , then .          Suppose , and let be a basis for . Since is a basis, it's independent. And since and , . Thus, is an independent subset of , and since any basis of spans , we know that , by Theorem .    Suppose and . Let be a basis for . As above, is an independent subset of . If , then there is some with . But , so that would mean that is a linearly independent set containing vectors. This is impossible, since , so no independent set can contain more than vectors.       An even more useful counting result is the following:    Let be an -dimensional vector space. If the set contains vectors, then is independent if and only if .    Strategy  This result is a combination of three observations:   The dimension of is the size of any basis    Any independent set can be enlarged to a basis, and cannot have more vectors than a basis.    Any spanning set contains a basis, and cannot have fewer vectors than a basis.       If is independent, then it can be extended to a basis with . But and both contain vectors (since ), so we must have .  If spans , then must contain a basis , and as above, since and contain the same number of vectors, they must be equal.     saves us a lot of time, since it tells us that, when we know the dimension of , we do not have to check both independence and span to confirm a basis; checking one of the two implies the other. (And usually independence is easier to check.)  We saw this in : given a set of vectors in , we form the matrix with these vectors as columns. This matrix becomes the coefficient matrix for the system of equations we obtain when checking for independence, and for the system we obtain when checking for span. In both cases, the condition on is the same; namely, that it must be invertible.     Find a basis for the vector space where is the vector space of polynomials in with degree less than or equal to 2.              Find a basis for the vector space of matrices with trace 0.             True or false: if a set of vectors is linearly independent in a vector space , but does not span , then can be extended to a basis for by adding vectors.   What if is infinite-dimensional?    True or false: if , then .   What if the set is linearly dependent?    True or false: if is a subspace of a vector space , and for a finite set of vectors , then contains a basis for .   Since is finite and spans , the subspace is finite-dimensional. If is linearly dependent, we can remove vectors from until we obtain a set that spans and is linearly independent.     Suppose that and are nonzero subspaces, with contained inside , and suppose that .  (a) What are the possible dimensions of ?  (b) If then what are the possible dimensions of ?             (a) The dimension of cannot exceed the dimension of since is contained in . is non-zero, and thus its dimension cannot be 0. Hence 1, 2, or 3 are the possible dimensions of .  (b) If , then is properly contained in , and the dimension of is strictly less than the dimension of . Thus only 1 or 2 are possible dimensions of .         Let be the vector space of all polynomials of degree 2 or less, and let be the subspace spanned by and .  (a) What is the dimension of the subspace ?  (b) Is a basis for ?  Be sure you can explain and justify your answer.  (c) Give a basis for the subspace .                        Let be the vector space of all polynomials of degree 2 or less, and let be the subspace spanned by and .  (a) What is the dimension of the subspace ?  (b) Is a basis for ?  Be sure you can explain and justify your answer.  (c) Give a basis for the subspace .                       "
},
{
  "id": "theorem-steinitz",
  "level": "2",
  "url": "sec-dimension.html#theorem-steinitz",
  "type": "Theorem",
  "number": "1.7.1",
  "title": "Fundamental Theorem (Steinitz Exchange Lemma).",
  "body": " Fundamental Theorem (Steinitz Exchange Lemma)   Suppose . If is a linearly independent set of vectors in , then .    Strategy  We won't give a complete proof of this theorem. The idea is straightforward, but checking all the details takes some work. Since is a spanning set, each of the vectors in our independent set can be written as a linear combination of . In particular, we can write for scalars , and these scalars can't all be zero. (Why? And why is this important?)  The next step is to argue that ; that is, that we can replace by without changing the span. This will involve chasing some linear combinations, and remember that we need to check both inclusions to prove set equality. (This step requires us to have assumed that the scalar is nonzero. Do you see why?)  Next, we similarly replace with . Note that we can write , and at least one of the must be nonzero. (Why can't they all be zero? What does tell you about ?)  If we assume that is one of the nonzero scalars, we can solve for in the equation above, and replace by in our spanning set. At this point, you will have successfully argued that .  Now, we repeat the process. If , we eventually run out of vectors, and all is well. The question is, what goes wrong if ? Then we run out of vectors first. We'll be able to write , and there will be some vectors leftover. Why is this a problem? (What assumption about the will we contradict?)   "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "sec-dimension.html#def-basis",
  "type": "Definition",
  "number": "1.7.2",
  "title": "",
  "body": "  Let be a vector space. A set is called a basis of if is linearly independent, and .   "
},
{
  "id": "thm-invariance",
  "level": "2",
  "url": "sec-dimension.html#thm-invariance",
  "type": "Theorem",
  "number": "1.7.3",
  "title": "Invariance Theorem.",
  "body": " Invariance Theorem   If and are both bases of a vector space , then .    Strategy  One way of proving the equality is to show that and . We know that since both sets are bases, both sets are independent, and they both span . Can you see a way to use (twice)?    Let and let . Since both and are bases, both sets are linearly independent, and both sets span . Since is independent and , we must have , by . Similarly, since and is independent, we must have , and therefore, .   "
},
{
  "id": "def-dimension",
  "level": "2",
  "url": "sec-dimension.html#def-dimension",
  "type": "Definition",
  "number": "1.7.4",
  "title": "",
  "body": "  Let be a vector space. If can be spanned by a finite number of vectors, then we call a finite-dimensional vector space. If is finite-dimensional (and non-trivial), and is a basis of , we say that has dimension  , and write . If cannot be spanned by finitely many vectors, we say that is infinite-dimensional .   "
},
{
  "id": "ex-basis-m22",
  "level": "2",
  "url": "sec-dimension.html#ex-basis-m22",
  "type": "Exercise",
  "number": "1.7.5",
  "title": "",
  "body": " Find a basis for , if    Let . Then , and , so the condition requires: .  So , in which case the first equation is trivial, and we are left with the single equation . Thus, our matrix must be of the form . Since the matrices and are not scalar multiples of each other, they must be independent, and therefore, they form a basis for . (Why do we know these matrices span ?)  "
},
{
  "id": "ex-standard-bases",
  "level": "2",
  "url": "sec-dimension.html#ex-standard-bases",
  "type": "Example",
  "number": "1.7.6",
  "title": "Standard bases.",
  "body": " Standard bases   Most of the vector spaces we work with come equipped with a standard basis . The standard basis for a vector space is typically a basis such that the scalars needed to express a vector in terms of that basis are the same scalars used to define the vector in the first place. For example, we write an element of as (or , or , or ). We can also write . The set is the standard basis for . In general, the vector space (written this time as column vectors) has standard basis . From this, we can conclude (unsurprisingly) that .  Similarly, a polynomial is usually written as , suggesting the standard basis . As a result, we see that .  For one more example, we note that a matrix can be written as , which suggests a standard basis for , with similar results for any other matrix space. From this, we can conclude (exercise) that .   "
},
{
  "id": "ex-basis-r3",
  "level": "2",
  "url": "sec-dimension.html#ex-basis-r3",
  "type": "Exercise",
  "number": "1.7.7",
  "title": "",
  "body": " Show that the following sets are bases of .       We need to show that the set is independent, and that it spans.  The set is independent if the equation has as its only solution. This equation is equivalent to the system .  We know that the solution to this system is unique if the coefficient matrix is invertible. Note that the columns of this matrix are vectors in our set.  We can determine invertibility either by showing that the RREF of is the identity, or by showing that the determinant of is nonzero. Either way, this is most easily done by the computer:   Our set of vectors is therefore linearly independent. Now, to show that it spans, we need to show that for any vector , the equation has a solution. But we know that this system has the same coefficient matrix as the one above, and that existence of a solution again follows from invertibility of , which we have already established.  Note that for three vectors in , once independence has been confirmed, span is automatic. We will soon see that this is not a coincidence.       Based on what we learned from the first set, determining whether or not this set is a basis is equivalent to determining whether or not the matrix whose columns consist of the vectors in the set is invertible. We form the matrix and then check invertibility using the computer.   Since the determinant is nonzero, our set is a basis.  "
},
{
  "id": "ex-basis-m22a",
  "level": "2",
  "url": "sec-dimension.html#ex-basis-m22a",
  "type": "Exercise",
  "number": "1.7.8",
  "title": "",
  "body": " Show that the following is a basis of : .   For independence, consider the linear combination . Combine the left-hand side, and then equate entries of the matrices on either side to obtain a system of equations.  "
},
{
  "id": "ex-basis-p3",
  "level": "2",
  "url": "sec-dimension.html#ex-basis-p3",
  "type": "Exercise",
  "number": "1.7.9",
  "title": "",
  "body": " Show that is a basis for .   For independence, consider the linear combination . When dealing with polynomials, we need to collect like terms and equate coefficients: , so the coefficients must all equal zero.  "
},
{
  "id": "ex-basis-p2",
  "level": "2",
  "url": "sec-dimension.html#ex-basis-p2",
  "type": "Exercise",
  "number": "1.7.10",
  "title": "",
  "body": " Find a basis and dimension for the following subspaces of :       By definition, , and these vectors are independent, since neither is a scalar multiple of the other. Since there are two vectors in this basis, .       If , then for some polynomial . Since is a subspace of , the degree of is at most 2. Therefore, for some , and . Since was arbitrary, this shows that .  The set is also independent, since neither vector is a scalar multiple of the other. Therefore, this set is a basis, and .       If , then is an even polynomial, and therefore for . (If you didn't know this it's easily verified: if , we can immediately cancel from each side, and since , we can cancel as well. This leaves , or , which implies that .)  It follows that the set spans , and since this is a subset of the standard basis of , it must be independent, and is therefore a basis of , letting us conclude that .  "
},
{
  "id": "lemma-independent",
  "level": "2",
  "url": "sec-dimension.html#lemma-independent",
  "type": "Lemma",
  "number": "1.7.11",
  "title": "Independent Lemma.",
  "body": " Independent Lemma   Suppose is a linearly independent set of vectors in a vector space . If but , then is independent.    Strategy  We want to show that a set of vectors is linearly independent, so we should begin by setting a linear combination of these vectors equal to the zero vector. Our goal is to show that all the coefficients have to be zero.  Since the vector is special , its coefficient gets a different treatment, using a familiar tautology: either this coefficient is zero, or it isn't.  what if the coefficient of is nonzero? Does that contradict one of our assumptions? If the coefficient of is zero, then it disappears from our linear combination. What assumption applies to the remaining vectors?    Suppose is independent, and that . Suppose we have for scalars . We must have ; otherwise, we can multiply by and rearrange to obtain , but this would mean that , contradicting our assumption.  With we're left with , and since we assumed that the set is independent, we must have . Since we already showed , this shows that is independent.   "
},
{
  "id": "lem-enlarge-independent",
  "level": "2",
  "url": "sec-dimension.html#lem-enlarge-independent",
  "type": "Lemma",
  "number": "1.7.12",
  "title": "",
  "body": "  Let be a finite-dimensional vector space, and let be any subspace of . Then any independent set of vectors in can be enlarged to a basis of .    Strategy  We have an independent set of vectors that doesn't span our subspace. That means there must be some vector in that isn't in the span, so applies: we can add that vector to our set, and get a larger independent set.  Now it's just a matter of repeating this process until we get a spanning set. But there's one gap: how do we know the process has to stop? Why can't we just keep adding vectors forever, getting larger and larger independent sets?    This follows from . If our independent set of vectors spans , then it's a basis and we're done. If not, we can find some vector not in the span, and add it to our set to obtain a larger set that is still independent. We can continue adding vectors in this fashion until we obtain a spanning set.  Note that this process must terminate: is finite-dimensional, so there is a finite spanning set for . By the Steinitz Exchange lemma, our independent set cannot get larger than this spanning set.   "
},
{
  "id": "thm-basis-exist",
  "level": "2",
  "url": "sec-dimension.html#thm-basis-exist",
  "type": "Theorem",
  "number": "1.7.13",
  "title": "",
  "body": "  Any finite-dimensional (non-trivial) vector space has a basis. Moreover:   If can be spanned by vectors, then .    Given an independent set in that does not span , and a basis of , we can enlarge to a basis of by adding elements of .       Strategy  Much of this theorem sums up some of what we've learned so far: As long as a vector space contains a nonzero vector , the set is independent and can be enlarged to a basis, by . The size of any spanning set is at least as big as the dimension of , by .  To understand why we can enlarge a given independent set using elements of an existing basis, we need to think about why there must be some vector in this basis that is not in the span of our independent set, so that we can apply .    Let be a finite-dimensional, non-trivial vector space. If is a vector in , then is linearly independent. By , we can enlarge this set to a basis of , so has a basis.  Now, suppose , and let be a basis for . By definition, we have , and by , since is linearly independent, we must have .  Let us now consider an independent set . Since is independent and spans , we must have . If , there must be some element of that is not in the span of : if every element of is in , then by . And since is a basis, it spans , so every element of is in the span of , and we similarly have that , so .  Since we can find an element of that is not in the span of , we can add that element to , and the resulting set is still independent. If the new set spans , we're done. If not, we can repeat the process, adding another vector from . Since the set is finite, this process must eventually end.   "
},
{
  "id": "ex-basis-extend-m22",
  "level": "2",
  "url": "sec-dimension.html#ex-basis-extend-m22",
  "type": "Exercise",
  "number": "1.7.14",
  "title": "",
  "body": " Find a basis of that contains the vectors .   By the previous theorem, we can form a basis by adding vectors from the standard basis . It's easy to check that is not in the span of . To get a basis, we need one more vector. Observe that all three of our vectors so far have a zero in the -entry. Thus, cannot be in the span of the first three vectors, and adding it gives us our basis.  "
},
{
  "id": "ex-basis-extend-p3",
  "level": "2",
  "url": "sec-dimension.html#ex-basis-extend-p3",
  "type": "Exercise",
  "number": "1.7.15",
  "title": "",
  "body": " Extend the set to a basis of .   Again, we only need to add one vector from the standard basis , and it's not too hard to check that any of them will do.  "
},
{
  "id": "ex-dim-inf",
  "level": "2",
  "url": "sec-dimension.html#ex-dim-inf",
  "type": "Exercise",
  "number": "1.7.16",
  "title": "",
  "body": " Give two examples of infinite-dimensional vector spaces. Support your answer.  "
},
{
  "id": "ex-basis-tf",
  "level": "2",
  "url": "sec-dimension.html#ex-basis-tf",
  "type": "Exercise",
  "number": "1.7.17",
  "title": "",
  "body": " Determine whether the following statements are true or false.   A set of 2 vectors can span .   We know that the standard basis for contains three vectors, and as a basis, it is linearly independent. According to , a spanning set cannot be larger than an independent set.   It is possible for a set of 2 vectors to be linearly independent in .   There are many such examples, including .   A set of 4 vectors can span .   Add any vector you want to a basis for , and the resulting set will span.   It is possible for a set of 4 vectors to be linearly independent in .   We know that 3 vectors can span , and an independent set cannot be larger than a spanning set.  "
},
{
  "id": "thm-subspace-dim",
  "level": "2",
  "url": "sec-dimension.html#thm-subspace-dim",
  "type": "Theorem",
  "number": "1.7.18",
  "title": "",
  "body": "  Let and be subspaces of a finite-dimensional vector space .   If , then .    If and , then .          Suppose , and let be a basis for . Since is a basis, it's independent. And since and , . Thus, is an independent subset of , and since any basis of spans , we know that , by Theorem .    Suppose and . Let be a basis for . As above, is an independent subset of . If , then there is some with . But , so that would mean that is a linearly independent set containing vectors. This is impossible, since , so no independent set can contain more than vectors.      "
},
{
  "id": "thm-half-the-work",
  "level": "2",
  "url": "sec-dimension.html#thm-half-the-work",
  "type": "Theorem",
  "number": "1.7.19",
  "title": "",
  "body": "  Let be an -dimensional vector space. If the set contains vectors, then is independent if and only if .    Strategy  This result is a combination of three observations:   The dimension of is the size of any basis    Any independent set can be enlarged to a basis, and cannot have more vectors than a basis.    Any spanning set contains a basis, and cannot have fewer vectors than a basis.       If is independent, then it can be extended to a basis with . But and both contain vectors (since ), so we must have .  If spans , then must contain a basis , and as above, since and contain the same number of vectors, they must be equal.   "
},
{
  "id": "ex-ww-basis1",
  "level": "2",
  "url": "sec-dimension.html#ex-ww-basis1",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": "  Find a basis for the vector space where is the vector space of polynomials in with degree less than or equal to 2.           "
},
{
  "id": "ex-ww-basis2",
  "level": "2",
  "url": "sec-dimension.html#ex-ww-basis2",
  "type": "Exercise",
  "number": "1.7.2",
  "title": "",
  "body": "  Find a basis for the vector space of matrices with trace 0.           "
},
{
  "id": "ex-rs-basis3",
  "level": "2",
  "url": "sec-dimension.html#ex-rs-basis3",
  "type": "Exercise",
  "number": "1.7.3",
  "title": "",
  "body": " True or false: if a set of vectors is linearly independent in a vector space , but does not span , then can be extended to a basis for by adding vectors.   What if is infinite-dimensional?  "
},
{
  "id": "ex-rs-basis4",
  "level": "2",
  "url": "sec-dimension.html#ex-rs-basis4",
  "type": "Exercise",
  "number": "1.7.4",
  "title": "",
  "body": " True or false: if , then .   What if the set is linearly dependent?  "
},
{
  "id": "ex-rs-basis5",
  "level": "2",
  "url": "sec-dimension.html#ex-rs-basis5",
  "type": "Exercise",
  "number": "1.7.5",
  "title": "",
  "body": " True or false: if is a subspace of a vector space , and for a finite set of vectors , then contains a basis for .   Since is finite and spans , the subspace is finite-dimensional. If is linearly dependent, we can remove vectors from until we obtain a set that spans and is linearly independent.  "
},
{
  "id": "ex-ww-basis6",
  "level": "2",
  "url": "sec-dimension.html#ex-ww-basis6",
  "type": "Exercise",
  "number": "1.7.6",
  "title": "",
  "body": "  Suppose that and are nonzero subspaces, with contained inside , and suppose that .  (a) What are the possible dimensions of ?  (b) If then what are the possible dimensions of ?             (a) The dimension of cannot exceed the dimension of since is contained in . is non-zero, and thus its dimension cannot be 0. Hence 1, 2, or 3 are the possible dimensions of .  (b) If , then is properly contained in , and the dimension of is strictly less than the dimension of . Thus only 1 or 2 are possible dimensions of .      "
},
{
  "id": "ex-ww-basis7",
  "level": "2",
  "url": "sec-dimension.html#ex-ww-basis7",
  "type": "Exercise",
  "number": "1.7.7",
  "title": "",
  "body": "  Let be the vector space of all polynomials of degree 2 or less, and let be the subspace spanned by and .  (a) What is the dimension of the subspace ?  (b) Is a basis for ?  Be sure you can explain and justify your answer.  (c) Give a basis for the subspace .                     "
},
{
  "id": "ex-ww-basis8",
  "level": "2",
  "url": "sec-dimension.html#ex-ww-basis8",
  "type": "Exercise",
  "number": "1.7.8",
  "title": "",
  "body": "  Let be the vector space of all polynomials of degree 2 or less, and let be the subspace spanned by and .  (a) What is the dimension of the subspace ?  (b) Is a basis for ?  Be sure you can explain and justify your answer.  (c) Give a basis for the subspace .                     "
},
{
  "id": "sec-subspace-combine",
  "level": "1",
  "url": "sec-subspace-combine.html",
  "type": "Section",
  "number": "1.8",
  "title": "New subspaces from old",
  "body": " New subspaces from old  Let be a finite-dimensional vector space, and let be subspaces of . In what ways can we combine and to obtain new subspaces?  At first, we might try set operations: union, intersection, and difference. The set difference we can rule out right away: since and must both contain the zero vector, cannot.  What about the union, ? Before trying to understand this in general, let's try a concrete example: take , and let (the axis, essentially), and (the axis). Is their union a subspace?   The union of the axis and axis in is a subspace of .   Any subspace has to be closed under addition. If we add the vector (which lies along the axis) to the vector (which lies along the axis), we get the vector , which does not lie along either axis.   With a motivating example under our belts, we can try to tackle the general result. (Note that this result remains true even if is infinite-dimensional!)    Let and be subspaces of a vector space . Then is a subspace of if and only if or .    Strategy  We have an if and only if statement, which means we have to prove two directions:   If or , then is a subspace.    If is a subspace, then or .     The first direction is the easy one: if , what can you say about ?  For the other direction, it's not clear how to get started with our hypothesis. When a direct proof seems difficult, remember that we can also try proving the contrapositive: If and , then is not a subspace.  Now we have more to work with: negation turns the or into an and , and proving that something is not a subspace is easier: we just have to show that one part of the subspace test fails. As our motivating example suggests, we should expect closure under addition to be the condition that fails.  To get started, we need to answer one more question: if is not a subset of , what does that tell us?  An important point to keep in mind with this proof: closure under addition means that if a subspace contains and , then it must contain . But if a subspace contains , that does not mean it has to contain and . As an example, consider the subspace of . It contains the vector , but it does not contain or .    Suppose or . In the first case, , and in the second case, . Since both and are subspaces, is a subspace.  Now, suppose that , and . Since , there must be some element such that . Since , there must be some element such that . We know that , so we consider the sum, .  If , then , or . Suppose . Since and is a subspace, . Since and is a subspace, . But we assumed that , so it must be that .  By a similar argument, if , we can conclude that , contradicting the assumption that . So does not belong to or , so it cannot belong to . Since is not closed under addition, it is not a subspace.    This leaves us with intersection. Will it fail as well? Fortunately, the answer is no: this operation actually gives us a subspace.    If and are subspaces of a vector space , then is a subspace.    Strategy  The key here is that the intersection contains only those vectors that belong to both subspaces. So any operation (addition, scalar multiplication) that we do in can be viewed as taking place in either or , and we know that these are subspaces. After this observation, the rest is the .    Let and be subspaces of . Since and , we have . Now, suppose . Then , and . Since and is a subspace, . Similarly, , so . If is any scalar, then is in both and , since both sets are subspaces, and therefore, . By the , is a subspace.    The intersection of two subspaces gives us a subspace, but it is a smaller subspace, contained in the two subspaces we're intersecting. Given subspaces and , is there a way to construct a larger subspace that contains them? We know that doesn't work, because it isn't closed under addition. But what if we started with , and threw in all the missing sums? This leads to a definition:    Let and be subspaces of a vector space . We define the sum of these subspaces by .    It turns out that this works! Not only is a subspace of , it is the smallest subspace containing both and .    Let and be subspaces of a vector space . Then the sum is a subspace of , and if is any subspace of that contains and , then .    Strategy  The key to working with is to understand how to work with the definition. If we say that , then we are saying there exist vectors and such that .  We prove that is a subspace using this observation and the subspace test.  To prove the second part, we assume that and . We then choose an element , and using the idea above, show that .    Let be subspaces. Since , with and , we see that .  Suppose that . Then there exist , and , with , and . Then , and we know that , and , since and are subspaces. Since can be written as the sum of an element of and an element of , we have .  If is any scalar, then , since and .  Since contains , and is closed under both addition and scalar multiplication, it is a subspace.  Now, suppose is a subspace of such that and . Let . Then for some and . Since and , . Similarly, . Since is a subspace, it is closed under addition, so . Therefore, .    By choosing bases for two subspaces and of a finite-dimensional vector space, we can obtain the following cool dimension-counting result:    Let and be subspaces of a finite-dimensional vector space . Then is finite-dimensional, and .    Strategy  This is a proof that would be difficult (if not impossible) without using a basis. Your first thought might be to choose bases for the subspaces and , but this runs into trouble: some of the basis vectors for might be in , and vice-versa.  Of course, those vectors will be in , but it gets hard to keep track: without more information (and we have none, since we want to be completely general), how do we tell which basis vectors are in the intersection, and how many?  Instead, we start with a basis for . This is useful, because is a subspace of both and . So any basis for can be extended to a basis of , and it can also be extended to a basis of .  The rest of the proof relies on making sure that neither of these extensions have any vectors in common, and that putting everything together gives a basis for . (This amounts to going back to the definition of a basis: we need to show that it's linearly independent, and that it spans .)    Let be a basis for . Extend to a basis of , and to a basis of . Note that we have , , and .  Now, consider the set . We claim that is a basis for . We know that is linearly independent, since it's a basis for , and that . It remains to show that none of the are in the span of ; if so, then is independent by .  Since , it suffices to show that none of the belong to . But we know that , so if , then . But if , then , which would imply that is linearly dependent, and since is a basis, this is impossible.  Next, we need to show that . Let ; then for some and . Since , there exist scalars such that , and since , there exist scalars such that . Thus, , which shows that .  Finally, we check that this gives the dimension as claimed. We have , since there are vectors in , vectors in , vectors in , and vectors in .    Notice how a vector can be written as a sum of a vector in and a vector , but not uniquely , in general: in the above proof, we can change the values of the coefficients and , as long as the sum remains unchanged. Note that these are the coefficients of the basis vectors for , so we can avoid this ambiguity if and have no nonzero vectors in common.   Let , and let be two subspaces.   Determine the intersection .   If , then , and if , then . Therefore, if and only if , so .   Write the vector in the form , where and , in at least two different ways.   There are in fact infinitely many ways to do this. Three possible ways include: .     Let and be subspaces of a vector space . If , we say that the sum is a direct sum , which we denote by .    If the sum is direct, then we have simply . The other reason why direct sums are preferable, is that any can be written uniquely as where and , since we no longer have the ambiguity resulting from the basis vectors in .    For any subspaces of a vector space , if and only if for every there exist unique such that .    Suppose that , and suppose that we have , for . Then , which implies that . Now, , since is a subspace, and similarly, . But we also have , which implies that . (Since is in , and this is the same vector as .) Therefore, , which implies that , so . But we must also then have , so .  Conversely, suppose that every can be written uniquely as , with and . Suppose that . Then and , so we also have , since is a subspace. But then , where and . On the other hand, , and belongs to both and . It follows that . Since was arbitrary, .    We end with one last application of the theory we've developed on the existence of a basis for a finite-dimensional vector space. As we continue on to later topics, we'll find that it is often useful to be able to decompose a vector space into a direct sum of subspaces. Using bases, we can show that this is always possible.    Let be a finite-dimensional vector space, and let be any subspace of . Then there exists a subspace such that .    Let be a basis of . Since , the set is a linearly independent subset of . Since any linearly independent set can be extended to a basis of , there exist vectors such that is a basis of .  Now, let . Then is a subspace, and is a basis for . (It spans, and must be independent since it's a subset of an independent set.)  Clearly, , since contains the basis for we've constructed. To show the sum is direct, it suffices to show that . To that end, suppose that . Since , we have for scalars . Since , we can write for scalars . But then Since is a basis for , it's independent, and therefore, all of the must be zero, and therefore, .     If a basis has been chosen for , one way to construct a complement to a subspace is to determine which elements of the basis for are not in . These vectors will form a basis for a complement of .   The subspace constructed in the theorem above is called a complement of . It is not unique; indeed, it depends on the choice of basis vectors. For example, if is a one-dimensional subspace of ; that is, a line, then any other non-parallel line through the origin provides a complement of . Later we will see that an especially useful choice of complement is the orthogonal complement .    Let be a subspace of a vector space . We say that a subspace of is a complement of if .      Let be the subspace of consisting of all polynomials with .   Determine a basis for .   Use the factor theorem.   Since , we know that , for some . Thus, , so a basis is given by .  (Another option is .)   Find a complement of .   What is the dimension of ? (So what must be the dimension of its complement?) What condition ensures that a polynomial does not belong to ?   Since and , we know that any complement of must be one-dimensional.  Therefore, a basis for a complement of is given by any polynomial in that is not in . In particular, we can choose any polynomial with ; for example, . Therefore, is a complement of .    Let be the subspace of define by .   Determine a basis for .   Try plugging in the given conditions, and then decomposing the vector into pieces with one variable each.   If , then .  This shows that . These vectors are also linearly independent, since each one has its first leading (nonzero) entry in a different position. (Think about what this implies for the RREF of the resulting matrix.)   Find a complement of .   One way to solve this is to ask yourself, what vectors are not in the span of the basis you found above? You can do this by solving an appropriate system of equations.   Since , any complement of must have dimension 2. We therefore need to find two independent vectors that do not belong to .  Recall that is defined by two conditions: and . Therefore, a vector is not in if , or  . This suggests that we define two vectors, each of which violates one of these conditions.  For the first, let us take . This is not in because . For the second, let us take . This is not in because . We know that is linearly independent, because each vector has nonzero entries in different positions. Therefore, is a complement of , since it is spanned by vectors not in , and it has the correct dimension.    Suppose and are 4-dimensional subspaces of . What are all possible dimensions of ?          What would say about in this case? Why is that not possible?           Good job! If (the largest it possibly can), then .           Yes! This will be the case if .           Correct! If , then , all with dimension .           Since contains both and , its dimension cannot be less than .     Use .     Let and be subspaces of the vector space   Is a basis for       What is the dimension of       What is the dimension of            "
},
{
  "id": "ex-union-subspace",
  "level": "2",
  "url": "sec-subspace-combine.html#ex-union-subspace",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": " The union of the axis and axis in is a subspace of .   Any subspace has to be closed under addition. If we add the vector (which lies along the axis) to the vector (which lies along the axis), we get the vector , which does not lie along either axis.  "
},
{
  "id": "thm-subspace-union",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-subspace-union",
  "type": "Theorem",
  "number": "1.8.2",
  "title": "",
  "body": "  Let and be subspaces of a vector space . Then is a subspace of if and only if or .    Strategy  We have an if and only if statement, which means we have to prove two directions:   If or , then is a subspace.    If is a subspace, then or .     The first direction is the easy one: if , what can you say about ?  For the other direction, it's not clear how to get started with our hypothesis. When a direct proof seems difficult, remember that we can also try proving the contrapositive: If and , then is not a subspace.  Now we have more to work with: negation turns the or into an and , and proving that something is not a subspace is easier: we just have to show that one part of the subspace test fails. As our motivating example suggests, we should expect closure under addition to be the condition that fails.  To get started, we need to answer one more question: if is not a subset of , what does that tell us?  An important point to keep in mind with this proof: closure under addition means that if a subspace contains and , then it must contain . But if a subspace contains , that does not mean it has to contain and . As an example, consider the subspace of . It contains the vector , but it does not contain or .    Suppose or . In the first case, , and in the second case, . Since both and are subspaces, is a subspace.  Now, suppose that , and . Since , there must be some element such that . Since , there must be some element such that . We know that , so we consider the sum, .  If , then , or . Suppose . Since and is a subspace, . Since and is a subspace, . But we assumed that , so it must be that .  By a similar argument, if , we can conclude that , contradicting the assumption that . So does not belong to or , so it cannot belong to . Since is not closed under addition, it is not a subspace.   "
},
{
  "id": "thm-subspace-intersection",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-subspace-intersection",
  "type": "Theorem",
  "number": "1.8.3",
  "title": "",
  "body": "  If and are subspaces of a vector space , then is a subspace.    Strategy  The key here is that the intersection contains only those vectors that belong to both subspaces. So any operation (addition, scalar multiplication) that we do in can be viewed as taking place in either or , and we know that these are subspaces. After this observation, the rest is the .    Let and be subspaces of . Since and , we have . Now, suppose . Then , and . Since and is a subspace, . Similarly, , so . If is any scalar, then is in both and , since both sets are subspaces, and therefore, . By the , is a subspace.   "
},
{
  "id": "def-subspace-sum",
  "level": "2",
  "url": "sec-subspace-combine.html#def-subspace-sum",
  "type": "Definition",
  "number": "1.8.4",
  "title": "",
  "body": "  Let and be subspaces of a vector space . We define the sum of these subspaces by .   "
},
{
  "id": "thm-subspace-sum",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-subspace-sum",
  "type": "Theorem",
  "number": "1.8.5",
  "title": "",
  "body": "  Let and be subspaces of a vector space . Then the sum is a subspace of , and if is any subspace of that contains and , then .    Strategy  The key to working with is to understand how to work with the definition. If we say that , then we are saying there exist vectors and such that .  We prove that is a subspace using this observation and the subspace test.  To prove the second part, we assume that and . We then choose an element , and using the idea above, show that .    Let be subspaces. Since , with and , we see that .  Suppose that . Then there exist , and , with , and . Then , and we know that , and , since and are subspaces. Since can be written as the sum of an element of and an element of , we have .  If is any scalar, then , since and .  Since contains , and is closed under both addition and scalar multiplication, it is a subspace.  Now, suppose is a subspace of such that and . Let . Then for some and . Since and , . Similarly, . Since is a subspace, it is closed under addition, so . Therefore, .   "
},
{
  "id": "thm-sum-dimension",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-sum-dimension",
  "type": "Theorem",
  "number": "1.8.6",
  "title": "",
  "body": "  Let and be subspaces of a finite-dimensional vector space . Then is finite-dimensional, and .    Strategy  This is a proof that would be difficult (if not impossible) without using a basis. Your first thought might be to choose bases for the subspaces and , but this runs into trouble: some of the basis vectors for might be in , and vice-versa.  Of course, those vectors will be in , but it gets hard to keep track: without more information (and we have none, since we want to be completely general), how do we tell which basis vectors are in the intersection, and how many?  Instead, we start with a basis for . This is useful, because is a subspace of both and . So any basis for can be extended to a basis of , and it can also be extended to a basis of .  The rest of the proof relies on making sure that neither of these extensions have any vectors in common, and that putting everything together gives a basis for . (This amounts to going back to the definition of a basis: we need to show that it's linearly independent, and that it spans .)    Let be a basis for . Extend to a basis of , and to a basis of . Note that we have , , and .  Now, consider the set . We claim that is a basis for . We know that is linearly independent, since it's a basis for , and that . It remains to show that none of the are in the span of ; if so, then is independent by .  Since , it suffices to show that none of the belong to . But we know that , so if , then . But if , then , which would imply that is linearly dependent, and since is a basis, this is impossible.  Next, we need to show that . Let ; then for some and . Since , there exist scalars such that , and since , there exist scalars such that . Thus, , which shows that .  Finally, we check that this gives the dimension as claimed. We have , since there are vectors in , vectors in , vectors in , and vectors in .   "
},
{
  "id": "ex-subspace-intersect",
  "level": "2",
  "url": "sec-subspace-combine.html#ex-subspace-intersect",
  "type": "Exercise",
  "number": "1.8.7",
  "title": "",
  "body": " Let , and let be two subspaces.   Determine the intersection .   If , then , and if , then . Therefore, if and only if , so .   Write the vector in the form , where and , in at least two different ways.   There are in fact infinitely many ways to do this. Three possible ways include: .  "
},
{
  "id": "def-direct-sum",
  "level": "2",
  "url": "sec-subspace-combine.html#def-direct-sum",
  "type": "Definition",
  "number": "1.8.8",
  "title": "",
  "body": "  Let and be subspaces of a vector space . If , we say that the sum is a direct sum , which we denote by .   "
},
{
  "id": "thm-unique-sum",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-unique-sum",
  "type": "Theorem",
  "number": "1.8.9",
  "title": "",
  "body": "  For any subspaces of a vector space , if and only if for every there exist unique such that .    Suppose that , and suppose that we have , for . Then , which implies that . Now, , since is a subspace, and similarly, . But we also have , which implies that . (Since is in , and this is the same vector as .) Therefore, , which implies that , so . But we must also then have , so .  Conversely, suppose that every can be written uniquely as , with and . Suppose that . Then and , so we also have , since is a subspace. But then , where and . On the other hand, , and belongs to both and . It follows that . Since was arbitrary, .   "
},
{
  "id": "thm-construct-complement",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-construct-complement",
  "type": "Theorem",
  "number": "1.8.10",
  "title": "",
  "body": "  Let be a finite-dimensional vector space, and let be any subspace of . Then there exists a subspace such that .    Let be a basis of . Since , the set is a linearly independent subset of . Since any linearly independent set can be extended to a basis of , there exist vectors such that is a basis of .  Now, let . Then is a subspace, and is a basis for . (It spans, and must be independent since it's a subset of an independent set.)  Clearly, , since contains the basis for we've constructed. To show the sum is direct, it suffices to show that . To that end, suppose that . Since , we have for scalars . Since , we can write for scalars . But then Since is a basis for , it's independent, and therefore, all of the must be zero, and therefore, .   "
},
{
  "id": "p-687",
  "level": "2",
  "url": "sec-subspace-combine.html#p-687",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complement orthogonal complement "
},
{
  "id": "def-subspace-complement",
  "level": "2",
  "url": "sec-subspace-combine.html#def-subspace-complement",
  "type": "Definition",
  "number": "1.8.11",
  "title": "",
  "body": "  Let be a subspace of a vector space . We say that a subspace of is a complement of if .   "
},
{
  "id": "ex-poly-basis",
  "level": "2",
  "url": "sec-subspace-combine.html#ex-poly-basis",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": " Let be the subspace of consisting of all polynomials with .   Determine a basis for .   Use the factor theorem.   Since , we know that , for some . Thus, , so a basis is given by .  (Another option is .)   Find a complement of .   What is the dimension of ? (So what must be the dimension of its complement?) What condition ensures that a polynomial does not belong to ?   Since and , we know that any complement of must be one-dimensional.  Therefore, a basis for a complement of is given by any polynomial in that is not in . In particular, we can choose any polynomial with ; for example, . Therefore, is a complement of .  "
},
{
  "id": "ex-subspace-comp",
  "level": "2",
  "url": "sec-subspace-combine.html#ex-subspace-comp",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "",
  "body": " Let be the subspace of define by .   Determine a basis for .   Try plugging in the given conditions, and then decomposing the vector into pieces with one variable each.   If , then .  This shows that . These vectors are also linearly independent, since each one has its first leading (nonzero) entry in a different position. (Think about what this implies for the RREF of the resulting matrix.)   Find a complement of .   One way to solve this is to ask yourself, what vectors are not in the span of the basis you found above? You can do this by solving an appropriate system of equations.   Since , any complement of must have dimension 2. We therefore need to find two independent vectors that do not belong to .  Recall that is defined by two conditions: and . Therefore, a vector is not in if , or  . This suggests that we define two vectors, each of which violates one of these conditions.  For the first, let us take . This is not in because . For the second, let us take . This is not in because . We know that is linearly independent, because each vector has nonzero entries in different positions. Therefore, is a complement of , since it is spanned by vectors not in , and it has the correct dimension.  "
},
{
  "id": "ex-sum-dimension",
  "level": "2",
  "url": "sec-subspace-combine.html#ex-sum-dimension",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": " Suppose and are 4-dimensional subspaces of . What are all possible dimensions of ?          What would say about in this case? Why is that not possible?           Good job! If (the largest it possibly can), then .           Yes! This will be the case if .           Correct! If , then , all with dimension .           Since contains both and , its dimension cannot be less than .     Use .  "
},
{
  "id": "ex-ww-sum",
  "level": "2",
  "url": "sec-subspace-combine.html#ex-ww-sum",
  "type": "Exercise",
  "number": "1.8.4",
  "title": "",
  "body": "  Let and be subspaces of the vector space   Is a basis for       What is the dimension of       What is the dimension of          "
},
{
  "id": "sec-lin-tran-intro",
  "level": "1",
  "url": "sec-lin-tran-intro.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition and examples",
  "body": " Definition and examples  Let and be vector spaces. At their most basic, all vector spaces are sets. Given any two sets, we can consider functions from one to the other. The functions of interest in linear algebra are those that respect the vector space structure of the sets.    Let and be vector spaces. A function is called a linear transformation if:   For all , .    For all and scalars , .   We often use the term linear operator to refer to a linear transformation from a vector space to itself.     Note on notation: it is common usage to drop the usual parentheses of function notation when working with linear transformations, as long as this does not cause confusion. That is, one might write instead of , but one should never write in place of , for the same reason that one should never write in place of . Mathematicians often think of linear transformations in terms of matrix multiplication, which probably explains this notation to some extent.   The properties of a linear transformation tell us that a linear map  preserves the operations of addition and scalar multiplication. (When the domain and codomain are different vector spaces, we might say that  intertwines the operations of the two vector spaces.) In particular, any linear transformation must preserve the zero vector, and respect linear combinations.    Let be a linear transformation. Then    , and    For any scalars and vectors , .       Strategy  For the first part, remember that old trick we've used a couple of times before: . What happens if you apply to both sides of this equation?  For the second part, note that the addition property of a linear transformation looks an awful lot like a distributive property, and we can distribute over a sum of three or more vectors using the associative property. You'll want to deal with the addition first, and then the scalar multiplication.       Since , we have . Adding to both sides of the above gives us .    The addition property of a linear transformation can be extended to sums of three or more vectors using associativity. Therefore, we have , where the second line follows from the scalar multiplication property.        Technically, we skipped over some details in the above proof: how exactly, is associativity being applied? It turns out there's actually a proof by induction lurking in the background!  By definition, we know that . For three vectors, .  For an abitrary number of vectors , we can assume that distribution over addition works for vectors, and then use associativity to write . The right-hand side is technically a sum of two vectors, so we can apply the definition of a linear transformation directly, and then apply our induction hypothesis to .     Let and let . For any matrix , the map defined by is a linear transformation. (This follows immediately from properties of matrix multiplication.)  Let denote the standard basis of . (See .) Recall (or convince yourself, with a couple of examples) that is equal to the th column of . Thus, if we know the value of a linear transformation on each basis vector, we can immediately determine the matrix such that : . This is true because and agree on the standard basis: for each , . Moreover, if two linear transformations agree on a basis, they must be equal. Given any , we can write uniquely as a linear combination If for each , then by we have .    Let's look at some other examples of linear transformations.   For any vector spaces we can define the zero transformation  by for all .    On any vector space we have the identity transformation  defined by for all .    Let be the space of all functions . For any we have the evaluation map  defined by .  To see that this is linear, note that , where denotes the zero function; for any , , and for any scalar , .  Note that the evaluation map can similarly be defined as a linear transformation on any vector space of polynomials.    On the vector space of all continuous functions on , we have the integration map defined by . The fact that this is a linear map follows from properties of integrals proved in a calculus class.    On the vector space of continuously differentiable functions on , we have the differentiation map defined by . Again, linearity follows from properties of the derivative.    Let denote the set of sequences of real numbers, with term-by-term addition and scalar multiplication. The shift operators are both linear.    On the space of matrices, the trace defines a linear map , and the transpose defines a linear map . The determinant and inverse operations on are not linear.      Which of the following are linear transformations?     The function given by .    Since , this can't be a linear transformation.      The function given by .    This looks unusual, but it's linear! You can check that , and .      The function given by .    Although this function preserves the zero vector, it doesn't preserve addition or scalar multiplication. For example, , but .      The function given by .    Multiplication by might feel non-linear, but remember that is not a variable as far as the transformation is concerned! It's more of a placeholder. Try checking the definition directly.      The function given by .    Remember that in general!      The function given by , where , with the vector space structure defined in .    An exponential function that's linear? Seems impossible, but remember that addition  in is really multiplication, so , and similarly, .     Usually, you can expect a linear transformation to involve homogeneous linear expressions. Things like products, powers, and added constants are usually clues that something is nonlinear.   For finite-dimensional vector spaces, it is often convenient to work in terms of a basis. The properties of a linear transformation tell us that we can completely define any linear transformation by giving its values on a basis. In fact, it's enough to know the value of a transformation on a spanning set. The argument given in can be applied to any linear transformation, to obtain the following result.    Let and be two linear transformations. If and for each , then .     Caution: If the above spanning set is not also independent, then we can't just define the values however we want. For example, suppose we want to define , and we set . If and , then we must have . Why? Because , and if is to be linear, then we have to have .   If for some reason we already know that our transformation is linear, we might still be concerned about the fact that if a spanning set is not independent, there will be more than one way to express a vector as linear combination of vectors in that set. If we define by giving its values on a spanning set, will it be well-defined? (That is, could we get two different values for by expressing in terms of the spanning set in two different ways?) Suppose that we have scalars such that We then have .  Of course, we can avoid all of this unpleasantness by using a basis to define a transformation. Given a basis for a vector space , we can define a transformation by setting for some choice of vectors and defining . Because each vector can be written uniquely in terms of a basis, we know that our transformation is well-defined.   The next theorem seems like an obvious consequence of the above, and indeed, one might wonder where the assumption of a basis is needed. The distinction here is that the vectors are chosen in advance, and then we define  by setting , rather than simply defining each as .    Let be vector spaces. Let be a basis of , and let be any vectors in . (These vectors need not be distinct.) Then there exists a unique linear transformation such that for each ; indeed, we can define as follows: given , write . Then .    With the basic theory out of the way, let's look at a few basic examples.    Suppose is a linear transformation. If and , find .    Since we know the value of on the standard basis, we can use properties of linear transformations to immediately obtain the answer: .      Suppose is a linear transformation. Given that and , find .    At first, this example looks the same as the one above, and to some extent, it is. The difference is that this time, we're given the values of on a basis that is not the standard one. This means we first have to do some work to determine how to write the given vector in terms of the given basis.  Suppose we have for scalars . This is equivalent to the matrix equation Solving (perhaps using the code cell below), we get .   Therefore, .     Suppose is defined by Find .   We need to find scalars such that . We could set up a system and solve, but this time it's easy enough to just work our way through. We must have , to get the correct coefficient for . This gives . Now, we have to have , so . Putting this in, we get . Simiplifying this leaves us with . Finally, we find: .     Find a linear transformation such that . Then, determine the value of .    Since forms a basis of (the vectors are not parallel and there are two of them), it suffices to determine how to write a general vector in terms of this basis. Suppose for a general element . This is equivalent to the matrix equation , which we can solve as :   This gives us the result Thus, .  We conclude that .      Let be a linear transformation. Rearrange the blocks below to create a proof of the following statement:  For any vectors , if is linearly independent in , then is linearly independent in .    Suppose that is linearly independent.    We want to show that is linearly independent, so suppose that we have for some scalars .    We apply to both sides of the equation above, giving us: .    Now we make use of both parts of Theorem to get .    By hypothesis, the vectors are linearly independent, so we must have .    Since the only solution to is , the set is linearly independent.    This is mostly a matter of using Theorem , but it's important to get the logic correct. We have a conditional statement of the form , where both ( the set is independent ) and ( the set is independent ) are themselves conditional statements.  The overall structure therefore looks like . A direct proof should be structured as follows:   Assume the main hypothesis: .    Assume the sub -hypothesis .    Figure out how to show that . (This is the apply to both sides step.)    If we know , and we've assumed , we know .    Realize that .        (a) Suppose is a linear transformation such that Compute .  (b) Suppose is a linear transformation such that Compute .  (c) Let be a vector space and let . Suppose is a linear transformation such that Compute .                        Let denote the vector space of matrices with real entries. Let be the function defined by for any . Determine if is a linear transformation, as follows:  Let and be any two matrices in and let .  (a)       .  Does for all ?  (b)   .     .  Does for all and all ?  (c) Is a linear transformation?                                            Let be defined by . Determine if is a linear transformation, as follows:  (a)   .     .  Does for all ?  (b)   .      .  Does for all ?  (c) Is a linear transformation?                                            Let and be vector spaces and let and .  (a) Suppose is a linear transformation.  Find and write your answer in terms of and .  (b) Suppose is a linear transformation such that and .  Find in terms of and .                   Let be a linear transformation that sends the vector into and maps into . Use properties of a linear transformation to calculate the following.  (a)   (b)   (c)                         Let , , and .  Let be a linear transformation that sends to and to .  If maps to the vector , find .              Let Let be the linear transformation satisfying Find the image of an arbitrary vector              If is a linear transformation such that  find the value of .              Let be the linear transformation such that   Compute .       Compute .       Compute .       Compute , where , , and are arbitrary real numbers.             If is a linear transformation such that and , find the value of .             "
},
{
  "id": "def-lin-trans",
  "level": "2",
  "url": "sec-lin-tran-intro.html#def-lin-trans",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  Let and be vector spaces. A function is called a linear transformation if:   For all , .    For all and scalars , .   We often use the term linear operator to refer to a linear transformation from a vector space to itself.   "
},
{
  "id": "thm-lt-props",
  "level": "2",
  "url": "sec-lin-tran-intro.html#thm-lt-props",
  "type": "Theorem",
  "number": "2.1.2",
  "title": "",
  "body": "  Let be a linear transformation. Then    , and    For any scalars and vectors , .       Strategy  For the first part, remember that old trick we've used a couple of times before: . What happens if you apply to both sides of this equation?  For the second part, note that the addition property of a linear transformation looks an awful lot like a distributive property, and we can distribute over a sum of three or more vectors using the associative property. You'll want to deal with the addition first, and then the scalar multiplication.       Since , we have . Adding to both sides of the above gives us .    The addition property of a linear transformation can be extended to sums of three or more vectors using associativity. Therefore, we have , where the second line follows from the scalar multiplication property.      "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-lin-tran-intro.html#remark-5",
  "type": "Remark",
  "number": "2.1.3",
  "title": "",
  "body": " Technically, we skipped over some details in the above proof: how exactly, is associativity being applied? It turns out there's actually a proof by induction lurking in the background!  By definition, we know that . For three vectors, .  For an abitrary number of vectors , we can assume that distribution over addition works for vectors, and then use associativity to write . The right-hand side is technically a sum of two vectors, so we can apply the definition of a linear transformation directly, and then apply our induction hypothesis to .  "
},
{
  "id": "ex-matrix-trans",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-matrix-trans",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "  Let and let . For any matrix , the map defined by is a linear transformation. (This follows immediately from properties of matrix multiplication.)  Let denote the standard basis of . (See .) Recall (or convince yourself, with a couple of examples) that is equal to the th column of . Thus, if we know the value of a linear transformation on each basis vector, we can immediately determine the matrix such that : . This is true because and agree on the standard basis: for each , . Moreover, if two linear transformations agree on a basis, they must be equal. Given any , we can write uniquely as a linear combination If for each , then by we have .   "
},
{
  "id": "p-748",
  "level": "2",
  "url": "sec-lin-tran-intro.html#p-748",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero transformation identity transformation evaluation map "
},
{
  "id": "ex-mc-linear-transf",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-mc-linear-transf",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "",
  "body": " Which of the following are linear transformations?     The function given by .    Since , this can't be a linear transformation.      The function given by .    This looks unusual, but it's linear! You can check that , and .      The function given by .    Although this function preserves the zero vector, it doesn't preserve addition or scalar multiplication. For example, , but .      The function given by .    Multiplication by might feel non-linear, but remember that is not a variable as far as the transformation is concerned! It's more of a placeholder. Try checking the definition directly.      The function given by .    Remember that in general!      The function given by , where , with the vector space structure defined in .    An exponential function that's linear? Seems impossible, but remember that addition  in is really multiplication, so , and similarly, .     Usually, you can expect a linear transformation to involve homogeneous linear expressions. Things like products, powers, and added constants are usually clues that something is nonlinear.  "
},
{
  "id": "thm-agree-span",
  "level": "2",
  "url": "sec-lin-tran-intro.html#thm-agree-span",
  "type": "Theorem",
  "number": "2.1.6",
  "title": "",
  "body": "  Let and be two linear transformations. If and for each , then .   "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-lin-tran-intro.html#remark-6",
  "type": "Remark",
  "number": "2.1.7",
  "title": "",
  "body": " If for some reason we already know that our transformation is linear, we might still be concerned about the fact that if a spanning set is not independent, there will be more than one way to express a vector as linear combination of vectors in that set. If we define by giving its values on a spanning set, will it be well-defined? (That is, could we get two different values for by expressing in terms of the spanning set in two different ways?) Suppose that we have scalars such that We then have .  Of course, we can avoid all of this unpleasantness by using a basis to define a transformation. Given a basis for a vector space , we can define a transformation by setting for some choice of vectors and defining . Because each vector can be written uniquely in terms of a basis, we know that our transformation is well-defined.  "
},
{
  "id": "thm-define-using-basis",
  "level": "2",
  "url": "sec-lin-tran-intro.html#thm-define-using-basis",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "",
  "body": "  Let be vector spaces. Let be a basis of , and let be any vectors in . (These vectors need not be distinct.) Then there exists a unique linear transformation such that for each ; indeed, we can define as follows: given , write . Then .   "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec-lin-tran-intro.html#example-11",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": "  Suppose is a linear transformation. If and , find .    Since we know the value of on the standard basis, we can use properties of linear transformations to immediately obtain the answer: .   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec-lin-tran-intro.html#example-12",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": "  Suppose is a linear transformation. Given that and , find .    At first, this example looks the same as the one above, and to some extent, it is. The difference is that this time, we're given the values of on a basis that is not the standard one. This means we first have to do some work to determine how to write the given vector in terms of the given basis.  Suppose we have for scalars . This is equivalent to the matrix equation Solving (perhaps using the code cell below), we get .   Therefore, .   "
},
{
  "id": "ex-lt-poly",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-lt-poly",
  "type": "Exercise",
  "number": "2.1.11",
  "title": "",
  "body": " Suppose is defined by Find .   We need to find scalars such that . We could set up a system and solve, but this time it's easy enough to just work our way through. We must have , to get the correct coefficient for . This gives . Now, we have to have , so . Putting this in, we get . Simiplifying this leaves us with . Finally, we find: .  "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-lin-tran-intro.html#example-13",
  "type": "Example",
  "number": "2.1.12",
  "title": "",
  "body": "  Find a linear transformation such that . Then, determine the value of .    Since forms a basis of (the vectors are not parallel and there are two of them), it suffices to determine how to write a general vector in terms of this basis. Suppose for a general element . This is equivalent to the matrix equation , which we can solve as :   This gives us the result Thus, .  We conclude that .   "
},
{
  "id": "ex-parsons-lintrans",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-parsons-lintrans",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Let be a linear transformation. Rearrange the blocks below to create a proof of the following statement:  For any vectors , if is linearly independent in , then is linearly independent in .    Suppose that is linearly independent.    We want to show that is linearly independent, so suppose that we have for some scalars .    We apply to both sides of the equation above, giving us: .    Now we make use of both parts of Theorem to get .    By hypothesis, the vectors are linearly independent, so we must have .    Since the only solution to is , the set is linearly independent.    This is mostly a matter of using Theorem , but it's important to get the logic correct. We have a conditional statement of the form , where both ( the set is independent ) and ( the set is independent ) are themselves conditional statements.  The overall structure therefore looks like . A direct proof should be structured as follows:   Assume the main hypothesis: .    Assume the sub -hypothesis .    Figure out how to show that . (This is the apply to both sides step.)    If we know , and we've assumed , we know .    Realize that .     "
},
{
  "id": "ex-ww-lt1",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-ww-lt1",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": "  (a) Suppose is a linear transformation such that Compute .  (b) Suppose is a linear transformation such that Compute .  (c) Let be a vector space and let . Suppose is a linear transformation such that Compute .                     "
},
{
  "id": "ex-ww-lt2",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-ww-lt2",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": "  Let denote the vector space of matrices with real entries. Let be the function defined by for any . Determine if is a linear transformation, as follows:  Let and be any two matrices in and let .  (a)       .  Does for all ?  (b)   .     .  Does for all and all ?  (c) Is a linear transformation?                                         "
},
{
  "id": "ex-ww-lt3",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-ww-lt3",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": "  Let be defined by . Determine if is a linear transformation, as follows:  (a)   .     .  Does for all ?  (b)   .      .  Does for all ?  (c) Is a linear transformation?                                         "
},
{
  "id": "ex-ww-lt4",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-ww-lt4",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "",
  "body": "  Let and be vector spaces and let and .  (a) Suppose is a linear transformation.  Find and write your answer in terms of and .  (b) Suppose is a linear transformation such that and .  Find in terms of and .                "
},
{
  "id": "ex-ww-lt5",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-ww-lt5",
  "type": "Exercise",
  "number": "2.1.6",
  "title": "",
  "body": "  Let be a linear transformation that sends the vector into and maps into . Use properties of a linear transformation to calculate the following.  (a)   (b)   (c)                      "
},
{
  "id": "ex-ww-lt6",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-ww-lt6",
  "type": "Exercise",
  "number": "2.1.7",
  "title": "",
  "body": "  Let , , and .  Let be a linear transformation that sends to and to .  If maps to the vector , find .           "
},
{
  "id": "ex-ww-lt7",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-ww-lt7",
  "type": "Exercise",
  "number": "2.1.8",
  "title": "",
  "body": "  Let Let be the linear transformation satisfying Find the image of an arbitrary vector           "
},
{
  "id": "ex-ww-lt8",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-ww-lt8",
  "type": "Exercise",
  "number": "2.1.9",
  "title": "",
  "body": "  If is a linear transformation such that  find the value of .           "
},
{
  "id": "ex-ww-lt9",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-ww-lt9",
  "type": "Exercise",
  "number": "2.1.10",
  "title": "",
  "body": "  Let be the linear transformation such that   Compute .       Compute .       Compute .       Compute , where , , and are arbitrary real numbers.          "
},
{
  "id": "ex-ww-lt10",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-ww-lt10",
  "type": "Exercise",
  "number": "2.1.11",
  "title": "",
  "body": "  If is a linear transformation such that and , find the value of .           "
},
{
  "id": "sec-kernel-image",
  "level": "1",
  "url": "sec-kernel-image.html",
  "type": "Section",
  "number": "2.2",
  "title": "Kernel and Image",
  "body": " Kernel and Image  Given any linear transformation we can associate two important sets: the kernel of (also known as the nullspace ), and the image of (also known as the range ).    Let be a linear transformation. The kernel of , denoted , is defined by . The image of , denoted , is defined by .      Caution: the kernel is the set of vectors that  sends to zero. Saying that does not mean that ; it means that . Although it's true that for any linear transformation, the kernel can contain vectors other than the zero vector.  In fact, as we'll see in below, the case where the kernel contains only the zero vector is an important special case.    How to use these definitions  As you read through the theorems and examples in this section, think carefully about how the definitions of kernel and image are used.  For a linear transformation :   If you assume : you are asserting that . Similarly, to prove , you must show that .    If your hypothesis is that for some subspace , you can assume that for any .    If you need to prove that for some subspace , then you need to prove that if , then , and if , then .    If you assume : you are asserting that there exists some , such that , and to prove that , you must find some such that .    If your hypothesis is that for some subspace , then you are assuming that for every , there is some such that .    If you need to prove that for some subspace , then you need to show that for every , there is some with , and that for every .        For any linear transformation ,    is a subspace of .     is a subspace of .       Strategy  Both parts of the proof rely on the . So for each set, we first need to explain why it contains the zero vector. Next comes closure under addition: assume you have to elements of the set, then use the definition to explain what that means.  Now you have to show that the sum of those elements belongs to the set as well. It's fairly safe to assume that this is going to involve the addition property of a linear transformation!  Scalar multiplication is handled similarly, but using the scalar multiplication property of .       To show that is a subspace, first note that , since for any linear transformation . Now, suppose that ; this means that and , and therefore, . Similarly, for any scalar , if then , so . By the subspace test, is a subspace.    Again, since , we see that . (That is, , so .) Now suppose that . This means that there exist such that and . It follows that , so , since it's the image of . Similarly, if is any scalar and , then , so .        Null space and column space   A familiar setting that you may already have encountered in a previous linear algebra course (or ) is that of a matrix transformation. Let be an matrix. Then we can define by , where elements of are considered as column vectors. We then have and , where denotes the column space of . Recall further that if we write in terms of its columns as and a vector as , then . Thus, any element of is a linear combination of its columns, explaining the name column space .    Determining and for a given matrix is, unsurprisingly, a matter of reducing to row-echelon form. Finding comes down to describing the set of all solutions to the homogeneous system . Finding relies on the following theorem.    Let be an matrix with columns . If the reduced row-echelon form of has leading ones in columns , then is a basis for .    For a proof of this result, see Section 5.4 of Linear Algebra with Applications , by Keith Nicholson. The proof is fairly long and technical, so we omit it here.    Consider the linear transformation defined by the matrix . Let's determine the RREF of :   We see that there are leading ones in the first and second column. Therefore, . Indeed, note that and , so that indeed, the third and fourth columns are in the span of the first and second.  Furthermore, we can determine the nullspace: if where , then we must have , so . It follows that a basis for is .     The SymPy library for Python has built-in functions for computing nullspace and column space. But it's probably worth your while to know how to determine these from the RREF of a matrix, without additional help from the computer. That said, let's see how the computer's output compares to what we found in .    Note that the output from the computer simply states the basis for each space. Of course, for computational purposes, this is typically good enough.   An important result that comes out while trying to show that the pivot columns of a matrix (the ones that end up with leading ones in the RREF ) are a basis for the column space is that the column rank (defined as the dimension of ) and the row rank (the dimension of the space spanned by the rows of ) are equal. One can therefore speak unambiguously about the rank of a matrix , and it is just as it's defined in a first course in linear algebra: the number of leading ones in the RREF of .  For a general linear transformation, we can't necessarily speak in terms of rows and columns, but if is linear, and either or is finite-dimensional, then we can define the rank of as follows.    Let be a linear transformation. Then the rank of is defined by , and the nullity of is defined by , provided that the kernel and image of are finite-dimensional.    Note that if is finite-dimensional, then so is , since it's a subspace of . On the other hand, if is finite-dimensional, then we can find a basis of , and the set will span , so again the image is finite-dimensional, so the rank of is finite. It is possible for either the rank or the nullity of a transformation to be infinite.  Knowing that the kernel and image of an operator are subspaces gives us an easy way to define subspaces. From the textbook, we have the following nice example.   Let be defined by . Show that:    is a linear map.   You can use the fact that the transpose is linear: and .   We have since . Using proerties of the transpose and matrix algebra, we have and .    is equal to the set of all symmetric matrices.   A matrix is symmetric if , or in other words, .   It's clear that if , then . On the other hand, if , then , so . Thus, the kernel consists of all symmetric matrices.    is equal to the set of all skew-symmetric matrices.   A matrix is skew-symmetric if .   If , then , so certainly every matrix in is skew-symmetric. On the other hand, if is skew-symmetric, then , since .   Recall that a function is injective (or one-to-one) if for any , implies that . (In other words, no two different inputs give the same output.) We say that is surjective (or onto) if . (That is, if the range of is the entire codomain .) These properties are important considerations for the discussion of inverse functions.  For a linear transformation , the property of surjectivity is tied to by definition: is onto if . What might not be immediately obvious is that the kernel tells us if a linear transformation is injective.    Let be a linear transformation. Then is injective if and only if .    Strategy  We have an if and only if statement, so we have to make sure to consider both directions. The basic idea is this: we know that is always in the kernel, so if the kernel contains any other vector , we would have , and would not be injective.  There is one trick to keep in mind: the statement is equivalent to , and since is linear, .    Suppose is injective, and let . Then . On the other hand, we know that . Since is injective, we must have . Conversely, suppose that and that for some . Then , so . Therefore, we must have , so , and it follows that is injective.     Rearrange the blocks below to produce a valid proof of the following statement:  If is injective and is linearly independent in , then is linearly independent in .    Suppose is injective and is independent.    Assume that , for some scalars .    Since is linear, .    Therefore, .    Since is injective, .    Therefore, .    Since is independent, we must have .    It follows that is linearly independent.    Remember that your goal is to show that is linearly independent, so after you assume your hypotheses, you should begin by setting a linear combination of these vectors equal to zero.    Rearrange the blocks below to produce a valid proof of the following statement:  If is surjective and , then .    Suppose is surjective, and is independent.    Let be any vector.    Since is a surjection, there is some such that .    Since and , there are scalars such that .    Since is linear, , so .    Therefore, , and since , we have .    You need to show that any can be written as a linear combination of the . Because is surjective, you know that for some .    For the case of a matrix transformation , notice that is simply the set of all solutions to , while is the set of all for which  has a solution.  Recall from the discussion preceding that . It follows that is surjective if and only if . On the other hand, is injective if and only if , because we know that the system has a unique solution if and only if each column of contains a leading one.  This has some interesting consequences. If (that is, if is square), then each increase in produces a corresponding decrease in , since both correspond to the loss of a leading one. Moreover, if , then is both injective and surjective. Recall that a function is invertible if and only if it is both injective and surjective. It should come as no surprise that invertibility of (as a function) is equivalent to invertibility of (as a matrix).  Also, note that if , then , so could be surjective, but can't possibly be injective. On the other hand, if , then , so could be injective, but can't possibly be surjective. These results generalize to linear transformations between any finite-dimensional vector spaces. The first step towards this is the following theorem, which is sometimes known as the Fundamental Theorem of Linear Transformations.    Dimension Theorem   Let be any linear transformation such that and are finite-dimensional. Then is finite-dimensional, and .    The trick with this proof is that we aren't assuming is finite-dimensional, so we can't start with a basis of . But we do know that is finite-dimensional, so we start with a basis of . Of course, every vector in is the image of some vector in , so we can write , where , for .  Since is a basis, it is linearly independent. The results of Exercise tell us that the set must therefore be independent.  We now introduce a basis of , which we also know to be finite-dimensional. If we can show that the set is a basis for , we'd be done, since the number of vectors in this basis is . We must therefore show that this set is independent, and that it spans .  To see that it's independent, suppose that . Applying to this equation, and noting that for each , by definition of the , we get . We assumed that the vectors were independent, so all the must be zero. But then we get , and since the are independent, all the must be zero.  To see that these vectors span, choose any . Since , there exist scalars such that . We'd like to be able to conclude from this that , but this would be false, unless was known to be injective (which it isn't). Failure to be injective involves the kernel -- how do we bring that into the picture?  The trick is to realize that the reason we might have is that we're off by something in the kernel. Indeed, can be re-written as , so . But we have a basis for , so we can write for some scalars , and this can be rearanged to give , which completes the proof.    This is sometimes known as the Rank-Nullity Theorem , since it can be stated in the form . We will see that this result is frequently useful for providing simple arguments that establish otherwise difficult results. A basic situation where the theorem is useful is as follows: we are given , where the dimensions of and are known. Since is a subspace of , we know from Theorem that is onto if and only if . In many cases it is easier to compute than it is , and the Dimension Theorem lets us determine if we know and .   Select all statements below that are true :     If , then .    Remember that implies ; this does not necessarily mean .      If is injective, then it is surjective.    By the dimension theorem, the dimension of cannot be greater than 4, so can never be surjective.      If is injective, then it is surjective.    Correct! If is injective, then , so by the dimension theorem, . Since as well, .      It is possible to have an injective linear transformation .    The maximum dimension of is 3, so the minimum dimension of is 1.      If is surjective, then .    Correct! If is surjective, then , so .     A useful consequence of this result is that if we know is finite-dimensional, we can order any basis such that the first vectors in the list are a basis of , and the images of the remaining vectors produce a basis of .  Another consequence of the dimension theorem is that we must have . Of course, we must also have , since is a subspace of . In the case of a matrix transformation , this means that the rank of is at most the minimum of and . This once again has consequences for the existence and uniqueness of solutions for linear systems with the coefficient matrix .  We end with an exercise that is both challenging and useful. Do your best to come up with a proof before looking at the solution.   Let and be finite-dimensional vector spaces. Prove the following:    if and only if there exists an injection .   You're dealing with an if and only if statement, so be sure to prove both directions. One direction follows immediately from the dimension theorem.  What makes the other direction harder is that you need to prove an existence statement. To show that a transformation with the required property exists, you're going to need to construct it! To do so, try defining your transformation in terms of a basis.   Suppose is injective. Then , so , since is a subspace of .  Conversely, suppose . Choose a basis of , and a basis of , where . By Theorem , there exists a linear transformation with for . (The main point here is that we run out of basis vectors for before we run out of basis vectors for .) This map is injective: if , write . Then . Since is a subset of a basis, it's independent. Therefore, the scalars must all be zero, and therefore .    if and only if there exists a surjection .   The hint from the previous part also applies here!   Suppose is surjective. Then , so . Conversely, suppose . Again, choose a basis of , and a basis of , where this time, . We can define a linear transformation as follows: It's easy to check that this map is a surjection: given , we can write it in terms of our basis as . Using these same scalars, we can define such that .  Note that it's not important how we define when . The point is that this time, we run out of basis vectors for before we run out of basis vectors for . Once each vector in the basis of is in the image of , we're guaranteed that is surjective, and we can define the value of on any remaining basis vectors however we want.      Let .  Find a basis for the image of (or, equivalently, for the linear transformation ).              Let Find dimensions of the kernel and image of .                   Let Find a vector in that is not in the image of the transformation .              Suppose is a matrix and    What is ?    Find the matrix for the linear transformation (relative to the standard basis in the domain and codomain). That is, find the matrix such that .    Find a formula for the linear transformation .    Find bases (i.e., maximal independent sets) for the kernel and image of .    The linear transformation is:    injective    surjective    bijective    none of these                                      Suppose is the function defined by    What is ? Enter your answer as a coordinate vector of the form .    If is a linear transformation, find the matrix such that .    Find bases (i.e., minimal spanning sets) for the kernel and image of .    The linear transformation is:    injective    surjective    bijective    none of these                                 Let be the linear transformation defined by .    Find the matrix of the linear transformation .    The linear transformation is    injective    surjective    bijective    none of these      If is bijective, find the matrix of its inverse.                          Let be the linear transformation determined by    Find .    Find the matrix of the linear transformation .    The linear transformation is    injective    surjective    bijective    none of these                            Let be the linear transformation determined by    Find    Find the matrix of the linear transformation .    The linear transformation is    injective    surjective    bijective    none of these                            A linear transformation whose matrix is is onto if and only if .              Let be the linear operator defined by   (a) Find the dimension of the range of :  (b) Find the dimension of the kernel of :  (c) Let be the subspace of spanned by and . Find the dimension of :                  Solution:  (a) Since , , spans , we get that is spanned by , , . So   and hence the dimension of the range is 2.  (b) The rank-nullity theorem implies that the dimension of the kernel is .  (c) Notice that  and it is easy to check that these two vectors are linearly independent. Therefore, the dimension of is 2.         Let be the vector space of all polynomials of degree or less in the variable . Let be the linear transformation that takes a polynomial to its second derivative. That is, for any polynomial of degree or less.    Find a basis for the kernel of .    Find a basis for the image of .                    "
},
{
  "id": "p-878",
  "level": "2",
  "url": "sec-kernel-image.html#p-878",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "kernel nullspace image range "
},
{
  "id": "def-kernel-image",
  "level": "2",
  "url": "sec-kernel-image.html#def-kernel-image",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Let be a linear transformation. The kernel of , denoted , is defined by . The image of , denoted , is defined by .   "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-kernel-image.html#remark-7",
  "type": "Remark",
  "number": "2.2.2",
  "title": "",
  "body": "  Caution: the kernel is the set of vectors that  sends to zero. Saying that does not mean that ; it means that . Although it's true that for any linear transformation, the kernel can contain vectors other than the zero vector.  In fact, as we'll see in below, the case where the kernel contains only the zero vector is an important special case.  "
},
{
  "id": "rem-using-ker-im",
  "level": "2",
  "url": "sec-kernel-image.html#rem-using-ker-im",
  "type": "Remark",
  "number": "2.2.3",
  "title": "How to use these definitions.",
  "body": " How to use these definitions  As you read through the theorems and examples in this section, think carefully about how the definitions of kernel and image are used.  For a linear transformation :   If you assume : you are asserting that . Similarly, to prove , you must show that .    If your hypothesis is that for some subspace , you can assume that for any .    If you need to prove that for some subspace , then you need to prove that if , then , and if , then .    If you assume : you are asserting that there exists some , such that , and to prove that , you must find some such that .    If your hypothesis is that for some subspace , then you are assuming that for every , there is some such that .    If you need to prove that for some subspace , then you need to show that for every , there is some with , and that for every .     "
},
{
  "id": "thm-ker-img-subspace",
  "level": "2",
  "url": "sec-kernel-image.html#thm-ker-img-subspace",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "",
  "body": "  For any linear transformation ,    is a subspace of .     is a subspace of .       Strategy  Both parts of the proof rely on the . So for each set, we first need to explain why it contains the zero vector. Next comes closure under addition: assume you have to elements of the set, then use the definition to explain what that means.  Now you have to show that the sum of those elements belongs to the set as well. It's fairly safe to assume that this is going to involve the addition property of a linear transformation!  Scalar multiplication is handled similarly, but using the scalar multiplication property of .       To show that is a subspace, first note that , since for any linear transformation . Now, suppose that ; this means that and , and therefore, . Similarly, for any scalar , if then , so . By the subspace test, is a subspace.    Again, since , we see that . (That is, , so .) Now suppose that . This means that there exist such that and . It follows that , so , since it's the image of . Similarly, if is any scalar and , then , so .      "
},
{
  "id": "example-14",
  "level": "2",
  "url": "sec-kernel-image.html#example-14",
  "type": "Example",
  "number": "2.2.5",
  "title": "Null space and column space.",
  "body": " Null space and column space   A familiar setting that you may already have encountered in a previous linear algebra course (or ) is that of a matrix transformation. Let be an matrix. Then we can define by , where elements of are considered as column vectors. We then have and , where denotes the column space of . Recall further that if we write in terms of its columns as and a vector as , then . Thus, any element of is a linear combination of its columns, explaining the name column space .   "
},
{
  "id": "thm-colspace",
  "level": "2",
  "url": "sec-kernel-image.html#thm-colspace",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "",
  "body": "  Let be an matrix with columns . If the reduced row-echelon form of has leading ones in columns , then is a basis for .   "
},
{
  "id": "ex-col-null",
  "level": "2",
  "url": "sec-kernel-image.html#ex-col-null",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "  Consider the linear transformation defined by the matrix . Let's determine the RREF of :   We see that there are leading ones in the first and second column. Therefore, . Indeed, note that and , so that indeed, the third and fourth columns are in the span of the first and second.  Furthermore, we can determine the nullspace: if where , then we must have , so . It follows that a basis for is .   "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-kernel-image.html#remark-9",
  "type": "Remark",
  "number": "2.2.8",
  "title": "",
  "body": " The SymPy library for Python has built-in functions for computing nullspace and column space. But it's probably worth your while to know how to determine these from the RREF of a matrix, without additional help from the computer. That said, let's see how the computer's output compares to what we found in .    Note that the output from the computer simply states the basis for each space. Of course, for computational purposes, this is typically good enough.  "
},
{
  "id": "p-908",
  "level": "2",
  "url": "sec-kernel-image.html#p-908",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rank "
},
{
  "id": "def-rank-transformation",
  "level": "2",
  "url": "sec-kernel-image.html#def-rank-transformation",
  "type": "Definition",
  "number": "2.2.9",
  "title": "",
  "body": "  Let be a linear transformation. Then the rank of is defined by , and the nullity of is defined by , provided that the kernel and image of are finite-dimensional.   "
},
{
  "id": "ex-ker-im-transpose",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ker-im-transpose",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "",
  "body": " Let be defined by . Show that:    is a linear map.   You can use the fact that the transpose is linear: and .   We have since . Using proerties of the transpose and matrix algebra, we have and .    is equal to the set of all symmetric matrices.   A matrix is symmetric if , or in other words, .   It's clear that if , then . On the other hand, if , then , so . Thus, the kernel consists of all symmetric matrices.    is equal to the set of all skew-symmetric matrices.   A matrix is skew-symmetric if .   If , then , so certainly every matrix in is skew-symmetric. On the other hand, if is skew-symmetric, then , since .  "
},
{
  "id": "p-923",
  "level": "2",
  "url": "sec-kernel-image.html#p-923",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "injective surjective "
},
{
  "id": "thm-injective-kernel",
  "level": "2",
  "url": "sec-kernel-image.html#thm-injective-kernel",
  "type": "Theorem",
  "number": "2.2.11",
  "title": "",
  "body": "  Let be a linear transformation. Then is injective if and only if .    Strategy  We have an if and only if statement, so we have to make sure to consider both directions. The basic idea is this: we know that is always in the kernel, so if the kernel contains any other vector , we would have , and would not be injective.  There is one trick to keep in mind: the statement is equivalent to , and since is linear, .    Suppose is injective, and let . Then . On the other hand, we know that . Since is injective, we must have . Conversely, suppose that and that for some . Then , so . Therefore, we must have , so , and it follows that is injective.   "
},
{
  "id": "ex-parsons-kernel",
  "level": "2",
  "url": "sec-kernel-image.html#ex-parsons-kernel",
  "type": "Exercise",
  "number": "2.2.12",
  "title": "",
  "body": " Rearrange the blocks below to produce a valid proof of the following statement:  If is injective and is linearly independent in , then is linearly independent in .    Suppose is injective and is independent.    Assume that , for some scalars .    Since is linear, .    Therefore, .    Since is injective, .    Therefore, .    Since is independent, we must have .    It follows that is linearly independent.    Remember that your goal is to show that is linearly independent, so after you assume your hypotheses, you should begin by setting a linear combination of these vectors equal to zero.  "
},
{
  "id": "ex-parsons-image",
  "level": "2",
  "url": "sec-kernel-image.html#ex-parsons-image",
  "type": "Exercise",
  "number": "2.2.13",
  "title": "",
  "body": " Rearrange the blocks below to produce a valid proof of the following statement:  If is surjective and , then .    Suppose is surjective, and is independent.    Let be any vector.    Since is a surjection, there is some such that .    Since and , there are scalars such that .    Since is linear, , so .    Therefore, , and since , we have .    You need to show that any can be written as a linear combination of the . Because is surjective, you know that for some .  "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-kernel-image.html#remark-10",
  "type": "Remark",
  "number": "2.2.14",
  "title": "",
  "body": " For the case of a matrix transformation , notice that is simply the set of all solutions to , while is the set of all for which  has a solution.  Recall from the discussion preceding that . It follows that is surjective if and only if . On the other hand, is injective if and only if , because we know that the system has a unique solution if and only if each column of contains a leading one.  This has some interesting consequences. If (that is, if is square), then each increase in produces a corresponding decrease in , since both correspond to the loss of a leading one. Moreover, if , then is both injective and surjective. Recall that a function is invertible if and only if it is both injective and surjective. It should come as no surprise that invertibility of (as a function) is equivalent to invertibility of (as a matrix).  Also, note that if , then , so could be surjective, but can't possibly be injective. On the other hand, if , then , so could be injective, but can't possibly be surjective. These results generalize to linear transformations between any finite-dimensional vector spaces. The first step towards this is the following theorem, which is sometimes known as the Fundamental Theorem of Linear Transformations.  "
},
{
  "id": "thm-dimension-lintrans",
  "level": "2",
  "url": "sec-kernel-image.html#thm-dimension-lintrans",
  "type": "Theorem",
  "number": "2.2.15",
  "title": "Dimension Theorem.",
  "body": " Dimension Theorem   Let be any linear transformation such that and are finite-dimensional. Then is finite-dimensional, and .    The trick with this proof is that we aren't assuming is finite-dimensional, so we can't start with a basis of . But we do know that is finite-dimensional, so we start with a basis of . Of course, every vector in is the image of some vector in , so we can write , where , for .  Since is a basis, it is linearly independent. The results of Exercise tell us that the set must therefore be independent.  We now introduce a basis of , which we also know to be finite-dimensional. If we can show that the set is a basis for , we'd be done, since the number of vectors in this basis is . We must therefore show that this set is independent, and that it spans .  To see that it's independent, suppose that . Applying to this equation, and noting that for each , by definition of the , we get . We assumed that the vectors were independent, so all the must be zero. But then we get , and since the are independent, all the must be zero.  To see that these vectors span, choose any . Since , there exist scalars such that . We'd like to be able to conclude from this that , but this would be false, unless was known to be injective (which it isn't). Failure to be injective involves the kernel -- how do we bring that into the picture?  The trick is to realize that the reason we might have is that we're off by something in the kernel. Indeed, can be re-written as , so . But we have a basis for , so we can write for some scalars , and this can be rearanged to give , which completes the proof.   "
},
{
  "id": "ex-mc-kernel",
  "level": "2",
  "url": "sec-kernel-image.html#ex-mc-kernel",
  "type": "Exercise",
  "number": "2.2.16",
  "title": "",
  "body": " Select all statements below that are true :     If , then .    Remember that implies ; this does not necessarily mean .      If is injective, then it is surjective.    By the dimension theorem, the dimension of cannot be greater than 4, so can never be surjective.      If is injective, then it is surjective.    Correct! If is injective, then , so by the dimension theorem, . Since as well, .      It is possible to have an injective linear transformation .    The maximum dimension of is 3, so the minimum dimension of is 1.      If is surjective, then .    Correct! If is surjective, then , so .    "
},
{
  "id": "ex-dimension-injection-surjection",
  "level": "2",
  "url": "sec-kernel-image.html#ex-dimension-injection-surjection",
  "type": "Exercise",
  "number": "2.2.17",
  "title": "",
  "body": " Let and be finite-dimensional vector spaces. Prove the following:    if and only if there exists an injection .   You're dealing with an if and only if statement, so be sure to prove both directions. One direction follows immediately from the dimension theorem.  What makes the other direction harder is that you need to prove an existence statement. To show that a transformation with the required property exists, you're going to need to construct it! To do so, try defining your transformation in terms of a basis.   Suppose is injective. Then , so , since is a subspace of .  Conversely, suppose . Choose a basis of , and a basis of , where . By Theorem , there exists a linear transformation with for . (The main point here is that we run out of basis vectors for before we run out of basis vectors for .) This map is injective: if , write . Then . Since is a subset of a basis, it's independent. Therefore, the scalars must all be zero, and therefore .    if and only if there exists a surjection .   The hint from the previous part also applies here!   Suppose is surjective. Then , so . Conversely, suppose . Again, choose a basis of , and a basis of , where this time, . We can define a linear transformation as follows: It's easy to check that this map is a surjection: given , we can write it in terms of our basis as . Using these same scalars, we can define such that .  Note that it's not important how we define when . The point is that this time, we run out of basis vectors for before we run out of basis vectors for . Once each vector in the basis of is in the image of , we're guaranteed that is surjective, and we can define the value of on any remaining basis vectors however we want.  "
},
{
  "id": "ex-ww-ki10",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki10",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "  Let .  Find a basis for the image of (or, equivalently, for the linear transformation ).           "
},
{
  "id": "ex-ww-ki11",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki11",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "  Let Find dimensions of the kernel and image of .                "
},
{
  "id": "ex-ww-ki4",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki4",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "  Let Find a vector in that is not in the image of the transformation .           "
},
{
  "id": "ex-ww-ki2",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki2",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": "  Suppose is a matrix and    What is ?    Find the matrix for the linear transformation (relative to the standard basis in the domain and codomain). That is, find the matrix such that .    Find a formula for the linear transformation .    Find bases (i.e., maximal independent sets) for the kernel and image of .    The linear transformation is:    injective    surjective    bijective    none of these                                   "
},
{
  "id": "ex-ww-ki3",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki3",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": "  Suppose is the function defined by    What is ? Enter your answer as a coordinate vector of the form .    If is a linear transformation, find the matrix such that .    Find bases (i.e., minimal spanning sets) for the kernel and image of .    The linear transformation is:    injective    surjective    bijective    none of these                              "
},
{
  "id": "ex-ww-ki5",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki5",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": "  Let be the linear transformation defined by .    Find the matrix of the linear transformation .    The linear transformation is    injective    surjective    bijective    none of these      If is bijective, find the matrix of its inverse.                       "
},
{
  "id": "ex-ww-ki6",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki6",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": "  Let be the linear transformation determined by    Find .    Find the matrix of the linear transformation .    The linear transformation is    injective    surjective    bijective    none of these                         "
},
{
  "id": "ex-ww-ki7",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki7",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": "  Let be the linear transformation determined by    Find    Find the matrix of the linear transformation .    The linear transformation is    injective    surjective    bijective    none of these                         "
},
{
  "id": "ex-ww-ki8",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki8",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "",
  "body": "  A linear transformation whose matrix is is onto if and only if .           "
},
{
  "id": "ex-ww-ki9",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki9",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "",
  "body": "  Let be the linear operator defined by   (a) Find the dimension of the range of :  (b) Find the dimension of the kernel of :  (c) Let be the subspace of spanned by and . Find the dimension of :                  Solution:  (a) Since , , spans , we get that is spanned by , , . So   and hence the dimension of the range is 2.  (b) The rank-nullity theorem implies that the dimension of the kernel is .  (c) Notice that  and it is easy to check that these two vectors are linearly independent. Therefore, the dimension of is 2.      "
},
{
  "id": "ex-ww-ki12",
  "level": "2",
  "url": "sec-kernel-image.html#ex-ww-ki12",
  "type": "Exercise",
  "number": "2.2.11",
  "title": "",
  "body": "  Let be the vector space of all polynomials of degree or less in the variable . Let be the linear transformation that takes a polynomial to its second derivative. That is, for any polynomial of degree or less.    Find a basis for the kernel of .    Find a basis for the image of .                  "
},
{
  "id": "sec-isomorphism",
  "level": "1",
  "url": "sec-isomorphism.html",
  "type": "Section",
  "number": "2.3",
  "title": "Isomorphisms, composition, and inverses",
  "body": " Isomorphisms, composition, and inverses   We ended the last section with an important result. Exercise showed that existence of an injective linear map is equivalent to , and that existence of a surjective linear map is equivalent to . It's probably not surprising than that existence of a bijective linear map is equivalent to .  In a certain sense that we will now try to make preceise, vectors spaces of the same dimension are equivalent: they may look very different, but in fact, they contain exactly the same information, presented in different ways.    Isomorphisms    A bijective linear transformation is called an isomorphism . If such a map exists, we say that and are isomorphic , and write .      For any finite-dimensional vector spaces and , if any only if .    Strategy  We again need to prove both directions of an if and only if . If an isomorphism exists, can you see how to use to show the dimensions are equal?  If the dimensions are equal, you need to construct an isomorphism. Since and are finite-dimensional, you can choose a basis for each space. What can you say about the sizes of these bases? How can you use them to define a linear transformation? (You might want to remind yourself what says.)    If is a bijection, then it is both injective and surjective. Since is injective, , by Exercise . By this same exercise, since is surjective, we must have . It follows that .  Suppose now that . Then we can choose bases of , and of . then guarantees the existence of a linear map such that for each . Repeating the arguments of shows that is a bijection.    Buried in the theorem above is the following useful fact: an isomorphism takes any basis of to a basis of . Another remarkable result of the above theorem is that any two vector spaces of the same dimension are isomorphic ! In particular, we have the following theorem.    If , then .     Match each vector space on the left with an isomorphic vector space on the right.                     is a direct consequence of . But it's useful to understand how it works in practice. Note that in the definition below, we use the term ordered basis . This just means that we fix the order in which the vectors in our basis are written.    Let be a finite-dimensional vector space, and let be an ordered basis for . The coefficient isomorphism associated to is the map defined by .    Note that this is a well-defined map since every vector in can be written uniquely in terms of the basis . But also note that the ordering of the vectors in is important: changing the order changes the position of the coefficients in .  The coefficient isomorphism is especially useful when we want to analyze a linear map computationally. Suppose we're given where are finite-dimensional. Let us choose bases of and of . The choice of these two bases determines scalars , such that for each . The resulting matrix defines a matrix transformation such that . The relationship among the four maps used here is best captured by the commutative diagram in .   Defining the matrix of a linear map with respect to choices of basis.      The matrix of a linear transformation is studied in more detail in .    Composition and inverses  Recall that for any function , if is a bijection, then it has an inverse : a function that undoes the action of . That is, if , then , or in other words,  the composition is equal to the identity function on .  The same is true for composition in the other order: is the identity function on . One way of interpreting this is to observe that just as is the inverse of , so is the inverse of ; that is, .  Since linear transformations are a special type of function, the above is true for a linear transformation as well. But if we want to keep everything under the umbrella of linear algebra, there are two things we should check: that the composition of two linear transformations is another linear transformation, and that the inverse of a linear transformation is a linear transformation.   Show that the composition of two linear maps is again a linear map.   Suppose we have linear maps , and let . Then , and for any scalar , .    Given transformations and , show that:               This is simpler than it looks! It's mostly a matter of chasing the definitions: see .    Let be a bijective linear transformation. Show that is a linear transformation.   Since is a bijection, every can be associated with some .   Let . Then there exist with . We then have . For any scalar , we similarly have .    With this connection between linear maps (in general) and matrices, it can be worthwhile to pause and consider invertibility in the context of matrices. Recall that an matrix is invertible if there exists a matrix such that and .  The same definition can be made for linear maps. We've defined what it means for a map to be invertible as a function . In particular, we relied on the fact that any bijection has an inverse.  Let be an matrix, and let be an matrix. Then we have linear maps , and the composition satisfies . Note that the rules given in elementary linear algebra, for the relative sizes of matrices that can be multiplied, are simply a manifestation of the fact that to compose functions, the range of the first must be contained in the domain of the second.    A note on notation. Given linear maps , we typically write the composition as a product  . The reason for this is again to mimic the case of matrices: as seen in , for matrix transformations.    Show that if , then is surjective and is injective. Conclude that if and , then and are both bijections.   This is true even if the functions aren't linear. In fact, you've probably seen the proof in an earlier course!    also tells us why we can only consider invertibility for square matrices: we know that invertible linear maps are only defined between spaces of equal dimension. In analogy with matrices, some texts will define a linear map to be invertible if there exists a linear map such that . By , this implies that and are bijections, and therefore and are invertible, with .  We end this section with a discussion of inverses and composition. If we have isomorphisms and , what can we say about the composition ?   The inverse of the composition is .   The composition of and its inverse should be the identity. Is that the case here? (Remember that order of composition matters!)   We know that the composition of two linear transformations is a linear transformation, and that the composition of two bijections is a bijection. It follows that the composition of two isomorphisms is an isomorphism!  With this observation, one can show that the relation of isomorphism is an equivalence relation. Two finite-dimensional vector spaces belong to the same equivalence class if and only if they have the same dimension. Here, we see again the importance of dimension in linear algebra.   If you got that last exercise incorrect, consider the following: given and , we have . Since is an isomorphism, it has an inverse, which goes from to . This inverse can be expressed in terms of the inverses of and , but we're going backwards, so we have to apply them in the opposite order!       Let be defined by Find the inverse of .                The linear transformation is given by   Find .    The linear transformation is given by   Find .    Using from part a, it is given that:   Find and .   ,  .    Using from part b, it is given that:   Find , , and .   ,  ,                                               "
},
{
  "id": "def-isomorphism",
  "level": "2",
  "url": "sec-isomorphism.html#def-isomorphism",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  A bijective linear transformation is called an isomorphism . If such a map exists, we say that and are isomorphic , and write .   "
},
{
  "id": "thm-iso-dimension",
  "level": "2",
  "url": "sec-isomorphism.html#thm-iso-dimension",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "",
  "body": "  For any finite-dimensional vector spaces and , if any only if .    Strategy  We again need to prove both directions of an if and only if . If an isomorphism exists, can you see how to use to show the dimensions are equal?  If the dimensions are equal, you need to construct an isomorphism. Since and are finite-dimensional, you can choose a basis for each space. What can you say about the sizes of these bases? How can you use them to define a linear transformation? (You might want to remind yourself what says.)    If is a bijection, then it is both injective and surjective. Since is injective, , by Exercise . By this same exercise, since is surjective, we must have . It follows that .  Suppose now that . Then we can choose bases of , and of . then guarantees the existence of a linear map such that for each . Repeating the arguments of shows that is a bijection.   "
},
{
  "id": "thm-iso-rn",
  "level": "2",
  "url": "sec-isomorphism.html#thm-iso-rn",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": "  If , then .   "
},
{
  "id": "ex-match-iso",
  "level": "2",
  "url": "sec-isomorphism.html#ex-match-iso",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": " Match each vector space on the left with an isomorphic vector space on the right.                   "
},
{
  "id": "p-1098",
  "level": "2",
  "url": "sec-isomorphism.html#p-1098",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordered basis "
},
{
  "id": "def-coefficient-iso",
  "level": "2",
  "url": "sec-isomorphism.html#def-coefficient-iso",
  "type": "Definition",
  "number": "2.3.5",
  "title": "",
  "body": "  Let be a finite-dimensional vector space, and let be an ordered basis for . The coefficient isomorphism associated to is the map defined by .   "
},
{
  "id": "fig_transformation_matrix",
  "level": "2",
  "url": "sec-isomorphism.html#fig_transformation_matrix",
  "type": "Figure",
  "number": "2.3.6",
  "title": "",
  "body": " Defining the matrix of a linear map with respect to choices of basis.     "
},
{
  "id": "p-1103",
  "level": "2",
  "url": "sec-isomorphism.html#p-1103",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "ex-iso-composition",
  "level": "2",
  "url": "sec-isomorphism.html#ex-iso-composition",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": " Show that the composition of two linear maps is again a linear map.   Suppose we have linear maps , and let . Then , and for any scalar , .  "
},
{
  "id": "ex-iso-ker-im",
  "level": "2",
  "url": "sec-isomorphism.html#ex-iso-ker-im",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": " Given transformations and , show that:               This is simpler than it looks! It's mostly a matter of chasing the definitions: see .  "
},
{
  "id": "ex-iso-inverse-linear",
  "level": "2",
  "url": "sec-isomorphism.html#ex-iso-inverse-linear",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "",
  "body": " Let be a bijective linear transformation. Show that is a linear transformation.   Since is a bijection, every can be associated with some .   Let . Then there exist with . We then have . For any scalar , we similarly have .  "
},
{
  "id": "rem-composition-product",
  "level": "2",
  "url": "sec-isomorphism.html#rem-composition-product",
  "type": "Remark",
  "number": "2.3.10",
  "title": "",
  "body": " With this connection between linear maps (in general) and matrices, it can be worthwhile to pause and consider invertibility in the context of matrices. Recall that an matrix is invertible if there exists a matrix such that and .  The same definition can be made for linear maps. We've defined what it means for a map to be invertible as a function . In particular, we relied on the fact that any bijection has an inverse.  Let be an matrix, and let be an matrix. Then we have linear maps , and the composition satisfies . Note that the rules given in elementary linear algebra, for the relative sizes of matrices that can be multiplied, are simply a manifestation of the fact that to compose functions, the range of the first must be contained in the domain of the second.  "
},
{
  "id": "ex-inverse-identity",
  "level": "2",
  "url": "sec-isomorphism.html#ex-inverse-identity",
  "type": "Exercise",
  "number": "2.3.11",
  "title": "",
  "body": " Show that if , then is surjective and is injective. Conclude that if and , then and are both bijections.   This is true even if the functions aren't linear. In fact, you've probably seen the proof in an earlier course!  "
},
{
  "id": "ex-tf-iso",
  "level": "2",
  "url": "sec-isomorphism.html#ex-tf-iso",
  "type": "Exercise",
  "number": "2.3.12",
  "title": "",
  "body": " The inverse of the composition is .   The composition of and its inverse should be the identity. Is that the case here? (Remember that order of composition matters!)  "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "sec-isomorphism.html#remark-12",
  "type": "Remark",
  "number": "2.3.13",
  "title": "",
  "body": " If you got that last exercise incorrect, consider the following: given and , we have . Since is an isomorphism, it has an inverse, which goes from to . This inverse can be expressed in terms of the inverses of and , but we're going backwards, so we have to apply them in the opposite order!   "
},
{
  "id": "ex-ww-ios1",
  "level": "2",
  "url": "sec-isomorphism.html#ex-ww-ios1",
  "type": "Exercise",
  "number": "2.3.2.1",
  "title": "",
  "body": "  Let be defined by Find the inverse of .           "
},
{
  "id": "ex-ww-iso2",
  "level": "2",
  "url": "sec-isomorphism.html#ex-ww-iso2",
  "type": "Exercise",
  "number": "2.3.2.2",
  "title": "",
  "body": "    The linear transformation is given by   Find .    The linear transformation is given by   Find .    Using from part a, it is given that:   Find and .   ,  .    Using from part b, it is given that:   Find , , and .   ,  ,                                            "
},
{
  "id": "worksheet-transformations",
  "level": "1",
  "url": "worksheet-transformations.html",
  "type": "Worksheet",
  "number": "2.4",
  "title": "Worksheet: matrix transformations",
  "body": " Worksheet: matrix transformations    This worksheet deals with matrix transformations, and in particular, kernel and image. The goal is to understand these important subspaces in a familiar context.  Let be an matrix. We can use to define a transformation given by , where we view as an column vector.  The kernel of is the set of vectors such that . That is, is the set of solutions to the homogeneous system .  The image of (also known as the range of ) is the set of vectors such that for some . In other words, is the set of vectors for which the non-homogeneous system is consistent.  Because is a linear transformation, we can compute it as long as we're given its values on a basis. If is a basis for , then for any there exist unique scalars such that , and since is linear, we have .  The main challenge, computationally speaking, is that if our basis is not the standard basis, some effort will be required to write in terms of the given basis.    Confirm that is a basis for .   To assist with solving this problem, a code cell is provided below. Recall that you can enter the matrix as Matrix([[a,b,c],[d,e,f],[g,h,i]]) or as Matrix(3,3,[a,b,c,d,e,f,g,h,i]) .    The reduced row-echeleon form of A is given by A.rref() . The product of matrices A and B is simply A*B . The inverse of a matrix A can be found using A.inv() or simply A**(-1) .  One note of caution: in the HTML worksheet, if you don't import sympy as your first line of code, you'll instead use Sage syntax. Sage uses A.inverse() instead of A.inv() .  In a Jupyter notebook, remember you can generate additional code cells by clicking on the + button.   You can also use the cell below to write down any necessary explanation.    Write each of the standard basis vectors in terms of this basis.   Suggestion: in each case, this can be done by solving a matrix equation, using the inverse of an appropriate matrix.      A linear transformation is now defined as follows: .  Let denote the standard basis for .   Determine for , and in so doing, determine the matrix such that .     Let be the matrix whose columns are given by the values of on the basis . (This would be the matrix of if was actually the standard basis.) Let be the matrix whose inverse you used to solve part (b). Can you find a way to combine these matrices to obtain the matrix ? If so, explain why your result makes sense.      Next we will compute the kernel and image of the transformation from the previous exercises. Recall that when solving a homogeneous system , we find the RREF of , and any variables whose columns do not contain a leading 1 are assigned as parameters. We then express the general solution in terms of those parameters.  The image of a matrix transformation is also known as the column space of , because the range of is precisely the span of the columns of . The RREF of tells us which columns to keep: the columns of that correspond to the columns in the RREF of with a leading 1.  Let be the linear transformation given in the previous exercises.   Determine the kernel of .     Determine the image of .     The Dimension Theorem states that for a linear transformation , where is finite-dimensional, . Explain why this result makes sense using your results for this problem.     "
},
{
  "id": "p-1154",
  "level": "2",
  "url": "worksheet-transformations.html#p-1154",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "kernel "
},
{
  "id": "p-1155",
  "level": "2",
  "url": "worksheet-transformations.html#p-1155",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "image "
},
{
  "id": "ex-ws-transf-1",
  "level": "2",
  "url": "worksheet-transformations.html#ex-ws-transf-1",
  "type": "Worksheet Exercise",
  "number": "2.4.1",
  "title": "",
  "body": " Confirm that is a basis for .  "
},
{
  "id": "ex-ws-transf-2",
  "level": "2",
  "url": "worksheet-transformations.html#ex-ws-transf-2",
  "type": "Worksheet Exercise",
  "number": "2.4.2",
  "title": "",
  "body": " Write each of the standard basis vectors in terms of this basis.   Suggestion: in each case, this can be done by solving a matrix equation, using the inverse of an appropriate matrix.  "
},
{
  "id": "ex-ws-transf-3",
  "level": "2",
  "url": "worksheet-transformations.html#ex-ws-transf-3",
  "type": "Worksheet Exercise",
  "number": "2.4.3",
  "title": "",
  "body": " Determine for , and in so doing, determine the matrix such that .  "
},
{
  "id": "ex-ws-transf-4",
  "level": "2",
  "url": "worksheet-transformations.html#ex-ws-transf-4",
  "type": "Worksheet Exercise",
  "number": "2.4.4",
  "title": "",
  "body": " Let be the matrix whose columns are given by the values of on the basis . (This would be the matrix of if was actually the standard basis.) Let be the matrix whose inverse you used to solve part (b). Can you find a way to combine these matrices to obtain the matrix ? If so, explain why your result makes sense.  "
},
{
  "id": "p-1171",
  "level": "2",
  "url": "worksheet-transformations.html#p-1171",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column space "
},
{
  "id": "ex-ws-transf-5",
  "level": "2",
  "url": "worksheet-transformations.html#ex-ws-transf-5",
  "type": "Worksheet Exercise",
  "number": "2.4.5",
  "title": "",
  "body": " Determine the kernel of .  "
},
{
  "id": "ex-ws-transf-6",
  "level": "2",
  "url": "worksheet-transformations.html#ex-ws-transf-6",
  "type": "Worksheet Exercise",
  "number": "2.4.6",
  "title": "",
  "body": " Determine the image of .  "
},
{
  "id": "ex-ws-transf-7",
  "level": "2",
  "url": "worksheet-transformations.html#ex-ws-transf-7",
  "type": "Worksheet Exercise",
  "number": "2.4.7",
  "title": "",
  "body": " The Dimension Theorem states that for a linear transformation , where is finite-dimensional, . Explain why this result makes sense using your results for this problem.  "
},
{
  "id": "worksheet-recurrence",
  "level": "1",
  "url": "worksheet-recurrence.html",
  "type": "Worksheet",
  "number": "2.5",
  "title": "Worksheet: linear recurrences",
  "body": " Worksheet: linear recurrences    In this worksheet, we will sketch some of the basic ideas related to linear recurrence. For further reading, and more information, the reader is directed to Section 7.5 of Linear Algebra with Applications , by Keith Nicholson.  A linear recurrence of length is a sequence that is recursively defined, with successive terms in the sequence defined in terms of the previous terms, via a linear recursion formula of the form . (Here we assume to have the appropriate length.) The most famous example of a linear recurrence is, of course, the Fibonacci sequence, which is defined by , and for all .  Recall from that the set of all sequences of real numbers is a vector space, denoted by .  The set of all sequences satisfying a linear recursion of length form a subspace of the vector space of all real-valued sequences. (Can you prove this?) Since each sequence is determined by the initial conditions , each such subspace is isomorphic to .  The goal of this worksheeet is to understand how to obtain closed form expressions for a recursively defined sequence using linear algebra. That is, rather than having to generate terms of the sequence one-by-one using the recursion formula, we want a function of that will produce each term in the sequence.  Since we know the dimension of the space of solutions, it suffices to understand two things:   How to produce a basis for .    How to write a given solution in terms of that basis.     Consider a geometric sequence, of the form . If this sequence satisfies the recursion , then (with ) , or . That is, is a root of the associated polynomial .  Thus, if the associated polynomial has roots , we know that the sequences satisfy our recursion. The remaining difficulty is what to do when has repeated roots. We will not prove it here, but if is a factor of , then the sequences all satisfy the recursion.  If we can factor completely over the reals as , then a basis for the space of solutions is given by .  Once we have a basis, we can apply the given coefficients to determine how to write a particular sequence as a linear combination of the basis vectors.      Find a basis for the space of sequences satisfying the recurrence .  Then find a formula for the sequence satisfying the initial conditions .   To solve this problem, you may use Python code, as outlined below. To get started, load the functions you'll need from the SymPy library.   First, determine the associated polynomial for the recurrence.  (Input your polynomial in the cell below. To get proper formatting, wrap your math in $ delimiters, and can use ^ to enter exponents.)   Next, factor the polynomial. You can do this using the factor() command. In Python, you will need to enter ** for the exponents.     In the cell below, list the roots of the polynomial, and the resulting basis for the space of solutions. Recall that if is a root of the polynomial, then will be a basis vector for the vector space of solutions. You may wish to confirm that each of your basis sequences indeed satisfies our recursion.   Next, let be the recursion that satisfies the given initial conditions. We want to write in terms of the basis we just found. Since our basis has three elements, there is an isomorphism , where is equal to the sequence in that satisfies the initial conditions . Thus, our desired sequence is given by .  Let be the vectors such that . (That is, write out the first three terms in each sequence in your basis to get three vectors.) We then need to find scalars such that . We will then have , and we recall that the sequences are the sequences in our basis .  Set up this system, and then use the computer to solve. Let A be the coefficient matrix for the system, which you will need to input into the cell below, and let B be the column vector containing the initial conditions.   Using the solution above, state the answer to this exercise.   Now, we leave you with a few more exercises. Recall that if the associated polynomial for your recursion has a repeated root , then your basis will include the sequences .     Find a basis for the space of sequences satisfying the recurrence . Then find a formula for the sequence satisfying the initial conditions .     Find a basis for the space of sequences satisfying the recurrence . Then find a formula for the sequence satisfying the initial conditions .     "
},
{
  "id": "ex-recurrence-1",
  "level": "2",
  "url": "worksheet-recurrence.html#ex-recurrence-1",
  "type": "Worksheet Exercise",
  "number": "2.5.1",
  "title": "",
  "body": " Find a basis for the space of sequences satisfying the recurrence .  Then find a formula for the sequence satisfying the initial conditions .  "
},
{
  "id": "ex-recurrence-2",
  "level": "2",
  "url": "worksheet-recurrence.html#ex-recurrence-2",
  "type": "Worksheet Exercise",
  "number": "2.5.2",
  "title": "",
  "body": " Find a basis for the space of sequences satisfying the recurrence . Then find a formula for the sequence satisfying the initial conditions .  "
},
{
  "id": "ex-recurrence-3",
  "level": "2",
  "url": "worksheet-recurrence.html#ex-recurrence-3",
  "type": "Worksheet Exercise",
  "number": "2.5.3",
  "title": "",
  "body": " Find a basis for the space of sequences satisfying the recurrence . Then find a formula for the sequence satisfying the initial conditions .  "
},
{
  "id": "sec-orthogonal-sets",
  "level": "1",
  "url": "sec-orthogonal-sets.html",
  "type": "Section",
  "number": "3.1",
  "title": "Orthogonal sets of vectors",
  "body": " Orthogonal sets of vectors   You may recall from elementary linear algebra, or a calculus class, that vectors in or are considered to be quantities with both magnitude and direction . Interestingly enough, neither of these properties is inherent to a general vector space. The vector space axioms specify only algebra; they say nothing about geometry. (What, for example, should be the angle between two polynomials?)  Because vector algebra is often introduced as a consequence of geometry (like the tip-to-tail rule), you may not have thought all that carefully about what, exactly, is responsible for making the connection between algebra and geometry. It turns out that the missing link is the humble dot product.  You probably encountered the following result, perhaps as a consequence of the law of cosines: for any two vectors , , where is the angle between and . Here we see both magnitude and direction (encoded by the angle) defined in terms of the dot product.  While it is possible to generalize the idea of the dot product to something called an inner product , we will first focus on the basic dot product in . Once we have a good understanding of things in that setting, we can move on to consider the abstract counterpart.    Basic definitions and properties  For most of this chapter (primarily for typographical reasons) we will denote elements of as ordered -tuples rather than as column vectors.    Let and be vectors in . The dot product of and , denoted by is the scalar defined by . The norm of a vector is denoted and defined by .    Note that both the dot product and the norm produce scalars . Through the Pythagorean Theorem, we recognize the norm as the length of . The dot product can still be thought of as measuring the angle between vectors, although the simple geometric proof used in two dimensions is not that easily translated to dimensions. At the very least, the dot product lets us extend the notion of right angles to higher dimensions.    We say that two vectors are orthogonal if .    It should be no surprise that all the familiar properties of the dot product work just as well in any dimension. The folowing properties can be confirmed by direct computation, so the proof is left as an exercise.    For any vectors ,     For any scalar ,      , and if and only if         The above properties, when properly abstracted, become the defining properties of a (real) inner product. (A complex inner product also involves complex conjugates.) For a general inner product, the requirement is referred to as being positive-definite , and the property that only the zero vector produces zero when dotted with itself is called nondegenerate . Note that we have the following connection between norm and dot product: . For a general inner product, this can be used as a definition of the norm associated to an inner product.    Show that for any vectors , we have .   Use properties of the dot product to expand and simplify.   This is simply an exercise in properties of the dot product. We have .    Suppose . Prove that if and only if for each .   Don't forget to prove both directions! Note that the hypothesis allows you to write as a linear combination of the .   If , then the result follows immediately from the dot product formula in . Conversely, suppose for each . Since the span , there must exist scalars such that . But then .   There are two important inequalities associated to the dot product and norm. We state them both in the following theorem, without proof.    Let be any vectors in . Then            The first of the above inequalities is called the Cauchy-Schwarz inequality , which be viewed as a manifestation of the formula , since after all, for any angle .  The usual proof involves some algebraic trickery; the interested reader is invited to search online for the Cauchy-Schwarz inequality, where they will find no shortage of websites offering proofs.  The second result, called the triangle inequality , follows immediately from the Cauchy-Scwarz inequality and : .  The triangle inequality gets its name from the tip-to-tail picture for vector addition. Essentially, it tells us that the length of any side of a triangle must be less than the sum of the lengths of the other two sides. The importance of the triangle inequality is that it tells us that the norm can be used to define distance.    For any vectors , the distance from to is denoted , and defined as .     Using properties of the norm, we can show that this distance function meets the criteria of what's called a metric . A metric is any function that takes a pair of vectors (or points) as input, and returns a number as output, with the following properties:    for any      , and if and only if      for any    We leave it as an exercise to confirm that the distance function defined above is a metric.  In more advanced courses ( topology or analysis) you might go into detailed study of these structures. There are three interrelated structures: inner products, norms, and metrics. You might consider questions like: does every norm come from an inner product? Does every metric come from a norm? (No.) Things get even more interesting for infinite-dimensional spaces. Of special interest are spaces such as Hilbert spaces (a special type of infinite-dimensional inner product space) and Banach spaces (a special type of infinite-dimensional normed space).    Select all vectors that are orthogonal to the vector           Yes! .           You should find that the dot product is , not , so these vectors are not orthogonal.           You might be tempted to say that the zero vector is orthogonal to everything, but we can't compare vectors from different vector spaces!           Yes! We have to be careful of signs here: .      If is orthogonal to and is orthogonal to , then is orthogonal to .   Consider , , and .     Orthogonal sets of vectors  In , we learned that linear independence and span are important concepts associated to a set of vectors. In this chapter, we learn what it means for a set of vectors to be orthogonal , and try to understand why this concept is just as important as independence and span.    A set of vectors in is called orthogonal if:    for each      for all         Show that the following is an orthogonal subset of . Can you find a fourth vector that is orthogonal to each vector in this set?   The dot product of the fourth vector with each vector above must be zero. Can you turn this requirement into a system of equations?   Clearly, all three vectors are nonzero. To confirm the set is orthogonal, we simply compute dot products: .  To find a fourth vector, we proceed as follows. Let . We want to be orthogonal to the three vectors in our set. Computing dot products, we must have: . This is simply a homogeneous system of three equations in four variables. Using the Sage cell below, we find that our vector must satisfy .   One possible nonzero solution is to take , giving . We'll leave the verification that this vector works as an exercise.    If and are orthogonal sets of vectors in , then is an orthogonal set of vectors.   Try to construct an example. The vector has to be orthogonal to , but is there any reason it has to be orthogonal to or ?   The requirement that the vectors in an orthogonal set be nonzero is partly because the alternative would be boring, and partly because it lets us state the following theorem.    Any orthogonal set of vectors is linearly independent.    Strategy  Any proof of linear independence should start by defining our set of vectors, and assuming that a linear combination of these vectors is equal to the zero vector, with the goal of showing that the scalars have to be zero.  Set up the equation (say, ), with the assumption that your set of vectors is orthogonal. What happens if you take the dot product of both sides with one of these vectors?    Suppose is orthogonal, and suppose for scalars . Taking the dot product of both sides of the above equation with gives . Since , we must have . We similarly find that all the remaining scalars are zero by taking the dot product with .    Another useful consequence of orthogonality: in two dimensions, we have the Pythagorean Theorem for right-angled triangles. If the legs of the triangle are identified with vectors and , and the hypotenuse with , then , since .  In dimensions, we have the following, which follows from the fact that all cross terms (dot products of different vectors) will vanish.   Pythagorean Theorem   For any orthogonal set of vectors we have .     Strategy  Remember that , and use the distributive property of the dot product, along with the fact that each pair of different vectors is orthogonal.   Our final initial result about orthogonal sets of vectors relates to span. In general, we know that if , then it is possible to solve for scalars such that . The trouble is that finding these scalars generally involves setting up, and then solving, a system of linear equations. The great thing about orthogonal sets of vectors is that we can provide explicit formulas for the scalars.   Fourier expansion theorem   Let be an orthogonal set of vectors. For any , we have .    Strategy  Take the same approach you used in the proof of , but this time, with a nonzero vector on the right-hand side.    Let . Taking the dot product of both sides of this equation with gives , since the dot product of with for is zero.    One use of is determining whether or not a given vector is in the span of an orthogonal set. If it is in the span, then its coefficients must satisfy the Fourier expansion formula. Therefore, if we compute the right hand side of the above formula and do not get our original vector, then that vector must not be in the span.   Determine whether or not the vectors belong to the span of the vectors .  (We confirmed that is an orthogonal set in .)   We compute , so .  On the other hand, repeating the same calculation with , we find , so .  Soon, we'll see that the quantity we computed when showing that is, in fact, the orthogonal projection of onto the subspace .   The Fourier expansion is especially simple if our basis vectors have norm one, since the denominators in each coefficient disappear. Recall that a unit vector in is any vector with . For any nonzero vector , a unit vector (that is, a vector of norm one) in the direction of is given by . We often say that the vector is normalized . (The convention of using a hat for unit vectors is common but not universal.)   Match each vector on the left with a parallel unit vector on the right.   Remember that a parallel vector is a scalar multiple of the one you started with.                      A basis of is called an orthonormal basis if is orthogonal, and all the vectors in are unit vectors.      In we saw that the set is orthogonal. Since it's orthogonal, it must be independent, and since it's a set of four independent vectors in , it must be a basis. To get an orthonormal basis, we normalize each vector: . The set is then an orthonormal basis of .    The process of creating unit vectors does typically introduce square root coefficients in our vectors. This can seem undesirable, but there remains value in having an orthonormal basis. For example, suppose we wanted to write the vector in terms of our basis. We can quickly compute , and so . There's still work to be done, but it is comparatively simpler than solving the corresponding system of equations.      Let be the standard basis in . Find the length of the vector .              Find the norm of and the unit vector in the direction of if   ,                    Given that and compute   Use properties of the dot product to expand and simplify.        Note that the distributive property, together with symmetry, let us handle this dot product using what is essentially FOIL :          Let be an orthonormal basis for an inner product space . If   is so that , is orthogonal to , and , find the possible values for , , and .   ,  ,                   Solution: One checks by direct computation that  , ,  must hold.         Find two linearly independent vectors perpendicular to the vector             "
},
{
  "id": "def-dot-prod-norm",
  "level": "2",
  "url": "sec-orthogonal-sets.html#def-dot-prod-norm",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  Let and be vectors in . The dot product of and , denoted by is the scalar defined by . The norm of a vector is denoted and defined by .   "
},
{
  "id": "def-orthogonal",
  "level": "2",
  "url": "sec-orthogonal-sets.html#def-orthogonal",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  We say that two vectors are orthogonal if .   "
},
{
  "id": "thm-dot-props",
  "level": "2",
  "url": "sec-orthogonal-sets.html#thm-dot-props",
  "type": "Theorem",
  "number": "3.1.3",
  "title": "",
  "body": "  For any vectors ,     For any scalar ,      , and if and only if       "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-orthogonal-sets.html#remark-13",
  "type": "Remark",
  "number": "3.1.4",
  "title": "",
  "body": " The above properties, when properly abstracted, become the defining properties of a (real) inner product. (A complex inner product also involves complex conjugates.) For a general inner product, the requirement is referred to as being positive-definite , and the property that only the zero vector produces zero when dotted with itself is called nondegenerate . Note that we have the following connection between norm and dot product: . For a general inner product, this can be used as a definition of the norm associated to an inner product.  "
},
{
  "id": "ex-norm-sum-square",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-norm-sum-square",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "",
  "body": " Show that for any vectors , we have .   Use properties of the dot product to expand and simplify.   This is simply an exercise in properties of the dot product. We have .  "
},
{
  "id": "ex-ortho-span1",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-ortho-span1",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "",
  "body": " Suppose . Prove that if and only if for each .   Don't forget to prove both directions! Note that the hypothesis allows you to write as a linear combination of the .   If , then the result follows immediately from the dot product formula in . Conversely, suppose for each . Since the span , there must exist scalars such that . But then .  "
},
{
  "id": "thm-cauchy-triangle",
  "level": "2",
  "url": "sec-orthogonal-sets.html#thm-cauchy-triangle",
  "type": "Theorem",
  "number": "3.1.7",
  "title": "",
  "body": "  Let be any vectors in . Then           "
},
{
  "id": "def-vector-distance",
  "level": "2",
  "url": "sec-orthogonal-sets.html#def-vector-distance",
  "type": "Definition",
  "number": "3.1.8",
  "title": "",
  "body": "  For any vectors , the distance from to is denoted , and defined as .   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "sec-orthogonal-sets.html#remark-14",
  "type": "Remark",
  "number": "3.1.9",
  "title": "",
  "body": " Using properties of the norm, we can show that this distance function meets the criteria of what's called a metric . A metric is any function that takes a pair of vectors (or points) as input, and returns a number as output, with the following properties:    for any      , and if and only if      for any    We leave it as an exercise to confirm that the distance function defined above is a metric.  In more advanced courses ( topology or analysis) you might go into detailed study of these structures. There are three interrelated structures: inner products, norms, and metrics. You might consider questions like: does every norm come from an inner product? Does every metric come from a norm? (No.) Things get even more interesting for infinite-dimensional spaces. Of special interest are spaces such as Hilbert spaces (a special type of infinite-dimensional inner product space) and Banach spaces (a special type of infinite-dimensional normed space).  "
},
{
  "id": "ex-mc-ortho-vect",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-mc-ortho-vect",
  "type": "Exercise",
  "number": "3.1.10",
  "title": "",
  "body": " Select all vectors that are orthogonal to the vector           Yes! .           You should find that the dot product is , not , so these vectors are not orthogonal.           You might be tempted to say that the zero vector is orthogonal to everything, but we can't compare vectors from different vector spaces!           Yes! We have to be careful of signs here: .    "
},
{
  "id": "ex-tf-ortho-vect",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-tf-ortho-vect",
  "type": "Exercise",
  "number": "3.1.11",
  "title": "",
  "body": " If is orthogonal to and is orthogonal to , then is orthogonal to .   Consider , , and .  "
},
{
  "id": "def-ortho-set",
  "level": "2",
  "url": "sec-orthogonal-sets.html#def-ortho-set",
  "type": "Definition",
  "number": "3.1.12",
  "title": "",
  "body": "  A set of vectors in is called orthogonal if:    for each      for all       "
},
{
  "id": "ex-orthogonal-set",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-orthogonal-set",
  "type": "Exercise",
  "number": "3.1.13",
  "title": "",
  "body": " Show that the following is an orthogonal subset of . Can you find a fourth vector that is orthogonal to each vector in this set?   The dot product of the fourth vector with each vector above must be zero. Can you turn this requirement into a system of equations?   Clearly, all three vectors are nonzero. To confirm the set is orthogonal, we simply compute dot products: .  To find a fourth vector, we proceed as follows. Let . We want to be orthogonal to the three vectors in our set. Computing dot products, we must have: . This is simply a homogeneous system of three equations in four variables. Using the Sage cell below, we find that our vector must satisfy .   One possible nonzero solution is to take , giving . We'll leave the verification that this vector works as an exercise.  "
},
{
  "id": "ex-tf-ortho-vect2",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-tf-ortho-vect2",
  "type": "Exercise",
  "number": "3.1.14",
  "title": "",
  "body": " If and are orthogonal sets of vectors in , then is an orthogonal set of vectors.   Try to construct an example. The vector has to be orthogonal to , but is there any reason it has to be orthogonal to or ?  "
},
{
  "id": "thm-ortho-independent",
  "level": "2",
  "url": "sec-orthogonal-sets.html#thm-ortho-independent",
  "type": "Theorem",
  "number": "3.1.15",
  "title": "",
  "body": "  Any orthogonal set of vectors is linearly independent.    Strategy  Any proof of linear independence should start by defining our set of vectors, and assuming that a linear combination of these vectors is equal to the zero vector, with the goal of showing that the scalars have to be zero.  Set up the equation (say, ), with the assumption that your set of vectors is orthogonal. What happens if you take the dot product of both sides with one of these vectors?    Suppose is orthogonal, and suppose for scalars . Taking the dot product of both sides of the above equation with gives . Since , we must have . We similarly find that all the remaining scalars are zero by taking the dot product with .   "
},
{
  "id": "thm-pythagoras",
  "level": "2",
  "url": "sec-orthogonal-sets.html#thm-pythagoras",
  "type": "Theorem",
  "number": "3.1.16",
  "title": "Pythagorean Theorem.",
  "body": " Pythagorean Theorem   For any orthogonal set of vectors we have .   "
},
{
  "id": "proof-42",
  "level": "2",
  "url": "sec-orthogonal-sets.html#proof-42",
  "type": "Proof",
  "number": "3.1.2.1",
  "title": "Strategy.",
  "body": " Strategy  Remember that , and use the distributive property of the dot product, along with the fact that each pair of different vectors is orthogonal.  "
},
{
  "id": "thm-fourier-expansion",
  "level": "2",
  "url": "sec-orthogonal-sets.html#thm-fourier-expansion",
  "type": "Theorem",
  "number": "3.1.17",
  "title": "Fourier expansion theorem.",
  "body": " Fourier expansion theorem   Let be an orthogonal set of vectors. For any , we have .    Strategy  Take the same approach you used in the proof of , but this time, with a nonzero vector on the right-hand side.    Let . Taking the dot product of both sides of this equation with gives , since the dot product of with for is zero.   "
},
{
  "id": "ex-test-span",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-test-span",
  "type": "Exercise",
  "number": "3.1.18",
  "title": "",
  "body": " Determine whether or not the vectors belong to the span of the vectors .  (We confirmed that is an orthogonal set in .)   We compute , so .  On the other hand, repeating the same calculation with , we find , so .  Soon, we'll see that the quantity we computed when showing that is, in fact, the orthogonal projection of onto the subspace .  "
},
{
  "id": "p-1274",
  "level": "2",
  "url": "sec-orthogonal-sets.html#p-1274",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit vector "
},
{
  "id": "ex-unitvec-matching",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-unitvec-matching",
  "type": "Exercise",
  "number": "3.1.19",
  "title": "",
  "body": " Match each vector on the left with a parallel unit vector on the right.   Remember that a parallel vector is a scalar multiple of the one you started with.                   "
},
{
  "id": "def-onb",
  "level": "2",
  "url": "sec-orthogonal-sets.html#def-onb",
  "type": "Definition",
  "number": "3.1.20",
  "title": "",
  "body": "  A basis of is called an orthonormal basis if is orthogonal, and all the vectors in are unit vectors.   "
},
{
  "id": "eg-orthonormal-r4",
  "level": "2",
  "url": "sec-orthogonal-sets.html#eg-orthonormal-r4",
  "type": "Example",
  "number": "3.1.21",
  "title": "",
  "body": "  In we saw that the set is orthogonal. Since it's orthogonal, it must be independent, and since it's a set of four independent vectors in , it must be a basis. To get an orthonormal basis, we normalize each vector: . The set is then an orthonormal basis of .   "
},
{
  "id": "ex-ww-ortho3",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-ww-ortho3",
  "type": "Exercise",
  "number": "3.1.3.1",
  "title": "",
  "body": "  Let be the standard basis in . Find the length of the vector .           "
},
{
  "id": "ex-ww-ortho4",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-ww-ortho4",
  "type": "Exercise",
  "number": "3.1.3.2",
  "title": "",
  "body": "  Find the norm of and the unit vector in the direction of if   ,                 "
},
{
  "id": "ex-ww-ortho1",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-ww-ortho1",
  "type": "Exercise",
  "number": "3.1.3.3",
  "title": "",
  "body": "  Given that and compute   Use properties of the dot product to expand and simplify.        Note that the distributive property, together with symmetry, let us handle this dot product using what is essentially FOIL :       "
},
{
  "id": "ex-ww-ortho5",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-ww-ortho5",
  "type": "Exercise",
  "number": "3.1.3.4",
  "title": "",
  "body": "  Let be an orthonormal basis for an inner product space . If   is so that , is orthogonal to , and , find the possible values for , , and .   ,  ,                   Solution: One checks by direct computation that  , ,  must hold.      "
},
{
  "id": "ex-ww-ortho6",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-ww-ortho6",
  "type": "Exercise",
  "number": "3.1.3.5",
  "title": "",
  "body": "  Find two linearly independent vectors perpendicular to the vector           "
},
{
  "id": "sec-gram-schmidt",
  "level": "1",
  "url": "sec-gram-schmidt.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Gram-Schmidt Procedure",
  "body": " The Gram-Schmidt Procedure  Given an nonzero vector and a vector , the projection of onto is given by . Note that this looks just like one of the terms in .  The motivation for the projection is as follows: Given the vectors and , we want to find vectors and with the following properties:   The vector is parallel to the vector .    The vectors and add to .    The vectors and are orthogonal.      Illustrating the concept of orthogonal projection.   The diagram shows two given vectors u and v, along with vectors w and z. The vectors w is parallel to u, while the vector z is orthogonal to u, and the two vectors sum to the vector v. The vector w is the projection of v onto u.     Motivation for the construction comes from Physics, where one needs to be able to decompose a force vector into parts that are parallel and orthogonal to a given direction.  To derive the formula, we note that the vector must be a scalar multiple of , since it is parallel to , so for some scalar . Next, since , , and form a right triangle, Assuming that the angle is acute. If it is obtuse, the scalar is negative, but so is the dot product, so the signs work out. we know that . But . Plugging this in, and solving for , we get the formula in .   On the left, pairs of vectors are given, and on the right, pairs of vectors . Match each pair on the left with the pair on the right such that , and .   You can solve this problem without actually computing any projections. Think about the relationships between the different vectors.     ,    ,      ,    ,      ,    ,     An important part of the projection construction is that the vector is orthogonal to . Our next result is a generalization of this observation.   Orthogonal Lemma   Let be an orthogonal set of vectors in , and let be any vector in . Define the vector by . Then:    for each .    If , then , and therefore, is an orthogonal set.       Strategy  For the first part, try calculating the dot product, using the definition of . Don't forget that if , since you are assuming you have an orthogonal set of vectors.  For the second part, what does the Fourier Expansion Theorem say?       For any , we have , since for .    It follows from the that if and only if , and the fact that is an orthogonal set then follows from the first part.       It follows from the that for any subspace , any set of orthogonal vectors in can be extended to an orthogonal basis of . Since any set containing a single nonzero vector is orthogonal, it follows that every subspace has an orthogonal basis. (If , we consider the empty basis to be orthogonal.)  The procedure for creating an orthogonal basis is clear. Start with a single nonzero vector , which we'll also call . If , choose a vector with . The then provides us with a vector such that is orthogonal. If , we're done. Otherwise, we repeat the process, choosing , and then using the to obtain , and so on, until an orthogonal basis is obtained.  With one minor modification, the above procedure provides us with a major result. Suppose is a subspace of , and start with any basis of . By choosing our in the procedure above to be these basis vectors, we obtain the Gram-Schmidt algorithm for constructing an orthogonal basis.   Gram-Schmidt Orthonormalization Algorithm   Let be a subspace of , and let be a basis of . Define vectors in as follows: . Then is an orthogonal basis for . Moreover, for each , we have .    Of course, once we've used Gram-Schmidt to find an orthogonal basis, we can normalize each vector to get an orthonormal basis. The Gram-Schmidt algorithm is ideal when we know how to find a basis for a subspace, but we need to know an orthogonal basis. For example, suppose we want an orthonormal basis for the nullspace of the matrix . First, we find any basis for the nullspace.   Let's make that basis look a little nicer by using some scalar multiplication to clear fractions. This is definitely not an orthogonal basis. So we take , and , which equals something we probably don't want to try to simplify. Finally, we find . And now we probably get about five minutes into the fractions and say something that shouldn't appear in print. This sounds like a job for the computer.   What if we want our vectors normalized? Turns out the GramSchmidt function has an optional argument of true or false. The default is false, which is to not normalize. Setting it to true gives an orthonormal basis:   OK, so that's nice, and fairly intimidating looking. Did it work? We can specify the vectors in our list by giving their positions, which are 0, 1, and 2, respectively.   Let's compute dot products:   Let's also confirm that these are indeed in the nullspace.   Boom. Let's try another example. This time we'll keep the vectors a little smaller in case you want to try it by hand.    Confirm that the set is a basis for , and use the to find an orthonormal basis.    First, note that we can actually jump right into the Gram-Schmidt procedure. If the set is not a basis, then it won't be independent, and when we attempt to construct the third vector in our orthonormal basis, its projection on the the subspace spanned by the first two will be the same as the original vector, and we'll get zero when we subtract the two.  We let , and set . Then we have .   You'll notice that we're using rather than in the calculation of . This lets us avoid fractions (momentarily), and doesn't affect the answer, since for any nonzero scalar , .   Next, we compute . .  We got it done! But doing this sort of thing by hand makes it possible that we made a calculation error somewhere. To check our work, we can turn to the computer.   Success! Full disclosure: there was indeed a mistake in the manual computation. Whether it was a typo or a miscalculation, the entry was originally written as . This led, as you might expect, to some very wrong answers for .       Let  Use the Gram-Schmidt procedure to produce an orthogonal set with the same span.                                                 Let  Use the Gram-Schmidt procedure to produce an orthogonal set with the same span.                                                 Let  Use the Gram-Schmidt procedure to produce an orthogonal set with the same span.                        Let  Find orthonormal bases of the kernel and image of .                  "
},
{
  "id": "fig-ortho-proj",
  "level": "2",
  "url": "sec-gram-schmidt.html#fig-ortho-proj",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Illustrating the concept of orthogonal projection.   The diagram shows two given vectors u and v, along with vectors w and z. The vectors w is parallel to u, while the vector z is orthogonal to u, and the two vectors sum to the vector v. The vector w is the projection of v onto u.    "
},
{
  "id": "ex-match-projection",
  "level": "2",
  "url": "sec-gram-schmidt.html#ex-match-projection",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": " On the left, pairs of vectors are given, and on the right, pairs of vectors . Match each pair on the left with the pair on the right such that , and .   You can solve this problem without actually computing any projections. Think about the relationships between the different vectors.     ,    ,      ,    ,      ,    ,    "
},
{
  "id": "thm-orthogonal-lemma",
  "level": "2",
  "url": "sec-gram-schmidt.html#thm-orthogonal-lemma",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "Orthogonal Lemma.",
  "body": " Orthogonal Lemma   Let be an orthogonal set of vectors in , and let be any vector in . Define the vector by . Then:    for each .    If , then , and therefore, is an orthogonal set.       Strategy  For the first part, try calculating the dot product, using the definition of . Don't forget that if , since you are assuming you have an orthogonal set of vectors.  For the second part, what does the Fourier Expansion Theorem say?       For any , we have , since for .    It follows from the that if and only if , and the fact that is an orthogonal set then follows from the first part.      "
},
{
  "id": "thm-gram-schmidt",
  "level": "2",
  "url": "sec-gram-schmidt.html#thm-gram-schmidt",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "Gram-Schmidt Orthonormalization Algorithm.",
  "body": " Gram-Schmidt Orthonormalization Algorithm   Let be a subspace of , and let be a basis of . Define vectors in as follows: . Then is an orthogonal basis for . Moreover, for each , we have .   "
},
{
  "id": "eg-gram2",
  "level": "2",
  "url": "sec-gram-schmidt.html#eg-gram2",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": "  Confirm that the set is a basis for , and use the to find an orthonormal basis.    First, note that we can actually jump right into the Gram-Schmidt procedure. If the set is not a basis, then it won't be independent, and when we attempt to construct the third vector in our orthonormal basis, its projection on the the subspace spanned by the first two will be the same as the original vector, and we'll get zero when we subtract the two.  We let , and set . Then we have .   You'll notice that we're using rather than in the calculation of . This lets us avoid fractions (momentarily), and doesn't affect the answer, since for any nonzero scalar , .   Next, we compute . .  We got it done! But doing this sort of thing by hand makes it possible that we made a calculation error somewhere. To check our work, we can turn to the computer.   Success! Full disclosure: there was indeed a mistake in the manual computation. Whether it was a typo or a miscalculation, the entry was originally written as . This led, as you might expect, to some very wrong answers for .   "
},
{
  "id": "ex-ww-gs1",
  "level": "2",
  "url": "sec-gram-schmidt.html#ex-ww-gs1",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "  Let  Use the Gram-Schmidt procedure to produce an orthogonal set with the same span.                                              "
},
{
  "id": "ex-ww-gs2",
  "level": "2",
  "url": "sec-gram-schmidt.html#ex-ww-gs2",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "  Let  Use the Gram-Schmidt procedure to produce an orthogonal set with the same span.                                              "
},
{
  "id": "ex-ww-gs3",
  "level": "2",
  "url": "sec-gram-schmidt.html#ex-ww-gs3",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "  Let  Use the Gram-Schmidt procedure to produce an orthogonal set with the same span.                     "
},
{
  "id": "ex-ww-gs4",
  "level": "2",
  "url": "sec-gram-schmidt.html#ex-ww-gs4",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "  Let  Find orthonormal bases of the kernel and image of .                "
},
{
  "id": "section-projection",
  "level": "1",
  "url": "section-projection.html",
  "type": "Section",
  "number": "3.3",
  "title": "Orthogonal Projection",
  "body": " Orthogonal Projection  In Exercise , we saw that the gives us an efficient way of testing whether or not a vector belongs to the span of an orthogonal set. When the answer is no , the quantity we compute while testing turns out to be very useful: it gives the orthogonal projection of that vector onto the span of our orthogonal set. This turns out to be exactly the ingredient needed to solve certain minimum distance problems.  We hinted above that the calculations we've been doing have a lot to do with projection. Since any single nonzero vector forms an orthogonal basis for its span, the projection can be viewed as the orthogonal projection of the vector , not onto the vector , but onto the subspace . This is, after all, how we viewed projections in elementary linear algebra: we drop the perpendicular from the tip of onto the line in the direction of .  Now that we know how to define an orthogonal basis for a subspace, we can define orthogonal projection onto subspaces of dimension greater than one.    Let be a subspace of with orthogonal basis . For any vector , we define the orthogonal projection of onto by .    Note that is indeed an element of , since it's a linear combination of its basis vectors. In the case of the trivial subspace , we define orthogonal projection of any vector to be , since really, what other choice do we have? (This case isn't really of any interest, we just like being thorough.)  Let's see how this might be put to use in a classic problem: finding the distance from a point to a plane.   One limitation of this approach to projection is that we must project onto a subspace . Given a plane like , we would need to modify our approach. One way to do it would be to find a point on the plane, and then try to translate everything to the origin. It's interesting to think about how this might be accomplished (in particular, in what direction would the translation have to be performed?) but somewhat external to the questions we're interested in here.     Find the distance from the point to the plane defined by .    Using projection onto a normal vector  In an elementary linear algebra (or calculus) course, we would solve this problem as follows. First, we would need two vectors parallel to the plane. If lies in the plane, then , so , and , so and are parallel to the plane. We then compute the normal vector , and compute the projection of the position vector for the point onto . This gives the vector .  Now, this vector is parallel to , so it's perpendicular to the plane. Subtracting it from gives a vector parallel to the plane, and this is the position vector for the point we seek. so the closest point is . We weren't asked for it, but note that if we wanted the distance from the point to the plane, this is given by .    Using orthogonal projection  Let's solve the same problem using orthogonal projection. First, we have to deal with the fact that the vectors and are probably not orthogonal. To get around this, we replace with . We now set . Lo and behold, we get the same answer as before.    The only problem with is that it appears to depend on the choice of orthogonal basis. To see that it doesn't, we need one more definition.    For any subspace of , we define the orthogonal complement of , denoted , by .    The term complement comes from terminology we mentioned early on, but didn't spend much time on. Theorem told us that for any subspace of a vector space , it is possible to construct another subspace of such that . The subspace is known as a complement of . A complement is not unique, but the orthogonal complement is. As you might guess from the name, is also a subspace of .   Show that is a subspace of .   The trusty is your friend here. Just be careful to work correctly with the definition of .    Projection Theorem   Let be a subspace of , let be any vector in , and let . Then:    , and .     is the closest vector in to the vector , in the sense that the distance is minimal among all vectors in . That is, for all , we have .       Strategy  For the first part, review the , and convince yourself that this says the same thing. The second part is the hard part, and it requires a trick: we can write as , and then notice that . What can we say using the first part, and the Pythagorean theorem?    By , is a linear combination of elements in , so . The fact that follows directly from the .  Choose any with , and write . Since and , we know that these two vectors are orthogonal, and therefore, , by the .     Show that . Use this fact to show that does not depend on the choice orthogonal basis.   Suppose we find vectors and using basis and . Note that , but also that Now use .   Finally, we note one more useful fact. The process of sending a vector to its orthogonal projection defines an operator on , and yes, it's linear.    Let be a subspace of , and define a function by . Then is a linear operator such that and .    Strategy  The fact that is linear follows from properties of the dot product, and some careful checking. We know that by definition of the projection, and you can show that acts as the identity on using the .  If , then by definition of . (Recall that it is defined using dot products with vectors in .) If , use the , to show that .     It follows from this result and the that , and since , is indeed a complement of in the sense introduced in Theorem . It's also fairly easy to see that directly. If , and is a basis for , then we have , and for an unknown , this is simply a homogeneous system of equations with variables. Moreover, they are independent equations, since the form a basis. We thus expect free parameters in the general solution.     For any subspace of , we have .     Note that if , then , and if , then . (Can you prove this?)    Given subspaces of with , if , then .   A subspace can have many complements, but only one orthgonal complement. For example, a complement to the axis in is given by any other line through the origin, but only the axis is orthogonal.     Let be a subspace of , with basis . Let be the matrix whose columns are the basis vectors for . Then .     tells us that we can find a basis for by solving the homogeneous system . Make sure you can see why this is true!    Let . Determine a basis for .     First, we note that for a general element of , we have , so is a basis for . (We have just shown that this set spans ; it is independent since the first two vectors are not parallel, and the third vector cannot be in the span of the first two, since its third entry is nonzero.) As in , we set .  To find a basis for , we simply need to find the nullspace of , which we do below.       Prove that for any subspace , is the identity operator on .   Given , can you write it as a sum of an element of and an element of ?    Prove that for any subspace , .   Show that , and then use to show that the two spaces must have the same dimension.    Let and be subspaces of . Prove that .   One inclusion is easier than the other. Use and to show that the dimensions must be equal.     Given , find the coordinates for in the subspace spanned by .  Note that and are orthogonal.                        Let be the set of all vectors with and real. Find a vector whose span is .              Let and , and let the subspace of spanned by and . Find a basis of , the orthogonal complement of in .              Let , , and .  Compute the distance from to the plane in spanned by and .              Given , find the closest point to in the subspace spanned by and .              Find the orthogonal projection of onto the subspace of spanned by and .             "
},
{
  "id": "def-ortho-projection",
  "level": "2",
  "url": "section-projection.html#def-ortho-projection",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  Let be a subspace of with orthogonal basis . For any vector , we define the orthogonal projection of onto by .   "
},
{
  "id": "eg-proj-distance",
  "level": "2",
  "url": "section-projection.html#eg-proj-distance",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Find the distance from the point to the plane defined by .    Using projection onto a normal vector  In an elementary linear algebra (or calculus) course, we would solve this problem as follows. First, we would need two vectors parallel to the plane. If lies in the plane, then , so , and , so and are parallel to the plane. We then compute the normal vector , and compute the projection of the position vector for the point onto . This gives the vector .  Now, this vector is parallel to , so it's perpendicular to the plane. Subtracting it from gives a vector parallel to the plane, and this is the position vector for the point we seek. so the closest point is . We weren't asked for it, but note that if we wanted the distance from the point to the plane, this is given by .    Using orthogonal projection  Let's solve the same problem using orthogonal projection. First, we have to deal with the fact that the vectors and are probably not orthogonal. To get around this, we replace with . We now set . Lo and behold, we get the same answer as before.   "
},
{
  "id": "def-ortho-comp",
  "level": "2",
  "url": "section-projection.html#def-ortho-comp",
  "type": "Definition",
  "number": "3.3.3",
  "title": "",
  "body": "  For any subspace of , we define the orthogonal complement of , denoted , by .   "
},
{
  "id": "ex-comp-subspace",
  "level": "2",
  "url": "section-projection.html#ex-comp-subspace",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": " Show that is a subspace of .   The trusty is your friend here. Just be careful to work correctly with the definition of .  "
},
{
  "id": "thm-projection",
  "level": "2",
  "url": "section-projection.html#thm-projection",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "Projection Theorem.",
  "body": " Projection Theorem   Let be a subspace of , let be any vector in , and let . Then:    , and .     is the closest vector in to the vector , in the sense that the distance is minimal among all vectors in . That is, for all , we have .       Strategy  For the first part, review the , and convince yourself that this says the same thing. The second part is the hard part, and it requires a trick: we can write as , and then notice that . What can we say using the first part, and the Pythagorean theorem?    By , is a linear combination of elements in , so . The fact that follows directly from the .  Choose any with , and write . Since and , we know that these two vectors are orthogonal, and therefore, , by the .   "
},
{
  "id": "ex-ortho-comp",
  "level": "2",
  "url": "section-projection.html#ex-ortho-comp",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": " Show that . Use this fact to show that does not depend on the choice orthogonal basis.   Suppose we find vectors and using basis and . Note that , but also that Now use .  "
},
{
  "id": "thm-proj-operator",
  "level": "2",
  "url": "section-projection.html#thm-proj-operator",
  "type": "Theorem",
  "number": "3.3.7",
  "title": "",
  "body": "  Let be a subspace of , and define a function by . Then is a linear operator such that and .    Strategy  The fact that is linear follows from properties of the dot product, and some careful checking. We know that by definition of the projection, and you can show that acts as the identity on using the .  If , then by definition of . (Recall that it is defined using dot products with vectors in .) If , use the , to show that .   "
},
{
  "id": "rem-orth-comp-dim",
  "level": "2",
  "url": "section-projection.html#rem-orth-comp-dim",
  "type": "Remark",
  "number": "3.3.8",
  "title": "",
  "body": " It follows from this result and the that , and since , is indeed a complement of in the sense introduced in Theorem . It's also fairly easy to see that directly. If , and is a basis for , then we have , and for an unknown , this is simply a homogeneous system of equations with variables. Moreover, they are independent equations, since the form a basis. We thus expect free parameters in the general solution.  "
},
{
  "id": "thm-ortho-comp",
  "level": "2",
  "url": "section-projection.html#thm-ortho-comp",
  "type": "Theorem",
  "number": "3.3.9",
  "title": "",
  "body": "  For any subspace of , we have .   "
},
{
  "id": "ex-tf-orth-comp",
  "level": "2",
  "url": "section-projection.html#ex-tf-orth-comp",
  "type": "Exercise",
  "number": "3.3.10",
  "title": "",
  "body": " Given subspaces of with , if , then .   A subspace can have many complements, but only one orthgonal complement. For example, a complement to the axis in is given by any other line through the origin, but only the axis is orthogonal.  "
},
{
  "id": "thm-complement-matrix",
  "level": "2",
  "url": "section-projection.html#thm-complement-matrix",
  "type": "Theorem",
  "number": "3.3.11",
  "title": "",
  "body": "  Let be a subspace of , with basis . Let be the matrix whose columns are the basis vectors for . Then .   "
},
{
  "id": "eg-comp-basis",
  "level": "2",
  "url": "section-projection.html#eg-comp-basis",
  "type": "Example",
  "number": "3.3.12",
  "title": "",
  "body": "  Let . Determine a basis for .     First, we note that for a general element of , we have , so is a basis for . (We have just shown that this set spans ; it is independent since the first two vectors are not parallel, and the third vector cannot be in the span of the first two, since its third entry is nonzero.) As in , we set .  To find a basis for , we simply need to find the nullspace of , which we do below.    "
},
{
  "id": "ex-proj-op-id",
  "level": "2",
  "url": "section-projection.html#ex-proj-op-id",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": " Prove that for any subspace , is the identity operator on .   Given , can you write it as a sum of an element of and an element of ?  "
},
{
  "id": "ex-comp-comp",
  "level": "2",
  "url": "section-projection.html#ex-comp-comp",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": " Prove that for any subspace , .   Show that , and then use to show that the two spaces must have the same dimension.  "
},
{
  "id": "ex-comp-sum",
  "level": "2",
  "url": "section-projection.html#ex-comp-sum",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": " Let and be subspaces of . Prove that .   One inclusion is easier than the other. Use and to show that the dimensions must be equal.  "
},
{
  "id": "ex-ww-proj1",
  "level": "2",
  "url": "section-projection.html#ex-ww-proj1",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": "  Given , find the coordinates for in the subspace spanned by .  Note that and are orthogonal.                     "
},
{
  "id": "ex-ww-proj2",
  "level": "2",
  "url": "section-projection.html#ex-ww-proj2",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "  Let be the set of all vectors with and real. Find a vector whose span is .           "
},
{
  "id": "ex-ww-proj3",
  "level": "2",
  "url": "section-projection.html#ex-ww-proj3",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "  Let and , and let the subspace of spanned by and . Find a basis of , the orthogonal complement of in .           "
},
{
  "id": "ex-ww-proj4",
  "level": "2",
  "url": "section-projection.html#ex-ww-proj4",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "",
  "body": "  Let , , and .  Compute the distance from to the plane in spanned by and .           "
},
{
  "id": "ex-ww-proj5",
  "level": "2",
  "url": "section-projection.html#ex-ww-proj5",
  "type": "Exercise",
  "number": "3.3.8",
  "title": "",
  "body": "  Given , find the closest point to in the subspace spanned by and .           "
},
{
  "id": "ex-ww-proj6",
  "level": "2",
  "url": "section-projection.html#ex-ww-proj6",
  "type": "Exercise",
  "number": "3.3.9",
  "title": "",
  "body": "  Find the orthogonal projection of onto the subspace of spanned by and .           "
},
{
  "id": "worksheet-dual-basis",
  "level": "1",
  "url": "worksheet-dual-basis.html",
  "type": "Worksheet",
  "number": "3.4",
  "title": "Worksheet: dual basis.",
  "body": " Worksheet: dual basis.    Let be a vector space over . (That is, scalars are real numbers, rather than, say, complex.) A linear transformation is called a linear functional .  Here are some examples of linear functionals:   The map given by .    The evaluation map given by . (For example, .)    The map given by , where denotes the space of all continuous functions on .     Note that for any vector spaces , the set of linear transformations from to is itself a vector space, if we define . In particular, given a vector space , we denote the set of all linear functionals on by , and call this the dual space of .  We make the following observations:   If and , then is isomorphic to the space of matrices, so it has dimension .    Since , if is finite-dimensional, then has dimension .    Since , and are isomorphic.     Here is a basic example that is intended as a guide to your intuition regarding dual spaces. Take . Given any , define a map by (the usual dot product).  One way to think about this: if we write as a column vector , then we can identify with , where the action is via multiplication: . It turns out that this example can be generalized, but the definition of involves the dot product, which is particular to .  There is a generalization of the dot product, known as an inner product. (See Chapter 10 of Nicholson, for example.) On any inner product space, we can associate each vector to a linear functional using the procedure above.  Another way to work concretely with dual vectors (without the need for inner products) is to define things in terms of a basis.  Given a basis of , we define the corresponding dual basis  of by . Note that each is well-defined, since any linear transformation can be defined by giving its values on a basis.  For the standard basis on , note that the corresponding dual basis functionals are given by . That is, these are the coordinate functions on .      Show that the dual basis is indeed a basis for .   We know that . Since there are vectors in the dual basis, it's enough to show that they're linearly independent. Suppose that for some scalars .  This means that for all ; in particular, this must be true for the basis vectors .  By the definition of the dual basis, for each we have . Thus, for each , and therefore, the are linearly independent.   Next, let and be vector spaces, and let be a linear transformation. For any such , we can define the dual map  by for each .   Confirm that (a) does indeed define an element of ; that is, a linear map from to , and (b) that is linear.   There are two things to check. First, we show that for each . Since and , it follows that is a map from to . But we must also show that it's linear.  Given , we have . Similarly, for any scalar , . This shows that .  Next, we need to show that is a linear map. Let , and let be a scalar. We have: , and . This follows from the vector space structure on any space of functions. For a vector , we have .    Let be the space of all polynomials, and let be the derivative transformation . Let be the linear functional defined by .  What is the linear functional ?   Let be a polynomial. Then . By the Fundamental Theorem of Calculus (or a tedious calculation, if you prefer), we get .      Show that dual maps satisfy the following properties: for any and ,       In item , assume and . (Reminder: the notation is sometimes referred to as the product of and , in analogy with matrices, but actually represents the composition .)   Let . We have , since is linear. Similarly, . Finally, we have . since composition is associative.   We have one topic remaining in relation to dual spaces: determining the kernel and image of a dual map (in terms of the kernel and image of ). Let be a vector space, and let be a subspace of . Any such subspace determines an important subspace of : the annihilator of , denoted by and defined by .   Determine a basis (in terms of the standard dual basis for ) for the annihilator of the subspace given by .   Write , and note that each simply gives the th component of a vector in .   As per the hint, suppose , and that . Then .  We wish for this to be zero for all possible values of and . Therefore, we must have . Solving gives us and , so . This gives us the following basis for : .      Here is a fun theorem about annihilators that I won't ask you to prove.    Let be a finite dimensional vector space. For any subspace of , .    Here's an outline of the proof. For any subspace , we can define the inclusion map , given by . (This is not the identity on since it's only defined on . In particular, it is not onto unless , although it is clearly one-to-one.)  Then is a map from to . Moreover, note that for any , satisfies, for any , . Thus, if and only if , which is if and only if for all , which is if and only if . Therefore, .  By the dimension theorem, we have: . With a bit of work, one can show that , and we get the result from the fact that and .  There are a number of interesting results of this flavour. For example, one can show that a map is injective if and only if is surjective, and vice-versa.  One final, optional task: return to the example of , viewed as column vectors, and consider a matrix transformation given by as usual. Viewing as row vectors, convince yourself that ; that is, that what we've really been talking about all along is just the transpose of a matrix!    "
},
{
  "id": "p-1428",
  "level": "2",
  "url": "worksheet-dual-basis.html#p-1428",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear functional "
},
{
  "id": "p-1442",
  "level": "2",
  "url": "worksheet-dual-basis.html#p-1442",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dual basis "
},
{
  "id": "ex-dual-basis1",
  "level": "2",
  "url": "worksheet-dual-basis.html#ex-dual-basis1",
  "type": "Worksheet Exercise",
  "number": "3.4.1",
  "title": "",
  "body": " Show that the dual basis is indeed a basis for .   We know that . Since there are vectors in the dual basis, it's enough to show that they're linearly independent. Suppose that for some scalars .  This means that for all ; in particular, this must be true for the basis vectors .  By the definition of the dual basis, for each we have . Thus, for each , and therefore, the are linearly independent.  "
},
{
  "id": "ex-dual-basis2",
  "level": "2",
  "url": "worksheet-dual-basis.html#ex-dual-basis2",
  "type": "Worksheet Exercise",
  "number": "3.4.2",
  "title": "",
  "body": " Confirm that (a) does indeed define an element of ; that is, a linear map from to , and (b) that is linear.   There are two things to check. First, we show that for each . Since and , it follows that is a map from to . But we must also show that it's linear.  Given , we have . Similarly, for any scalar , . This shows that .  Next, we need to show that is a linear map. Let , and let be a scalar. We have: , and . This follows from the vector space structure on any space of functions. For a vector , we have .  "
},
{
  "id": "ex-dual-basis3",
  "level": "2",
  "url": "worksheet-dual-basis.html#ex-dual-basis3",
  "type": "Worksheet Exercise",
  "number": "3.4.3",
  "title": "",
  "body": " Let be the space of all polynomials, and let be the derivative transformation . Let be the linear functional defined by .  What is the linear functional ?   Let be a polynomial. Then . By the Fundamental Theorem of Calculus (or a tedious calculation, if you prefer), we get .  "
},
{
  "id": "ex-dual-basis4",
  "level": "2",
  "url": "worksheet-dual-basis.html#ex-dual-basis4",
  "type": "Worksheet Exercise",
  "number": "3.4.4",
  "title": "",
  "body": " Show that dual maps satisfy the following properties: for any and ,       In item , assume and . (Reminder: the notation is sometimes referred to as the product of and , in analogy with matrices, but actually represents the composition .)   Let . We have , since is linear. Similarly, . Finally, we have . since composition is associative.  "
},
{
  "id": "p-1459",
  "level": "2",
  "url": "worksheet-dual-basis.html#p-1459",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "annihilator "
},
{
  "id": "ex-dual-basis5",
  "level": "2",
  "url": "worksheet-dual-basis.html#ex-dual-basis5",
  "type": "Worksheet Exercise",
  "number": "3.4.5",
  "title": "",
  "body": " Determine a basis (in terms of the standard dual basis for ) for the annihilator of the subspace given by .   Write , and note that each simply gives the th component of a vector in .   As per the hint, suppose , and that . Then .  We wish for this to be zero for all possible values of and . Therefore, we must have . Solving gives us and , so . This gives us the following basis for : .  "
},
{
  "id": "thm-anihilator-dimension",
  "level": "2",
  "url": "worksheet-dual-basis.html#thm-anihilator-dimension",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "",
  "body": "  Let be a finite dimensional vector space. For any subspace of , .   "
},
{
  "id": "worksheet-least-squares",
  "level": "1",
  "url": "worksheet-least-squares.html",
  "type": "Worksheet",
  "number": "3.5",
  "title": "Worksheet: Least squares approximation",
  "body": " Worksheet: Least squares approximation    In many applied scenarios, it is not practical (or even, perhaps, possible) to find an exact solution to a problem. Sometimes we may be working with imperfect data. Other times, we may be dealing with a problem that is overdetermined , The term overdetermined is common in statistics. In other areas, such as physics, the term over-constrained is used instead. such as a system of linear equations with more equations than variables. (Quite often, both of these issues may be present.)  An overdetermined system is quite likely to be inconsistent. That is, our problem requires finding a solution to a system , where no such solution exists! When no solution is possible, we can ask whether it is instead possible to find a best approximation .  What would a best approximation look like in this case? Let denote the column space of , which we know is a subspace of (assuming is an matrix). The subspace is precisely the set of all vectors such that has a solution. Among these vectors, we would like to find the one that is closest to , in the sense that is as small as possible.  But we know exactly what this vector should be: the orthogonal projection of onto .   The presentation in this worksheet is based on the one given in the text by Nicholson (see Section 5.6). Further details may be found there, or, for the more statistically inclined, on Wikipedia .  Given an inconsistent system , we have two problems to solve:   Find the vector , where     Find a vector such that    The vector is then our approximate solution.  This can be done directly, of course:   Find a basis for     Use the to construct an orthogonal basis for     Use this orthogonal basis to compute     Solve the system .     But there is another way to proceed: we know that , so for any vector , . Therefore, , for any vector .  Therefore, , or . Solving this system, called the normal equations for , will yield our approximate solution.    To begin, let's compare the two methods discussed above for finding an approximate solution. Consider the system of equations , where .   Confirm that the system has no solution.      Find an orthogonal basis for the column space of .       Compute the projection of onto the column space of .     Solve the system for .     Solve the normal equations for .      Next, we want to consider a problem found in many introductory science labs: finding a line of best fit . The situation is as follows: in some experiment, data points have been found. We would like to find a function such that for each , the value of is as close as possible to .  Note that we have only two parameters available to tune: and . We assume that some reasoning or experimental evidence has led us to conclude that a linear fit is reasonable. The challenge here is to make precise what we mean by as close as possible . We have differences (sometimes called residuals ) that we want to make small, by adjusting and . But making one of the smaller might make another one larger!  A measure of the overall error in the fit of the line is given by the sum of squares , and this is the quantity that we want to minimize. (Hence the name, least squares .)  Let , and note that . Set and . Then , where . (Note that we are using to denote a different sort of vector than on the previous page.)  We can safely assume that an exact solution is impossible, so we search for an approximate one, with as small as possible. (Note that the magnitude of satisfies .) But a solution that makes as small as possible is exactly the sort of approximate solution that we just learned to calculate! Solving the normal equations for , we find that .     Find the equation of the best fit line for the following set of data points: .     Suppose we were instead trying to find the best quadratic fit for a dataset. What would our parameters be? What would the matrix look like? Illustrate with an example of your own.    "
},
{
  "id": "p-1471",
  "level": "2",
  "url": "worksheet-least-squares.html#p-1471",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "overdetermined "
},
{
  "id": "p-1485",
  "level": "2",
  "url": "worksheet-least-squares.html#p-1485",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal equations "
},
{
  "id": "exercise-148",
  "level": "2",
  "url": "worksheet-least-squares.html#exercise-148",
  "type": "Worksheet Exercise",
  "number": "3.5.1",
  "title": "",
  "body": " Confirm that the system has no solution.  "
},
{
  "id": "ex-least-sq1",
  "level": "2",
  "url": "worksheet-least-squares.html#ex-least-sq1",
  "type": "Worksheet Exercise",
  "number": "3.5.2",
  "title": "",
  "body": " Find an orthogonal basis for the column space of .  "
},
{
  "id": "ex-least-sq2",
  "level": "2",
  "url": "worksheet-least-squares.html#ex-least-sq2",
  "type": "Worksheet Exercise",
  "number": "3.5.3",
  "title": "",
  "body": " Compute the projection of onto the column space of .  "
},
{
  "id": "ex-least-sq3",
  "level": "2",
  "url": "worksheet-least-squares.html#ex-least-sq3",
  "type": "Worksheet Exercise",
  "number": "3.5.4",
  "title": "",
  "body": " Solve the system for .  "
},
{
  "id": "ex-least-sq4",
  "level": "2",
  "url": "worksheet-least-squares.html#ex-least-sq4",
  "type": "Worksheet Exercise",
  "number": "3.5.5",
  "title": "",
  "body": " Solve the normal equations for .  "
},
{
  "id": "p-1493",
  "level": "2",
  "url": "worksheet-least-squares.html#p-1493",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "residuals "
},
{
  "id": "ex-least-sq5",
  "level": "2",
  "url": "worksheet-least-squares.html#ex-least-sq5",
  "type": "Worksheet Exercise",
  "number": "3.5.6",
  "title": "",
  "body": " Find the equation of the best fit line for the following set of data points: .  "
},
{
  "id": "ex-least-sq6",
  "level": "2",
  "url": "worksheet-least-squares.html#ex-least-sq6",
  "type": "Worksheet Exercise",
  "number": "3.5.7",
  "title": "",
  "body": " Suppose we were instead trying to find the best quadratic fit for a dataset. What would our parameters be? What would the matrix look like? Illustrate with an example of your own.  "
},
{
  "id": "sec-eigen-basics",
  "level": "1",
  "url": "sec-eigen-basics.html",
  "type": "Section",
  "number": "4.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors  We jump right into the definition, which you have probably seen previously in your first course in linear algebra.    Let be an matrix. A number is called an eigenvalue of if there exists a nonzero vector such that . Any such vector is called an eigenvector associated to the eigenvalue .     You might reasonably wonder: where does this definition come from? And why should I care? We are assuming that you saw at least a basic introduction to eigenvalues in your first course on linear algebra, but that course probably focused on mechanics. Possibly you learned that diagonalizing a matrix lets you compute powers of that matrix.  But why should we be interested in computing powers (in particular, large powers) of a matrix? An important context comes from the study of discrete linear dynamical systems , as well as Markov chains , where the evolution of a state is modelled by repeated multiplication of a vector by a matrix.  When we're able to diagonalize our matrix using eigenvalues and eigenvectors, not only does it become easy to compute powers of a matrix, it also enables us to see that the entire process is just a linear combination of geometric sequences! If you have completed , you probably will not be surprised to learn that the polynomial roots you found are, in fact, eigenvalues of a suitable matrix.     Eigenvalues and eigenvectors can just as easily be defined for a general linear operator . In this context, an eigenvector is sometimes referred to as a characteristic vector (or characteristic direction) for , since the property simply states that the transformed vector is parallel to the original vector . Some linear algebra textbooks that focus more on general linear transformations frame this topic in the context of invariant subspaces for a linear operator.  A subspace is invariant with respect to if for all . Note that if is an eigenvector of , then is an invariant subspace. To see this, note that if and , then .    For the matrix , match each vector on the left with the corresponding eigenvalue on the right. (For typographical reasons, column vectors have been transposed.)                 Not an eigenvector    Use .   Note that if is an eigenvector of the matrix , then we have , where denotes the identity matrix. Thus, if is an eigenvalue of , any corresponding eigenvector is an element of .    For any real number and matrix , we define the eigenspace  by .    Since we know that the null space of any matrix is a subspace, it follows that eigenspaces are subspaces of .  Note that can be defined for any real number , whether or not is an eigenvalue. However, the eigenvalues of are distinguished by the property that there is a nonzero solution to . Furthermore, we know that can only have nontrivial solutions if the matrix is not invertible. We also know that is non-invertible if and only if . This gives us the following theorem.    The following are equivalent for any matrix and real number :    is an eigenvalue of .             Strategy  To prove a theorem involving a the following are equivalent statement, a good strategy is to show that the first implies the second, the second implies the third, and the third implies the first. The ideas needed for the proof are given in the paragraph preceding the theorem. See if you can turn them into a formal proof.    The polynomial is called the characteristic polynomial of . (Note that . We choose this order so that the coefficient of is always 1.) The equation is called the characteristic equation of . The solutions to this equation are precisely the eigenvalues of .   A careful study of eigenvalues and eigenvectors relies heavily on polynomials. An interesting fact is that we can plug any square matrix into a polynomial! Given the polynomial and an matrix , we define . Note the use of the identity matrix in the first term, since it doesn't make sense to add a scalar to a matrix.  One interesting aspect of this is the relationship between the eigenvalues of and the eigenvalues of . For example, if has the eigenvalue , see if you can prove that has the eigenvalue .    In order for certain properties of a matrix to be satisfied, the eigenvalues of need to have particular values. Match each property of a matrix on the left with the corresponding information about the eigenvalues of on the right. Be sure that you can justify your answers with a suitable proof.    is invertible  is not an eigenvalue of    for some integar  is the only eigenvalue of     and are the only eigenvalues of     and are the only eigenvalues of     , , and are the eigenvalues of    Recall that a matrix is said to be similar to a matrix if there exists an invertible matrix such that . Much of what follows concerns the question of whether or not a given matrix is diagonalizable .    An matrix is said to be diagonalizable if is similar to a diagonal matrix.    The following results will frequently be useful.    The relation if and only if is similar to is an equivalence relation. Moreover, if , then:           In other words, and have the same determinant, trace, and characteristic polynomial (and thus, the same eigenvalues).    The first two follow directly from properties of the determinant and trace. For the last, note that if , then , so , and therefore .      Determine the eigenvalues and eigenvectors of .    We begin with the characteristic polynomial. We have .  The roots of the characteristic polynomial are our eigenvalues, so we have and . Note that the first eigenvalue comes from a repeated root. This is typically where things get interesting. If an eigenvalue does not come from a repeated root, then there will only be one (independent) eigenvector that corresponds to it. (That is, .) If an eigenvalue is repeated, it could have more than one eigenvector, but this is not guaranteed.  We find that , which has reduced row-echelon form . Solving for the nullspace, we find that there are two independent eigenvectors: , so .  For the second eigenvector, we have , which has reduced row-echelon form . An eigenvector in this case is given by .    In general, if the characteristic polynomial can be factored as , where is not divisible by , then we say that is an eigenvalue of multiplicity  . In the example above, has multiplicty 2, and has multiplicty 1.  The eigenvects command in SymPy takes a square matrix as input, and outputs a list of lists (one list for each eigenvalue). For a given eigenvalue, the corresponding list has the form (eigenvalue, multiplicity, eigenvectors) . Using SymPy to solve looks as follows:   An important result about multiplicity is the following.    Let be an eigenvalue of of multiplicity . Then .     Some textbooks refer to the multiplicity of an eigenvalue as the algebraic multiplicity of , and the number as the geometric multiplicity of .   To prove we need the following lemma, which we've borrowed from Section 5.5 of Nicholson's textbook.    Let be a set of linearly independent eigenvectors of a matrix , with corresponding eigenvalues (not necessarily distinct). Extend this set to a basis , and let be the matrix whose columns are the basis vectors. (Note that is necessarily invertible.) Then , where has size , and has size .    We have . For , we have . But is the th column of , which proves the result.    We can use to prove that as follows. Suppose is a basis for . Then this is a linearly independent set of eigenvectors, so our lemma guarantees the existence of a matrix such that . Let . On the one hand, since , we have . On the other hand, . This shows that is divisible by . Since is the largest integer such that is divisible by , we must have .  Another important result is the following. The proof is a bit tricky: it requires mathematical induction, and a couple of clever observations.    Let be eigenvectors corresponding to distinct eigenvalues of a matrix . Then is linearly independent.    The proof is by induction on the number of distinct eigenvalues. Since eigenvectors are nonzero, any set consisting of a single eigenvector is independent. Suppose, then, that a set of eigenvectors corresponding to distinct eigenvalues is independent, and let be eigenvectors corresponding to distinct eigenvalues .  Consider the equation , for scalars . Multiplying both sides by the matrix , we have .  On the other hand, we can also multiply both sides by the eigenvalue , giving . Subtracting from , the first temrs cancel, and we get .  By hypothesis, the set of eigenvectors is linearly independent. We know that for , since the eigenvalues are all distinct. Therefore, the only way this linear combination can equal zero is if . This leaves us with , but , so as well.     tells us that vectors from different eigenspaces are independent. In particular, a union of bases from each eigenspace will be an independent set. Therefore, provides an initial criterion for diagonalization: if the dimension of each eigenspace is equal to the multiplicity of , then is diagonalizable.  Our focus in the next section will be on diagonalization of symmetric matrices, and soon we will see that for such matrices, eigenvectors corresponding to different eigenvalues are not just independent, but orthogonal .     Find the characteristic polynomial of the matrix              Find the three distinct real eigenvalues of the matrix              The matrix has two real eigenvalues, one of multiplicity and one of multiplicity . Find the eigenvalues and a basis for each eigenspace.                             The matrix has two distinct real eigenvalues . Find the eigenvalues and a basis for each eigenspace.                             The matrix has three distinct real eigenvalues if and only if    .                   The matrix has two real eigenvalues . Find these eigenvalues, their multiplicities, and the dimensions of their corresponding eigenspaces.  The smaller eigenvalue  has multiplicity and the dimension of its corresponding eigenspace is .  The larger eigenvalue  has multiplicity and the dimension of its corresponding eigenspace is .                                       Supppose is an invertible matrix and is an eigenvector of with associated eigenvalue . Convince yourself that is an eigenvector of the following matrices, and find the associated eigenvalues.    The eigenvalue of the matrix .    The eigenvalue of the matrix .    The eigenvalue of the matrix .    The eigenvalue of the matrix .                               Let be eigenvectors of the matrix which correspond to the eigenvalues , , and , respectively, and let  Express as a linear combination , and find .                             Recall that similarity of matrices is an equivalence relation; that is, the relation is reflexive, symmetric and transitive.  Verify that is similar to itself by finding a such that .  We know that and are similar since where .  Verify that by finding an such that .  We also know that and are similar since where .  Verify that by finding an such that .                       "
},
{
  "id": "def-eigenvalue",
  "level": "2",
  "url": "sec-eigen-basics.html#def-eigenvalue",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  Let be an matrix. A number is called an eigenvalue of if there exists a nonzero vector such that . Any such vector is called an eigenvector associated to the eigenvalue .   "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "sec-eigen-basics.html#remark-16",
  "type": "Remark",
  "number": "4.1.2",
  "title": "",
  "body": " You might reasonably wonder: where does this definition come from? And why should I care? We are assuming that you saw at least a basic introduction to eigenvalues in your first course on linear algebra, but that course probably focused on mechanics. Possibly you learned that diagonalizing a matrix lets you compute powers of that matrix.  But why should we be interested in computing powers (in particular, large powers) of a matrix? An important context comes from the study of discrete linear dynamical systems , as well as Markov chains , where the evolution of a state is modelled by repeated multiplication of a vector by a matrix.  When we're able to diagonalize our matrix using eigenvalues and eigenvectors, not only does it become easy to compute powers of a matrix, it also enables us to see that the entire process is just a linear combination of geometric sequences! If you have completed , you probably will not be surprised to learn that the polynomial roots you found are, in fact, eigenvalues of a suitable matrix.   "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "sec-eigen-basics.html#remark-17",
  "type": "Remark",
  "number": "4.1.3",
  "title": "",
  "body": " Eigenvalues and eigenvectors can just as easily be defined for a general linear operator . In this context, an eigenvector is sometimes referred to as a characteristic vector (or characteristic direction) for , since the property simply states that the transformed vector is parallel to the original vector . Some linear algebra textbooks that focus more on general linear transformations frame this topic in the context of invariant subspaces for a linear operator.  A subspace is invariant with respect to if for all . Note that if is an eigenvector of , then is an invariant subspace. To see this, note that if and , then .  "
},
{
  "id": "ex-match-eigen1",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-match-eigen1",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": " For the matrix , match each vector on the left with the corresponding eigenvalue on the right. (For typographical reasons, column vectors have been transposed.)                 Not an eigenvector    Use .  "
},
{
  "id": "def-eigenspace",
  "level": "2",
  "url": "sec-eigen-basics.html#def-eigenspace",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": "  For any real number and matrix , we define the eigenspace  by .   "
},
{
  "id": "thm-eigenspace-nonzero",
  "level": "2",
  "url": "sec-eigen-basics.html#thm-eigenspace-nonzero",
  "type": "Theorem",
  "number": "4.1.6",
  "title": "",
  "body": "  The following are equivalent for any matrix and real number :    is an eigenvalue of .             Strategy  To prove a theorem involving a the following are equivalent statement, a good strategy is to show that the first implies the second, the second implies the third, and the third implies the first. The ideas needed for the proof are given in the paragraph preceding the theorem. See if you can turn them into a formal proof.   "
},
{
  "id": "p-1517",
  "level": "2",
  "url": "sec-eigen-basics.html#p-1517",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic polynomial characteristic equation "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "sec-eigen-basics.html#remark-18",
  "type": "Remark",
  "number": "4.1.7",
  "title": "",
  "body": " A careful study of eigenvalues and eigenvectors relies heavily on polynomials. An interesting fact is that we can plug any square matrix into a polynomial! Given the polynomial and an matrix , we define . Note the use of the identity matrix in the first term, since it doesn't make sense to add a scalar to a matrix.  One interesting aspect of this is the relationship between the eigenvalues of and the eigenvalues of . For example, if has the eigenvalue , see if you can prove that has the eigenvalue .  "
},
{
  "id": "ex-match-eigen2",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-match-eigen2",
  "type": "Exercise",
  "number": "4.1.8",
  "title": "",
  "body": " In order for certain properties of a matrix to be satisfied, the eigenvalues of need to have particular values. Match each property of a matrix on the left with the corresponding information about the eigenvalues of on the right. Be sure that you can justify your answers with a suitable proof.    is invertible  is not an eigenvalue of    for some integar  is the only eigenvalue of     and are the only eigenvalues of     and are the only eigenvalues of     , , and are the eigenvalues of   "
},
{
  "id": "p-1521",
  "level": "2",
  "url": "sec-eigen-basics.html#p-1521",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "similar diagonalizable "
},
{
  "id": "def-diagonalizable",
  "level": "2",
  "url": "sec-eigen-basics.html#def-diagonalizable",
  "type": "Definition",
  "number": "4.1.9",
  "title": "",
  "body": "  An matrix is said to be diagonalizable if is similar to a diagonal matrix.   "
},
{
  "id": "thm-similar-properties",
  "level": "2",
  "url": "sec-eigen-basics.html#thm-similar-properties",
  "type": "Theorem",
  "number": "4.1.10",
  "title": "",
  "body": "  The relation if and only if is similar to is an equivalence relation. Moreover, if , then:           In other words, and have the same determinant, trace, and characteristic polynomial (and thus, the same eigenvalues).    The first two follow directly from properties of the determinant and trace. For the last, note that if , then , so , and therefore .   "
},
{
  "id": "example-eigenvectors",
  "level": "2",
  "url": "sec-eigen-basics.html#example-eigenvectors",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "  Determine the eigenvalues and eigenvectors of .    We begin with the characteristic polynomial. We have .  The roots of the characteristic polynomial are our eigenvalues, so we have and . Note that the first eigenvalue comes from a repeated root. This is typically where things get interesting. If an eigenvalue does not come from a repeated root, then there will only be one (independent) eigenvector that corresponds to it. (That is, .) If an eigenvalue is repeated, it could have more than one eigenvector, but this is not guaranteed.  We find that , which has reduced row-echelon form . Solving for the nullspace, we find that there are two independent eigenvectors: , so .  For the second eigenvector, we have , which has reduced row-echelon form . An eigenvector in this case is given by .   "
},
{
  "id": "p-1531",
  "level": "2",
  "url": "sec-eigen-basics.html#p-1531",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiplicity "
},
{
  "id": "thm-multiplicity",
  "level": "2",
  "url": "sec-eigen-basics.html#thm-multiplicity",
  "type": "Theorem",
  "number": "4.1.12",
  "title": "",
  "body": "  Let be an eigenvalue of of multiplicity . Then .   "
},
{
  "id": "lem-block-eigen",
  "level": "2",
  "url": "sec-eigen-basics.html#lem-block-eigen",
  "type": "Lemma",
  "number": "4.1.13",
  "title": "",
  "body": "  Let be a set of linearly independent eigenvectors of a matrix , with corresponding eigenvalues (not necessarily distinct). Extend this set to a basis , and let be the matrix whose columns are the basis vectors. (Note that is necessarily invertible.) Then , where has size , and has size .    We have . For , we have . But is the th column of , which proves the result.   "
},
{
  "id": "thm-eigen-independent",
  "level": "2",
  "url": "sec-eigen-basics.html#thm-eigen-independent",
  "type": "Theorem",
  "number": "4.1.14",
  "title": "",
  "body": "  Let be eigenvectors corresponding to distinct eigenvalues of a matrix . Then is linearly independent.    The proof is by induction on the number of distinct eigenvalues. Since eigenvectors are nonzero, any set consisting of a single eigenvector is independent. Suppose, then, that a set of eigenvectors corresponding to distinct eigenvalues is independent, and let be eigenvectors corresponding to distinct eigenvalues .  Consider the equation , for scalars . Multiplying both sides by the matrix , we have .  On the other hand, we can also multiply both sides by the eigenvalue , giving . Subtracting from , the first temrs cancel, and we get .  By hypothesis, the set of eigenvectors is linearly independent. We know that for , since the eigenvalues are all distinct. Therefore, the only way this linear combination can equal zero is if . This leaves us with , but , so as well.   "
},
{
  "id": "ex-ww-eigen1",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-ww-eigen1",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "  Find the characteristic polynomial of the matrix           "
},
{
  "id": "ex-ww-eigen2",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-ww-eigen2",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "  Find the three distinct real eigenvalues of the matrix           "
},
{
  "id": "ex-ww-eigen3",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-ww-eigen3",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "  The matrix has two real eigenvalues, one of multiplicity and one of multiplicity . Find the eigenvalues and a basis for each eigenspace.                          "
},
{
  "id": "ex-ww-eigen4",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-ww-eigen4",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "  The matrix has two distinct real eigenvalues . Find the eigenvalues and a basis for each eigenspace.                          "
},
{
  "id": "ex-ww-eigen5",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-ww-eigen5",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "  The matrix has three distinct real eigenvalues if and only if    .                "
},
{
  "id": "ex-ww-eigen6",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-ww-eigen6",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "",
  "body": "  The matrix has two real eigenvalues . Find these eigenvalues, their multiplicities, and the dimensions of their corresponding eigenspaces.  The smaller eigenvalue  has multiplicity and the dimension of its corresponding eigenspace is .  The larger eigenvalue  has multiplicity and the dimension of its corresponding eigenspace is .                                    "
},
{
  "id": "ex-ww-eigen7",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-ww-eigen7",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "",
  "body": "  Supppose is an invertible matrix and is an eigenvector of with associated eigenvalue . Convince yourself that is an eigenvector of the following matrices, and find the associated eigenvalues.    The eigenvalue of the matrix .    The eigenvalue of the matrix .    The eigenvalue of the matrix .    The eigenvalue of the matrix .                            "
},
{
  "id": "ex-ww-eigen8",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-ww-eigen8",
  "type": "Exercise",
  "number": "4.1.8",
  "title": "",
  "body": "  Let be eigenvectors of the matrix which correspond to the eigenvalues , , and , respectively, and let  Express as a linear combination , and find .                          "
},
{
  "id": "ex-ww-eigen9",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-ww-eigen9",
  "type": "Exercise",
  "number": "4.1.9",
  "title": "",
  "body": "  Recall that similarity of matrices is an equivalence relation; that is, the relation is reflexive, symmetric and transitive.  Verify that is similar to itself by finding a such that .  We know that and are similar since where .  Verify that by finding an such that .  We also know that and are similar since where .  Verify that by finding an such that .                     "
},
{
  "id": "subsec-ortho-diag",
  "level": "1",
  "url": "subsec-ortho-diag.html",
  "type": "Section",
  "number": "4.2",
  "title": "Diagonalization of symmetric matrices",
  "body": " Diagonalization of symmetric matrices  Recall that an matrix is symmetric if . Symmetry of is equivalent to the following: for any vectors , . To see that this is implied by the symmetry of , note that .   For inner product spaces, the above is taken as the definition of what it means for an operator to be symmetric.    Prove that if for any , then is symmetric.   If this condition is true for all , then it is true in particular for the vectors in the standard basis for .   Take and , where is the standard basis for . Then with we have , which shows that .   A useful property of symmetric matrices, mentioned earlier, is that eigenvectors corresponding to distinct eigenvalues are orthogonal.    If is a symmetric matrix, then eigenvectors corresponding to distinct eigenvalues are orthogonal.    Strategy  We want to show that if are eigenvectors corresponding to distinct eigenvalues , then . It was pointed out above that since is symmetric, we know . Can you see how to use this, and the fact that are eigenvectors, to prove the result?    To see this, suppose is symmetric, and that we have , with , and . We then have, since is symmetric, and using the result above, . It follows that , and since , we must have .    The procedure for diagonalizing a matrix is as follows: assuming that is equal to the multiplicity of for each distinct eigenvalue , we find a basis for . The union of the bases for each eigenspace is then a basis of eigenvectors for , and the matrix whose columns are those eigenvectors will satisfy , where is a diagonal matrix whose diagonal entries are the eigenvalues of .  If is symmetric, we know that eigenvectors from different eigenspaces will be orthogonal to each other. If we further choose an orthogonal basis of eigenvectors for each eigenspace (which is possible via the Gram-Schmidt procedure), then we can construct an orthogonal basis of eigenvectors for . Furthermore, if we normalize each vector, then we'll have an orthonormal basis. The matrix whose columns consist of these orthonormal basis vectors has a name.    A matrix is called orthogonal if .      A matrix is orthogonal if and only if the columns of form an orthonormal basis for .    Strategy  This more or less amounts to the fact that if and only if , and thinking about the matrix product in terms of dot products.    A fun fact is that if the columns of are orthonormal, then so are the rows. But this is not true if we ask for the columns to be merely orthogonal. For example, the columns of are orthogonal, but (as you can check) the rows are not. But if we normalize the columns, we get , which, as you can confirm, is an orthogonal matrix.    An matrix is said to be orthogonally diagonalizable if there exists an orthogonal matrix such that is diagonal.    The above definition leads to the following result, also known as the Principal Axes Theorem. A careful proof is quite difficult, and omitted from this book. The hard part is showing that any symmetric matrix is orthogonally diagonalizable. There are a few ways to do this, most requiring induction on the size of the matrix. A common approach actually uses multivariable calculus! (Optimization via Lagrange multipliers, to be precise.) If you are reading this along with the book by Nicholson, there is a gap in his proof: in the induction step, he assumes the existence of a real eigenalue of , but this has to be proved!   Real Spectral Theorem   The following are equivalent for a real matrix :    is symmetric.    There is an orthonormal basis for consisting of eigenvectors of .     is orthogonally diagonalizable.        Determine the eigenvalues of , and find an orthogonal matrix such that is diagonal.   We'll solve this problem with the help of the computer.   We get , so our eigenvalues are and . For we have :   For we have .   The approach above is useful as we're trying to remind ourselves how eigenvalues and eigenvectors are defined and computed. Eventually we might want to be more efficient. Fortunately, there's a command for that.   Note that the output above lists each eigenvalue, followed by its multiplicity, and then the associated eigenvectors.  This gives us a basis for consisting of eigenvalues of , but we want an orthogonal basis. Note that the eigenvector corresponding to is orthogonal to both of the eigenvectors corresponding to . But these eigenvectors are not orthogonal to each other. To get an orthogonal basis for , we apply the Gram-Schmidt algorithm.   This gives us an orthogonal basis of eigenvectors. Scaling to clear fractions, we have From here, we need to normalize each vector to get the matrix . But we might not like that the last vector has norm . One option to consider is to apply Gram-Schmidt with the vectors in the other order.   That gives us the (slightly nicer) basis . The corresponding orthonormal basis is . This gives us the matrix . Let's confirm that is orthogonal.   Since , we can conclude that , so is orthogonal, as required. Finally, we diagonalize .   Incidentally, the SymPy library for Python does have a diagaonalization routine; however, it does not do orthogonal diagonalization by default. Here is what it provides for our matrix .    "
},
{
  "id": "p-1600",
  "level": "2",
  "url": "subsec-ortho-diag.html#p-1600",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "ex-diagonal-prove-symmetric",
  "level": "2",
  "url": "subsec-ortho-diag.html#ex-diagonal-prove-symmetric",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": " Prove that if for any , then is symmetric.   If this condition is true for all , then it is true in particular for the vectors in the standard basis for .   Take and , where is the standard basis for . Then with we have , which shows that .  "
},
{
  "id": "thm-ortho-eigen-symm",
  "level": "2",
  "url": "subsec-ortho-diag.html#thm-ortho-eigen-symm",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "",
  "body": "  If is a symmetric matrix, then eigenvectors corresponding to distinct eigenvalues are orthogonal.    Strategy  We want to show that if are eigenvectors corresponding to distinct eigenvalues , then . It was pointed out above that since is symmetric, we know . Can you see how to use this, and the fact that are eigenvectors, to prove the result?    To see this, suppose is symmetric, and that we have , with , and . We then have, since is symmetric, and using the result above, . It follows that , and since , we must have .   "
},
{
  "id": "def-orthogonal-matrix",
  "level": "2",
  "url": "subsec-ortho-diag.html#def-orthogonal-matrix",
  "type": "Definition",
  "number": "4.2.3",
  "title": "",
  "body": "  A matrix is called orthogonal if .   "
},
{
  "id": "thm-ortho-matrix",
  "level": "2",
  "url": "subsec-ortho-diag.html#thm-ortho-matrix",
  "type": "Theorem",
  "number": "4.2.4",
  "title": "",
  "body": "  A matrix is orthogonal if and only if the columns of form an orthonormal basis for .    Strategy  This more or less amounts to the fact that if and only if , and thinking about the matrix product in terms of dot products.   "
},
{
  "id": "def-ortho-diag",
  "level": "2",
  "url": "subsec-ortho-diag.html#def-ortho-diag",
  "type": "Definition",
  "number": "4.2.5",
  "title": "",
  "body": "  An matrix is said to be orthogonally diagonalizable if there exists an orthogonal matrix such that is diagonal.   "
},
{
  "id": "thm-real-spectral",
  "level": "2",
  "url": "subsec-ortho-diag.html#thm-real-spectral",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "Real Spectral Theorem.",
  "body": " Real Spectral Theorem   The following are equivalent for a real matrix :    is symmetric.    There is an orthonormal basis for consisting of eigenvectors of .     is orthogonally diagonalizable.      "
},
{
  "id": "ex-diagonal-orthogonal",
  "level": "2",
  "url": "subsec-ortho-diag.html#ex-diagonal-orthogonal",
  "type": "Exercise",
  "number": "4.2.7",
  "title": "",
  "body": " Determine the eigenvalues of , and find an orthogonal matrix such that is diagonal.   We'll solve this problem with the help of the computer.   We get , so our eigenvalues are and . For we have :   For we have .   The approach above is useful as we're trying to remind ourselves how eigenvalues and eigenvectors are defined and computed. Eventually we might want to be more efficient. Fortunately, there's a command for that.   Note that the output above lists each eigenvalue, followed by its multiplicity, and then the associated eigenvectors.  This gives us a basis for consisting of eigenvalues of , but we want an orthogonal basis. Note that the eigenvector corresponding to is orthogonal to both of the eigenvectors corresponding to . But these eigenvectors are not orthogonal to each other. To get an orthogonal basis for , we apply the Gram-Schmidt algorithm.   This gives us an orthogonal basis of eigenvectors. Scaling to clear fractions, we have From here, we need to normalize each vector to get the matrix . But we might not like that the last vector has norm . One option to consider is to apply Gram-Schmidt with the vectors in the other order.   That gives us the (slightly nicer) basis . The corresponding orthonormal basis is . This gives us the matrix . Let's confirm that is orthogonal.   Since , we can conclude that , so is orthogonal, as required. Finally, we diagonalize .   Incidentally, the SymPy library for Python does have a diagaonalization routine; however, it does not do orthogonal diagonalization by default. Here is what it provides for our matrix .   "
},
{
  "id": "sec-quadratic",
  "level": "1",
  "url": "sec-quadratic.html",
  "type": "Section",
  "number": "4.3",
  "title": "Quadratic forms",
  "body": " Quadratic forms  If you've done a couple of calculus courses, you've probably encountered conic sections, like the ellipse or the parabola . You might also recall that your instructor was careful to avoid conic sections with equations including cross-terms like . The reason for this is that sketching a conic section like requires the techniques of the previous section.  A basic fact about orthogonal matrices is that they preserve length . Indeed, for any vector in and any orthogonal matrix , , since .  Note also that since and , we have , so . If , we have what is called a special orthogonal matrix . In or , multiplication by a special orthogonal matrix is simply a rotation. (If , there is also a reflection.)  We mentioned in the previous section that the is also referred to as the principal axes theorem. The name comes from the fact that one way to interpret the orthogonal diagonalization of a symmetric matrix is that we are rotating our coordinate system. The original coordinate axes are rotated to new coordinate axes, with respect to which the matrix is diagonal. This will become more clear once we apply these ideas to the problem of conic sections mentioned above. First, a definition.    A quadratic form on variables is any expression of the form .    For example, and are quadratic forms. Note that each term in a quadratic form is of degree two. We omit linear terms, since these can be absorbed by completing the square. The important observation is that every quadratic form can be associated to a symmetric matrix. The diagonal entries are the coefficients appearing in , while the off-diagonal entries are half the corresponding coefficients .  For example the two quadratic forms given above have the following associated matrices: . The reason for this is that we can then write and .  Of course, the reason for wanting to associate a symmetric matrix to a quadratic form is that it can be orthogonally diagonalized. Consider the matrix .   We find distinct eigenvalues and . Since is symmetric, we know the corresponding eigenvectors will be orthogonal.   The resulting orthogonal matrix is , and we find where . If we define new variables by , then we find that . Note that there is no longer any cross term.  Now, suppose we want to graph the conic . By changing to the variables this becomes , or . This is the standard from of an ellipse, but in terms of new variables. How do we graph it? Returning to the definition of our new variables, we find and . The axis should be the line , or . (Note that this line points in the direction of the eigenvector .) The axis should be the line , or , which is in the direction of the eigenvector .  This lets us see that our new coordinate axes are simply a rotation (by ) of the old coordinate axes, and our conic section is, accordingly, an ellipse that has been rotated by the same angle.   One reason to study quadratic forms is the classification of critical points in calculus. You may recall (if you took Calculus 1) that for a differentiable function , if and at some number , then has a local minimum at . Similarly, if and , then has a local maximum at .  For functions of two or more variables, determining whether a critical point is a maximum or minimum (or something else) is more complicated. Or rather, it is more complicated for those unfamiliar with linear algebra! The second-order partial derivatives of our function can be arranged into a matrix called the Hessian matrix. For example, a function of two variables has first-order partial derivatives and with respect to and , respectively, and second-order partial derivatives (twice with respect to ), (first , then ), (first , then ), and (twice with respect to ).  The Hessian matrix at a point is . As long as the second-order partial derivatives are continuous at , it is guaranteed that the Hessian matrix is symmetric ! That means that there is a corresponding quadratic form, and when the first-order derivatives and are both zero (a critical point), it turns out that this quadratic form provides the best quadratic approximation to near the point . This is true for three or more variables as well.  The eigenvalues of this matrix then give us some information about the behaviour of our function near the critical point. If all eigenvalues are positive at a point, we say that the corresponding quadratic form is positive-definite , and the function has a local minimum at that point. If all eigenvalues are negative at a point, we say that the corresponding quadratic form is negative-definite , and the function has a local maximum at that point. If all eigenvalues are nonzero at a point, with some positive and some negative, we say that has a saddle point . The corresponding quadratic form is called indefinite , and this term applies even if some eigenvalues are zero.  If a quadratic form corresponds to a symmetric matrix whose eigenvalues are positive or zero , we say that the quadratic form is positive-semidefinite . Similarly, a negative-semidefinite quadratic form corresponds to symmetric matrix whose eigenvalues are all less than or equal to zero.      Write the matrix of the quadratic form              Determine the quadratic form associated to the matrix              The matrix has three distinct eigenvalues, . Find the eigenvalues, and classify the quadratic form .                  "
},
{
  "id": "def-quadratic-form",
  "level": "2",
  "url": "sec-quadratic.html#def-quadratic-form",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  A quadratic form on variables is any expression of the form .   "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-quadratic.html#remark-19",
  "type": "Remark",
  "number": "4.3.2",
  "title": "",
  "body": " One reason to study quadratic forms is the classification of critical points in calculus. You may recall (if you took Calculus 1) that for a differentiable function , if and at some number , then has a local minimum at . Similarly, if and , then has a local maximum at .  For functions of two or more variables, determining whether a critical point is a maximum or minimum (or something else) is more complicated. Or rather, it is more complicated for those unfamiliar with linear algebra! The second-order partial derivatives of our function can be arranged into a matrix called the Hessian matrix. For example, a function of two variables has first-order partial derivatives and with respect to and , respectively, and second-order partial derivatives (twice with respect to ), (first , then ), (first , then ), and (twice with respect to ).  The Hessian matrix at a point is . As long as the second-order partial derivatives are continuous at , it is guaranteed that the Hessian matrix is symmetric ! That means that there is a corresponding quadratic form, and when the first-order derivatives and are both zero (a critical point), it turns out that this quadratic form provides the best quadratic approximation to near the point . This is true for three or more variables as well.  The eigenvalues of this matrix then give us some information about the behaviour of our function near the critical point. If all eigenvalues are positive at a point, we say that the corresponding quadratic form is positive-definite , and the function has a local minimum at that point. If all eigenvalues are negative at a point, we say that the corresponding quadratic form is negative-definite , and the function has a local maximum at that point. If all eigenvalues are nonzero at a point, with some positive and some negative, we say that has a saddle point . The corresponding quadratic form is called indefinite , and this term applies even if some eigenvalues are zero.  If a quadratic form corresponds to a symmetric matrix whose eigenvalues are positive or zero , we say that the quadratic form is positive-semidefinite . Similarly, a negative-semidefinite quadratic form corresponds to symmetric matrix whose eigenvalues are all less than or equal to zero.  "
},
{
  "id": "ex-ww-quadratic1",
  "level": "2",
  "url": "sec-quadratic.html#ex-ww-quadratic1",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": "  Write the matrix of the quadratic form           "
},
{
  "id": "ex-ww-quadratic2",
  "level": "2",
  "url": "sec-quadratic.html#ex-ww-quadratic2",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "  Determine the quadratic form associated to the matrix           "
},
{
  "id": "ex-ww-quadratic3",
  "level": "2",
  "url": "sec-quadratic.html#ex-ww-quadratic3",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "  The matrix has three distinct eigenvalues, . Find the eigenvalues, and classify the quadratic form .                "
},
{
  "id": "sec-complex",
  "level": "1",
  "url": "sec-complex.html",
  "type": "Section",
  "number": "4.4",
  "title": "Diagonalization of complex matrices",
  "body": " Diagonalization of complex matrices   Recall that when we first defined vector spaces, we mentioned that a vector space can be defined over any field  . To keep things simple, we've mostly assumed . But most of the theorems and proofs we've encountered go through unchanged if we work over a general field. (This is not quite true: over a finite field things can get more complicated. For example, if , then we get weird results like , since .)  In fact, if we replace by , about the only thing we'd have to go back and change is the definition of the dot product. The reason for this is that although the complex numbers seem computationally more complicated, (which might mostly be because you don't use them often enough) they follow the exact same algebraic rules as the real numbers. In other words, the arithmetic might be different, but the algebra is the same. There is one key difference between the two fields: over the complex numbers, every polynomial can be factored. This is important if you're interested in finding eigenvalues.  This section is written based on the assumption that complex numbers were covered in a previous course. If this was not the case, or to review this material, see before proceeding.    Complex vectors  A complex vector space is simply a vector space where the scalars are elements of rather than . Examples include polynomials with complex coefficients, complex-valued functions, and , which is defined exactly how you think it should be. In fact, one way to obtain is to start with the exact same standard basis we use for , and then take linear combinations using complex scalars.  We'll write elements of as . The complex conjugate of is given by .  The standard inner product on looks a lot like the dot product on , with one important difference: we apply a complex conjugate to the second vector.    The standard inner product on is defined as follows: given and , .    If are real, this is just the usual dot product. The reason for using the complex conjugate is to ensure that we still have a positive-definite inner product on : , which shows that , and if and only if .   Compute the dot product of and .   This isn't hard to do by hand, but it's useful to know how to ask the computer to do it, too. Unfortunately, the dot product in SymPy does not include the complex conjugate. One likely reason for this is that while most mathematicians take the complex conjugate of the second vector, some mathematicians, and most physicists, put the conjugate on the first vector. So they may have decided to remain agnostic about this choice. We can manually apply the conjugate, using Z.dot(W.H) . (The .H operation is the hermitian conjugate ; see below.)   Again, you might want to wrap that last term in simplify() (in which case you'll get for the dot product). Above, we saw that the complex inner product is designed to be positive definite, like the real inner product. The remaining properties of the complex inner product are given as follows.    For any vectors and any complex number ,    and .     and .          , and if and only if .          Using the distributive properties of matrix multiplication and the transpose, . The proof is similar when addition is in the second component. (But not identical -- you'll need the fact that the complex conjugate is distributive, rather than the transpose.)    These again follow from writing the inner product as a matrix product. , and .    Note that for any vectors , is a number, and therefore equal to its own transpose. Thus, we have , and .    This was already demonstrated above.         The norm of a vector in is given by .    Note that much like the real norm, the complex norm satisfies for any (complex) scalar .   The norm of a complex vector is always a real number.   Since the norm is computed using the modulus, which is always real and non-negative, the norm will be a real number as well. If you ever get a complex number for your norm, you've probably forgotten the complex conjugate somewhere.     Complex matrices  Linear transformations are defined in exactly the same way, and a complex matrix is simply a matrix whose entries are complex numbers. There are two important operations defined on complex matrices: the conjugate, and the conjugate transpose (also known as the hermitian transpose).    The conjugate of a matrix is the matrix . The conjugate transpose of is the matrix defined by .    Note that many textbooks use the notation for the conjugate transpose.    An matrix is called hermitian if , and unitary if . (A matrix is skew-hermitian if .)    Hermitian and unitary matrices (or more accurately, linear operators) are very important in quantum mechanics. Indeed, hermitian matrices represent observable quantities, in part because their eigenvalues are real, as we'll soon see. For us, hermitian and unitary matrices can simply be viewed as the complex counterparts of symmetric and orthogonal matrices, respectively. In fact, a real symmetric matrix is hermitian, since the conjugate has no effect on it, and similarly, a real orthogonal matrix is technically unitary. As with orthogonal matrices, a unitary matrix can also be characterized by the property that its rows and columns both form orthonormal bases.   Show that the matrix is hermitian, and that the matrix is unitary.   We have , so , and , so that .   When using SymPy, the hermitian conjugate of a matrix A is executed using A.H . (There appears to also be an equivalent operation named Dagger coming from sympy.physics.quantum , but I've had more success with .H .) The complex unit is entered as I . So for the exercise above, we can do the following.   The last line verifies that . We could also replace it with A,A.H to explicitly see the two matrices side by side. Now, let's confirm that is unitary.   Hmm... That doesn't look like the identity on the right. Maybe try replacing B*B.H with simplify(B*B.H) . (You will want to add from sympy import simplify at the top of the cell.) Or you could try B.H, B**-1 to compare results. Actually, what's interesting is that in a Sage cell, B.H == B**-1 yields False , but B.H == simplify(B**-1) yields True !  As mentioned above, hermitian matrices are the complex analogue of symmetric matrices. Recall that a key property of a symmetric matrix is its symmetry with respect to the dot product. For a symmetric matrix , we had . Hermtian matrices exhibit the same behaviour with respect to the complex inner product.    An complex matrix is hermitian if and only if for any     Note that the property is equivalent to . This gives us . Conversely, suppose for all , and let denote the standard basis for . Then , which shows that .    Next, we've noted that one advantage of doing linear algebra over is that every polynomial can be completely factored, including the characteristic polynomial. This means that we can always find eigenvalues for a matrix. When that matrix is hermitian, we get a surprising result.    For any hermitian matrix ,   The eigenvalues of are real.    Eigenvectors corresponding to distinct eigenvalues are orthogonal.          Suppose for some and . Then . Thus, , and since , we must have , which means .    Similarly, suppose are eigenvalues of , with corresponding eigenvectors . Then . This gives us . And since we already know must be real, and , we must have .       In light of , we realize that diagonalization of hermitian matrices will follow the same script as for symmetric matrices. Indeed, applies equally well in , as long as we replace the dot product with the complex inner product. This suggests the following.   Spectral Theorem   If is an hermitian matrix, then there exists an orthonormal basis of consisting of eigenvectors of . Moreover, the matrix whose columns consist of those eigenvectors is unitary, and the matrix is diagonal.     Confirm that the matrix is hermitian. Then, find the eigenvalues of , and a unitary matrix such that is diagonal.   Confirming that is almost immediate. We will use the computer below to compute the eigenvalues and eigenvectors of , but it's useful to attempt this at least once by hand. We have , so the eigenvalues are and , which are both real, as expected.  Finding eigenvectors can seem trickier than with real numbers, mostly because it is no longer immediately apparent when one row or a matrix is a multiple of another. But we know that the rows of must be parallel for a matrix, which lets proceed nonetheless.  For , we have . There are two ways one can proceed from here. We could use row operations to get to the reduced row-echelon form of . If we take this approach, we multiply row 1 by , and then take times the new row 1 and add it to row 2, to create a zero, and so on.  Easier is to realize that if we haven't made a mistake calculating our eigenvalues, then the above matrix can't be invertible, so there must be some nonzero vector in the kernel. If , then we must have , when we multiply by the first row of . This suggests that we take and , to get as our first eigenvector. To make sure we've done things correctly, we multiply by the second row of : . Success! Now we move onto the second eigenvalue.  For , we get . If we attempt to read off the answer like last time, the first row of suggests the vector . Checking the second row to confirm, we find: , as before.  Finally, we note that , so the two eigenvectors are orthogonal, as expected. We have , so our orthogonal matrix is . With a bit of effort, we can finally confirm that , as expected.   To do the above exercise using SymPy, we first define and ask for the eigenvectors.   We can now manually determine the matrix , as we did above, and input it:   To confirm it's unitary, add the line U*U.H to the above, and confirm that you get the identity matrix as output. You might need to use simplify(U*U.H) if the result is not clear. Now, to confirm that really is diagonal, go back to the cell above, and enter it. Try (U.H)*A*U , just to remind yourself that adding the simplify command is often a good idea.  If you want to cut down on the manual labour involved, we can make use of some of the other tools SymPy provides. In the next cell, we're going to assign the output of A.eigenvects() to a list. The only trouble is that the output of the eigenvector command is a list of lists. Each list item is a list (eigenvalue, multiplicity, [eigenvectors]) .   Try the above modifications, in sequence. First, replacing the second line by L[0] will give the first list item, which is another list: . We want the third item in the list, so try (L[0])[2] . But note the extra set of brackets! There could (in theory) be more than one eigenvector, so this is a list with one item. To finally get the vector out, try ((L[0])[2])[0] . (There is probably a better way to do this. Someone who is more fluent in Python is welcome to advise.)  Now that we know how to extract the eigenvectors, we can normalize them, and join them to make a matrix. The norm of a vector is simnply v.norm() , and to join column vectors u1 and u2 to make a matrix, we can use the command u1.row_join(u2) . We already defined the matrix A and list L above, but here is the whole routine in one cell, in case you didn't run all the cells above.   Believe me, you want the simplify command on that last matrix.  While guarantees that any hermitian matrix can be unitarily diagonalized , there are also non-hermitian matrices for which this can be done as well. A classic example of this is the rotation matrix . This is a real matrix with complex eigenvalues , and while it is neither symmetric nor hermitian, it can be orthogonally diagonalized. This should be contrasted with the real spectral theorem, where any matrix that can be orthogonally diagonalized is necessarily symmetric.  This suggests that perhaps hermitian matrices are not quite the correct class of matrix for which the spectral theorem should be stated. Indeed, it turns out there is a somewhat more general class of matrix: the normal matrices.    An matrix is normal if .    Select all matrices below that are normal.         This matrix is hermitian, and we know that every hermitian matrix is normal.           This matrix is not normal; this can be confirmed by direct computation, or by noting that it cannot be diagonalized.           This matrix is unitary, and every unitary matrix is normal.           This matrix is neither hermitian nor unitary, but it is normal, which can be verified by direct computation.     It turns out that a matrix is normal if and only if for some unitary matrix and diagonal matrix . A further generalization is known as Schur's Theorem .    For any complex matrix , there exists a unitary matrix such that is upper-triangular, and such that the diagonal entries of are the eigenvalues of .    Using Schur's Theorem, we can obtain a famous result, known as the Cayley-Hamilton Theorem, for the case of complex matrices. (It is true for real matrices as well, but we don't yet have the tools to prove it.) The Cayley-Hamilton Theorem states that substituting any matrix into its characteristic polynomial results in the zero matrix. To understand this result, we should first explain how to define a polynomial of a matrix.  Given a polynomial , we define as . (Note the presence of the identity matrix in the first term, since it does not make sense to add a scalar to a matrix.) Note further that since for any invertible matrix and positive integer , we have for any polynomial and unitary matrix .    Let be an complex matrix, and let denote the characteristic polynomial of . Then we have .    By , there exists a unitary matrix such that , where is upper triangular, and has the eigenvalues of as diagonal entries. Since , and (since and are similar) it suffices to show that when is upper-triangular. (If you like, we are showing that , and deducing that .) But if is upper-triangular, so is , and therefore, is just the product of the diagonal entries. That is, , so .  Since the first column of is , the first column of is identically zero. The second column of similarly has the form for some number .  It follows that the first two columns of are identically zero. Since only the first two entries in the third column of can be nonzero, we find that the first three columns of are zero, and so on.        Suppose is a matrix with real entries that has a complex eigenvalue with corresponding eigenvector . Find another eigenvalue and eigenvector for .                   Give an example of a [`2 times 2 `] matrix with no real eigenvalues.              Find all the eigenvalues (real and complex) of the matrix              Find all the eigenvalues (real and complex) of the matrix              Let Find formulas for the entries of , where is a positive integer. (Your formulas should not contain complex numbers.)              Let Find formulas for the entries of , where is a positive integer. (Your formulas should not contain complex numbers.)              Let . Find , , and such that , where is the identity matrix.                       "
},
{
  "id": "def-complex-inner",
  "level": "2",
  "url": "sec-complex.html#def-complex-inner",
  "type": "Definition",
  "number": "4.4.1",
  "title": "",
  "body": "  The standard inner product on is defined as follows: given and , .   "
},
{
  "id": "ex-complex-compute-dot",
  "level": "2",
  "url": "sec-complex.html#ex-complex-compute-dot",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": " Compute the dot product of and .  "
},
{
  "id": "p-1665",
  "level": "2",
  "url": "sec-complex.html#p-1665",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hermitian conjugate "
},
{
  "id": "thm-complex-inner-props",
  "level": "2",
  "url": "sec-complex.html#thm-complex-inner-props",
  "type": "Theorem",
  "number": "4.4.3",
  "title": "",
  "body": "  For any vectors and any complex number ,    and .     and .          , and if and only if .          Using the distributive properties of matrix multiplication and the transpose, . The proof is similar when addition is in the second component. (But not identical -- you'll need the fact that the complex conjugate is distributive, rather than the transpose.)    These again follow from writing the inner product as a matrix product. , and .    Note that for any vectors , is a number, and therefore equal to its own transpose. Thus, we have , and .    This was already demonstrated above.      "
},
{
  "id": "def-complex-norm",
  "level": "2",
  "url": "sec-complex.html#def-complex-norm",
  "type": "Definition",
  "number": "4.4.4",
  "title": "",
  "body": "  The norm of a vector in is given by .   "
},
{
  "id": "rs-tf-cnorm",
  "level": "2",
  "url": "sec-complex.html#rs-tf-cnorm",
  "type": "Exercise",
  "number": "4.4.5",
  "title": "",
  "body": " The norm of a complex vector is always a real number.   Since the norm is computed using the modulus, which is always real and non-negative, the norm will be a real number as well. If you ever get a complex number for your norm, you've probably forgotten the complex conjugate somewhere.  "
},
{
  "id": "def-conjugate-transpose",
  "level": "2",
  "url": "sec-complex.html#def-conjugate-transpose",
  "type": "Definition",
  "number": "4.4.6",
  "title": "",
  "body": "  The conjugate of a matrix is the matrix . The conjugate transpose of is the matrix defined by .   "
},
{
  "id": "def-hermitian-unitary",
  "level": "2",
  "url": "sec-complex.html#def-hermitian-unitary",
  "type": "Definition",
  "number": "4.4.7",
  "title": "",
  "body": "  An matrix is called hermitian if , and unitary if . (A matrix is skew-hermitian if .)   "
},
{
  "id": "ex-complex-check-props",
  "level": "2",
  "url": "sec-complex.html#ex-complex-check-props",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "",
  "body": " Show that the matrix is hermitian, and that the matrix is unitary.   We have , so , and , so that .  "
},
{
  "id": "thm-hermitian-symmetry",
  "level": "2",
  "url": "sec-complex.html#thm-hermitian-symmetry",
  "type": "Theorem",
  "number": "4.4.9",
  "title": "",
  "body": "  An complex matrix is hermitian if and only if for any     Note that the property is equivalent to . This gives us . Conversely, suppose for all , and let denote the standard basis for . Then , which shows that .   "
},
{
  "id": "thm-hermitian-eigen-real",
  "level": "2",
  "url": "sec-complex.html#thm-hermitian-eigen-real",
  "type": "Theorem",
  "number": "4.4.10",
  "title": "",
  "body": "  For any hermitian matrix ,   The eigenvalues of are real.    Eigenvectors corresponding to distinct eigenvalues are orthogonal.          Suppose for some and . Then . Thus, , and since , we must have , which means .    Similarly, suppose are eigenvalues of , with corresponding eigenvectors . Then . This gives us . And since we already know must be real, and , we must have .      "
},
{
  "id": "thm-complex-spectral",
  "level": "2",
  "url": "sec-complex.html#thm-complex-spectral",
  "type": "Theorem",
  "number": "4.4.11",
  "title": "Spectral Theorem.",
  "body": " Spectral Theorem   If is an hermitian matrix, then there exists an orthonormal basis of consisting of eigenvectors of . Moreover, the matrix whose columns consist of those eigenvectors is unitary, and the matrix is diagonal.   "
},
{
  "id": "ex-complex-diagonalize",
  "level": "2",
  "url": "sec-complex.html#ex-complex-diagonalize",
  "type": "Exercise",
  "number": "4.4.12",
  "title": "",
  "body": " Confirm that the matrix is hermitian. Then, find the eigenvalues of , and a unitary matrix such that is diagonal.   Confirming that is almost immediate. We will use the computer below to compute the eigenvalues and eigenvectors of , but it's useful to attempt this at least once by hand. We have , so the eigenvalues are and , which are both real, as expected.  Finding eigenvectors can seem trickier than with real numbers, mostly because it is no longer immediately apparent when one row or a matrix is a multiple of another. But we know that the rows of must be parallel for a matrix, which lets proceed nonetheless.  For , we have . There are two ways one can proceed from here. We could use row operations to get to the reduced row-echelon form of . If we take this approach, we multiply row 1 by , and then take times the new row 1 and add it to row 2, to create a zero, and so on.  Easier is to realize that if we haven't made a mistake calculating our eigenvalues, then the above matrix can't be invertible, so there must be some nonzero vector in the kernel. If , then we must have , when we multiply by the first row of . This suggests that we take and , to get as our first eigenvector. To make sure we've done things correctly, we multiply by the second row of : . Success! Now we move onto the second eigenvalue.  For , we get . If we attempt to read off the answer like last time, the first row of suggests the vector . Checking the second row to confirm, we find: , as before.  Finally, we note that , so the two eigenvectors are orthogonal, as expected. We have , so our orthogonal matrix is . With a bit of effort, we can finally confirm that , as expected.  "
},
{
  "id": "def-normal-matrix",
  "level": "2",
  "url": "sec-complex.html#def-normal-matrix",
  "type": "Definition",
  "number": "4.4.13",
  "title": "",
  "body": "  An matrix is normal if .   "
},
{
  "id": "rs-mc-normal",
  "level": "2",
  "url": "sec-complex.html#rs-mc-normal",
  "type": "Exercise",
  "number": "4.4.14",
  "title": "",
  "body": "Select all matrices below that are normal.         This matrix is hermitian, and we know that every hermitian matrix is normal.           This matrix is not normal; this can be confirmed by direct computation, or by noting that it cannot be diagonalized.           This matrix is unitary, and every unitary matrix is normal.           This matrix is neither hermitian nor unitary, but it is normal, which can be verified by direct computation.    "
},
{
  "id": "thm-schurr",
  "level": "2",
  "url": "sec-complex.html#thm-schurr",
  "type": "Theorem",
  "number": "4.4.15",
  "title": "",
  "body": "  For any complex matrix , there exists a unitary matrix such that is upper-triangular, and such that the diagonal entries of are the eigenvalues of .   "
},
{
  "id": "thm-cayley-hamilton-c",
  "level": "2",
  "url": "sec-complex.html#thm-cayley-hamilton-c",
  "type": "Theorem",
  "number": "4.4.16",
  "title": "",
  "body": "  Let be an complex matrix, and let denote the characteristic polynomial of . Then we have .    By , there exists a unitary matrix such that , where is upper triangular, and has the eigenvalues of as diagonal entries. Since , and (since and are similar) it suffices to show that when is upper-triangular. (If you like, we are showing that , and deducing that .) But if is upper-triangular, so is , and therefore, is just the product of the diagonal entries. That is, , so .  Since the first column of is , the first column of is identically zero. The second column of similarly has the form for some number .  It follows that the first two columns of are identically zero. Since only the first two entries in the third column of can be nonzero, we find that the first three columns of are zero, and so on.   "
},
{
  "id": "ex-ww-complex1",
  "level": "2",
  "url": "sec-complex.html#ex-ww-complex1",
  "type": "Exercise",
  "number": "4.4.3.1",
  "title": "",
  "body": "  Suppose is a matrix with real entries that has a complex eigenvalue with corresponding eigenvector . Find another eigenvalue and eigenvector for .                "
},
{
  "id": "ex-ww-complex2",
  "level": "2",
  "url": "sec-complex.html#ex-ww-complex2",
  "type": "Exercise",
  "number": "4.4.3.2",
  "title": "",
  "body": "  Give an example of a [`2 times 2 `] matrix with no real eigenvalues.           "
},
{
  "id": "ex-ww-complex3",
  "level": "2",
  "url": "sec-complex.html#ex-ww-complex3",
  "type": "Exercise",
  "number": "4.4.3.3",
  "title": "",
  "body": "  Find all the eigenvalues (real and complex) of the matrix           "
},
{
  "id": "ex-ww-complex4",
  "level": "2",
  "url": "sec-complex.html#ex-ww-complex4",
  "type": "Exercise",
  "number": "4.4.3.4",
  "title": "",
  "body": "  Find all the eigenvalues (real and complex) of the matrix           "
},
{
  "id": "ex-ww-complex5",
  "level": "2",
  "url": "sec-complex.html#ex-ww-complex5",
  "type": "Exercise",
  "number": "4.4.3.5",
  "title": "",
  "body": "  Let Find formulas for the entries of , where is a positive integer. (Your formulas should not contain complex numbers.)           "
},
{
  "id": "ex-ww-complex6",
  "level": "2",
  "url": "sec-complex.html#ex-ww-complex6",
  "type": "Exercise",
  "number": "4.4.3.6",
  "title": "",
  "body": "  Let Find formulas for the entries of , where is a positive integer. (Your formulas should not contain complex numbers.)           "
},
{
  "id": "ex-ww-cayley-hamilton",
  "level": "2",
  "url": "sec-complex.html#ex-ww-cayley-hamilton",
  "type": "Exercise",
  "number": "4.4.3.7",
  "title": "",
  "body": "  Let . Find , , and such that , where is the identity matrix.                     "
},
{
  "id": "worksheet-dynamical",
  "level": "1",
  "url": "worksheet-dynamical.html",
  "type": "Worksheet",
  "number": "4.5",
  "title": "Worksheet: linear dynamical systems",
  "body": " Worksheet: linear dynamical systems    Suppose we have a sequence defined by a linear recurrence of length , as in : .  We would like to represent this as a matrix equation, and then use eigenvalues to analyze, replacing the recurrence formula with a matrix equation of the form . A sequence of vectors generated in this way is called a linear dynamical system . It is a good model for systems with discrete time evolution (where changes occur in steps, rather than continuously).  To determine the long term evolution of the system, we would like to be able to compute without first finding all the intermediate states, so this is a situation where we would like to be able to efficiently compute powers of a matrix. Fortunately, we know how to do this when is diagonalizable: , where is a diagonal matrix whose entries are the eigenvalues of , and is the matrix of corresponding eigenvectors of .      Consider a recurrence of length 2, of the form .   According to , what is the polynomial associated to this recurrence?   Let , for each , and let . Show that .   Compute the characteristic polynomial of . What do you observe?      For a recurrence of length 3, given by :   Determine a matrix such that , where .   Compute the characteristic polynomial of , and compare it to the associated polynomial of the recurrence.   Show that if is an eigenvalue of , then is an associated eigenvector.      Consider the Fibonacci sequence, defined by , and . Let be the matrix associated to this sequence.   State the matrix , and show that has eigenvalues , with associated eigenvectors .   Let , let , and let , where gives the initial values of the sequence.  Show that .   Note that tells us that although the Fibonacci sequence is not a geometric sequence, it is the sum of two geometric sequences!  By considering the numerical values of the eigenvalues and , explain why we can nonetheless treat the Fibonacci sequence as approximately geometric when is large.  (This is true more generally: if a matrix has one eigenvalue that is larger in absolute value than all the others, this eigenvalue is called the dominant eigenvalue . If is the matrix of some linear recurrence, and is diagonalizable, then we can consider the sequence as a sum of geometric sequences that will become approximately geometric in the long run.)     Challenge\/Project Problem: Predator-Prey Systems   As a more practical example, consider the following (over-simplified) predator-prey system. It is based on an example in Interactive Linear Algebra , by Margalit, Rabinoff, and Williams, but adapted to the wildlife here in Lethbridge. An ecosystem contains both coyotes and deer. Initially, there is a population of coyotes, and deer.  We assume the following:   the share of the deer population eaten by a typical coyote in a year is deer    in the absence of the coyotes, the deer population would increase by % per year     % of the coyote population dies each year of natural causes    the growth rate of the coyote population depends on the number of deer: for each 100 deer, coyote pups will survive to adulthood.     If we let denote the number of deer after years, and the number of coyotes, then we have , or, in matrix form, , where and .  After years, the two populations will be given by , where gives the initial populations of the two species. If possible, we would like to be able to find a closed-form formula for , which would allow us to analyze the long-term predictions of our model.   Analyze the eigenvalues of this matrix, and diagonalize. The sympy library won't be up to the task. Instead, some combination of numpy and scipy , as described by Patrick Walls on his website , will be needed.   The eigenvalues turn out to be complex! What does that tell you about the nature of the system? What is the long-term behaviour of this system?   Remember that those complex terms can be combined using sine and cosine functions: since is a real matrix, the eigenvalues will have the form , where and are real. In polar form, for some and , and by de Moivre's Theorem, .   What if you adjust the parameters? Can you come up with a system where both species flourish? Or one where they both disappear? Or one where the populations oscillate regularly?   Referring to the hint from , note that the size of the populations will depend on the modulus of the eigenvalues. For what values of will the populations decline\/increase\/remain steady?   You may have read this while wondering, Does Sean actually know anything about ecology and population dynamics? Did he just make up those numbers?   The answers are, respectively, no, and yes. Can you come up with numbers that are based on a realistic example? What does our model predict in that case? Is it accurate?     Challenge\/Project Problem: Markov Chains   A special type of linear dynamical system occurs when the matrix is stochastic . A stochastic matrix is one where each entry of the matrix is between and , and all of the columns of the matrix sum to .  The reason for these conditions is that the entries of a stochastic matrix represent probabilities; in particular, they are transition probabilities . That is, each number represents the probability of one state changing to another.  If a system can be in one of possible states, we represent the system by an vector , whose entries indicate the probability that the system is in a given state at time . If we know that the system starts out in a particular state, then will have a in one of its entries, and everywhere else.  A Markov chain is given by such an initial vector, and a stochastic matrix. As an example, we will consider the following scenario, described in the book Shape , by Jordan Ellenberg:  A mosquito is born in a swamp, which we will call Swamp A. There is another nearby swamp, called Swamp B. Observational data suggests that when a mosquito is at Swamp A, there is a 40% chance that it will remain there, and a 60% chance that it will move to Swamp B. When the mosquito is at Swamp B, there is a 70% chance that it will remain, and a 30% chance that it will return to Swamp A.   Give a stochastic matrix and a vector that represent the transition probabilities and initial state given above.   By diagonalizing the matrix , determine the long-term probability that the mosquito will be found in either swamp.   You should have found that one of the eigenvalues of was . The corresponding eigenvector satisfies . This is known as a steady-state vector : if our system begins with state , it will remain there forever.  Confirm that if the eigenvector is rescaled so that its entries sum to 1, the resulting values agree with the long-term probabilities found in the previous part.    A stochastic matrix is called regular some power has all positive entries. It is a theorem that every regular stochastic matrix has a steady-state vector.   Prove that if is a stochastic matrix with no entry equal to zero, then is an eigenvalue of .   Prove that the product of two stochastic matrices is stochastic. Conclude that if is stochastic, so is for each .   Also prove that if has positive entries for some , then is an eigenvalue of .   You have already proved that a stochastic matrix with positive entries has eigenvalue , and that a power of a stochastic matrix is stochastic. If has positive entries for some , what eigenvalue must it have? You may assume (it is true, but you do not have to prove it) that will also have positive entries.    By searching online or in other textbooks, find and state a more interesting\/complicated example of a Markov chain problem, and show how to solve it.    "
},
{
  "id": "p-1754",
  "level": "2",
  "url": "worksheet-dynamical.html#p-1754",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear dynamical system "
},
{
  "id": "ex-dynamical-recurrence-2",
  "level": "2",
  "url": "worksheet-dynamical.html#ex-dynamical-recurrence-2",
  "type": "Worksheet Exercise",
  "number": "4.5.1",
  "title": "",
  "body": " Consider a recurrence of length 2, of the form .   According to , what is the polynomial associated to this recurrence?   Let , for each , and let . Show that .   Compute the characteristic polynomial of . What do you observe?  "
},
{
  "id": "ex-dynamical-recurrence-3",
  "level": "2",
  "url": "worksheet-dynamical.html#ex-dynamical-recurrence-3",
  "type": "Worksheet Exercise",
  "number": "4.5.2",
  "title": "",
  "body": " For a recurrence of length 3, given by :   Determine a matrix such that , where .   Compute the characteristic polynomial of , and compare it to the associated polynomial of the recurrence.   Show that if is an eigenvalue of , then is an associated eigenvector.  "
},
{
  "id": "ex-dynamical-fibonacci",
  "level": "2",
  "url": "worksheet-dynamical.html#ex-dynamical-fibonacci",
  "type": "Worksheet Exercise",
  "number": "4.5.3",
  "title": "",
  "body": " Consider the Fibonacci sequence, defined by , and . Let be the matrix associated to this sequence.   State the matrix , and show that has eigenvalues , with associated eigenvectors .   Let , let , and let , where gives the initial values of the sequence.  Show that .   Note that tells us that although the Fibonacci sequence is not a geometric sequence, it is the sum of two geometric sequences!  By considering the numerical values of the eigenvalues and , explain why we can nonetheless treat the Fibonacci sequence as approximately geometric when is large.  (This is true more generally: if a matrix has one eigenvalue that is larger in absolute value than all the others, this eigenvalue is called the dominant eigenvalue . If is the matrix of some linear recurrence, and is diagonalizable, then we can consider the sequence as a sum of geometric sequences that will become approximately geometric in the long run.)  "
},
{
  "id": "ex-dynamical-predator",
  "level": "2",
  "url": "worksheet-dynamical.html#ex-dynamical-predator",
  "type": "Worksheet Exercise",
  "number": "4.5.4",
  "title": "",
  "body": " As a more practical example, consider the following (over-simplified) predator-prey system. It is based on an example in Interactive Linear Algebra , by Margalit, Rabinoff, and Williams, but adapted to the wildlife here in Lethbridge. An ecosystem contains both coyotes and deer. Initially, there is a population of coyotes, and deer.  We assume the following:   the share of the deer population eaten by a typical coyote in a year is deer    in the absence of the coyotes, the deer population would increase by % per year     % of the coyote population dies each year of natural causes    the growth rate of the coyote population depends on the number of deer: for each 100 deer, coyote pups will survive to adulthood.     If we let denote the number of deer after years, and the number of coyotes, then we have , or, in matrix form, , where and .  After years, the two populations will be given by , where gives the initial populations of the two species. If possible, we would like to be able to find a closed-form formula for , which would allow us to analyze the long-term predictions of our model.   Analyze the eigenvalues of this matrix, and diagonalize. The sympy library won't be up to the task. Instead, some combination of numpy and scipy , as described by Patrick Walls on his website , will be needed.   The eigenvalues turn out to be complex! What does that tell you about the nature of the system? What is the long-term behaviour of this system?   Remember that those complex terms can be combined using sine and cosine functions: since is a real matrix, the eigenvalues will have the form , where and are real. In polar form, for some and , and by de Moivre's Theorem, .   What if you adjust the parameters? Can you come up with a system where both species flourish? Or one where they both disappear? Or one where the populations oscillate regularly?   Referring to the hint from , note that the size of the populations will depend on the modulus of the eigenvalues. For what values of will the populations decline\/increase\/remain steady?   You may have read this while wondering, Does Sean actually know anything about ecology and population dynamics? Did he just make up those numbers?   The answers are, respectively, no, and yes. Can you come up with numbers that are based on a realistic example? What does our model predict in that case? Is it accurate?  "
},
{
  "id": "ex-dynamical-markov",
  "level": "2",
  "url": "worksheet-dynamical.html#ex-dynamical-markov",
  "type": "Worksheet Exercise",
  "number": "4.5.5",
  "title": "",
  "body": " A special type of linear dynamical system occurs when the matrix is stochastic . A stochastic matrix is one where each entry of the matrix is between and , and all of the columns of the matrix sum to .  The reason for these conditions is that the entries of a stochastic matrix represent probabilities; in particular, they are transition probabilities . That is, each number represents the probability of one state changing to another.  If a system can be in one of possible states, we represent the system by an vector , whose entries indicate the probability that the system is in a given state at time . If we know that the system starts out in a particular state, then will have a in one of its entries, and everywhere else.  A Markov chain is given by such an initial vector, and a stochastic matrix. As an example, we will consider the following scenario, described in the book Shape , by Jordan Ellenberg:  A mosquito is born in a swamp, which we will call Swamp A. There is another nearby swamp, called Swamp B. Observational data suggests that when a mosquito is at Swamp A, there is a 40% chance that it will remain there, and a 60% chance that it will move to Swamp B. When the mosquito is at Swamp B, there is a 70% chance that it will remain, and a 30% chance that it will return to Swamp A.   Give a stochastic matrix and a vector that represent the transition probabilities and initial state given above.   By diagonalizing the matrix , determine the long-term probability that the mosquito will be found in either swamp.   You should have found that one of the eigenvalues of was . The corresponding eigenvector satisfies . This is known as a steady-state vector : if our system begins with state , it will remain there forever.  Confirm that if the eigenvector is rescaled so that its entries sum to 1, the resulting values agree with the long-term probabilities found in the previous part.  "
},
{
  "id": "ex-dynamical-stochastic",
  "level": "2",
  "url": "worksheet-dynamical.html#ex-dynamical-stochastic",
  "type": "Worksheet Exercise",
  "number": "4.5.6",
  "title": "",
  "body": " A stochastic matrix is called regular some power has all positive entries. It is a theorem that every regular stochastic matrix has a steady-state vector.   Prove that if is a stochastic matrix with no entry equal to zero, then is an eigenvalue of .   Prove that the product of two stochastic matrices is stochastic. Conclude that if is stochastic, so is for each .   Also prove that if has positive entries for some , then is an eigenvalue of .   You have already proved that a stochastic matrix with positive entries has eigenvalue , and that a power of a stochastic matrix is stochastic. If has positive entries for some , what eigenvalue must it have? You may assume (it is true, but you do not have to prove it) that will also have positive entries.  "
},
{
  "id": "ex-dynamical-markov-example",
  "level": "2",
  "url": "worksheet-dynamical.html#ex-dynamical-markov-example",
  "type": "Worksheet Exercise",
  "number": "4.5.7",
  "title": "",
  "body": " By searching online or in other textbooks, find and state a more interesting\/complicated example of a Markov chain problem, and show how to solve it.  "
},
{
  "id": "section-matrix-factor",
  "level": "1",
  "url": "section-matrix-factor.html",
  "type": "Section",
  "number": "4.6",
  "title": "Matrix Factorizations and Eigenvalues",
  "body": " Matrix Factorizations and Eigenvalues   This section is a rather rapid tour of some cool ideas that get a lot of use in applied linear algebra. We are rather light on details here. The interested reader can consult sections 8.3 8.6 in the Nicholson textbook.    Matrix Factorizations   Positive Operators  Let be a linear operator defined by a matrix . If is symmetric (for the case of ) or hermitian (for the case of ), we say that the operator is self-adjoint .    A self-adjoint operator is positive if for all vectors . It is positive-definite if for all nonzero . If for some matrix , we also refer to as a positive(-definite) matrix.     Some books will define positive-definite operators by the condition without the requirement that is self-adjoint. However, we will stick to the simpler definition.   The definition of a positive matrix is equivalent to requiring that all its eigenvalues are non-negative. Every positive matrix has a unique positive square root: a matrix such that . Since is symmetric\/hermitian, it can be diagonalized. Writing where is orthogonal\/unitary and , we have , where .  The following theorem gives us a simple way of generating positive matrices.    For any matrix , the matrix is positive. Moreover, if is invertible, then is positive-definite.    For any in , .    What is interesting is that the converse to the above statement is also true. The Cholesky factorization of a positive-definite matrix is given by , where is upper-triangular, with positive diagonal entries.  Even better is that there is a very simple algorithm for obtaining the factorization: Carry the matrix to triangular form, using only row operations of the type . Then divide each row by the square root of the diagonal entry to obtain the matrix .  The SymPy library contains the cholesky() algorithm. Note however that it produces a lower triangular matrix, rather than upper triangular. (That is, the output gives rather than , so you will have .) Let's give it a try. First, let's create a positive-definite matrix.   Next, find the Cholesky factorization:    Note that is not the same as the matrix !    Singular Value Decomposition  For any matrix , the matrices and are both positive. (Exercise!) This means that we can define , even if itself is not symmetric or positive.     Since is symmetric, we know that it can be diagonalized.    Since is positive, we know its eigenvalues are non-negative.    This means we can define the singular values  for each .     Note: it's possible to do this even if is not a square matrix!     The SymPy library has a function for computing the singular values of a matrix. Given a matrix A , the command A.singular_values() will return its singular values. Try this for a few different matrices below:   In fact, SymPy can even return singular values for a matrix with variable entries! Try the following example from the SymPy documentation .   For an matrix , we might not be able to diagonalize (with a single orthonormal basis). However, it turns out that it's always possible to find a pair of orthonormal bases such that . In matrix form, for orthogonal matrices .  In fact, this can be done even if is not square, which is arguably the more interesting case! Let be an matrix. We will find an orthogonal matrix and orthogonal matrix , such that , where is also .   If is symmetric and positive-definite, the singular values of are just the eigenvalues of , and the singular value decomposition is the same as diagonalization.   The basis is an orthonormal basis for , and the matrix is the matrix whose columns are the vectors . As a result, is orthogonal.  The matrix is the same size as . First, we list the positive singular values of in decreasing order: . Then, we let , and set . That is, we put in the upper-left, and then fill in zeros as needed, until is the same size as .  Next, we compute the vectors , for . As shown in Nicolson, will be an orthonormal basis for the column space of . The matrix is constructed by extending this to an orthonormal basis of .  All of this is a lot of work to do by hand, but it turns out that it can be done numerically, and more importantly, efficiently , by a computer. The SymPy library has an SVD algorithm, but it will not be efficient for larger matrices. In practice, most Python users will use the SVD algorithm provided by NumPy; we will stick with SymPy for simplicity and consistency.   The version of the SVD given above is not used in computations, since it tends to be more resource intensive. In particular, it requires us to store more information than necessary: the last rows of , and the last columns of , get multiplied by columns\/rows of zeros in , so we don't really need to keep track of these columns.  Instead, most algorithms that you find will give the diagonal matrix , consisting of the nonzero singular values, and will be replaced by the matrix consisting of its first columns, while gets replaced by the matrix consisting of its first rows. The resulting product is still equal to the original matrix.  In some cases, even the matrix is too large, and a decision is made to truncate to some smaller subset of singular values. In this case, the resulting product is no longer equal to the original matrix, but it does provide an approximation. A discussion can be found on Wikipedia .     Find the singular value decomposition of the matrix .    Using SymPy, we get the condensed SVD . First, let's check the singular values.   Note that the values are not listed in decreasing order. Now, let's ask for the singular value decomposition. The output consists of three matrices; the first line below assigns those matrices to the names P,S,Q .   Note that the output is the condensed version, which doesn't match the exposition above. It also doesn't follow the same ordering convention: we'll need to swap columns in each of the matrices. But it does give us a decomposition of the matrix :   To match our earlier presentation, we first set . Next, we need to extend the matrix in the output above to a matrix. We can do this by choosing any vector orthogonal to the two existing columns, and normalizing. Let's use entries . Noting that we also need to swap the first two columns (to match the fact that we swapped columns in ), we get the matrix . Let's check that it is indeed orthogonal.   Finally, we take (again swapping columns), which is just the identity matrix. We therefore should expect that . Let's check.   It worked!    The Singular Value Decomposition has a lot of useful appplications, some of which are described in Nicholson's book. On a very fundamental level the SVD provides us with information on some of the most essential properties of the matrix , and any system of equations with as its coefficient matrix.  Recall the following definitions for an matrix :   The rank of is the number of leadning ones in the RREF of , which is also equal to the dimension of the column space of (or if you prefer, the dimension of ).    The column space of , denoted , is the subspace of spanned by the columns of . (This is the image of the matrix transformation ; it is also the space of all vectors for which the system is consistent.)    The row space of , denoted , is the span of the rows of , viewed as column vectors in .    The null space of is the space of solutions to the homogeneous system . This is, of course, equal the kernel of the associated transformation .     There are some interesting relationships among these spaces, which are left as an exercise.   Let be an matrix. Prove the following statements.       Note that if and only if , and if and only if for each row of .  Note also that is the (dot) product of with each column of , and each column of is a row of .       Notice that if and only if , and that . Your reasoning should be similar to that of the previous part.   Here's the cool thing about the SVD . Let be the positive singular values of . Let be the orthonormal basis of eigenvectors for , and let be the orthonormal basis of constructed in the SVD algorithm. Then:           form a basis for .     form a basis for (and thus, the row rank and column rank of are the same).     form a basis for . (And these are therefore the basis solutions of !)     form a basis for .     If you want to explore this further, have a look at the excellent notebook by Dr. Juan H Klopper . The ipynb file can be found on his GitHub page . In it, he takes you through various approaches to finding the singular value decomposition, using the method above, as well as using NumPy and SciPy (which, for industrial applications, are superior to SymPy).    QR Factorization  Suppose is an matrix with independent columns. (Question: for this to happen, which is true  , or ?)  A -factorization of is a factorization of the form , where is , with orthonormal columns, and is an invertible upper-triangular ( ) matrix with positive diagonal entries. If is a square matrix, will be orthogonal.  A lot of the methods we're looking at here involve more sophisticated numerical techniques than SymPy is designed to handle. If we wanted to spend time on these topics, we'd have to learn a bit about the NumPy package, which has built in tools for finding things like polar decomposition and singular value decomposition. However, SymPy does know how to do factorization. After defining a matrix A , we can use the command Q, R = A.QRdecomposition() .   Let's check that the matrix really is orthogonal:   Details of how to perform the QR factorization can be found in Nicholson's textbook. It's essentially a consequence of performing the Gram-Schmidt algorithm on the columns of , and keeping track of our work.  The calculation above is a symbolic computation, which is nice for understanding what's going on. The reason why the factorization is useful in practice is that there are efficient numerical methods for doing it (with good control over rounding errors). Our next topic looks at a useful application of the factorization.     Computing Eigenvalues   Our first method focuses on the dominant eigenvalue of a matrix. An eigenvalue is dominant if it is larger in absolute value than all other eigenvalues. For example, if has eigenvalues , then is the dominant eigenvalue.  If has eigenvalues then there is no dominant eigenvalue. Any eigenvector corresponding to a dominant eigenvalue is called a dominant eigenvector.    The Power Method  If a matrix has a dominant eigenvalue, there is a method for finding it (approximately) that does not involve finding and factoring the characteristic polynomial of .  We start with some initial guess for a dominant eigenvector. We then set for each , giving a sequence . We expect (for reasons we'll explain) that as , where is a dominant eigenvector. Let's try an example.   The dominant eigenvalue is . Let's try an initial guess of and see what happens.   We might want to confirm whether that rather large fraction is close to . To do so, we can get the computer to divide the numerator by the denominator.   The above might show you the fraction rather than its decimal approximation. (This may depend on whether you're on Sage or Jupyter.) To get the decimal, try wrapping the above in float() (or N , or append with .evalf() ).  For the eigenvalue, we note that if , then . This leads us to consider the Rayleigh quotients .   We can convert a rational number r to a float using either N(r) or r.evalf() . (The latter seems to be the better bet when working with a list.)     The QR Algorithm  Given an matrix , we know we can write , with orthogonal and upper-triangular. The -algorithm exploits this fact. We set , and write .  Then we set , and factor: . Notice . Since is similar to , has the same eigenvalues as .  Next, set , and factor as . Since , has the same eigenvalues as . In fact, .  After steps we have , which still has the same eigenvalues as . By some sort of dark magic, this sequence of matrices converges to an upper triangular matrix with eigenvalues on the diagonal!  Consider the matrix     Now we repeat the process:   Do this a few more times, and see what results! (If someone can come up with a way to code this as a loop, let me know!) The diagonal entries should get closer to , respectively, and the entry should get closer to .         Find the singular values of              Find the singular values of              Find the factorization of the matrix                   Find the factorization of the matrix                  "
},
{
  "id": "p-1802",
  "level": "2",
  "url": "section-matrix-factor.html#p-1802",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "self-adjoint "
},
{
  "id": "def-positive-op",
  "level": "2",
  "url": "section-matrix-factor.html#def-positive-op",
  "type": "Definition",
  "number": "4.6.1",
  "title": "",
  "body": "  A self-adjoint operator is positive if for all vectors . It is positive-definite if for all nonzero . If for some matrix , we also refer to as a positive(-definite) matrix.   "
},
{
  "id": "thm-positive-prod",
  "level": "2",
  "url": "section-matrix-factor.html#thm-positive-prod",
  "type": "Theorem",
  "number": "4.6.2",
  "title": "",
  "body": "  For any matrix , the matrix is positive. Moreover, if is invertible, then is positive-definite.    For any in , .   "
},
{
  "id": "p-1809",
  "level": "2",
  "url": "section-matrix-factor.html#p-1809",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cholesky factorization "
},
{
  "id": "p-1815",
  "level": "2",
  "url": "section-matrix-factor.html#p-1815",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular values "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "section-matrix-factor.html#remark-20",
  "type": "Remark",
  "number": "4.6.3",
  "title": "",
  "body": " The version of the SVD given above is not used in computations, since it tends to be more resource intensive. In particular, it requires us to store more information than necessary: the last rows of , and the last columns of , get multiplied by columns\/rows of zeros in , so we don't really need to keep track of these columns.  Instead, most algorithms that you find will give the diagonal matrix , consisting of the nonzero singular values, and will be replaced by the matrix consisting of its first columns, while gets replaced by the matrix consisting of its first rows. The resulting product is still equal to the original matrix.  In some cases, even the matrix is too large, and a decision is made to truncate to some smaller subset of singular values. In this case, the resulting product is no longer equal to the original matrix, but it does provide an approximation. A discussion can be found on Wikipedia .  "
},
{
  "id": "example-svd",
  "level": "2",
  "url": "section-matrix-factor.html#example-svd",
  "type": "Example",
  "number": "4.6.4",
  "title": "",
  "body": "  Find the singular value decomposition of the matrix .    Using SymPy, we get the condensed SVD . First, let's check the singular values.   Note that the values are not listed in decreasing order. Now, let's ask for the singular value decomposition. The output consists of three matrices; the first line below assigns those matrices to the names P,S,Q .   Note that the output is the condensed version, which doesn't match the exposition above. It also doesn't follow the same ordering convention: we'll need to swap columns in each of the matrices. But it does give us a decomposition of the matrix :   To match our earlier presentation, we first set . Next, we need to extend the matrix in the output above to a matrix. We can do this by choosing any vector orthogonal to the two existing columns, and normalizing. Let's use entries . Noting that we also need to swap the first two columns (to match the fact that we swapped columns in ), we get the matrix . Let's check that it is indeed orthogonal.   Finally, we take (again swapping columns), which is just the identity matrix. We therefore should expect that . Let's check.   It worked!   "
},
{
  "id": "p-1840",
  "level": "2",
  "url": "section-matrix-factor.html#p-1840",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rank column space row space null space "
},
{
  "id": "ex-matrix-factor1",
  "level": "2",
  "url": "section-matrix-factor.html#ex-matrix-factor1",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "",
  "body": " Let be an matrix. Prove the following statements.       Note that if and only if , and if and only if for each row of .  Note also that is the (dot) product of with each column of , and each column of is a row of .       Notice that if and only if , and that . Your reasoning should be similar to that of the previous part.  "
},
{
  "id": "ex-ww-svd1",
  "level": "2",
  "url": "section-matrix-factor.html#ex-ww-svd1",
  "type": "Exercise",
  "number": "4.6.3.1",
  "title": "",
  "body": "  Find the singular values of           "
},
{
  "id": "ex-ww-svd2",
  "level": "2",
  "url": "section-matrix-factor.html#ex-ww-svd2",
  "type": "Exercise",
  "number": "4.6.3.2",
  "title": "",
  "body": "  Find the singular values of           "
},
{
  "id": "ex-ww-qr1",
  "level": "2",
  "url": "section-matrix-factor.html#ex-ww-qr1",
  "type": "Exercise",
  "number": "4.6.3.3",
  "title": "",
  "body": "  Find the factorization of the matrix                "
},
{
  "id": "ex-ww-qr2",
  "level": "2",
  "url": "section-matrix-factor.html#ex-ww-qr2",
  "type": "Exercise",
  "number": "4.6.3.4",
  "title": "",
  "body": "  Find the factorization of the matrix                "
},
{
  "id": "worksheet-svd",
  "level": "1",
  "url": "worksheet-svd.html",
  "type": "Worksheet",
  "number": "4.7",
  "title": "Worksheet: Singular Value Decomposition",
  "body": " Worksheet: Singular Value Decomposition    For this worksheet, the reader is directed to . Further details may be found in Section 8.6 of Linear Algebra with Applications , by Keith Nicholson. (See also notebook by Dr. Juan H Klopper .)  In we saw that the singular_value_decomposition algorithm in SymPy does things a little bit differently than in . If we start with a square matrix , the results are the same, but if is not square, the decomposition looks a little different. In particular, if is , the matrix defined in will also be , but it will contain some rows or columns of zeros that are added to get the desired size. The matrix is an orthogonal matrix whose columns are an orthonormal basis of eigenvectors for . The matrix is an orthogonal matrix whose columns are an orthonormal basis of . (The first columns of are given by , where is the eigenvector of corresponding to the positive singular value .)  The algorithm provided by SymPy replaces by the diagonal matrix of nonzero singular values. (This is common in most algorithms, since we don't want to bother storing data we don't need.) The matrix is replaced by the matrix whose columns are the first eigenvectors of , and the matrix is replaced by the matrix whose columns are the orthonormal basis for the column space of . (Note that the rank of is equal to the rank of , which is equal to the number of nonzero eigenvectors of (counted with multiplicity).)  The product will be the same in both cases, and the matrix is the same as well.   This time, rather than using the SymPy algorithm, we will work through the process outlined in step-by-step. Let's revisit . Let . First, we get the singular values:   Next, we get the eigenvalues and eigenvectors of :   Now we need to normalize the eigenvectors, in the correct order. Note that the eigenvectors were listed in increasing order of eigenvalue, so we need to reverse the order. Note that L1 is a list of lists. The eigenvector is the third entry (index 2) in the list (eigenvalue, multiplicity, eigenvector). We also need to turn list elements into matrices. So, for example the second eigenvector is Matrix(L1[1][2]) .     Next, we can assemble these vectors into a matrix, and confirm that it's orthogonal.   We've made the matrix ! Next, we construct . This we will do by hand.   Alternatively, you could do SigA = diag(L0[0],L0[1]).row_join(Matrix([0,0])) . Finally, we need to make the matrix . First, we find the vectors and normalize. (Note that , so this vector is unneeded, as expected.)   Note that the matrix is already the correct size, because . In general, for an matrix , if , we would have to extend the set to a basis for . Finally, we check that our matrices work as advertised.   For convenience, here is all of the above code, with all print commands (except the last one) removed.   from sympy import Matrix,BlockMatrix,init_printing init_printing() A = Matrix([[1,1,1],[1,0,-1]]) B=(A.T)*A L0=A.singular_values() L1=B.eigenvects() R1=Matrix(L1[2][2]) R2=Matrix(L1[1][2]) R3=Matrix(L1[0][2]) Q1 = (1\/R1.norm())*R1 Q2 = (1\/R2.norm())*R2 Q3 = (1\/R3.norm())*R3 Q = Matrix(BlockMatrix([Q1,Q2,Q3])) SigA = diag(L0[0],L0[1]).row_join(Matrix([0,0])) S1 = A*Q1 S2 = A*Q2 P1 = (1\/S1.norm())*S1 P2 = (1\/S2.norm())*S2 P = Matrix(BlockMatrix([P1,P2])) P,SigA,Q,P*SigA*Q.T      Compute the SVD for the matrices . Note that for these matrices, you may need to do some additional work to extend the vectors to an orthonormal basis. You can adapt the code above, but you will have to think about how to implement additional code to construct any extra vectors you need.     By making some very minor changes in the matrices in , convince yourself that (a) those matrices were chosen very carefully, and (b) there's a reason why most people do SVD numerically.       Recall from that for an inconsistent system , we wish to find a vector so that is consistent, with as close to as possible.  In other words, we want to minimize , or equivialently, .   Let be the singular value decomposition of . Show that , where , and .   Show that setting minimizes the value of .   Recall that we set , where is the diagonal matrix of nonzero singular values. Let us define the pseudo-inverse of to be the matrix .  Show that the solution to the least squares problem is given by , where .     "
},
{
  "id": "ex-worksheet-svd1",
  "level": "2",
  "url": "worksheet-svd.html#ex-worksheet-svd1",
  "type": "Worksheet Exercise",
  "number": "4.7.1",
  "title": "",
  "body": " Compute the SVD for the matrices . Note that for these matrices, you may need to do some additional work to extend the vectors to an orthonormal basis. You can adapt the code above, but you will have to think about how to implement additional code to construct any extra vectors you need.  "
},
{
  "id": "ex-worksheet-svd2",
  "level": "2",
  "url": "worksheet-svd.html#ex-worksheet-svd2",
  "type": "Worksheet Exercise",
  "number": "4.7.2",
  "title": "",
  "body": " By making some very minor changes in the matrices in , convince yourself that (a) those matrices were chosen very carefully, and (b) there's a reason why most people do SVD numerically.  "
},
{
  "id": "ex-worksheet-svd3",
  "level": "2",
  "url": "worksheet-svd.html#ex-worksheet-svd3",
  "type": "Worksheet Exercise",
  "number": "4.7.3",
  "title": "",
  "body": " Recall from that for an inconsistent system , we wish to find a vector so that is consistent, with as close to as possible.  In other words, we want to minimize , or equivialently, .   Let be the singular value decomposition of . Show that , where , and .   Show that setting minimizes the value of .   Recall that we set , where is the diagonal matrix of nonzero singular values. Let us define the pseudo-inverse of to be the matrix .  Show that the solution to the least squares problem is given by , where .   "
},
{
  "id": "sec-matrix-of-transformation",
  "level": "1",
  "url": "sec-matrix-of-transformation.html",
  "type": "Section",
  "number": "5.1",
  "title": "The matrix of a linear transformation",
  "body": " The matrix of a linear transformation  Recall from Example in Chapter that given any matrix , we can define the matrix transformation by , where we view as an column vector.  Conversely, given any linear map , if we let denote the standard basis of , then the matrix is such that .  We have already discussed the fact that this idea generalizes: given a linear transformation , where and are finite-dimensional vector spaces, it is possible to represent as a matrix transformation.  The representation depends on choices of bases for both and . Recall the definition of the coefficient isomorphism, from Definition in Section . If and , this gives us isomorphisms and depending on the choice of a basis for and a basis for . These isomorphisms define a matrix transformation according to the diagram we gave in Figure .   What is the size of the matrix used for the matrix transformation ?          Correct! We need to be able to multiply on the right by an column vector, and get an column vector as output.           The domain of is , and the product is only defined if the number of columns ( ) is equal to the dimension of the domain.           The domain of is , and the product is only defined if the number of columns ( ) is equal to the dimension of the domain.           Although the product would be defined in this case, the result would be a vector in , and we want a vector in .     We should stress one important point about the coefficient isomorphism, however. It depends on the choice of basis, but also on the order of the basis elements. Thus, we generally will work with an ordered basis in this chapter. That is, rather than simply thinking of our basis as a set, we will think of it as an ordered list. Order matters, since given a basis , we rely on the fact that we can write any vector uniquely as in order to make the assignment .   Show that the coefficient isomorphism is, indeed, a linear isomorphism from to .   It's clear that , since the only way to write the zero vector in in terms of (or, indeed, any independent set) is to set all the scalars equal to zero.  If we have two vectors given by , then , so .  Finally, for any scalar , we have .  This shows that is linear. To see that is an isomorphism, we can simply note that takes the basis to the standard basis of . Alternatively, we can give the inverse: is given by .   Given and coefficient isomorphisms , the map is a linear transformation, and the matrix of this transformation gives a representation of . Explicitly, let be an ordered basis for , and let be an ordered basis for . Since for each , there exist unique scalars , with and such that for . This gives us the matrix . Notice that the first column of is , the second column is , and so on.  Given , write , so that . Then .  On the other hand, . Therefore, . Thus, we see that , or , as expected.   The matrix of a linear map   Let and be finite-dimensional vector spaces, and let be a linear map. Let and be ordered bases for and , respectively. Then the matrix  of with respect to the bases and is defined by .    In other words, is the unique matrix such that . This gives the defining property , as was demonstrated above.   Suppose is given by . Compute the matrix of with respect to the bases of and of .   We have . Thus, . To confirm, note that , while on the other hand, .   When we compute the matrix of a transformation with respect to a non-standard basis, we don't have to worry about how to write vectors in the domain in terms of that basis. Instead, we simply plug the basis vectors into the transformation, and then determine how to write the output in terms of the basis of the codomain. However, if we want to use this matrix to compute values of , then we need a systematic way of writing elements of in terms of the given basis.   Working with the matrix of a transformation   Let be a linear transformation whose matrix is given by with respect to the ordered bases of and of . Find the value of .    We need to write the input in terms of the basis . This amounts to solving the system of equations given by . Of course, we can easily set up and solve this system, but let's try to be systematic, and obtain a more useful result for future problems. Since we can easily determine how to write any polynomial in terms of the standard basis , it suffices to know how to write these three polynomials in terms of our basis.  At first, this seems like more work. After all, we now have three systems to solve: . However, all three systems have the same coefficient matrix, so we can solve them simultaneously, by adding three constants columns to our augmented matrix.  We get the matrix . But this is exactly the augmented matrix we'd right down if we were trying to find the inverse of the matrix whose columns are the coefficient representations of our given basis vectors in terms of the standard basis.  To compute , we use the computer:   Next, we find :   This matrix first converts the coefficient vector for a polynomial with respect to the standard basis into the coefficient vector for our given basis , and then multiplies by the matrix representing our transformation. The result will be the coefficient vector for with respect to the basis .  The polynomial has coefficient vector with respect to the standard basis. We find that :   The coefficients and are the coefficients of with repsect to the basis . Thus, . Note that in the last step we gave the simplified answer , which is simplified primarily in that it is expressed with respect to the standard basis.  Note that we can also introduce the matrix whose columns are the coefficient vectors of the vectors in the basis with respect to the standard basis. The effect of multiplying by is to convert from coefficients with respect to into a coefficient vector with respect to the standard basis. We can then write a new matrix ; this new matrix is now the matrix representation of with respect to the standard bases of and .   We check that , as before.   We find that . This lets us determine that for a general polynomial , , and therefore, our original transformation must have been .    The previous example illustrated some important observations that are true in general. We won't give the general proof, but we sum up the results in a theorem.    Suppose is a linear transformation, and suppose is the matrix of with respect to bases of and of . Let and be any other choice of basis for and , respectively. Let be matrices whose columns are the coefficient vectors of the vectors in with respect to . Then the matrix of with respect to the bases and is .    The relationship between the different maps is illustrated in below. In this figure, the maps and are the identity maps, corresponding to representing the same vector with respect to two different bases. The vertical arrows are the coefficient isomorphisms .  In the HTML version of the book, you can click and drag to rotate the figure below.   Diagramming matrix of a transformation with respect to two different choices of basis        We generally apply in the case that are the standard bases for , since in this case, the matrices are easy to determine, and we can use a computer to calculate and the product .   Suppose has the matrix with respect to the bases of and of . Determine a formula for in terms of a general input .   We must first write our general input in terms of the given basis. With respect to the standard basis , we have the matrix , representing the change from the basis the basis . The basis of is already the standard basis, so we need the matrix :   For a matrix we find . But this is equal to , so .   In textbooks such as Sheldon Axler's Linear Algebra Done Right that focus primarily on linear transformations, the above construction of the matrix of a transformation with respect to choices of bases can be used as a primary motivation for introducing matrices, and determining their algebraic properties. In particular, the rule for matrix multiplication, which can seem peculiar at first, can be seen as a consequence of the composition of linear maps.    Let be finite-dimensional vectors spaces, with ordered bases , respectively. Let and be linear maps. Then .    Let . Then . On the other hand, . Since is invertible, the result follows.    Being able to express a general linear transformation in terms of a matrix is useful, since questions about linear transformations can be converted into questions about matrices that we already know how to solve. In particular,    is an isomorphism if and only if is invertible for some (and hence, all) choice of bases of and of .    The rank of is equal to the rank of (and this does not depend on the choice of basis).    The kernel of is isomorphic to the nullspace of .     Next, we will want to look at two topics in particular. First, if is a linear operator, then it makes sense to consider the matrix obtained by using the same basis for both domain and codomain. Second, we will want to know how this matrix changes if we change the choice of basis.     Let be the vector space of all polynomials of degree or less in the variable .  Let be the linear transformation defined by . That is, ( D ) is the derivative transformation. Let be ordered bases for and , respectively. Find the matrix for relative to the basis in the domain and in the codomain.              Let be the vector space of all polynomials of degree or less in the variable . Let be the linear transformation defined by . That is, is the derivative transformation.  Let be ordered bases for and , respectively. Find the matrix for relative to the bases in the domain and in the codomain.              Let be the vector space of all polynomials of degree or less in the variable . Let be the linear transformation defined by . That is, is the derivative transformation.  Let be ordered bases for and , respectively. Find the matrix for relative to the bases in the domain and in the codomain.              Let be the linear transformation defined by Let be bases for and , respectively. Find the matrix for relative to the bases in the domain and in the codomain.              Let be the linear transformation defined by Let be bases for and , respectively. Find the matrix for relative to the bases in the domain and in the codomain.             "
},
{
  "id": "ex-mc-transf-matrix1",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#ex-mc-transf-matrix1",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": " What is the size of the matrix used for the matrix transformation ?          Correct! We need to be able to multiply on the right by an column vector, and get an column vector as output.           The domain of is , and the product is only defined if the number of columns ( ) is equal to the dimension of the domain.           The domain of is , and the product is only defined if the number of columns ( ) is equal to the dimension of the domain.           Although the product would be defined in this case, the result would be a vector in , and we want a vector in .    "
},
{
  "id": "ex-confirm-iso",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#ex-confirm-iso",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "",
  "body": " Show that the coefficient isomorphism is, indeed, a linear isomorphism from to .   It's clear that , since the only way to write the zero vector in in terms of (or, indeed, any independent set) is to set all the scalars equal to zero.  If we have two vectors given by , then , so .  Finally, for any scalar , we have .  This shows that is linear. To see that is an isomorphism, we can simply note that takes the basis to the standard basis of . Alternatively, we can give the inverse: is given by .  "
},
{
  "id": "def-transformation-matrix",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#def-transformation-matrix",
  "type": "Definition",
  "number": "5.1.3",
  "title": "The matrix <span class=\"process-math\">\\(M_{DB}(T)\\)<\/span> of a linear map.",
  "body": " The matrix of a linear map   Let and be finite-dimensional vector spaces, and let be a linear map. Let and be ordered bases for and , respectively. Then the matrix  of with respect to the bases and is defined by .   "
},
{
  "id": "ex-transf-matrix-compute",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#ex-transf-matrix-compute",
  "type": "Exercise",
  "number": "5.1.4",
  "title": "",
  "body": " Suppose is given by . Compute the matrix of with respect to the bases of and of .   We have . Thus, . To confirm, note that , while on the other hand, .  "
},
{
  "id": "eg-using-transf-matrix",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#eg-using-transf-matrix",
  "type": "Example",
  "number": "5.1.5",
  "title": "Working with the matrix of a transformation.",
  "body": " Working with the matrix of a transformation   Let be a linear transformation whose matrix is given by with respect to the ordered bases of and of . Find the value of .    We need to write the input in terms of the basis . This amounts to solving the system of equations given by . Of course, we can easily set up and solve this system, but let's try to be systematic, and obtain a more useful result for future problems. Since we can easily determine how to write any polynomial in terms of the standard basis , it suffices to know how to write these three polynomials in terms of our basis.  At first, this seems like more work. After all, we now have three systems to solve: . However, all three systems have the same coefficient matrix, so we can solve them simultaneously, by adding three constants columns to our augmented matrix.  We get the matrix . But this is exactly the augmented matrix we'd right down if we were trying to find the inverse of the matrix whose columns are the coefficient representations of our given basis vectors in terms of the standard basis.  To compute , we use the computer:   Next, we find :   This matrix first converts the coefficient vector for a polynomial with respect to the standard basis into the coefficient vector for our given basis , and then multiplies by the matrix representing our transformation. The result will be the coefficient vector for with respect to the basis .  The polynomial has coefficient vector with respect to the standard basis. We find that :   The coefficients and are the coefficients of with repsect to the basis . Thus, . Note that in the last step we gave the simplified answer , which is simplified primarily in that it is expressed with respect to the standard basis.  Note that we can also introduce the matrix whose columns are the coefficient vectors of the vectors in the basis with respect to the standard basis. The effect of multiplying by is to convert from coefficients with respect to into a coefficient vector with respect to the standard basis. We can then write a new matrix ; this new matrix is now the matrix representation of with respect to the standard bases of and .   We check that , as before.   We find that . This lets us determine that for a general polynomial , , and therefore, our original transformation must have been .   "
},
{
  "id": "thm-change-basis-transformation",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#thm-change-basis-transformation",
  "type": "Theorem",
  "number": "5.1.6",
  "title": "",
  "body": "  Suppose is a linear transformation, and suppose is the matrix of with respect to bases of and of . Let and be any other choice of basis for and , respectively. Let be matrices whose columns are the coefficient vectors of the vectors in with respect to . Then the matrix of with respect to the bases and is .   "
},
{
  "id": "fig-basis-cube",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#fig-basis-cube",
  "type": "Figure",
  "number": "5.1.7",
  "title": "",
  "body": " Diagramming matrix of a transformation with respect to two different choices of basis       "
},
{
  "id": "ex-find-transf-from-matrix",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#ex-find-transf-from-matrix",
  "type": "Exercise",
  "number": "5.1.8",
  "title": "",
  "body": " Suppose has the matrix with respect to the bases of and of . Determine a formula for in terms of a general input .   We must first write our general input in terms of the given basis. With respect to the standard basis , we have the matrix , representing the change from the basis the basis . The basis of is already the standard basis, so we need the matrix :   For a matrix we find . But this is equal to , so .  "
},
{
  "id": "thm-matrix-multiplication",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#thm-matrix-multiplication",
  "type": "Theorem",
  "number": "5.1.9",
  "title": "",
  "body": "  Let be finite-dimensional vectors spaces, with ordered bases , respectively. Let and be linear maps. Then .    Let . Then . On the other hand, . Since is invertible, the result follows.   "
},
{
  "id": "ex-ww-transf-mat1",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#ex-ww-transf-mat1",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": "  Let be the vector space of all polynomials of degree or less in the variable .  Let be the linear transformation defined by . That is, ( D ) is the derivative transformation. Let be ordered bases for and , respectively. Find the matrix for relative to the basis in the domain and in the codomain.           "
},
{
  "id": "ex-ww-transf-mat2",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#ex-ww-transf-mat2",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "",
  "body": "  Let be the vector space of all polynomials of degree or less in the variable . Let be the linear transformation defined by . That is, is the derivative transformation.  Let be ordered bases for and , respectively. Find the matrix for relative to the bases in the domain and in the codomain.           "
},
{
  "id": "ex-ww-transf-mat3",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#ex-ww-transf-mat3",
  "type": "Exercise",
  "number": "5.1.3",
  "title": "",
  "body": "  Let be the vector space of all polynomials of degree or less in the variable . Let be the linear transformation defined by . That is, is the derivative transformation.  Let be ordered bases for and , respectively. Find the matrix for relative to the bases in the domain and in the codomain.           "
},
{
  "id": "ex-ww-transf-mat4",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#ex-ww-transf-mat4",
  "type": "Exercise",
  "number": "5.1.4",
  "title": "",
  "body": "  Let be the linear transformation defined by Let be bases for and , respectively. Find the matrix for relative to the bases in the domain and in the codomain.           "
},
{
  "id": "ex-ww-transf-mat5",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#ex-ww-transf-mat5",
  "type": "Exercise",
  "number": "5.1.5",
  "title": "",
  "body": "  Let be the linear transformation defined by Let be bases for and , respectively. Find the matrix for relative to the bases in the domain and in the codomain.           "
},
{
  "id": "sec-matrix-operator",
  "level": "1",
  "url": "sec-matrix-operator.html",
  "type": "Section",
  "number": "5.2",
  "title": "The matrix of a linear operator",
  "body": " The matrix of a linear operator  Recall that a linear transformation is referred to as a linear operator . Recall also that two matrices and are similar if there exists an invertible matrix such that , and that similar matrices have a lot of properties in common. In particular, if is similar to , then and have the same trace, determinant, and eigenvalues. One way to understand this is the realization that two matrices are similar if they are representations of the same operator, with respect to different bases.  Since the domain and codomain of a linear operator are the same, we can consider the matrix where and are the same ordered basis. This leads to the next definition.    Let be a linear operator, and let be an ordered basis of . The matrix is called the -matrix of .    The following result collects several useful properties of the -matrix of an operator. Most of these were already encountered for the matrix of a transformation, although not all were stated formally.    Let be a linear operator, and let be a basis for . Then  for all .  If is another operator, then .  is an isomorphism if and only if is invertible.  If is an isomorphism, then .  .        Find the -matrix of the operator given by , with respect to the ordered basis .    We compute . We now need to write each of these in terms of the basis . We can do this by working out how to write each polynomial above in terms of . Or we can be systematic.  Let be the matrix whose columns are given by the coefficient representations of the polynomials in with respect to the standard basis  . For we need to solve the equation for scalars . But this is equivalent to the system , which, in turn, is equivalent to the matrix equation ; that is, . Thus, . Similarly, , and . Using the computer, we find:   That is, .  Let's confirm that this works. Suppose we have . Then , and we find . On the other hand, . The results agree, but possibly leave us a little confused.    In general, given an ordered basis for a vector space with standard basis , if we let , then , since multiplying by converts vectors written in terms of to vectors written in terms of .  As we saw above, this gives us the result, but doesn't shed much light on the problem, unless we have an easy way to write vectors in terms of the basis . Let's revisit the problem. Instead of using the given basis , let's use the standard basis . We quickly find , so with respect to the standard basis, . Now, recall that and note that for any polynomial , . But , so we get .  Now we have a much more efficient method for arriving at the matrix . The matrix is easy to determine, the matrix is easy to determine, and with the help of the computer, it's easy to compute .    Determine the matrix of the operator given by with respect to the ordered basis . (You may want to use the Sage cell below for computational assistance.)   With respect to the standard basis, we have , and the matrix is given by . Thus, we find .    The matrix used in the above examples is known as a change matrix. If the columns of are the coefficient vectors of with respect to another basis , then we have . In other words, is the matrix of the identity transformation , where we use the basis for the domain, and the basis for the codomain.    The change matrix with respect to ordered bases of is denoted , and defined by .      Let and be two ordered bases of . Then , and satisfies for all .  The matrix is invertible, and . Moreover, if is a third ordered basis, then .     Prove .   The identity operator does nothing. Convince yourself amounts to taking the vectors in and writing them in terms of the vectors in .     Let and let be ordered bases of . Find the change matrix .    Finding this matrix requires us to first write the vectors in in terms of the vectors in . However, it's much easier to do this the other way around. We easily find , and by , we have .    Note that the change matrix notation is useful for linear transformations between different vector spaces as well. Recall , which gave the result , where (using our new notation) and . In this notation, we have , which seems more intiutive.  The above results give a straightforward procedure for determining the matrix of any operator, with respect to any basis, if we let be the standard basis. The importance of these results is not just their computational simplicity, however. The most important outcome of the above is that if and give the matrix of with respect to two different bases, then , so that the two matrices are similar .  Recall from Theorem that similar matrices have the same determinant, trace, and eigenvalues. This means that we can unambiguously define the determinant and trace of an operator , and that we can compute eigenvalues of an operator using any matrix representation of that operator.     Let and The set is a basis for  Let be a linear operator such that and    Find the matrix of relative to the basis .    Find the matrix of relative to the standard basis for .                     Let be the linear operator defined by Let be two different bases for .   Find the matrix for relative to the basis .       Find the matrix for relative to the basis .       Find the transition matrix such that .       Find the transition matrix such that .  Reminder:   On paper, confirm that .            "
},
{
  "id": "p-1980",
  "level": "2",
  "url": "sec-matrix-operator.html#p-1980",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear operator similar "
},
{
  "id": "def-operator-matrix",
  "level": "2",
  "url": "sec-matrix-operator.html#def-operator-matrix",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  Let be a linear operator, and let be an ordered basis of . The matrix is called the -matrix of .   "
},
{
  "id": "thm-bmatrix-properties",
  "level": "2",
  "url": "sec-matrix-operator.html#thm-bmatrix-properties",
  "type": "Theorem",
  "number": "5.2.2",
  "title": "",
  "body": "  Let be a linear operator, and let be a basis for . Then  for all .  If is another operator, then .  is an isomorphism if and only if is invertible.  If is an isomorphism, then .  .     "
},
{
  "id": "example-23",
  "level": "2",
  "url": "sec-matrix-operator.html#example-23",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Find the -matrix of the operator given by , with respect to the ordered basis .    We compute . We now need to write each of these in terms of the basis . We can do this by working out how to write each polynomial above in terms of . Or we can be systematic.  Let be the matrix whose columns are given by the coefficient representations of the polynomials in with respect to the standard basis  . For we need to solve the equation for scalars . But this is equivalent to the system , which, in turn, is equivalent to the matrix equation ; that is, . Thus, . Similarly, , and . Using the computer, we find:   That is, .  Let's confirm that this works. Suppose we have . Then , and we find . On the other hand, . The results agree, but possibly leave us a little confused.   "
},
{
  "id": "ex-op-matrix-compute",
  "level": "2",
  "url": "sec-matrix-operator.html#ex-op-matrix-compute",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "",
  "body": " Determine the matrix of the operator given by with respect to the ordered basis . (You may want to use the Sage cell below for computational assistance.)   With respect to the standard basis, we have , and the matrix is given by . Thus, we find .  "
},
{
  "id": "def-change-matrix",
  "level": "2",
  "url": "sec-matrix-operator.html#def-change-matrix",
  "type": "Definition",
  "number": "5.2.5",
  "title": "",
  "body": "  The change matrix with respect to ordered bases of is denoted , and defined by .   "
},
{
  "id": "thm-change-matrix",
  "level": "2",
  "url": "sec-matrix-operator.html#thm-change-matrix",
  "type": "Theorem",
  "number": "5.2.6",
  "title": "",
  "body": "  Let and be two ordered bases of . Then , and satisfies for all .  The matrix is invertible, and . Moreover, if is a third ordered basis, then .   "
},
{
  "id": "ex-proof-change-matrix",
  "level": "2",
  "url": "sec-matrix-operator.html#ex-proof-change-matrix",
  "type": "Exercise",
  "number": "5.2.7",
  "title": "",
  "body": " Prove .   The identity operator does nothing. Convince yourself amounts to taking the vectors in and writing them in terms of the vectors in .  "
},
{
  "id": "example-24",
  "level": "2",
  "url": "sec-matrix-operator.html#example-24",
  "type": "Example",
  "number": "5.2.8",
  "title": "",
  "body": "  Let and let be ordered bases of . Find the change matrix .    Finding this matrix requires us to first write the vectors in in terms of the vectors in . However, it's much easier to do this the other way around. We easily find , and by , we have .   "
},
{
  "id": "ex-ww-op-matrix1",
  "level": "2",
  "url": "sec-matrix-operator.html#ex-ww-op-matrix1",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": "  Let and The set is a basis for  Let be a linear operator such that and    Find the matrix of relative to the basis .    Find the matrix of relative to the standard basis for .                  "
},
{
  "id": "ex-ww-op-matrix2",
  "level": "2",
  "url": "sec-matrix-operator.html#ex-ww-op-matrix2",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": "  Let be the linear operator defined by Let be two different bases for .   Find the matrix for relative to the basis .       Find the matrix for relative to the basis .       Find the transition matrix such that .       Find the transition matrix such that .  Reminder:   On paper, confirm that .          "
},
{
  "id": "sec-direct-sum",
  "level": "1",
  "url": "sec-direct-sum.html",
  "type": "Section",
  "number": "5.3",
  "title": "Direct Sums and Invariant Subspaces",
  "body": " Direct Sums and Invariant Subspaces   This section continues the discussion of direct sums (from ) and invariant subspaces (from ), to better understand the structure of linear operators.    Invariant subspaces    Given an operator , we say that a subspace is - invariant if for all .    Given a basis of , note that is -invariant if and only if for each .  For any operator , there are four subspaces that are always -invariant: . Of course, some of these subspaces might be the same; for example, if is invertible, then and .   Show that for any linear operator , the subspaces and are -invariant.   In each case, choose an element of the subspace. What does the definition of the space tell you about that element? (For example, if , what is the value of ?) Then show that also fits the defintion of that space.   A subspace is -invariant if does not map any vectors in outside of . Notice that if we shrink the domain of to , then we get an operator from to , since the image is contained in .    Let be a linear operator, and let be a -invariant subspace. The restriction of to , denoted , is the operator defined by for all .     True or false: the restriction is the same function as the operator .   The definition of a function includes its domain and codomain. Since the domain of is different from that of , they are not the same function.   A lot can be learned by studying the restrictions of an operator to invariant subspaces. Indeed, the textbook by Axler does almost everything from this point of view. One reason to study invariant subspaces is that they allow us to put the matrix of into simpler forms.    Let be a linear operator, and let be a -invariant subspace. Let be a basis of , and extend this to a basis of . Then the matrix with respect to this basis has the block-triangular form for some matrix .    Reducing a matrix to block triangular form is useful, because it simplifies computations such as determinants and eigenvalues (and determinants and eigenvalues are computationally expensive). In particular, if a matrix has the block form , where the diagonal blocks are square matrices, then and .    Eigenspaces  An important source of invariant subspaces is eigenspaces. Recall that for any real number , and any operator , we define . For most values of , we'll have . The values of for which is non-trivial are precisely the eigenvalues of . Note that since similar matrices have the same characteristic polynomial, any matrix representation will have the same eigenvalues. They do not generally have the same eigenspaces, but we do have the following.    Let be a linear operator. For any scalar , the eigenspace is -invariant. Moreover, for any ordered basis of , the coefficient isomorphism induces an isomorphism .    In other words, the two eigenspaces are isomorphic, although the isomorphism depends on a choice of basis.    Direct Sums  Recall that for any subspaces of a vector space , the sets are subspaces of . Saying that means that can be written as a sum of a vector in and a vector in . However, this sum may not be unique. If , and , then we can write , giving two different representations of a vector as an element of .  We proved in in that for any , there exist unique vectors and such that , if and only if .  In , we said that a sum where is called a direct sum , written as .  Typically we are interested in the case that the two subspaces sum to . Recall from that if , we say that is a complement of . We also say that is a direct sum decomposition of . Of course, the orthogonal complement of a subspace is a complement in this sense, if is equipped with an inner product. (Without an inner product we have no concept of orthogonal .) But even if we don't have an inner product, finding a complement is not too difficult, as the next example shows.   Finding a complement by extending a basis   The easiest way to determine a direct sum decomposition (or equivalently, a complement) is through the use of a basis. Suppose is a subspace of with basis , and extend this to a basis of . Let . Then clearly , and , since if , then and , so we have , which gives , so by the linear independence of , showing that .  Conversely, if , and we have bases of and of , then is a basis for . Indeed, spans , since every element of can be written as with . Independence follows by reversing the argument above: if then , and equality is only possible if both sides belong to . Since is independent, the have to be zero, and since is independent, the have to be zero.    The argument given in the second part of has an immediate, but important consequence.    Suppose , where and . Then is finite-dimensional, and .      Suppose , where and are -invariant subspaces for some operator . Let and let be bases for and , respectively. Determine the matrix of with respect to the basis of .    Since we don't know the map or anything about the bases , we're looking for a fairly general statement here. Since is -invariant, we must have for each . Similarly, for each . This means that we have for some scalars . If we set and , then we have . Moreover, we can also see that , and .     "
},
{
  "id": "def-invariant-subspace",
  "level": "2",
  "url": "sec-direct-sum.html#def-invariant-subspace",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": "  Given an operator , we say that a subspace is - invariant if for all .   "
},
{
  "id": "ex-ker-im-invariant",
  "level": "2",
  "url": "sec-direct-sum.html#ex-ker-im-invariant",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": " Show that for any linear operator , the subspaces and are -invariant.   In each case, choose an element of the subspace. What does the definition of the space tell you about that element? (For example, if , what is the value of ?) Then show that also fits the defintion of that space.  "
},
{
  "id": "def-restriction",
  "level": "2",
  "url": "sec-direct-sum.html#def-restriction",
  "type": "Definition",
  "number": "5.3.3",
  "title": "",
  "body": "  Let be a linear operator, and let be a -invariant subspace. The restriction of to , denoted , is the operator defined by for all .   "
},
{
  "id": "ex-tf-restriction",
  "level": "2",
  "url": "sec-direct-sum.html#ex-tf-restriction",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": " True or false: the restriction is the same function as the operator .   The definition of a function includes its domain and codomain. Since the domain of is different from that of , they are not the same function.  "
},
{
  "id": "thm-invariant-block-triangular",
  "level": "2",
  "url": "sec-direct-sum.html#thm-invariant-block-triangular",
  "type": "Theorem",
  "number": "5.3.5",
  "title": "",
  "body": "  Let be a linear operator, and let be a -invariant subspace. Let be a basis of , and extend this to a basis of . Then the matrix with respect to this basis has the block-triangular form for some matrix .   "
},
{
  "id": "thm-eigenspace-invariant",
  "level": "2",
  "url": "sec-direct-sum.html#thm-eigenspace-invariant",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "",
  "body": "  Let be a linear operator. For any scalar , the eigenspace is -invariant. Moreover, for any ordered basis of , the coefficient isomorphism induces an isomorphism .   "
},
{
  "id": "p-2042",
  "level": "2",
  "url": "sec-direct-sum.html#p-2042",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct sum "
},
{
  "id": "p-2043",
  "level": "2",
  "url": "sec-direct-sum.html#p-2043",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complement "
},
{
  "id": "eg-direct-sum-basis",
  "level": "2",
  "url": "sec-direct-sum.html#eg-direct-sum-basis",
  "type": "Example",
  "number": "5.3.7",
  "title": "Finding a complement by extending a basis.",
  "body": " Finding a complement by extending a basis   The easiest way to determine a direct sum decomposition (or equivalently, a complement) is through the use of a basis. Suppose is a subspace of with basis , and extend this to a basis of . Let . Then clearly , and , since if , then and , so we have , which gives , so by the linear independence of , showing that .  Conversely, if , and we have bases of and of , then is a basis for . Indeed, spans , since every element of can be written as with . Independence follows by reversing the argument above: if then , and equality is only possible if both sides belong to . Since is independent, the have to be zero, and since is independent, the have to be zero.   "
},
{
  "id": "thm-direct-sum-dimension",
  "level": "2",
  "url": "sec-direct-sum.html#thm-direct-sum-dimension",
  "type": "Theorem",
  "number": "5.3.8",
  "title": "",
  "body": "  Suppose , where and . Then is finite-dimensional, and .   "
},
{
  "id": "eg-invariant-block",
  "level": "2",
  "url": "sec-direct-sum.html#eg-invariant-block",
  "type": "Example",
  "number": "5.3.9",
  "title": "",
  "body": "  Suppose , where and are -invariant subspaces for some operator . Let and let be bases for and , respectively. Determine the matrix of with respect to the basis of .    Since we don't know the map or anything about the bases , we're looking for a fairly general statement here. Since is -invariant, we must have for each . Similarly, for each . This means that we have for some scalars . If we set and , then we have . Moreover, we can also see that , and .   "
},
{
  "id": "worksheet-gen-eigen",
  "level": "1",
  "url": "worksheet-gen-eigen.html",
  "type": "Worksheet",
  "number": "5.4",
  "title": "Worksheet: generalized eigenvectors",
  "body": " Worksheet: generalized eigenvectors    Let be a finite-dimensional vector space, and let be a linear operator. Assume that has all real eigenvalues (alternatively, assume we're working over the complex numbers). Let be the matrix of with respect to some standard basis of .  Our goal will be to replace the basis with a basis such that the matrix of with respect to is as simple as possible. (Where we agree that the \"simplest\" possible matrix would be diagonal.)  Recall the following results that we've observed so far:   The characteristic polynomial of does not depend on the choice of basis.    The eigenvalues of are the roots of this polynomial.    The eigenspaces are -invariant subspaces of .    The matrix can be diagonalized if and only if there is a basis of consisting of eigenvectors of .    Suppose . Then can be diagonalized if and only if for each .     In the case where can be diagonalized, we have the direct sum decomposition .  The question is: what do we do if there aren't enough eigenvectors to form a basis of ? When that happens, the direct sum of all the eigenspaces will not give us all of .  The idea: replace with a generalized eigenspace  whose dimension is .  Our candidate: instead of , we use , where is the multiplicity of .      Recall that in class we proved that and are -invariant subspaces. Let be any polynomial, and prove that and are also -invariant.   Hint: first show that for any polynomial .    Applying the result of Problem 1 to the polynomial shows that is -invariant. It is possible to show that but I won't ask you to do that. (A proof is in the book by Nicholson if you really want to see it.)  Instead, we will try to understand what's going on by exploring an example.  Consider the following matrix.    Find (and factor) the characteristic polynomial of . For the commands you might need, refer to the textbook .       Find the eigenvectors. What are the dimensions of the eigenspaces? Based on this observation, can be diagonalized?     Prove that for any matrix , we have .      It turns out that at some point, the null spaces stabilize. If for some , then for all .   For each eigenvalue found in , compute the nullspace of , , , until you find two consecutive nullspaces that are the same.  By , any vector in will also be a vector in . In particular, at each step, we can find a basis for that includes the basis for .  For each eigenvalue found in , determine such a basis for the corresponding generalized eigenspace. You will want to list your vectors so that the vectors from the basis of the nullspace for come first, then the vectors for the basis of the nullspace for , and so on.     Finally, let's see how all of this works. Let be the matrix whose columns consist of the vectors found in Problem 4. What do you get when you compute the matrix ?     "
},
{
  "id": "p-2060",
  "level": "2",
  "url": "worksheet-gen-eigen.html#p-2060",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generalized eigenspace "
},
{
  "id": "ws-ge-ex1",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex1",
  "type": "Worksheet Exercise",
  "number": "5.4.1",
  "title": "",
  "body": " Recall that in class we proved that and are -invariant subspaces. Let be any polynomial, and prove that and are also -invariant.   Hint: first show that for any polynomial .  "
},
{
  "id": "ws-ge-ex2",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex2",
  "type": "Worksheet Exercise",
  "number": "5.4.2",
  "title": "",
  "body": " Find (and factor) the characteristic polynomial of . For the commands you might need, refer to the textbook .  "
},
{
  "id": "ws-ge-ex3",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex3",
  "type": "Worksheet Exercise",
  "number": "5.4.3",
  "title": "",
  "body": " Find the eigenvectors. What are the dimensions of the eigenspaces? Based on this observation, can be diagonalized?  "
},
{
  "id": "ws-ge-ex4",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex4",
  "type": "Worksheet Exercise",
  "number": "5.4.4",
  "title": "",
  "body": " Prove that for any matrix , we have .  "
},
{
  "id": "ws-ge-ex5",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex5",
  "type": "Worksheet Exercise",
  "number": "5.4.5",
  "title": "",
  "body": " For each eigenvalue found in , compute the nullspace of , , , until you find two consecutive nullspaces that are the same.  By , any vector in will also be a vector in . In particular, at each step, we can find a basis for that includes the basis for .  For each eigenvalue found in , determine such a basis for the corresponding generalized eigenspace. You will want to list your vectors so that the vectors from the basis of the nullspace for come first, then the vectors for the basis of the nullspace for , and so on.  "
},
{
  "id": "ws-ge-ex6",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex6",
  "type": "Worksheet Exercise",
  "number": "5.4.6",
  "title": "",
  "body": " Finally, let's see how all of this works. Let be the matrix whose columns consist of the vectors found in Problem 4. What do you get when you compute the matrix ?  "
},
{
  "id": "sec-gen-eigen",
  "level": "1",
  "url": "sec-gen-eigen.html",
  "type": "Section",
  "number": "5.5",
  "title": "Generalized eigenspaces",
  "body": " Generalized eigenspaces  Example showed us that if , where and are -invariant, then the matrix has block diagonal form , as long as the basis is the union of bases of and .  We want to take this idea further. If , where each subspace is -invariant, then with respect to a basis consisting of basis vectors for each subspace, we will have , where each is the matrix of with respect to some basis of .  Our goal moving forward is twofold: one, to make the blocks as small as possible, so that is as close to diagonal as possible, and two, to make the blocks as simple as possible. Of course, if is diagonalizable, then we can get all blocks down to size , but this is not always possible.  Recall from Section that if the characteristic polynomial of (or equivalently, any matrix representation of ) is , then for each , and is diagonalizable if and only if we have equality for each . (This guarantees that we have sufficiently many independent eigenvectors to form a basis of .)  Since eigenspaces are -invariant, we see that being able to diagonalize is equivalent to having the direct sum decomposition . If cannot be diagonalized, it's because we came up short on the number of eigenvectors, and the direct sum of all eigenspaces only produces some subspace of of lower dimension. We now consider how one might enlarge a set of independent eigenvectors in some standard, and ideally optimal, way.  First, we note that for any operator , the restriction of to is the zero operator, since by definition, for all . Since we define , it follows that restricts to the zero operator on the eigenspace . The idea is to relax the condition identically zero to something that will allow us to potentially enlarge some of our eigenspaces, so that we end up with enough vectors to span .  It turns out that the correct replacement for identically zero is nilpotent . What we would like to find is some subspace such that the restriction of to will be nilpotent. (Recall that this means for some integer when restricted to .) The only problem is that we don't (yet) know what this subspace should be. To figure it out, we rely on some ideas you may have explored in your last assignment.    Let be a linear operator. Then:      If for some , then for all .    If , then .       In other words, for any operator , the kernels of successive powers of can get bigger, but the moment the kernel doesn't change for the next highest power, it stops changing for all further powers of . That is, we have a sequence of kernels of strictly greater dimension until we reach a maximum, at which point the kernels stop growing. And of course, the maximum dimension cannot be more than the dimension of .    Let be a linear operator, and let be an eigenvalue of . The generalized eigenspace of associated to the eigenvalue is denoted , and defined as , where .    Some remarks are in order. First, we can actually define for any scalar . But this space will be trivial if is not an eigenvalue. Second, it is possible to show (although we will not do so here) that if is an eigenvalue with multiplicity , then . (The kernel will usually have stopped growing well before we hit , but we know they're all eventually equal, so using guarantees we have everything).  We will not prove it here (see Nicholson, or Axler), but the advantage of using generalized eigenspaces is that they're just big enough to cover all of .    Let be a complex vector space, and let be a linear operator. (We can take to be real if we assume that has all real eigenvalues.) Let be the distinct eigenvalues of . Then each generalized eigenspace is -invariant, and we have the direct sum decomposition .    For each eigenvalue of , let denote the smallest integer power such that . Then certainly we have for each . (Note also that if , then .)  The polynomial is the polynomial of smallest degree such that . The polynomial is called the minimal polynomial of . Note that is diagonalizable if and only if the minimal polynomial of has no repeated roots.  In , we'll explore a systematic method for determining the generalized eigenspaces of a matrix, and in particular, for computing a basis for each generalized eigenspace, with respect to which the corresponding block in the block-diagonal form is especially simple.  "
},
{
  "id": "thm-nullspace-power",
  "level": "2",
  "url": "sec-gen-eigen.html#thm-nullspace-power",
  "type": "Theorem",
  "number": "5.5.1",
  "title": "",
  "body": "  Let be a linear operator. Then:      If for some , then for all .    If , then .      "
},
{
  "id": "def-generalized-eigenspace",
  "level": "2",
  "url": "sec-gen-eigen.html#def-generalized-eigenspace",
  "type": "Definition",
  "number": "5.5.2",
  "title": "",
  "body": "  Let be a linear operator, and let be an eigenvalue of . The generalized eigenspace of associated to the eigenvalue is denoted , and defined as , where .   "
},
{
  "id": "thm-gen-eigen-decomp",
  "level": "2",
  "url": "sec-gen-eigen.html#thm-gen-eigen-decomp",
  "type": "Theorem",
  "number": "5.5.3",
  "title": "",
  "body": "  Let be a complex vector space, and let be a linear operator. (We can take to be real if we assume that has all real eigenvalues.) Let be the distinct eigenvalues of . Then each generalized eigenspace is -invariant, and we have the direct sum decomposition .   "
},
{
  "id": "p-2091",
  "level": "2",
  "url": "sec-gen-eigen.html#p-2091",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimal polynomial "
},
{
  "id": "sec-jordan-form",
  "level": "1",
  "url": "sec-jordan-form.html",
  "type": "Section",
  "number": "5.6",
  "title": "Jordan Canonical Form",
  "body": " Jordan Canonical Form  The results of and tell us that for an eigenvalue of with multiplicity , we have a sequence of subspace inclusions . Not all subspaces in this sequence are necessarily distinct. Indeed, it is entirely possible that , in which case . In geeral there will be some such that .  Our goal in this section is to determine a basis for in a standard way. We begin with a couple of important results, which we state without proof. The first can be found in Axler's book; the second in Nicholson's.    Suppose is a complex vector space, and is a linear operator. Let denote the distinct eigenvalues of . (We can assume is real if we also assume that all eigenvalues of are real.) Then:   Generalized eigenvectors corresponding to distinct eigenvalues are linearly independent.     Each generalize eigenspace is -invariant.    Each restriction is nilpotent.         Let be a linear operator. If the characteristic polynomial of is given by , then for each .  Moreover, if we let , where is any basis for for , then is a basis for (this follows immediately from ) and the matrix of with respect to this basis has the block-diagonal form , where each has size .    A few remarks are called for here.   One of the ways to see that is to consider . This will have the form , where is the matrix of , restricted to . If , restricts to an invertible operator on , but its restriction to is nilpotent, by . So is nilpotent (with ), and has size , while is invertible if . The matrix thus ends up with a block of zeros, so .    If the previous point wasn't clear, note that with an appropriate choice of basis, the block in has the form . Thus, will have blocks that are upper triangular, with diagonal entries when , but when we get a matrix that is strictly upper triangular, and therefore nilpotent, since its diagonal entries will be .    if is the least integer such that , then it is possible to choose the basis of so that is itself block-diagonal, with the largest block having size . The remainder of this section is devoted to determining how to choose such a basis.     The basic principle for choosing a basis for each generalized eigenspace is as follows. We know that for each eigenvalue . So we start with a basis for , by finding eigenvectors as usual. If , then we're done: . Otherwise, we enlarge the basis for to a basis of . If , then we're done, and . If not, we enlarge our existing basis to a basis of . We continue this process until we reach some power such that . (This is guaranteed to happen by .) We then conclude that .  The above produces a basis for , but we want what is, in some sense, the best basis. For our purposes, the best basis is the one in which the matrix of restricted to each generalized eigenspace is block diagonal, where each block is a Jordan block .    Let be a scalar. A Jordan block is an matrix of the form . That is has each diagonal entry equal to , and each superdiagonal entry (those just above the diagonal) equal to 1, with all other entries equal to zero.      The following are examples of Jordan blocks: .     Finding a chain basis  A Jordan block corresponds to basis vectors with the following properties: , and so on. Notice that is an eigenvector, and for each , .  Notice also that if we set , then so our basis for is of the form , where , and is an eigenvector. (Note that , and indeed for each .) Such a basis is known as a chain basis .  If we might have to repeat this process for each eigenvector in a basis for the eigenspace. The full matrix of might have several Jordan blocks of possibly different sizes for each eigenvalue.     Determine a Jordan basis for the operator whose matrix with respect to the standard basis is given by     First, we need the characteristic polynomial.   The characteristic polynomial of is given by . We thus have two eigenvalues: , of multiplicity , and , of multiplicity . We next find the eigenspace.   The computer gives us , so we have only one independent eigenvector, which means that .  Following , we extend to a basis of by solving the system .   Using the results above from the computer (or Gaussian elimination), we find a general solution . Note that our solution is of the form . We set , and get .  Next, we consider the eigenvalue . The computer gives us the following:   Rescaling to remove fractions, we find . Again, we're one eigenvector short of the multiplicity, so we need to consider .  In the next cell, note that we doubled the eigenvectors in E3 to avoid fractions. To follow the solution in our example, we append 2*E3[0] , and reduce the resulting matrix. You should find that using the eigenvector corresponding to E3[0] leads to an inconsistent system. Once you confirm this, replace E3[0] with E3[1] and re-run the cell to see that we get an inconsistent system using as well!   The systems and are both inconsistent, but we can salvage the situation by replacing the eigenvector by some linear combination . We row-reduce, and look for values of and that give a consistent system.  The rref command takes things a bit farther than we'd like, so we use the command echelon_form() instead. Note that if , the system is inconsistent.   We find that does the job, so we set .   Solving the system , using the code above, we find .  We let , and check that , as required:   This gives us the basis for , and with respect to this basis, we have the Jordan canonical form .  Now that we've done all the work required for , we should confess that there was an easier way all along:   The jordan_form() command returns a pair , where is the Jordan canonical form of , and is an invertible matrix such that . You might find that the computer's answer is not quite the same as ours. This is because the Jordan canonical form is only unique up to permutation of the Jordan blocks. Changing the order of the blocks amounts to changing the order of the columns of , which are given by a basis of (generalized eigenvectors).     Determine a Jordan basis for the linear operator given by . A code cell is given below in case you want to try performing the operations demonstrated in .   With respect to the standard basis of , the matrix of is . We find (perhaps using the Sage cell provided below, and the code from the example above) that , so has eigenvalues (of multiplicity ), and (of multiplicity ).  We tackle the repeated eigenvalue first. The reduced row-echelon form of is given by , so . We now attempt to solve . We find , so , where . We take as our first generalized eigenvector. Note that , so , as expected.  Finally, we look for an element of of the form , where . We set up and solve the system as follows: , so , where .  Finally, we deal with the eigenvalue . The reduced row-echelon form of is , so .  Our basis of column vectors is therefore . Note that by design, . The corresponding Jordan basis for is , and with respect to this basis, we have .    One final note: we mentioned above that the minimal polynomial of an operator has the form , where for each , is the size of the largest Jordan block corresponding to . Knowing the minimal polynomial therefore tells as a lot about the Jordan canonical form, but not everything. Of course, if for all , then our operator can be diagaonalized. If , the minimal polynomial tells us everything, except for the order of the Jordan blocks.  In , the minimal polynomial is , the same as the characteristic polynomial. If we knew this in advance, then the only possible Jordan canonical forms would be . If instead the minimal polynomial had turned out to be (with the same characteristic polynomial), then, up to permutation of the Jordan blocks, our Jordan canonical form would be .  However, once we hit matrices of size or larger, some ambiguity creeps in. For example, suppose with . Then the largest Jordan block is , but we could have two blocks and a , or three blocks and one .     Find the minimal polynomial of .              Let Find a matrix such that is the Jordan canonical form of .              Let Find a matrix such that is the Jordan canonical form of .             "
},
{
  "id": "thm-gen-eigen-props",
  "level": "2",
  "url": "sec-jordan-form.html#thm-gen-eigen-props",
  "type": "Theorem",
  "number": "5.6.1",
  "title": "",
  "body": "  Suppose is a complex vector space, and is a linear operator. Let denote the distinct eigenvalues of . (We can assume is real if we also assume that all eigenvalues of are real.) Then:   Generalized eigenvectors corresponding to distinct eigenvalues are linearly independent.     Each generalize eigenspace is -invariant.    Each restriction is nilpotent.      "
},
{
  "id": "thm-block-eigen",
  "level": "2",
  "url": "sec-jordan-form.html#thm-block-eigen",
  "type": "Theorem",
  "number": "5.6.2",
  "title": "",
  "body": "  Let be a linear operator. If the characteristic polynomial of is given by , then for each .  Moreover, if we let , where is any basis for for , then is a basis for (this follows immediately from ) and the matrix of with respect to this basis has the block-diagonal form , where each has size .   "
},
{
  "id": "def-jordan-block",
  "level": "2",
  "url": "sec-jordan-form.html#def-jordan-block",
  "type": "Definition",
  "number": "5.6.3",
  "title": "",
  "body": "  Let be a scalar. A Jordan block is an matrix of the form . That is has each diagonal entry equal to , and each superdiagonal entry (those just above the diagonal) equal to 1, with all other entries equal to zero.   "
},
{
  "id": "example-27",
  "level": "2",
  "url": "sec-jordan-form.html#example-27",
  "type": "Example",
  "number": "5.6.4",
  "title": "",
  "body": "  The following are examples of Jordan blocks: .   "
},
{
  "id": "jordan-chain-basis",
  "level": "2",
  "url": "sec-jordan-form.html#jordan-chain-basis",
  "type": "Insight",
  "number": "5.6.5",
  "title": "Finding a chain basis.",
  "body": " Finding a chain basis  A Jordan block corresponds to basis vectors with the following properties: , and so on. Notice that is an eigenvector, and for each , .  Notice also that if we set , then so our basis for is of the form , where , and is an eigenvector. (Note that , and indeed for each .) Such a basis is known as a chain basis .  If we might have to repeat this process for each eigenvector in a basis for the eigenspace. The full matrix of might have several Jordan blocks of possibly different sizes for each eigenvalue.  "
},
{
  "id": "ex-jordan-form1",
  "level": "2",
  "url": "sec-jordan-form.html#ex-jordan-form1",
  "type": "Example",
  "number": "5.6.6",
  "title": "",
  "body": "  Determine a Jordan basis for the operator whose matrix with respect to the standard basis is given by     First, we need the characteristic polynomial.   The characteristic polynomial of is given by . We thus have two eigenvalues: , of multiplicity , and , of multiplicity . We next find the eigenspace.   The computer gives us , so we have only one independent eigenvector, which means that .  Following , we extend to a basis of by solving the system .   Using the results above from the computer (or Gaussian elimination), we find a general solution . Note that our solution is of the form . We set , and get .  Next, we consider the eigenvalue . The computer gives us the following:   Rescaling to remove fractions, we find . Again, we're one eigenvector short of the multiplicity, so we need to consider .  In the next cell, note that we doubled the eigenvectors in E3 to avoid fractions. To follow the solution in our example, we append 2*E3[0] , and reduce the resulting matrix. You should find that using the eigenvector corresponding to E3[0] leads to an inconsistent system. Once you confirm this, replace E3[0] with E3[1] and re-run the cell to see that we get an inconsistent system using as well!   The systems and are both inconsistent, but we can salvage the situation by replacing the eigenvector by some linear combination . We row-reduce, and look for values of and that give a consistent system.  The rref command takes things a bit farther than we'd like, so we use the command echelon_form() instead. Note that if , the system is inconsistent.   We find that does the job, so we set .   Solving the system , using the code above, we find .  We let , and check that , as required:   This gives us the basis for , and with respect to this basis, we have the Jordan canonical form .  Now that we've done all the work required for , we should confess that there was an easier way all along:   The jordan_form() command returns a pair , where is the Jordan canonical form of , and is an invertible matrix such that . You might find that the computer's answer is not quite the same as ours. This is because the Jordan canonical form is only unique up to permutation of the Jordan blocks. Changing the order of the blocks amounts to changing the order of the columns of , which are given by a basis of (generalized eigenvectors).   "
},
{
  "id": "ex-jordan-form2",
  "level": "2",
  "url": "sec-jordan-form.html#ex-jordan-form2",
  "type": "Exercise",
  "number": "5.6.7",
  "title": "",
  "body": " Determine a Jordan basis for the linear operator given by . A code cell is given below in case you want to try performing the operations demonstrated in .   With respect to the standard basis of , the matrix of is . We find (perhaps using the Sage cell provided below, and the code from the example above) that , so has eigenvalues (of multiplicity ), and (of multiplicity ).  We tackle the repeated eigenvalue first. The reduced row-echelon form of is given by , so . We now attempt to solve . We find , so , where . We take as our first generalized eigenvector. Note that , so , as expected.  Finally, we look for an element of of the form , where . We set up and solve the system as follows: , so , where .  Finally, we deal with the eigenvalue . The reduced row-echelon form of is , so .  Our basis of column vectors is therefore . Note that by design, . The corresponding Jordan basis for is , and with respect to this basis, we have .  "
},
{
  "id": "ex-ww-minimal",
  "level": "2",
  "url": "sec-jordan-form.html#ex-ww-minimal",
  "type": "Exercise",
  "number": "5.6.1",
  "title": "",
  "body": "  Find the minimal polynomial of .           "
},
{
  "id": "ex-ww-jordan1",
  "level": "2",
  "url": "sec-jordan-form.html#ex-ww-jordan1",
  "type": "Exercise",
  "number": "5.6.2",
  "title": "",
  "body": "  Let Find a matrix such that is the Jordan canonical form of .           "
},
{
  "id": "ex-ww-jordan2",
  "level": "2",
  "url": "sec-jordan-form.html#ex-ww-jordan2",
  "type": "Exercise",
  "number": "5.6.3",
  "title": "",
  "body": "  Let Find a matrix such that is the Jordan canonical form of .           "
},
{
  "id": "appendix-complex-review",
  "level": "1",
  "url": "appendix-complex-review.html",
  "type": "Appendix",
  "number": "A",
  "title": "Review of complex numbers",
  "body": " Review of complex numbers  Let's quickly review some basic facts about complex numbers that are typically covered in an earlier course. First, we define the set of complex numbers by where . We have a bijection given by ; because of this, we often picture as the complex plane , with a real  axis, and an imaginary  axis.  Arithmetic with complex numbers is defined by . The multiplication rule looks complicated, but it's really just FOIL , along with the fact that . Note that if is real, we have , so that has the structure of a two dimensional vector space over (isomorphic to ).  Subtraction is defined in the obvious way. Division is less obvious. To define division, it helps to first introduce the complex conjugate . Given a complex number , we define . The importance of the conjugate is that we have the identity . So is real , and non-negative . This lets us define the modulus of by . This gives a measure of the magnitude of a complex number, in the same way as the vector norm on .  Now, given and , we have . And of course, we have unless , and as usual, we don't divide by zero.  An important thing to keep in mind when working with complex numbers is that they follow the same algebraic rules as real numbers. For example, given all complex, and , where , if we want to solve for , the answer is , as it would be in . The difference between and only really materializes when we want to compute  , by plugging in values for and .  One place where is computationally more complicated is finding powers and roots. For this, it is often more convenient to write our complex numbers in polar form . The key to the polar form for complex numbers is Euler's identity . For a unit complex number (that is with ), we can think of as a point on the unit circle, and write . If , we simply change the radius of our circle, so in general, . Euler's identity states that .  This idea of putting a complex number in an exponential function seems odd at first. If you take a course in complex variables, you'll get a better understanding of why this makes sense. But for now, we can take it as a convenient piece of notation. The reason it's convenient is that the rules for complex arithmetic turn out to align quite nicely with properties of the exponential function. For example, de Moivre's Theorem states that . This can be proved by induction (and the proof is not even all that bad), but it seems perfectly obvious in exponential notation: , since you multiply exponents when you raise a power to a power.  Similarly, if we want to multiply two unit complex numbers, we have . But in exponential notation, this is simply , which makes sense, since when you multiply exponentials, you add the exponents.  Generally, problems involving addition and subtraction are best handled in rectangular ( ) form, while problems involving multiplication and powers are best handled in polar form.  "
},
{
  "id": "p-2146",
  "level": "2",
  "url": "appendix-complex-review.html#p-2146",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex conjugate modulus "
},
{
  "id": "p-2149",
  "level": "2",
  "url": "appendix-complex-review.html#p-2149",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar form "
},
{
  "id": "section-jupyter",
  "level": "1",
  "url": "section-jupyter.html",
  "type": "Section",
  "number": "B.1",
  "title": "Jupyter",
  "body": " Jupyter  The first thing you need to know about doing linear algebra in Python is how to access a Python environment. Fortunately, you do not need to install any software for this. The University of Lethbridge has access to the Syzygy Jupyter Hub service, provided by PIMS (the Pacific Institute for Mathematical Sciences), Cybera, and Compute Canada. To access Syzygy, go to and log in with your ULeth credentials. Below is a video explaining some of the features of our Jupyter hub.   Note: if you click the login button and nothing happens, click the back button and try again. Sometimes there's a problem with our single sign-on service.  The primary type of document you'll encounter on Syzygy is the Jupyter notebook . Content in a Juypter notebook is organized into cells . Some cells contain text, which can be in either HTML or Markdown . Markdown is a simple markup language. It's not as versatile as HTML, but it's easier to use. On Jupyter, markdown supports the LaTeX language for mathematical expressions. Use single dollar signs for inline math: $\\frac{d}{dx}\\sin(x)=\\cos(x)$ produces , for example.  If you want display math , use double dollar signs. Unfortunately, entering matrices is a bit tedious. For example, $$A = \\begin{bmatrix}1 & 2 & 3\\\\4 & 5 & 6 &\\end{bmatrix}$$ produces . Later we'll see how to enter things like matrices in Python.  It's also possible to use markdown to add emphasis , images, URLs, . For details, see the following Markdown cheatsheet , or this quick reference from .  What's cool about a Jupyter notebook is that in addition to markdown cells, which can present content and provide explanation, we can also include code cells . Jupyter supports many different programming languages, but we will stick mainly to Python.  "
},
{
  "id": "p-2153",
  "level": "2",
  "url": "section-jupyter.html#p-2153",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Syzygy Jupyter Hub "
},
{
  "id": "p-2155",
  "level": "2",
  "url": "section-jupyter.html#p-2155",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Jupyter notebook cells Markdown "
},
{
  "id": "sec-python-basics",
  "level": "1",
  "url": "sec-python-basics.html",
  "type": "Section",
  "number": "B.2",
  "title": "Python basics",
  "body": " Python basics  OK, so you've logged into Syzygy and you're ready to write some code. What does basic code look like in Python? The good news is that you don't need to be a programmer to do linear algebra in Python. Python includes many different libraries that keep most of the code under the hood, so all you have to remember is what command you need to use to accomplish a task. That said, it won't hurt to learn a little bit of basic coding.  Basic arithmetic operations are understood, and you can simply type them in. Hit shift+enter in a code cell to execute the code and see the result.     OK, great. But sometimes we want to do calculations with more than one step. For that, we can assign variables.   Sometimes you might need input that's a string, rather than a number. We can do that, too.   Another basic construction is a list. Getting the hang of lists is useful, because in a sense, matrices are just really fancy lists.   Once you have an empty list, you might want to add something to it. This can be done with the append command.   Go back and re-run the above code cell two or three more times. What happens? Probably you can guess what the len command is for. Now let's get really carried away and do some for real coding, like loops!   Notice the indentation in the second line. This is how Python handles things like for loops, with indentation rather than bracketing. We could say more about lists but perhaps it's time to talk about matrices. For further reading, you can start here .  "
},
{
  "id": "sec-sympy",
  "level": "1",
  "url": "sec-sympy.html",
  "type": "Section",
  "number": "B.3",
  "title": "SymPy for linear algebra",
  "body": " SymPy for linear algebra    SymPy is a Python library for symbolic algebra. On its own, it's not as powerful as programs like Maple, but it handles a lot of basic manipulations in a fairly simple fashion, and when we need more power, it can interface with other Python libraries.  Another advantage of SymPy is sophisticated pretty-printing . In fact, we can enable MathJax within SymPy, so that output is rendered in the same way as when LaTeX is entered in a markdown cell.    SymPy basics  Running the following Sage cell will load the SymPy library and turn on MathJax.    Note: the command from sympy import * given above is not best practice. It can be convenient when you want to do a quick calculation (for example, on a test), but can have unintended consequences. It is better to only load those parts of a library you are going to use; for example, from sympy import Matrix, init_printing .  If you are going to be working with multiple libraries, and more than one of them defines a certain command, you can use prefixes to indicate what library you want to use. For example, if you enter import sympy as sy , each SymPy command will need to be appended with sy ; for example, you might write sy.Matrix instead of simply Matrix . Let's use SymPy to create a matrix.   The A on the second line asks Python to print the matrix using SymPy's printing support. If we use Python's print command, we get something different; note that the next Sage cell remembers the values from the previous one, if you are using the HTML version of the book.   We'll have more on matrices in . For now, let's look at some more basic constructions. One basic thing to be mindful of is the type of numbers we're working with. For example, if we enter 2\/7 in a code cell, Python will interpret this as a floating point number (essentially, a division).  (If you are using Sage cells in HTML rather than Jupyter, this will automatically be interpreted as a fraction.)   But we often do linear algebra over the rational numbers, and so SymPy will let you specify this. First, you'll need to load the Rational function.   You might not think to add the comma above, because you're used to writing fractions like . Fortunately, the SymPy authors thought of that:   Hmm... You might have got the output you expected in the cell above, but maybe not. If you got a much worse looking fraction, read on.  Another cool command is the sympify command, which can be called with the shortcut S . The input 2 is interpreted as an int by Python, but S(2) is a SymPy Integer :   Of course, sometimes you do want to use floating point, and you can specify this, too:     One note of caution: Float is part of SymPy, and not the same as the core Python float command. You can also put decimals into the Rational command and get the corresponding fraction:   The only thing to beware of is that computers convert from decimal to binary and then back again, and sometimes weird things can happen:   Of course, there are workarounds. One way is to enter as a string:   Another is to limit the size of the denominator:   Try some other examples above. Some inputs to try are 1.23 and 23e-10   We can also deal with repeating decimals. These are entered as strings, with square brackets around the repeating part. Then we can sympify :   Finally, SymPy knows about mathematical constants like , which you'll need from time to time in linear algebra. If you ever need , this is entered as oo .     Finally, from time to time you may need to include parameters (variables) in an expression. Typical code for this is of the form a, b, c = symbols('a b c', real = True, constant = True) . Here, we introduce the symbols a,b,c with the specification that they represent real-valued constants.    Matrices in SymPy  Here we collect some of the SymPy commands used throughout this text, for ease of reference. For further details, please consult the online documentation .  To create a matrix, we can write either A=Matrix(2,3,[1,2,3,4,5,6]) or A=Matrix([[1,2,3],[4,5,6]]) , where of course the size and entries can be changed to whatever you want. The former method is a bit faster, but once your matrices get a bit bigger, the latter method is less prone to typos.   Also of note: a column vector can be entered using Matrix([1,2,3]) . There are also certain built in special matrices. To get an identity matrix, use eye(n) . To get an zero matrix, use zeros(m,n) , or zeros(n) for a square matrix. There is also syntax for diagonal matrices, such as diag(1,2,3) . What's cool is that you can even use this for block diagonal matrices:   To get the reduced row-echelon form of the matrix , simply use A.rref() . Addition, subtraction, and multiplication use the obvious syntax: A+B , A*B , . The determinant of a square matrix is given by A.det() . Inverses can be computed using A.inv() or A**-1 . The latter is rather natural, since powers in general are entered as A**n for .  In most cases where you want to reduce a matrix, you're going to want to simply use the rref function. But there are times where this can be overzealous; for example, if you have a matrix with one or more symbols. One option is to replace A.rref() with A.echelon_form() . The echelon_form function creates zeros in the pivot columns, but does not create leading on ones.  For example, let's take the matrix . Note the difference in output between rref and echelon_form .   It is possible to manually perform row operations when you need additional control. This is achieved using the function A.elementary_row_op(<arguments>) , with arguments op,row,k,row1,row2 .  We have the following general syntax:   To swap two rows:    op='n<->m'      row1=i , where i is the index of the first row being swapped (remembering that rows are indexed starting with for the first row).     row2=j , where j is the index of the second row being swapped.       To rescale a row:    op='n->kn'      row=i , where i is the index of the row being rescaled.     k=c , where c is the value of the scalar you want to multiply by.       To add a multiple of one row to another:    op='n->n+km'      row=i , where i is the index of the row you want to change.     k=c , where c is the multiple of the other row.     row2=j , where j is the index of the other row.        When studying matrix transformations, we are often interested in the null space and column space , since these correspond to the kernel and image of a linear transformation. This is achieved, simply enough, using A.nullspace() and A.colspace() . The output will be a basis of column vectors for these spaces, and these are exactly the ones you'd find doing Gaussian elimination by hand.  Once you get to orthogonality, you'll want to be able to compute things like dot products, and transpose. These are simple enough. The dot product of vectors X,Y is simply X.dot(Y) . The transpose of a matrix A is A.T . As we should expect, X\\dotp Y = X^TY .   Of course, nobody wants to do things like the Gram Schmidt algorithm by hand. Fortunately, there's a function for that. If we have vectors X,Y,Z , we can make a list L=[X,Y,Z] , and perform Gram Schmidt with GramSchmidt(L) . If you want your output to be an orthonormal basis (and not merely orthogonal), then you can use GramSchmidt(L,true) .  It's useful to note that the output from functions like nullspace() are automatically treated as lists. So one can use simple code like the following:   If for some reason you need to reference particular vectors in a list, this can be done by specifying the index. If L=[X,Y,Z] , then L[0]==X , L[1]==Y , and L[2]==Z .  Next up is eigenvalues and eigenvectors. Given an matrix , we have the following:   For the characteristic polynomial, use A.charpoly() . However, the result will give you something SymPy calls a PurePoly , and the factor command will have no effect. Instead, use A.charpoly().as_expr() .    If we know that is an eigenvalue of a matrix , one way to get a basis for the eigenspace is to do:  B=A-3*eye(4)  B.nullspace()  If you just want all the eigenvalues and eigenvectors without going through the steps, then you can simply execute A.eigenvects() . The result is a list of lists each list in the list is of the form: eigenvalue, multiplicity, basis for the eigenspace.  For diagonalization, one can do A.diagonalize() . But this will not necessarily produce orthogonal diagonalization for a symmetric matrix.     For complex vectors and matrices, the main additional operation we need is the hermitian conjugate . The hermitian conjugate of a matrix A is called using A.H , which is simple enough. Unfortunately, there is no built-in complex inner product, perhaps because mathematicians and physicists cannot agree on which of the two vectors in the inner product should have the complex conjugate applied to it. Since we define the complex inner product by , we can execute the inner product in SymPy using Z.dot(W.H) , or (W.H)*Z , although the latter gives the output as a matrix rather than a number.  Don't forget that when entering complex matrices, the complex unit is entered as I . Also, complex expressions are not simplified by default, so you will often need to wrap your output line in simplify() . The Sage Cell below contains complete code for the unitary diagonalization of a hermitian matrix with distinct eigenvalues. When doing a problem like this in a Sage cell, it's a good idea to execute each line of code (and display output) before moving on to the next. In this case, printing the output for the list L given by A.eigenvects() helps explain the complicated-looking definitions of the vectors v,w . Of course, if we had a matrix with repeated eigenvalues, we'd need to add steps involving Gram Schmidt.   There are a few other commands that might come in handy as you work through this material:   Two matrices can be glued together. If matrices A,B have the same number of rows, the command A.row_join(B) will glue the matrices together, left-to-right. If they have the same number of columns, A.col_join(B) will glue them together top-to-bottom.    To insert a column C into a matrix M (of appropriate size) as the th column, you can do M.col_insert(j,C) . Just remember that columns are indexed starting at zero, so you might want j-1 instead of j . This can be useful for things like solving a system , where you want to append the column to the matrix .    A -factorization can be performed using Q,R=A.QRdecomposition()     The Jordan canonical form of a matrix can be obtained (along with the matrix whose columns are a Jordan basis) using P,M=A.jordan_form() .      "
},
{
  "id": "p-2167",
  "level": "2",
  "url": "sec-sympy.html#p-2167",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "SymPy "
},
{
  "id": "p-2218",
  "level": "2",
  "url": "sec-sympy.html#p-2218",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hermitian conjugate "
},
{
  "id": "solutions-backmatter",
  "level": "1",
  "url": "solutions-backmatter.html",
  "type": "Appendix",
  "number": "C",
  "title": "Solutions to Selected Exercises",
  "body": " Solutions to Selected Exercises  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
