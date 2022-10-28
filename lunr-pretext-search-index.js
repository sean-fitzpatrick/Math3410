var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "Version 2.0.0 (now with Runestone) copyright "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "\n          This textbook is intended for a second course in linear algebra,\n          for students who have completed a first course focused on procedures rather than proofs.\n          (That is, a course covering systems of equations, matrix algebra, determinants,   but not vector spaces.)\n         \n          Linear algebra is a mature, rich subject, full of both fascinating theory and useful applications.\n          One of the things you might have taken away from a first course in the subject is that there's a lot of tedious calculation involved.\n          This is true, if you're a human. But the algorithms you learned are easily implemented on a computer.\n          If we want to be able to discuss any of the interesting applications of linear algebra,\n          we're going to need to learn how to do linear algebra on a computer.\n         \n          There are many good mathematical software products that can deal with linear algebra,\n          like Maple, Mathematica, and MatLab. But all of these are proprietary, and expensive.\n          Sage is a popular open source system for mathematics,\n          and students considering further studies in mathematics would do well to learn Sage.\n          Since we want to prepare students for careers other than  mathematician ,\n          we'll try to do everything in Python.\n         SymPy \n          These notes originally began as an attempt to make Python-based worksheets\n          that could be exported from PreTeXt to Jupyter, for use in the classroom.\n          It quickly became apparent that something more was needed,\n          and the worksheets morphed into lecture notes.\n          These are intended to serve as a textbook for Math 3410,\n          but with some work they can also be used in class.\n          The notes are written in  PreTeXt , and can be converted to both Jupyter notebooks\n          and reveal.js slides.\n         \n          It should be noted that Jupyter conversion is not perfect.\n          In particular, wherever there are code cells present within an example or exercise,\n          the resulting notebook will not be valid.\n          However, all of the  worksheets  in the book will successfully convert to Jupyter notebooks,\n          and are intended to be used as such.\n         \n          I initially wrote these notes during the Fall 2019 semester,\n          for Math 3410 at the University of Lethbridge.\n          The original textbook for the course was  Linear Algebra with Applications ,\n          by Keith Nicholson. This book is available as an open education resource from\n           Lyryx Learning .\n         \n          Since the notes were written for a course that used Nicholson's textbook,\n          the influence of his book is evident throughout.\n          In particular, much of the notation agrees with that of Nicholson,\n          and there are places where I refer to his book for further details.\n          I taught a previous offering of this course using Sheldon Axler's beautiful  Linear Algebra Done Right ,\n          which certainly had an effect on how I view the subject,\n          and it is quite likely that this has impacted how I present some of the material in this book.\n         \n          This new edition of the book features exercises written using some of the interactive features\n          provided by the partnership between  PreTeXt  and  Runestone .\n          I have also tried to provide additional guidance on understanding (and constructing)\n          the proofs that appear in an upper division course on linear algebra.\n         "
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
  "body": "Definition and examples \n    Let's recall what we know about vectors in  .\n    Writing   for the vector pointing from   to  ,\n    we define:\n     \n         \n          Addition:  \n         \n       \n         \n          Scalar multiplication:  ,\n          where   is a real number, or  scalar .\n         \n       \n   \n    We can then observe a number of properties enjoyed by these operations.\n    In your first course, you may have observed some of these properties geometrically,\n    using the  tip-to-tail  rule for vector addition.\n   \n     \n         \n          Vector addition is  commutative .\n          That is, for any vectors   and  ,\n          we have  .\n         \n         \n          This is true because addition is commutative for the real numbers:\n           .\n         \n       \n         \n          Vector addition is  associative .\n          That is, for any vectors  \n          and  , we have\n           .\n          This tells us that placement of parentheses doesn't matter,\n          which is essential for extending addition (which is defined as an operation on  two  vectors)\n          to sums of three or more vectors.\n         \n         \n          Again, this property is true because it is true for real numbers:\n           .\n         \n       \n         \n          Vector addition has an  identity element .\n          This is a vector that has no effect when added to another vector,\n          or in other words, the zero vector.\n          Again, it inherits its property from the behaviour of the real number 0.\n         \n         \n          For any  , the vector  \n          satisfies  :\n           .\n         \n       \n         \n          Every vector has an  inverse  with respect to addition,\n          or, in other words, a  negative .\n          Given a vector  ,\n          the vector   satisfies\n           .\n          (We will leave this one for you to check.)\n         \n       \n         \n          Scalar multiplication is compatible with addition in two different ways.\n          First, it is  distributive  over vector addition:\n          for any scalar   and vectors  ,\n          we have  .\n         \n\n         \n          Unsurprisingly, this property is inherited from the distributive property of the real numbers:\n           .\n         \n       \n         \n          Second, scalar multiplication is also distributive with respect to  scalar \n          addition: for any scalars   and   and vector  ,\n          we have  .\n         \n         \n          Again, this is because real number addition is distributive:\n           .\n         \n       \n         \n          Scalar multiplication is also  associative .\n          Given scalars   and a vector  ,\n          we have  .\n         \n         \n          This is inherited from the associativity of real number multiplication:\n           .\n         \n       \n         \n          Finally, there is a  normalization  result for scalar multiplication.\n          For any vector  , we have  .\n          That is, the real number   acts as an identity element with respect to scalar multiplication.\n          (You can check this one yourself.)\n         \n       \n   \n    You might be wondering why we bother to list the last property above.\n    It's true, but why do we need it?\n    One reason comes from basic algebra, and solving equations.\n    Suppose we have the equation  , where   is some nonzero scalar,\n    and we want to solve for  .\n    Very early in our algebra careers, we learn that to solve, we  divide by  .\n   \n    Division doesn't quite make sense in this context,\n    but it certainly does make sense to multiply both sides by  ,\n    the multiplicative inverse of  .\n    We then have  , and since scalar multiplication is associative,\n     .\n    We know that  , so this boils down to  .\n    It appears that we've solved the equation, but  only if we know  that  .\n   \n    For an example where this fails, take our vectors as above,\n    but redefine the scalar multiplication as  .\n    The distributive and associative properties for scalar multiplication will still hold,\n    but the normalization property fails.\n    Algebra becomes very strange with this version of scalar multiplication.\n    In particular, we can no longer conclude that if  , then  !\n   \n    In a first course in linear algebra,\n    these algebraic properties of vector addition and scalar multiplication are presented as a  theorem .\n    (After all, we have just demonstrated the truth of these results.)\n    A second course in linear algebra (and in particular,  abstract  linear algebra),\n    begins by taking that theorem and turning it into a  definition .\n    We will then do some exploration, to see if we can come up with some other examples that fit the definition;\n    the significance of this is that we can expect the algebra in these examples\n    to behave in essentially the same way as the vectors we're familiar with.\n   real vector space vectors Addition sum Scalar multiplication \n        The operations of addition and scalar multiplication are required to satisfy the following  axioms :\n         \n             A1. \n             \n              If  , then  . (Closure under addition)\n             \n           \n             A2. \n             \n              For all  ,  . (Commutativity of addition)\n             \n           \n             A3. \n             \n              For all  ,  . (Associativity of addition)\n             \n           \n             A4. \n             \n              There exists an element   such that   for each  . (Existence of a zero vector)\n             \n           \n             A5. \n             \n              For each  , there exists a vector   such that  . (Existence of negatives)\n             \n           \n             S1. \n             \n              If  , then   for all  . (Closure under scalar multiplication)\n             \n           \n             S2. \n             \n              For all   and  ,  . (Distribution over vector addition)\n             \n           \n             S3. \n             \n              For all   and  ,  . (Distribution over scalar addition)\n             \n           \n             S4. \n             \n              For all   and  ,  . (Associativity of scalar multiplication)\n             \n           \n             S5. \n             \n              For all  ,  . (Normalization of scalar multiplication)\n             \n           \n       \n    Note that a zero vector must exist in every vector space.\n    This simple observation is a key component of many proofs and counterexamples in linear algebra.\n    In general, we may define a vector space whose scalars belong to a  field   .\n    A field is a set of objects whose algebraic properties are modelled after those of the real numbers.\n   \n    The axioms for a field are not all that different than those for a vector space.\n    The main difference is that in a field, multiplication is defined between elements of the field\n    (and produces another element of the field),\n    while scalar multiplication combines elements of two different sets.\n   field \n    Note how the axioms for multiplication in a field mirror the addition axioms much more closely than in a vector space.\n    The only difference is the fact that there is one element without a multiplicative inverse; namely, the zero element.\n   \n    While it is possible to study linear algebra over  finite fields  (like the integers modulo a prime number)\n    we will only consider two fields: the real numbers  , and the complex numbers  .\n   \n    A vector space whose scalars are complex numbers will be called a  complex vector space .\n    While many students are initially intimidated by the complex numbers,\n    most results in linear algebra work exactly the same over   as they do over  .\n    And where the results differ, things are usually  easier  with complex numbers,\n    owing in part to the fact that all complex polynomials can be completely factored.\n   \n    To help us gain familiarity with the abstract nature of  ,\n    let us consider some basic examples.\n   finite dimensional infinite dimensional uncountable \n    Other common examples of vector spaces can be found online;\n    for example,  on Wikipedia .\n    It is also interesting to try to think of less common examples.\n   \n        Can you think of a way to define a vector space structure on the set\n          of all positive real numbers?\n       \n          How should we define addition and scalar multiplication?\n         \n          Note that the function   has domain  \n          and range  . What does it do to a sum? To a product?\n         \n          To get a vector space structure on  ,\n          we will define an addition   on   by\n           ,\n          where the right hand side is the usual product of real numbers,\n          and for   and  , we will define a scalar multiplication   by\n           .\n         \n          Show that the addition you defined satisfies the commutative and associative properties.\n         \n          You can assume that these properties are true for real number multiplication.\n         \n          For any  , we have:\n           .\n         \n          Which of the following is the identity element in  ?\n         \n         \n           \n               \n             \n           \n             \n              Remember that the identity needs to be an element of the set!\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              Correct! Since nothing happens when we multiply by 1, we get   for any  .\n             \n           \n         \n       \n          Remember that an identity element   must satisfy   for any  .\n         \n          What is the inverse of an element  ?\n         \n          Remember that an inverse   must satisfy  ,\n          where   is the identity element. What is  , and how is  addition  defined?\n         \n          Let   be any element of  . Since  ,\n          we know in particular that  , so we can define  ,\n          where   denotes the usual reciprocal of a real number.\n          We then have\n           ,\n          and we saw above that   is the identity element of  .\n         \n          Show that, for any   and  ,\n           .\n         \n          We assume some properties of exponents from high school algebra:\n           .\n         \n          Show that for any   and  ,\n           .\n         \n          This again follows from properties of exponents:\n           .\n         \n          Show that for any   and  ,  .\n         \n          We have\n           .\n         \n          Show that   for any  .\n         \n          The last one is possibly the easiest:  .\n         \n        The set of all polynomials with real number coefficients and degree less than or equal to three is a vector space,\n        using the usual polynomial addition and scalar multiplication.\n       \n       \n        This is the vector space   from  .\n       \n     \n        The set of all polynomials with real number coefficients and degree greater than or equal to three,\n        together with the zero polynomial, is a vector space, using the usual polynomial addition and scalar multiplication.\n       \n       \n        The set is not closed under addition. What happens if you add the polynomials\n          and  ?\n       \n     \n        Remember that a vector space must be closed under the operations of addition and scalar multiplication.\n       \n        The set of all vectors   of unit length\n        (that is, such that  ) is a vector space\n        with respect to the usual addition and scalar multiplication in  .\n       \n       \n        The zero vector does not have unit length.\n        Also, the sum of two unit vectors will usually not be a unit vector.\n       \n     \n\n       "
},
{
  "id": "def-vector-space",
  "level": "2",
  "url": "sec-vec-sp.html#def-vector-space",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "real vector space vectors Addition sum Scalar multiplication \n        The operations of addition and scalar multiplication are required to satisfy the following  axioms :\n         \n             A1. \n             \n              If  , then  . (Closure under addition)\n             \n           \n             A2. \n             \n              For all  ,  . (Commutativity of addition)\n             \n           \n             A3. \n             \n              For all  ,  . (Associativity of addition)\n             \n           \n             A4. \n             \n              There exists an element   such that   for each  . (Existence of a zero vector)\n             \n           \n             A5. \n             \n              For each  , there exists a vector   such that  . (Existence of negatives)\n             \n           \n             S1. \n             \n              If  , then   for all  . (Closure under scalar multiplication)\n             \n           \n             S2. \n             \n              For all   and  ,  . (Distribution over vector addition)\n             \n           \n             S3. \n             \n              For all   and  ,  . (Distribution over scalar addition)\n             \n           \n             S4. \n             \n              For all   and  ,  . (Associativity of scalar multiplication)\n             \n           \n             S5. \n             \n              For all  ,  . (Normalization of scalar multiplication)\n             \n           \n       "
},
{
  "id": "def-field",
  "level": "2",
  "url": "sec-vec-sp.html#def-field",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "field "
},
{
  "id": "ex-vector-spaces",
  "level": "2",
  "url": "sec-vec-sp.html#ex-vector-spaces",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "finite dimensional infinite dimensional uncountable "
},
{
  "id": "ex-positive-reals-vecsp",
  "level": "2",
  "url": "sec-vec-sp.html#ex-positive-reals-vecsp",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": "\n        Can you think of a way to define a vector space structure on the set\n          of all positive real numbers?\n       \n          How should we define addition and scalar multiplication?\n         \n          Note that the function   has domain  \n          and range  . What does it do to a sum? To a product?\n         \n          To get a vector space structure on  ,\n          we will define an addition   on   by\n           ,\n          where the right hand side is the usual product of real numbers,\n          and for   and  , we will define a scalar multiplication   by\n           .\n         \n          Show that the addition you defined satisfies the commutative and associative properties.\n         \n          You can assume that these properties are true for real number multiplication.\n         \n          For any  , we have:\n           .\n         \n          Which of the following is the identity element in  ?\n         \n         \n           \n               \n             \n           \n             \n              Remember that the identity needs to be an element of the set!\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              Correct! Since nothing happens when we multiply by 1, we get   for any  .\n             \n           \n         \n       \n          Remember that an identity element   must satisfy   for any  .\n         \n          What is the inverse of an element  ?\n         \n          Remember that an inverse   must satisfy  ,\n          where   is the identity element. What is  , and how is  addition  defined?\n         \n          Let   be any element of  . Since  ,\n          we know in particular that  , so we can define  ,\n          where   denotes the usual reciprocal of a real number.\n          We then have\n           ,\n          and we saw above that   is the identity element of  .\n         \n          Show that, for any   and  ,\n           .\n         \n          We assume some properties of exponents from high school algebra:\n           .\n         \n          Show that for any   and  ,\n           .\n         \n          This again follows from properties of exponents:\n           .\n         \n          Show that for any   and  ,  .\n         \n          We have\n           .\n         \n          Show that   for any  .\n         \n          The last one is possibly the easiest:  .\n         "
},
{
  "id": "ex-tf-vsp-eg1",
  "level": "2",
  "url": "sec-vec-sp.html#ex-tf-vsp-eg1",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": "\n        The set of all polynomials with real number coefficients and degree less than or equal to three is a vector space,\n        using the usual polynomial addition and scalar multiplication.\n       \n       \n        This is the vector space   from  .\n       \n     "
},
{
  "id": "ex-tf-vsp-eg2",
  "level": "2",
  "url": "sec-vec-sp.html#ex-tf-vsp-eg2",
  "type": "Exercise",
  "number": "1.1.6",
  "title": "",
  "body": "\n        The set of all polynomials with real number coefficients and degree greater than or equal to three,\n        together with the zero polynomial, is a vector space, using the usual polynomial addition and scalar multiplication.\n       \n       \n        The set is not closed under addition. What happens if you add the polynomials\n          and  ?\n       \n     \n        Remember that a vector space must be closed under the operations of addition and scalar multiplication.\n       "
},
{
  "id": "ex-tf-vsp-eg3",
  "level": "2",
  "url": "sec-vec-sp.html#ex-tf-vsp-eg3",
  "type": "Exercise",
  "number": "1.1.7",
  "title": "",
  "body": "\n        The set of all vectors   of unit length\n        (that is, such that  ) is a vector space\n        with respect to the usual addition and scalar multiplication in  .\n       \n       \n        The zero vector does not have unit length.\n        Also, the sum of two unit vectors will usually not be a unit vector.\n       \n     \n\n       "
},
{
  "id": "sec-vsp-properties",
  "level": "1",
  "url": "sec-vsp-properties.html",
  "type": "Section",
  "number": "1.2",
  "title": "Properties",
  "body": "Properties \n    There are a number of other algebraic properties that are common to all vector spaces;\n    for example, it is true that   for all vectors   in any vector space  .\n    The reason these are not included is that the ten axioms in  \n    are the ones deemed  essential    all other properties can be deduced from the axioms.\n    To demonstrate, we next give the proof that  .\n   \n    The focus on proofs may be one place where your second course in linear algebra differs from your first.\n    Learning to write proofs (and to know when a proof you have written is valid)\n    is a difficult skill that takes time to develop.\n    Some of the proofs in this section are  clever ,\n    in the sense that they require you to apply vector space axioms in ways that may not seem obvious.\n    Proofs in later sections will more often be more straightforward  direct  proofs of conditional (if   then) statements,\n    although they may not feel straightforward on your first encounter.\n   \n        In any vector space  , we have   for all  \n       Strategy \n        The goal is to show that multiplying by the scalar   produces the vector  .\n        We all learn early on that  anything times zero is zero , but why is this true?\n        A few strategies that show up frequently when working with the axioms are:\n         \n             \n              Adding zero (the scalar, or the vector) does nothing, including when you add it to itself.\n             \n           \n             \n              We can always add the same thing to both sides of an equation.\n             \n           \n             \n              Liberal use of the distributive property!\n             \n           \n       \n        What we do here is to start with a very simple statement:  .\n        The reason for doing so is that when we multiply by  ,\n        we have an opportunity to use the distributive property.\n       \n        Since  , we have  .\n        Using the distributive axiom S3, this becomes\n         .\n         By axiom A5, there is an element   such that  .\n         Adding this to both sides of the equation above, we get:\n          .\n         Now, apply the associative property (A3) on the left, and A5 on the right, to get\n          .\n         Using A5 again on the left, we get  .\n         Finally, axiom A4 guarantees  .\n       \n        Tactics similar to the ones used in   can be used to establish the following results,\n        which we leave as an exercise.\n        Solutions are included, but it will be worth your while in the long run to wrestle with these.\n       \n        Show that the following properties are valid in any vector space  :\n       \n          If  , then  .\n         \n          Remember that every vector   in a vector space has an additive inverse  .\n         \n          Suppose  . By adding   on the left of each side, we obtain:\n           ,\n          which is what we needed to show.\n         \n          For any scalar  ,  .\n         \n          Your approach should be quite similar to the one used in  .\n         \n          We have  , by A4 and S2, respectively.\n          Adding   to both sides gives us\n           .\n          Using associativity (A3), this becomes\n           ,\n          and since   by A5, we get  .\n          Finally, we apply A4 on the right hand side to get  ,\n          as required.\n         \n          The zero vector is the unique vector such that   for all  .\n         \n          If you want to prove something is unique, try assuming that you have more than one!\n          If any two different elements with the same property have to be equal,\n          then all such elements must, in fact, be the same element.\n         \n          Suppose there are two vectors   that act as additive identities.\n          Then\n           \n          So any two vectors satisfying the property in A4 must, in fact, be the same.\n         \n          The negative   of any vector   is unique.\n         \n          Let  , and suppose there are vectors  \n          such that   and  . Then\n           .\n         \n        Prove the following statement:\n       \n        Let   be a vector space. For any  ,  .\n       \n        Indicate all axioms needed in the proof.\n       \n        This proof will be far more detailed than what you'll see in later sections.\n        (We usually do not bother to take note of the axioms, one by one.)\n        We will also try to explain our reasoning as we go,\n        to help you get used to the sort of careful reasoning involved in a proof.\n        Lines that should actually be included in the proof will be set aside in block quotes.\n       \n        First, we are proving a  for all  (universally quantified) statement.\n        This means we should be careful not to assume anything about the vector we choose,\n        so that our argument can apply to any vector we want:\n       \n          Let   be any vector in  .\n         \n        Next, you might want to remind yourself of the goal:\n        we want to show that  .\n        You can state that this is what you want to show, but it's not absolutely necessary to do this.\n        A common trick that shows up in a lot of mathematical proofs is a simple bit of arithmetic:\n          is the same thing as  !\n        So really, what we want to show is that  .\n       \n        Now, remember that  , and  ,\n        so what we want to show is equivalent to  .\n        Remove the  , and we're left with  ,\n        and that we definitely know is true!\n        (Of course, we can't just  remove  , but we can use the distributive property!)\n       \n        This is basically the proof, but we need to state all the axioms we use,\n        and best practice in logical arguments is that we should begin with our assumptions,\n        and statements we agree are true, and proceed from those to the desired conclusion.\n       \n          Since we know that  , it follows that\n           .\n          On the left hand side, we can use the distributive property S3 to get  .\n          On the right hand side, we can use   to get  .\n          Therefore,\n           .\n          By axiom S5,  , so we have  .\n         \n        OK, that's more or less where we said we wanted to get to,\n        and then we can just move   to the other side as  ,\n        and we're done. But we want to be careful to state all axioms!\n        The rest of the proof involves carefully stepping through this process.\n       \n        Another way to proceed, which shortcuts this whole process,\n        is to use   of  :\n        since the additive inverse of   is the unique vector   such that  ,\n        and  , it must be the case that  .\n       \n        This approach is completely valid, and you are free to use it,\n        but we will take the long route to demonstrate further use of the axioms.\n       \n          Since  , we can add   to both sides of the equation, giving\n           .\n          By the associative property (axiom A3),  ,\n          and by the identity axiom A5,  . This gives us\n           .\n          By axiom A5,  , so  .\n          Finally, we use axiom A4 one last time, and we have our result:  .\n         \n    Note that in the above exercise, we could have shortened the proof:\n    In   we showed that additive inverses are unique.\n    So once we reach the step where  ,\n    we can conclude that  ,\n    since   is the unique vector that satisfies this equation.\n   \n    To finish off this section, here is one more problem similar to the one above.\n    This result will be useful in the future, and students often find the logic tricky,\n    so it is worth your time to ensure you understand it.\n   \n        Rearrange the blocks to create a valid proof of the following statement:\n       \n        If  , then either   or  .\n       \n       \n         \n          Let   be a scalar, and let   be a vector.\n         \n         \n          Suppose that  .\n         \n       \n       \n         \n          By the law of the excluded middle, either  , or  .\n         \n       \n       \n         \n          If  , then   or  , and we're done.\n         \n       \n       \n         \n          Suppose then that  .\n         \n       \n       \n         \n          Since  , there is a scalar   such that  .\n         \n       \n       \n         \n          Since  ,  .\n         \n       \n       \n         \n          Therefore,  ,\n          using S4 and   of  .\n         \n       \n       \n         \n          Since  , we have  , using S5.\n         \n       \n       \n         \n          Since  ,   or  .\n         \n       \n       \n         \n          In either case, we conclude that   or  ,\n          so the result is proven.\n         \n       \n     \n        The main difficulty with this problem is getting the logic of the statement correct,\n        and making sure you know what it is you're trying to prove.\n        Consider a proof by cases: either   or  .\n        In the first case, there is nothing to prove (why?).\n        In the second case, use the fact (see  ) that for any nonzero scalar  ,\n        there exists a scalar   such that  .\n       "
},
{
  "id": "thm-zero-mult",
  "level": "2",
  "url": "sec-vsp-properties.html#thm-zero-mult",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "",
  "body": "\n        In any vector space  , we have   for all  \n       Strategy \n        The goal is to show that multiplying by the scalar   produces the vector  .\n        We all learn early on that  anything times zero is zero , but why is this true?\n        A few strategies that show up frequently when working with the axioms are:\n         \n             \n              Adding zero (the scalar, or the vector) does nothing, including when you add it to itself.\n             \n           \n             \n              We can always add the same thing to both sides of an equation.\n             \n           \n             \n              Liberal use of the distributive property!\n             \n           \n       \n        What we do here is to start with a very simple statement:  .\n        The reason for doing so is that when we multiply by  ,\n        we have an opportunity to use the distributive property.\n       \n        Since  , we have  .\n        Using the distributive axiom S3, this becomes\n         .\n         By axiom A5, there is an element   such that  .\n         Adding this to both sides of the equation above, we get:\n          .\n         Now, apply the associative property (A3) on the left, and A5 on the right, to get\n          .\n         Using A5 again on the left, we get  .\n         Finally, axiom A4 guarantees  .\n       "
},
{
  "id": "ex-more-props",
  "level": "2",
  "url": "sec-vsp-properties.html#ex-more-props",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "\n        Tactics similar to the ones used in   can be used to establish the following results,\n        which we leave as an exercise.\n        Solutions are included, but it will be worth your while in the long run to wrestle with these.\n       \n        Show that the following properties are valid in any vector space  :\n       \n          If  , then  .\n         \n          Remember that every vector   in a vector space has an additive inverse  .\n         \n          Suppose  . By adding   on the left of each side, we obtain:\n           ,\n          which is what we needed to show.\n         \n          For any scalar  ,  .\n         \n          Your approach should be quite similar to the one used in  .\n         \n          We have  , by A4 and S2, respectively.\n          Adding   to both sides gives us\n           .\n          Using associativity (A3), this becomes\n           ,\n          and since   by A5, we get  .\n          Finally, we apply A4 on the right hand side to get  ,\n          as required.\n         \n          The zero vector is the unique vector such that   for all  .\n         \n          If you want to prove something is unique, try assuming that you have more than one!\n          If any two different elements with the same property have to be equal,\n          then all such elements must, in fact, be the same element.\n         \n          Suppose there are two vectors   that act as additive identities.\n          Then\n           \n          So any two vectors satisfying the property in A4 must, in fact, be the same.\n         \n          The negative   of any vector   is unique.\n         \n          Let  , and suppose there are vectors  \n          such that   and  . Then\n           .\n         "
},
{
  "id": "ex-minus-one-negative",
  "level": "2",
  "url": "sec-vsp-properties.html#ex-minus-one-negative",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "\n        Prove the following statement:\n       \n        Let   be a vector space. For any  ,  .\n       \n        Indicate all axioms needed in the proof.\n       \n        This proof will be far more detailed than what you'll see in later sections.\n        (We usually do not bother to take note of the axioms, one by one.)\n        We will also try to explain our reasoning as we go,\n        to help you get used to the sort of careful reasoning involved in a proof.\n        Lines that should actually be included in the proof will be set aside in block quotes.\n       \n        First, we are proving a  for all  (universally quantified) statement.\n        This means we should be careful not to assume anything about the vector we choose,\n        so that our argument can apply to any vector we want:\n       \n          Let   be any vector in  .\n         \n        Next, you might want to remind yourself of the goal:\n        we want to show that  .\n        You can state that this is what you want to show, but it's not absolutely necessary to do this.\n        A common trick that shows up in a lot of mathematical proofs is a simple bit of arithmetic:\n          is the same thing as  !\n        So really, what we want to show is that  .\n       \n        Now, remember that  , and  ,\n        so what we want to show is equivalent to  .\n        Remove the  , and we're left with  ,\n        and that we definitely know is true!\n        (Of course, we can't just  remove  , but we can use the distributive property!)\n       \n        This is basically the proof, but we need to state all the axioms we use,\n        and best practice in logical arguments is that we should begin with our assumptions,\n        and statements we agree are true, and proceed from those to the desired conclusion.\n       \n          Since we know that  , it follows that\n           .\n          On the left hand side, we can use the distributive property S3 to get  .\n          On the right hand side, we can use   to get  .\n          Therefore,\n           .\n          By axiom S5,  , so we have  .\n         \n        OK, that's more or less where we said we wanted to get to,\n        and then we can just move   to the other side as  ,\n        and we're done. But we want to be careful to state all axioms!\n        The rest of the proof involves carefully stepping through this process.\n       \n        Another way to proceed, which shortcuts this whole process,\n        is to use   of  :\n        since the additive inverse of   is the unique vector   such that  ,\n        and  , it must be the case that  .\n       \n        This approach is completely valid, and you are free to use it,\n        but we will take the long route to demonstrate further use of the axioms.\n       \n          Since  , we can add   to both sides of the equation, giving\n           .\n          By the associative property (axiom A3),  ,\n          and by the identity axiom A5,  . This gives us\n           .\n          By axiom A5,  , so  .\n          Finally, we use axiom A4 one last time, and we have our result:  .\n         "
},
{
  "id": "ex-parsons-zero-prop",
  "level": "2",
  "url": "sec-vsp-properties.html#ex-parsons-zero-prop",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "\n        Rearrange the blocks to create a valid proof of the following statement:\n       \n        If  , then either   or  .\n       \n       \n         \n          Let   be a scalar, and let   be a vector.\n         \n         \n          Suppose that  .\n         \n       \n       \n         \n          By the law of the excluded middle, either  , or  .\n         \n       \n       \n         \n          If  , then   or  , and we're done.\n         \n       \n       \n         \n          Suppose then that  .\n         \n       \n       \n         \n          Since  , there is a scalar   such that  .\n         \n       \n       \n         \n          Since  ,  .\n         \n       \n       \n         \n          Therefore,  ,\n          using S4 and   of  .\n         \n       \n       \n         \n          Since  , we have  , using S5.\n         \n       \n       \n         \n          Since  ,   or  .\n         \n       \n       \n         \n          In either case, we conclude that   or  ,\n          so the result is proven.\n         \n       \n     \n        The main difficulty with this problem is getting the logic of the statement correct,\n        and making sure you know what it is you're trying to prove.\n        Consider a proof by cases: either   or  .\n        In the first case, there is nothing to prove (why?).\n        In the second case, use the fact (see  ) that for any nonzero scalar  ,\n        there exists a scalar   such that  .\n       "
},
{
  "id": "sec-subspace",
  "level": "1",
  "url": "sec-subspace.html",
  "type": "Section",
  "number": "1.3",
  "title": "Subspaces",
  "body": "Subspaces \n    We begin with a motivating example. Let   be a nonzero vector in some vector space  .\n    Consider the set  .\n    Given  , notice that   is also an element of  ,\n    since   is again a real number.\n    Moreover, for any real number  ,   is an element of  .\n   \n    There are two important observations: one is that performing addition or scalar multiplication on elements of  \n    produces a new element of  . The other is that this addition and multiplication is essentially that of  .\n    The vector   is just a placeholder. Addition simply involves the real number addition  .\n    Scalar multiplication becomes the real number multiplication  .\n    So we expect that the rules for addition and scalar multiplication in   follow those in  ,\n    so that   is like a  copy  of   inside of  .\n    In particular, addition and scalar multiplication in   will satisfy all the vector space axioms,\n    so that   deserves to be considered a vector space in its own right.\n   \n    A similar thing happens if we consider a set  ,\n    where   are two vectors in a vector space  .\n    Given two elements  , we have\n     ,\n    which is again an element of  , and the addition rule looks an awful lot like the addition rule\n      in  .\n    Scalar multiplication follows a similar pattern.\n   \n    In general we are often interested in subsets of vectors spaces that behave like  copies \n    of smaller vector spaces contained within the larger space.\n    The technical term for this is  subspace .\n   subspace \n    If we were to follow the definition, then verifying that a subset   is a subspace would involve checking all ten vector space axioms.\n    Fortunately, this is not necessary. Since the operations are those of the vector space  ,\n    most properties follow automatically, being inherited from those of  .\n   Subspace Test \n        Let   be a vector space and let   be a subset.\n        Then   is a subspace of   if and only if the following conditions are satisfied:\n         \n             \n               , where   is the zero vector of  .\n             \n           \n             \n                is closed under addition. That is, for all  , we have  .\n             \n           \n             \n                is closed under scalar multiplication. That is, for all   and  ,  .\n             \n           \n       \n        If   is a vector space, then clearly the second and third conditions must hold.\n        Since a vector space must be nonempty, there is some  ,\n        from which it follows that  .\n       \n        Conversely, if all three conditions hold, we have axioms A1, A4, and S1 by assumption.\n        Axioms A2 and A3 hold since any vector in   is also a vector in  ;\n        the same reasoning shows that axioms S2, S3, S4, and S5 hold.\n        Finally, axiom A5 holds because condition 3 ensures that   for any  ,\n        and we know that   by  Exercise .\n       \n    In some texts, the condition that   is replaced by the requirement that   be nonempty.\n    Existence of   then follows from the fact that  .\n    However, it is usually easy to check that a set contains the zero vector,\n    so it's the first thing one typically looks for when confirming that a subset is nonempty.\n   \n        For any vector space  , the set   is a subspace,\n        known as the  trivial subspace .\n       \n        If   is the vector space of all polynomials,\n        then for any natural number  , the subset   of all polynomials of degree less than or equal to  \n        is a subspace of  . Another common type of polynomial subspace is the set of all polynomials with a given root.\n        For example, the set   is easily confirmed to be a subspace.\n        However, a condition such as   would  not  define a subspace,\n        since this condition is not satisfied by the zero polynomial.\n       \n        In  , we can define a subspace using one or more homogeneous linear equations.\n        For example, the set\n         \n        is a subspace of  . A non-homogeneous equation won't work, however, since it would exclude the zero vector.\n        Of course, we should expect that any non-linear equation fails to define a subspace,\n        although one is still expected to verify this by confirming the failure of one of the axioms.\n        For example, the set   is not a subspace;\n        although it contains the zero vector (since  ), we have  ,\n        but   does not belong to  .\n       \n        In the vector space  , we can visualize subspaces geometrically.\n        There are precisely four types:\n         \n             \n              The trivial vector space  ,\n              consisting of the origin alone.\n             \n           \n             \n              Subspaces of the form  .\n              These are lines through the origin, in the direction of the vector  .\n             \n           \n             \n              Subspaces of the form  ,\n              where   are both nonzero vectors that are not  parallel .\n              These are planes through the origin.\n             \n\n             \n              Note that we must insist that   is not parallel to  .\n              If   for some scalar  , then\n               ,\n              and every vector in our set would be a multiple of  ;\n              in other words, we'd once again have a line.\n             \n\n             \n              If you encountered the  cross product  in your first course in linear algebra,\n              or in a calculus course, then you can state the  non-parallel \n              condition by the requirement that  .\n              The vector   is then a  normal vector  for the plane.\n             \n           \n             \n              The entire vector space   also counts as a subspace:\n              every vector space is a subspace of itself.\n             \n           \n       \n        Often we define subsets of a vector space by an equation.\n        For example, instead of specifying a plane through the origin in  \n        using a pair of vectors, as we did in  ,\n        we could define it using a single equation, of the form  ,\n        where  , and   are coordinates in  .\n       \n        Given a vector space   and some equation (or other condition) that defines a subset,\n        one of the things we need to be able to do is determine whether or not the subset is in fact a subspace.\n        We do so using  .\n        Applying the subspace test is relatively straightforward,\n        but we would also like to develop some intiution to help us decide whether or not a subset is likely to be a subspace,\n        before attempting a proof.\n       \n        There are a few relatively easy things we can check before we begin:\n         \n             \n              Does the subset contain the zero vector?\n             \n             \n              This is part of the subspace test, of course, but it tends to be easy to check,\n              and if the answer is no, then we've already ruled out the possibility that this subset could be a subspace.\n             \n           \n             \n              Is the equation defining the subset linear?\n             \n             \n              If not, your subset is probably not a subspace, and you should look for a counterexample.\n              For example, the set   contains zero,\n              but it is defined by the nonlinear equation  .\n              This tells us that our set is unlikely to be a subspace, but we still have to demonstrate this.\n              Typically, we do so by showing that one of the two closure axioms fails.\n              For example, we know that   and   belong to the subset,\n              but  , and since  ,\n              the subset is not closed under addition, and therefore is not a subspace.\n             \n           \n             \n              Is the equation defining the subset homogeneous?\n             \n             \n              Even if an equation is linear, it may fail to define a subspace due to the special role played by the zero vector.\n              For example, the plane in   defined by the equation   is not a subspace.\n              The fastest way to see this is to note that the equation is not satisfied by the zero vector!\n              But both closure conditions fail as well. For example, the point   is on the plane.\n              But   is not, since  .\n             \n           \n       \n        Determine whether or not the following subsets of vector spaces are subspaces.\n       \n          The subset of   consisting of all polynomials  \n          such that  .\n         \n         \n          This equation may not appear linear, but it is: if  ,\n          then   is a homogeneous linear equation.\n          The zero poloynomial is zero everywhere, including at  .\n          If   and  , then  ,\n          and for any scalar  ,  .\n         \n       \n          The subset of   consisting of all irreducible quadratics.\n         \n         \n          We can immediately rule this out as a subspace because the zero polynomial is neither irreducible nor quadratic.\n          Furthermore, it is not closed under addition: consider the sum of   and  .\n         \n       \n          The set of all vectors   such that  .\n         \n         \n          The equation is homogeneous, but it is not linear.\n          Although this set contains the zero vector, it is not closed under addition:\n          the vectors   and   belong to the set,\n          but their sum   does not.\n         \n       \n          The set of all vectors   such that  .\n         \n         \n          The defining equation can be rearranged as  ,\n          which you might recognize as the equation of a plane through the origin.\n          Since  , the set contains the zero vector.\n          To check closure under addition, suppose   and   are in the set.\n          This means that  , and  .\n          For the sum  , we have\n           ,\n          so the sum is in the set. And for any scalar  ,\n           , so   is in the set as well.\n         \n       \n    Let's try a few more examples.\n   \n        Determine whether or not the following subsets are subspaces.\n       \n          The subset  \n         \n          The clue here that this is not a subspace is the presence of the 2 in the second component.\n          Typically for a subspace, we expect to see linear expressions involving our variables,\n          but in linear algebra, the adjective  linear  doesn't imply the inclusion of constant terms the way it does in calculus.\n          The reason, again, is the special role of zero in a vector space.\n         \n          While it's true that this set doesn't contain the zero vector (which rules it out as a subspace),\n          it's not as obvious: perhaps there are values of   and  \n          that give us  , and   as well?\n          Solving a system of equations would tell us that indeed, this is not possible.\n         \n          We could also show that the closure conditions fail.\n          Putting   gives the element  ,\n          and putting   gives the element  .\n          Adding these, we get the vector  .\n          Why is this not in the set? We would need  , so  .\n          Then   implies  , but  .\n         \n          The subset  .\n         \n          At first glance, it may not be clear whether the condition   is linear.\n          One approach is to write out our polynomial in terms of coefficients.\n          If  , then   implies\n           ,\n          or  , which is a homogeneous linear equation.\n          This isn't yet a proof   we still have to apply the subspace test!\n         \n          We can use the subspace test in terms of coefficients with the condition  ,\n          or we can use the original condition directly.\n          First, the zero polynomial   satisfies  , since it's equal to zero everywhere.\n          Next, suppose we have polynomials   with   and  .\n          Then\n           ,\n          and for any scalar  ,  .\n          This shows that the set is closed under both addition and scalar multiplication.\n         \n          The subset  .\n         \n          Here, we have the condition  , which is homogeneous, but is it linear?\n          If you remember a bit about the determinant,\n          you might recall that it behaves well with respect to multiplication, but not addition,\n          and indeed, this is going to mean that we don't have a subspace.\n         \n          To see that this is the case, consider closure under addition.\n          The matrices   and  \n          both have determinant  , but   has determinant 1.\n          Therefore,   and   both belong to the set, but   does not.\n         \n    In the next section, we'll encounter perhaps the most fruitful source of subspaces: sets of linear combinations (or  spans ).\n    We will see that such sets are always subspaces, so if we can identify a subset as a span,\n    we know automatically that it is a subspace.\n   \n    For example, in the last part of   above,\n    if the vector   satisfies  , then we have\n     ,\n    so every vector in the set is a linear combination of the vectors   and  .\n   "
},
{
  "id": "def-subspace",
  "level": "2",
  "url": "sec-subspace.html#def-subspace",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "subspace "
},
{
  "id": "thm-subspace-test",
  "level": "2",
  "url": "sec-subspace.html#thm-subspace-test",
  "type": "Theorem",
  "number": "1.3.2",
  "title": "Subspace Test.",
  "body": "Subspace Test \n        Let   be a vector space and let   be a subset.\n        Then   is a subspace of   if and only if the following conditions are satisfied:\n         \n             \n               , where   is the zero vector of  .\n             \n           \n             \n                is closed under addition. That is, for all  , we have  .\n             \n           \n             \n                is closed under scalar multiplication. That is, for all   and  ,  .\n             \n           \n       \n        If   is a vector space, then clearly the second and third conditions must hold.\n        Since a vector space must be nonempty, there is some  ,\n        from which it follows that  .\n       \n        Conversely, if all three conditions hold, we have axioms A1, A4, and S1 by assumption.\n        Axioms A2 and A3 hold since any vector in   is also a vector in  ;\n        the same reasoning shows that axioms S2, S3, S4, and S5 hold.\n        Finally, axiom A5 holds because condition 3 ensures that   for any  ,\n        and we know that   by  Exercise .\n       "
},
{
  "id": "ex-subspace-basic-examples",
  "level": "2",
  "url": "sec-subspace.html#ex-subspace-basic-examples",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "\n        For any vector space  , the set   is a subspace,\n        known as the  trivial subspace .\n       \n        If   is the vector space of all polynomials,\n        then for any natural number  , the subset   of all polynomials of degree less than or equal to  \n        is a subspace of  . Another common type of polynomial subspace is the set of all polynomials with a given root.\n        For example, the set   is easily confirmed to be a subspace.\n        However, a condition such as   would  not  define a subspace,\n        since this condition is not satisfied by the zero polynomial.\n       \n        In  , we can define a subspace using one or more homogeneous linear equations.\n        For example, the set\n         \n        is a subspace of  . A non-homogeneous equation won't work, however, since it would exclude the zero vector.\n        Of course, we should expect that any non-linear equation fails to define a subspace,\n        although one is still expected to verify this by confirming the failure of one of the axioms.\n        For example, the set   is not a subspace;\n        although it contains the zero vector (since  ), we have  ,\n        but   does not belong to  .\n       "
},
{
  "id": "ex-subspace-lines-and-planes",
  "level": "2",
  "url": "sec-subspace.html#ex-subspace-lines-and-planes",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "\n        In the vector space  , we can visualize subspaces geometrically.\n        There are precisely four types:\n         \n             \n              The trivial vector space  ,\n              consisting of the origin alone.\n             \n           \n             \n              Subspaces of the form  .\n              These are lines through the origin, in the direction of the vector  .\n             \n           \n             \n              Subspaces of the form  ,\n              where   are both nonzero vectors that are not  parallel .\n              These are planes through the origin.\n             \n\n             \n              Note that we must insist that   is not parallel to  .\n              If   for some scalar  , then\n               ,\n              and every vector in our set would be a multiple of  ;\n              in other words, we'd once again have a line.\n             \n\n             \n              If you encountered the  cross product  in your first course in linear algebra,\n              or in a calculus course, then you can state the  non-parallel \n              condition by the requirement that  .\n              The vector   is then a  normal vector  for the plane.\n             \n           \n             \n              The entire vector space   also counts as a subspace:\n              every vector space is a subspace of itself.\n             \n           \n       "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-subspace.html#remark-1",
  "type": "Remark",
  "number": "1.3.5",
  "title": "",
  "body": "\n        Often we define subsets of a vector space by an equation.\n        For example, instead of specifying a plane through the origin in  \n        using a pair of vectors, as we did in  ,\n        we could define it using a single equation, of the form  ,\n        where  , and   are coordinates in  .\n       \n        Given a vector space   and some equation (or other condition) that defines a subset,\n        one of the things we need to be able to do is determine whether or not the subset is in fact a subspace.\n        We do so using  .\n        Applying the subspace test is relatively straightforward,\n        but we would also like to develop some intiution to help us decide whether or not a subset is likely to be a subspace,\n        before attempting a proof.\n       \n        There are a few relatively easy things we can check before we begin:\n         \n             \n              Does the subset contain the zero vector?\n             \n             \n              This is part of the subspace test, of course, but it tends to be easy to check,\n              and if the answer is no, then we've already ruled out the possibility that this subset could be a subspace.\n             \n           \n             \n              Is the equation defining the subset linear?\n             \n             \n              If not, your subset is probably not a subspace, and you should look for a counterexample.\n              For example, the set   contains zero,\n              but it is defined by the nonlinear equation  .\n              This tells us that our set is unlikely to be a subspace, but we still have to demonstrate this.\n              Typically, we do so by showing that one of the two closure axioms fails.\n              For example, we know that   and   belong to the subset,\n              but  , and since  ,\n              the subset is not closed under addition, and therefore is not a subspace.\n             \n           \n             \n              Is the equation defining the subset homogeneous?\n             \n             \n              Even if an equation is linear, it may fail to define a subspace due to the special role played by the zero vector.\n              For example, the plane in   defined by the equation   is not a subspace.\n              The fastest way to see this is to note that the equation is not satisfied by the zero vector!\n              But both closure conditions fail as well. For example, the point   is on the plane.\n              But   is not, since  .\n             \n           \n       "
},
{
  "id": "ex-subspace-check",
  "level": "2",
  "url": "sec-subspace.html#ex-subspace-check",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": "\n        Determine whether or not the following subsets of vector spaces are subspaces.\n       \n          The subset of   consisting of all polynomials  \n          such that  .\n         \n         \n          This equation may not appear linear, but it is: if  ,\n          then   is a homogeneous linear equation.\n          The zero poloynomial is zero everywhere, including at  .\n          If   and  , then  ,\n          and for any scalar  ,  .\n         \n       \n          The subset of   consisting of all irreducible quadratics.\n         \n         \n          We can immediately rule this out as a subspace because the zero polynomial is neither irreducible nor quadratic.\n          Furthermore, it is not closed under addition: consider the sum of   and  .\n         \n       \n          The set of all vectors   such that  .\n         \n         \n          The equation is homogeneous, but it is not linear.\n          Although this set contains the zero vector, it is not closed under addition:\n          the vectors   and   belong to the set,\n          but their sum   does not.\n         \n       \n          The set of all vectors   such that  .\n         \n         \n          The defining equation can be rearranged as  ,\n          which you might recognize as the equation of a plane through the origin.\n          Since  , the set contains the zero vector.\n          To check closure under addition, suppose   and   are in the set.\n          This means that  , and  .\n          For the sum  , we have\n           ,\n          so the sum is in the set. And for any scalar  ,\n           , so   is in the set as well.\n         \n       "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec-subspace.html#example-5",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": "\n        Determine whether or not the following subsets are subspaces.\n       \n          The subset  \n         \n          The clue here that this is not a subspace is the presence of the 2 in the second component.\n          Typically for a subspace, we expect to see linear expressions involving our variables,\n          but in linear algebra, the adjective  linear  doesn't imply the inclusion of constant terms the way it does in calculus.\n          The reason, again, is the special role of zero in a vector space.\n         \n          While it's true that this set doesn't contain the zero vector (which rules it out as a subspace),\n          it's not as obvious: perhaps there are values of   and  \n          that give us  , and   as well?\n          Solving a system of equations would tell us that indeed, this is not possible.\n         \n          We could also show that the closure conditions fail.\n          Putting   gives the element  ,\n          and putting   gives the element  .\n          Adding these, we get the vector  .\n          Why is this not in the set? We would need  , so  .\n          Then   implies  , but  .\n         \n          The subset  .\n         \n          At first glance, it may not be clear whether the condition   is linear.\n          One approach is to write out our polynomial in terms of coefficients.\n          If  , then   implies\n           ,\n          or  , which is a homogeneous linear equation.\n          This isn't yet a proof   we still have to apply the subspace test!\n         \n          We can use the subspace test in terms of coefficients with the condition  ,\n          or we can use the original condition directly.\n          First, the zero polynomial   satisfies  , since it's equal to zero everywhere.\n          Next, suppose we have polynomials   with   and  .\n          Then\n           ,\n          and for any scalar  ,  .\n          This shows that the set is closed under both addition and scalar multiplication.\n         \n          The subset  .\n         \n          Here, we have the condition  , which is homogeneous, but is it linear?\n          If you remember a bit about the determinant,\n          you might recall that it behaves well with respect to multiplication, but not addition,\n          and indeed, this is going to mean that we don't have a subspace.\n         \n          To see that this is the case, consider closure under addition.\n          The matrices   and  \n          both have determinant  , but   has determinant 1.\n          Therefore,   and   both belong to the set, but   does not.\n         "
},
{
  "id": "sec-span",
  "level": "1",
  "url": "sec-span.html",
  "type": "Section",
  "number": "1.4",
  "title": "Span",
  "body": "Span linear combination \n    It's important to make sure you don't get lost in the notation here.\n    Be sure that you can keep track of which symbols are vectors, and which are scalars!\n    Note that in a sense, this is the most general sort of expression you can form using the two operations of a vector space,\n    addition, and scalar multiplication. We multiply some collection of vectors by scalars,\n    and then use addition to  combine  them into a single vector.\n   \n        In  , let  ,  , and  .\n        With scalars   we can form the linear combination\n         .\n        Notice how the end result is a single vector, and we've lost all information regarding the vectors it came from.\n        Sometimes we want the end result, but often we are more interested in details of the linear combination itself.\n       \n        In the vector space of all real-valued continuous functions on  ,\n        we can consider linear combinations such as  .\n        (This might, for example, be a particular solution to some differential equation.)\n        Note that in this example, there is no nice way to  combine  these functions into a single term.\n       span Span span generators \n    Since span is defined in terms of linear combinations,\n    what the question  Is the vector   in  ? \n    is really asking is,  Can   be written as a linear combination of  ? \n   \n        Let   be a set of vectors.\n        Which of the following statements are equivalent to the statement,\n         The vector   belongs to the span of  . ?\n       \n       \n         \n             .\n           \n         \n           \n            This is a tricky one: the statement implies that  ,\n            but it is not equivalent, since the converse is not necessarily true.\n           \n         \n       \n       \n         \n            For some scalars  ,\n             .\n           \n         \n           \n            Yes! This is the definition of span.\n           \n         \n       \n       \n         \n            The vector   is a linear combination of the vectors in  .\n           \n         \n           \n            Correct.\n           \n         \n       \n       \n         \n            For any scalars  ,\n             .\n           \n         \n           \n            The only way this statement could be true for all possible scalars\n            is if all the vectors involved are zero.\n            Otherwise, changing a scalar is going to change the resulting linear combination.\n           \n         \n       \n       \n         \n              for some  .\n           \n         \n           \n            Although each vector in   belongs to the span of  ,\n            the span of   contains much more than just the vectors in  !\n           \n         \n       \n     \n    With the appropriate setup, all such questions become questions about solving systems of equations.\n    Here, we will look at a few such examples.\n   \n        Determine whether the vector   is in the span of the vectors  .\n       \n        This is really asking: are there scalars   such that\n         ?\n        And this, in turn, is equivalent to the system\n         ,\n        which is the same as the matrix equation\n         \n        Solving the system confirms that there is indeed a solution, so the answer to our original question is yes.\n       \n        To confirm the above example (and see what the solution is), we can use the computer.\n        This first code cell loads the  sympy  Python library,\n        and then configures the output to look nice.\n        For details on the code used below, see  the Appendix .\n       \n        The above code produces the reduced row-echelon form of the augmented matrix for our system.\n        (The tuple   lists the pivot columns   note that Python indexes the columns starting at   rather than  .)\n        Do you remember how to get the answer from here? Here's another approach.\n       \n    Our next example involves polynomials.\n    At first this looks like a different problem,\n    but it's essentially the same once we set it up.\n   \n        Determine whether   belongs to\n         .\n       \n        We seek scalars   such that\n         .\n        On the left-hand side, we expand and gather terms:\n         .\n        These two polynomials are equal if and only if we can solve the system\n         .\n       \n        We can solve this computationally using matrices again.\n       \n        So, what's the answer? Is   in the span?\n        Can we determine what polynomials are in the span?\n        Let's consider a general polynomial  .\n        A bit of thought tells us that the coefficients  \n        should replace the constants   above.\n       \n        Asking the computer to reduce this matrix to  RREF  won't produce the desired result.\n        But we can always specify row operations.\n       \n        In the  elementary_row_op  function called above,\n        we are asking the computer to change row   (the second row)\n        by adding   times row   )the first row).\n        See  Section  for complete details on this syntax.\n       \n        Now we repeat. Here is another cell to work with:\n       \n        Another option is to replace the  rref()  function with the\n         echelon_form()  function, which doesn't simplify quite as far:\n       \n        For a consistent system, we need  .\n       \n    One of the reasons we care about linear combinations and span is that it gives us an easy means of generating subspaces,\n    as the following theorem suggests.\n   \n        Let   be a vector space, and let   be vectors in  . Then:\n         \n             \n                is a subspace of  .\n             \n           \n             \n                is the  smallest  subspace of    containing  ,\n              in the sense that if   is a subspace and  ,\n              then  .\n             \n           \n       Strategy \n        For the first part, we will rely on our trusty  .\n        The proof is essentially the same as the motivating example from the beginning of  ,\n        modified to allow an arbitrary number of vectors.\n        First, we will write the zero vector as a linear combination of the given vectors. (What should the scalars be?)\n        Then we check addition and scalar multiplication.\n       \n        How do we show that a subspace is  smallest ?\n        As suggested in the statement above, show that if a subspace  \n        contains the vectors  ,\n        then it must contain every vector in  .\n        This must be the case because   is closed under addition and scalar multiplication,\n        and every vector in   is formed using these operations.\n       \n        Let  . Then  ,\n        since  .\n        If   and  \n        are vectors in  , then\n         \n        is in  , and\n         \n        is in  , so by  Theorem ,\n          is a subspace.\n       \n        To see that   is the smallest subspace containing  ,\n        we need only note that if  ,\n        where   is a subspace, then since   is closed under scalar multiplication,\n        we know that   for any scalars  ,\n        and since   is closed under addition,  .\n        Thus,   contains all linear combinations of  ,\n        which is to say that   contains  .\n       \n        Let   be a vector space, and let  .\n        Show that if  , then  .\n       \n        Your goal is to show that any linear combination of vectors in  \n        can also be written as a linear combination of vectors in  .\n        What value should you choose for the scalars in front of any vectors that belong to   but not  ?\n       \n        The vectors   span  .\n       \n       \n        The only way to get   as the third component of   is to set  .\n        But the scalar multiples of   do not generate all vectors of the form  .\n       \n     \n    We end with a result that will be important as we work on our understanding of the structure of vector spaces.\n   \n        Let   be a vector space, and let  .\n        If  , then\n         .\n       Strategy \n        We need to first recall that the span of a set of vectors is, first and foremost, a set.\n        That means that we are proving the equality of two sets.\n        Recall that this typically requires us to prove that each set is a subset of the other.\n       \n        This means that we need to show that any linear combination of the vectors\n          can be written as a linear combination of the vectors\n         , and vice-versa.\n        In one direction, we will need our hypothesis:  .\n        In the other direction, we come back to a trick we've already seen: adding zero does nothing.\n        That is, if a vector is missing from a linear combination, we can include it, using   for its coefficient.\n       \n        Suppose that  .\n        This means that   can be written as a linear combination of the vectors  ,\n        so there must exist scalars   such that\n         .\n        Now, let  .\n        Then we must have\n         \n        for scalars  . From our hypothesis (using  ), we get\n         .\n        Since   can be written as a linear combination of  ,\n         , and therefore  .\n       \n        On the other hand, let  .\n        Then there exist scalars   for which we have\n         .\n        Therefore,  ,\n        which proves the opposite conclusion, and therefore the result.\n       linearly independent "
},
{
  "id": "p-218",
  "level": "2",
  "url": "sec-span.html#p-218",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec-span.html#example-6",
  "type": "Example",
  "number": "1.4.1",
  "title": "",
  "body": "\n        In  , let  ,  , and  .\n        With scalars   we can form the linear combination\n         .\n        Notice how the end result is a single vector, and we've lost all information regarding the vectors it came from.\n        Sometimes we want the end result, but often we are more interested in details of the linear combination itself.\n       \n        In the vector space of all real-valued continuous functions on  ,\n        we can consider linear combinations such as  .\n        (This might, for example, be a particular solution to some differential equation.)\n        Note that in this example, there is no nice way to  combine  these functions into a single term.\n       "
},
{
  "id": "p-222",
  "level": "2",
  "url": "sec-span.html#p-222",
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
  "body": "Span span "
},
{
  "id": "p-224",
  "level": "2",
  "url": "sec-span.html#p-224",
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
  "body": "\n        Let   be a set of vectors.\n        Which of the following statements are equivalent to the statement,\n         The vector   belongs to the span of  . ?\n       \n       \n         \n             .\n           \n         \n           \n            This is a tricky one: the statement implies that  ,\n            but it is not equivalent, since the converse is not necessarily true.\n           \n         \n       \n       \n         \n            For some scalars  ,\n             .\n           \n         \n           \n            Yes! This is the definition of span.\n           \n         \n       \n       \n         \n            The vector   is a linear combination of the vectors in  .\n           \n         \n           \n            Correct.\n           \n         \n       \n       \n         \n            For any scalars  ,\n             .\n           \n         \n           \n            The only way this statement could be true for all possible scalars\n            is if all the vectors involved are zero.\n            Otherwise, changing a scalar is going to change the resulting linear combination.\n           \n         \n       \n       \n         \n              for some  .\n           \n         \n           \n            Although each vector in   belongs to the span of  ,\n            the span of   contains much more than just the vectors in  !\n           \n         \n       \n     "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-span.html#exercise-9",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "\n        Determine whether the vector   is in the span of the vectors  .\n       \n        This is really asking: are there scalars   such that\n         ?\n        And this, in turn, is equivalent to the system\n         ,\n        which is the same as the matrix equation\n         \n        Solving the system confirms that there is indeed a solution, so the answer to our original question is yes.\n       \n        To confirm the above example (and see what the solution is), we can use the computer.\n        This first code cell loads the  sympy  Python library,\n        and then configures the output to look nice.\n        For details on the code used below, see  the Appendix .\n       \n        The above code produces the reduced row-echelon form of the augmented matrix for our system.\n        (The tuple   lists the pivot columns   note that Python indexes the columns starting at   rather than  .)\n        Do you remember how to get the answer from here? Here's another approach.\n       "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-span.html#exercise-10",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "\n        Determine whether   belongs to\n         .\n       \n        We seek scalars   such that\n         .\n        On the left-hand side, we expand and gather terms:\n         .\n        These two polynomials are equal if and only if we can solve the system\n         .\n       \n        We can solve this computationally using matrices again.\n       \n        So, what's the answer? Is   in the span?\n        Can we determine what polynomials are in the span?\n        Let's consider a general polynomial  .\n        A bit of thought tells us that the coefficients  \n        should replace the constants   above.\n       \n        Asking the computer to reduce this matrix to  RREF  won't produce the desired result.\n        But we can always specify row operations.\n       \n        In the  elementary_row_op  function called above,\n        we are asking the computer to change row   (the second row)\n        by adding   times row   )the first row).\n        See  Section  for complete details on this syntax.\n       \n        Now we repeat. Here is another cell to work with:\n       \n        Another option is to replace the  rref()  function with the\n         echelon_form()  function, which doesn't simplify quite as far:\n       \n        For a consistent system, we need  .\n       "
},
{
  "id": "thm-span-is-subspace",
  "level": "2",
  "url": "sec-span.html#thm-span-is-subspace",
  "type": "Theorem",
  "number": "1.4.6",
  "title": "",
  "body": "\n        Let   be a vector space, and let   be vectors in  . Then:\n         \n             \n                is a subspace of  .\n             \n           \n             \n                is the  smallest  subspace of    containing  ,\n              in the sense that if   is a subspace and  ,\n              then  .\n             \n           \n       Strategy \n        For the first part, we will rely on our trusty  .\n        The proof is essentially the same as the motivating example from the beginning of  ,\n        modified to allow an arbitrary number of vectors.\n        First, we will write the zero vector as a linear combination of the given vectors. (What should the scalars be?)\n        Then we check addition and scalar multiplication.\n       \n        How do we show that a subspace is  smallest ?\n        As suggested in the statement above, show that if a subspace  \n        contains the vectors  ,\n        then it must contain every vector in  .\n        This must be the case because   is closed under addition and scalar multiplication,\n        and every vector in   is formed using these operations.\n       \n        Let  . Then  ,\n        since  .\n        If   and  \n        are vectors in  , then\n         \n        is in  , and\n         \n        is in  , so by  Theorem ,\n          is a subspace.\n       \n        To see that   is the smallest subspace containing  ,\n        we need only note that if  ,\n        where   is a subspace, then since   is closed under scalar multiplication,\n        we know that   for any scalars  ,\n        and since   is closed under addition,  .\n        Thus,   contains all linear combinations of  ,\n        which is to say that   contains  .\n       "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec-span.html#exercise-11",
  "type": "Exercise",
  "number": "1.4.7",
  "title": "",
  "body": "\n        Let   be a vector space, and let  .\n        Show that if  , then  .\n       \n        Your goal is to show that any linear combination of vectors in  \n        can also be written as a linear combination of vectors in  .\n        What value should you choose for the scalars in front of any vectors that belong to   but not  ?\n       "
},
{
  "id": "ex-tf-span",
  "level": "2",
  "url": "sec-span.html#ex-tf-span",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": "\n        The vectors   span  .\n       \n       \n        The only way to get   as the third component of   is to set  .\n        But the scalar multiples of   do not generate all vectors of the form  .\n       \n     "
},
{
  "id": "theorem-surplus-span",
  "level": "2",
  "url": "sec-span.html#theorem-surplus-span",
  "type": "Theorem",
  "number": "1.4.9",
  "title": "",
  "body": "\n        Let   be a vector space, and let  .\n        If  , then\n         .\n       Strategy \n        We need to first recall that the span of a set of vectors is, first and foremost, a set.\n        That means that we are proving the equality of two sets.\n        Recall that this typically requires us to prove that each set is a subset of the other.\n       \n        This means that we need to show that any linear combination of the vectors\n          can be written as a linear combination of the vectors\n         , and vice-versa.\n        In one direction, we will need our hypothesis:  .\n        In the other direction, we come back to a trick we've already seen: adding zero does nothing.\n        That is, if a vector is missing from a linear combination, we can include it, using   for its coefficient.\n       \n        Suppose that  .\n        This means that   can be written as a linear combination of the vectors  ,\n        so there must exist scalars   such that\n         .\n        Now, let  .\n        Then we must have\n         \n        for scalars  . From our hypothesis (using  ), we get\n         .\n        Since   can be written as a linear combination of  ,\n         , and therefore  .\n       \n        On the other hand, let  .\n        Then there exist scalars   for which we have\n         .\n        Therefore,  ,\n        which proves the opposite conclusion, and therefore the result.\n       "
},
{
  "id": "p-270",
  "level": "2",
  "url": "sec-span.html#p-270",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly independent "
},
{
  "id": "worksheet-span",
  "level": "1",
  "url": "worksheet-span.html",
  "type": "Worksheet",
  "number": "1.5",
  "title": "Worksheet: understanding span",
  "body": "Worksheet: understanding span \n      In this worksheet, we will attempt to understand the concept of span.\n      Recall from   that the span of a set of vectors\n        in a vector space  \n      is the set of all linear combinations that can be generated from those vectors.\n     \n      Therefore, the question  Does the vector   belong to the span of  ? \n      is equivalent to asking,  Can I write   as a linear combination of the  ? ,\n      which, in turn, is equivalent to asking:\n     \n      Do there exist scalars   such that\n       ?\n     \n      In any finite-dimensional vector space, this last question can be turned into a system of equations.\n      If that system has a solution, then yes   your vector is in the span.\n      If the system is inconsistent, then the answer is no.\n     \n          Determine whether or not the vector   in  \n          belongs to the span of the vectors\n           .\n         \n      To assist with solving this problem, a code cell is provided below.\n      Once you have determined the augmented matrix of your system of equations,\n      see   for details on how to enter your matrix,\n      and then compute its reduced row-echelon form.\n     \n          Determine whether or not the polynomial   belongs to the span of the polynomials\n           .\n         \n      For our next activity, we are going to look at  RGB  colours.\n      Here,  RGB  stands for Red, Green, Blue.\n      All colours displayed by your computer monitor can be expressed in terms of these colours.\n     \n      First, we load some Python libraries we'll need.\n      These are intended for use in a Jupyter notebook and won't run properly if you are using Sagecell in the  HTML  textbook.\n     \n      Next, we will create a widget that lets us select values for red, green, and blue.\n      The  RGB  colour system assigns 8-bit values to each colour.\n      Possible values for each range from 0 to 255;\n      this indicates how much of each colour will be blended to create the colour you want.\n      Extensive information on the  RGB  colour system can be found\n       on wikipedia ,\n      and there are a number of good online resources about the use of  RGB  in web design,\n       such as this one from w3schools .\n     \n      By moving the sliders generated above, you can create different colours.\n      To see what colour you've created by moving the sliders, run the code below.\n     \n          In what ways can you explain the  RGB  colour system in terms of span?\n         \n          Why would it nonetheless be inappropriate to describe the set of all  RGB  colours as a vector space?\n         "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "worksheet-span.html#exercise-13",
  "type": "Worksheet Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "\n          Determine whether or not the vector   in  \n          belongs to the span of the vectors\n           .\n         "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "worksheet-span.html#exercise-14",
  "type": "Worksheet Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "\n          Determine whether or not the polynomial   belongs to the span of the polynomials\n           .\n         "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "worksheet-span.html#exercise-15",
  "type": "Worksheet Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "\n          In what ways can you explain the  RGB  colour system in terms of span?\n         "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "worksheet-span.html#exercise-16",
  "type": "Worksheet Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "\n          Why would it nonetheless be inappropriate to describe the set of all  RGB  colours as a vector space?\n         "
},
{
  "id": "sec-independence",
  "level": "1",
  "url": "sec-independence.html",
  "type": "Section",
  "number": "1.6",
  "title": "Linear Independence",
  "body": "Linear Independence \n    Recall that in  ,\n    we had to take care to insist that the vectors spanning our plane were not parallel.\n    Otherwise, what we thought was a plane would, in fact, be only a line.\n    Similarly, we said that a line is given by the set of all vectors of the form  ,\n    where   is a scalar, and    is not the zero vector .\n    Otherwise, if  , we would have   for all  ,\n    and our  line  would be the trivial subspace.\n   \n    When we define a subspace as the span of a set of vectors,\n    we want to have an idea of the size (or perhaps complexity) of the subspace.\n    Certainly the number of vectors we use to generate the span gives a measure of this,\n    but it is not the whole story: we also need to know how many of these vectors  depend  on other vectors in the generating set.\n    As   tells us,\n    when one of the vectors in our generating set can be written as a linear combination of the others,\n    we can remove it as a generator without changing the span.\n   linearly independent \n    This could amount to solving   different systems of equations in   variables!\n    But the systems are not all unrelated. The equation  \n    can be rewritten as  ,\n    where we happen to have set  .\n   \n    In fact, we can do the same thing for each of these systems,\n    and in each case we end up with the same thing: a single  homogeneous  system with one extra variable.\n    (We get back each of the systems we started with by setting one of the variables equal to  .)\n    This not only is far more efficient, it changes the question:\n    it is no longer a question of  existence  of solutions to a collection of non-homogeneous systems,\n    but a question of  uniqueness  for the solution of a single homogeneous system.\n   linearly independent linearly dependent \n        If  ,\n        where  , then\n          is linearly independent.\n       \n       \n        The definition of independence is a conditional statement:\n         if   ,\n         then   .\n        It is important to get the order of the logic correct here,\n        as the converse is always true.\n       \n     \n      Recall that the  trivial solution , where all variables are zero,\n      is  always  a solution to a homogeneous system of linear equations.\n      When checking for independence (or writing proofs of related theorems),\n      it is vitally important that we do not assume in advance that our scalars are zero.\n      Otherwise, we are simply making the assertion that  ,\n      which is, indeed, trivial.\n     \n      When we prove linear independence, we are trying to show that the trivial solution\n      is the  only  solution.\n     \n    Note that the definition of independence asserts that there can be no\n     non-trivial  linear combinations that add up to the zero vector.\n    Indeed, if even one scalar can be nonzero, then we can solve for the corresponding vector.\n    Say, for example, that we have a solution to  \n    with  . Then we can move all other vectors to the right-hand side,\n    and multiply both sides by   to give\n     .\n   Proofs involving linear independence \n        Note that the definition of linear independence is a conditional statement:\n         if    for some  ,\n         then   .\n       \n        When we want to conclude that a set of vectors is linearly independent,\n        we should assume that   for some  ,\n        and then try to show that the scalars must be zero.\n        It's important that we do not assume anything about the scalars to begin with.\n       \n        If the hypothesis of a statement includes the assumption that a set of vectors is independent,\n        we know that if we can get a linear combination of those vectors equal to the zero vector,\n        then the scalars in that linear combination are automatically zero.\n       \n        Which of the following are equivalent to the statement,\n         The set of vectors   is linearly independent. ?\n       \n       \n         \n            If  , then  .\n           \n         \n           \n            Yes! This is essentially the definition.\n           \n         \n       \n       \n         \n            If  , then  .\n           \n         \n           \n            Remember that a conditional statement is not equivalent to its converse.\n            This statement is true for any set of vectors.\n           \n         \n       \n       \n         \n            The only scalars   for which  \n            are  .\n           \n         \n           \n            Correct!\n           \n         \n       \n       \n         \n            For all scalars  ,  .\n           \n         \n           \n            The only way this can be true is if all the vectors in the set are the zero vector!\n           \n         \n       \n       \n         \n            For some scalars  ,  .\n           \n         \n           \n            Such scalars always exist, because we can choose them to be zero.\n            Independence means that this is the only possible choice.\n           \n         \n       \n     \n    When looking for vectors that span a subspace,\n    it is useful to find a spanning set that is also linearly independent.\n    Otherwise, as   tells us,\n    we will have some  redundant  vectors, in the sense that removing them as generators does not change the span.\n   \n        In any vector space  :\n         \n             \n              If  , then   is independent.\n             \n           \n             \n              If   contains the zero vector, then   is dependent.\n             \n           \n       Strategy \n        This time, we will outline the strategy, and leave the execution to you.\n        Both parts are about linear combinations.\n        What does independence look like for a single vector?\n        We would need to show that if   for some scalar  ,\n        then  .\n        Now recall that in  ,\n        we showed that if  , either   or  .\n        We're assuming  , so what does that tell you about  ?\n       \n        In the second part, if we have a linear combination involving the zero vector,\n        does the value of the scalar in front of   matter?\n        (Can it change the value of the linear combination?)\n        If not, is there any reason that scalar would have to be zero?\n       \n    The definition of linear independence tells us that if  \n    is an independent set of vectors, then there is only one way to write  \n    as a linear combination of these vectors; namely,\n     .\n    In fact, more is true:  any  vector in the span of a linearly independent set\n    can be written in only one way as a linear combination of those vectors.\n   \n        Computationally, questions about linear independence are just questions\n        about homogeneous systems of linear equations.\n        For example, suppose we want to know if the vectors\n         \n        are linearly independent in  .\n        This question leads to the vector equation\n         ,\n        which becomes the matrix equation\n         .\n       \n        We now apply some basic theory from linear algebra.\n        A unique (and therefore, trivial) solution to this system is guaranteed if the matrix\n          is invertible,\n        since in that case we have  .\n       \n    The approach in   is problematic,\n    however, since it won't work if we have 2 vectors, or 4.\n    In general, we should look at the reduced row-echelon form.\n    A unique solution corresponds to having a leading 1 in each column of  .\n    Let's check this condition.\n   \n    One observation is useful here, and will lead to a better understanding of independence.\n    First, it would be impossible to have 4 or more linearly independent vectors in  .\n    Why? (How many leading ones can you have in a   matrix?)\n    Second, having two or fewer vectors makes it more likely that the set is independent.\n   \n    The largest set of linearly independent vectors possible in   contains three vectors.\n    You might have also observed that the smallest number of vectors needed to span   is 3.\n    Hmm. Seems like there's something interesting going on here. But first, some more computation.\n   \n        Determine whether the set  \n        is linearly independent in  .\n       \n        We set up a matrix and reduce:\n       \n        Notice that this time we don't get a unique solution, so we can conclude that these vectors are  not  independent.\n        Furthermore, you can probably deduce from the above that we have  .\n        Now suppose that  .\n        In how many ways can we write   as a linear combination of these vectors?\n       \n        Which of the following subsets of   are independent?\n         \n       \n        In each case, we set up the defining equation for independence, collect terms,\n        and then analyze the resulting system of equations.\n        (If you work with polynomials often enough,\n        you can probably jump straight to the matrix.\n        For now, let's work out the details.)\n       \n        Suppose\n         .\n        Then  , so\n         .\n       \n        And in this case, we don't even need to ask the computer.\n        The first equation gives   right away,\n        and putting that into the third equation gives  ,\n        and the second equation then gives  .\n       \n        Since   is the only solution, the set is independent.\n       \n        Repeating for   leads to the equation\n         \n        This gives us:\n       \n        Determine whether or not the set\n         \n        is linearly independent in  .\n       \n        We set a linear combination equal to the zero vector, and combine:\n         .\n       \n        We could proceed, but we might instead notice right away that equations 1 and 4 are identical,\n        and so are equations 2 and 3.\n        With only two distinct equations and 4 unknowns, we're certain to find nontrivial solutions.\n       \n    We end with one last exercise, which provides a result that often comes in handy.\n   \n        Prove that any nonempty subset of a linearly independent set is linearly independent.\n       \n        Start by assigning labels: let the larger set be  ,\n        and let the smaller set be  , where  .\n        What happens if the smaller set is not independent?\n       "
},
{
  "id": "p-287",
  "level": "2",
  "url": "sec-independence.html#p-287",
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
  "body": "linearly independent linearly dependent "
},
{
  "id": "ex-tf-li",
  "level": "2",
  "url": "sec-independence.html#ex-tf-li",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": "\n        If  ,\n        where  , then\n          is linearly independent.\n       \n       \n        The definition of independence is a conditional statement:\n         if   ,\n         then   .\n        It is important to get the order of the logic correct here,\n        as the converse is always true.\n       \n     "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-independence.html#remark-2",
  "type": "Remark",
  "number": "1.6.3",
  "title": "Proofs involving linear independence.",
  "body": "Proofs involving linear independence \n        Note that the definition of linear independence is a conditional statement:\n         if    for some  ,\n         then   .\n       \n        When we want to conclude that a set of vectors is linearly independent,\n        we should assume that   for some  ,\n        and then try to show that the scalars must be zero.\n        It's important that we do not assume anything about the scalars to begin with.\n       \n        If the hypothesis of a statement includes the assumption that a set of vectors is independent,\n        we know that if we can get a linear combination of those vectors equal to the zero vector,\n        then the scalars in that linear combination are automatically zero.\n       "
},
{
  "id": "ex-rs-mc-indep",
  "level": "2",
  "url": "sec-independence.html#ex-rs-mc-indep",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": "\n        Which of the following are equivalent to the statement,\n         The set of vectors   is linearly independent. ?\n       \n       \n         \n            If  , then  .\n           \n         \n           \n            Yes! This is essentially the definition.\n           \n         \n       \n       \n         \n            If  , then  .\n           \n         \n           \n            Remember that a conditional statement is not equivalent to its converse.\n            This statement is true for any set of vectors.\n           \n         \n       \n       \n         \n            The only scalars   for which  \n            are  .\n           \n         \n           \n            Correct!\n           \n         \n       \n       \n         \n            For all scalars  ,  .\n           \n         \n           \n            The only way this can be true is if all the vectors in the set are the zero vector!\n           \n         \n       \n       \n         \n            For some scalars  ,  .\n           \n         \n           \n            Such scalars always exist, because we can choose them to be zero.\n            Independence means that this is the only possible choice.\n           \n         \n       \n     "
},
{
  "id": "lemma-basic-independent",
  "level": "2",
  "url": "sec-independence.html#lemma-basic-independent",
  "type": "Lemma",
  "number": "1.6.5",
  "title": "",
  "body": "\n        In any vector space  :\n         \n             \n              If  , then   is independent.\n             \n           \n             \n              If   contains the zero vector, then   is dependent.\n             \n           \n       Strategy \n        This time, we will outline the strategy, and leave the execution to you.\n        Both parts are about linear combinations.\n        What does independence look like for a single vector?\n        We would need to show that if   for some scalar  ,\n        then  .\n        Now recall that in  ,\n        we showed that if  , either   or  .\n        We're assuming  , so what does that tell you about  ?\n       \n        In the second part, if we have a linear combination involving the zero vector,\n        does the value of the scalar in front of   matter?\n        (Can it change the value of the linear combination?)\n        If not, is there any reason that scalar would have to be zero?\n       "
},
{
  "id": "rem-independent-homogeneous",
  "level": "2",
  "url": "sec-independence.html#rem-independent-homogeneous",
  "type": "Remark",
  "number": "1.6.6",
  "title": "",
  "body": "\n        Computationally, questions about linear independence are just questions\n        about homogeneous systems of linear equations.\n        For example, suppose we want to know if the vectors\n         \n        are linearly independent in  .\n        This question leads to the vector equation\n         ,\n        which becomes the matrix equation\n         .\n       \n        We now apply some basic theory from linear algebra.\n        A unique (and therefore, trivial) solution to this system is guaranteed if the matrix\n          is invertible,\n        since in that case we have  .\n       "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec-independence.html#exercise-19",
  "type": "Exercise",
  "number": "1.6.7",
  "title": "",
  "body": "\n        Determine whether the set  \n        is linearly independent in  .\n       \n        We set up a matrix and reduce:\n       \n        Notice that this time we don't get a unique solution, so we can conclude that these vectors are  not  independent.\n        Furthermore, you can probably deduce from the above that we have  .\n        Now suppose that  .\n        In how many ways can we write   as a linear combination of these vectors?\n       "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec-independence.html#exercise-20",
  "type": "Exercise",
  "number": "1.6.8",
  "title": "",
  "body": "\n        Which of the following subsets of   are independent?\n         \n       \n        In each case, we set up the defining equation for independence, collect terms,\n        and then analyze the resulting system of equations.\n        (If you work with polynomials often enough,\n        you can probably jump straight to the matrix.\n        For now, let's work out the details.)\n       \n        Suppose\n         .\n        Then  , so\n         .\n       \n        And in this case, we don't even need to ask the computer.\n        The first equation gives   right away,\n        and putting that into the third equation gives  ,\n        and the second equation then gives  .\n       \n        Since   is the only solution, the set is independent.\n       \n        Repeating for   leads to the equation\n         \n        This gives us:\n       "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "sec-independence.html#exercise-21",
  "type": "Exercise",
  "number": "1.6.9",
  "title": "",
  "body": "\n        Determine whether or not the set\n         \n        is linearly independent in  .\n       \n        We set a linear combination equal to the zero vector, and combine:\n         .\n       \n        We could proceed, but we might instead notice right away that equations 1 and 4 are identical,\n        and so are equations 2 and 3.\n        With only two distinct equations and 4 unknowns, we're certain to find nontrivial solutions.\n       "
},
{
  "id": "ex-independent-subset",
  "level": "2",
  "url": "sec-independence.html#ex-independent-subset",
  "type": "Exercise",
  "number": "1.6.10",
  "title": "",
  "body": "\n        Prove that any nonempty subset of a linearly independent set is linearly independent.\n       \n        Start by assigning labels: let the larger set be  ,\n        and let the smaller set be  , where  .\n        What happens if the smaller set is not independent?\n       "
},
{
  "id": "sec-dimension",
  "level": "1",
  "url": "sec-dimension.html",
  "type": "Section",
  "number": "1.7",
  "title": "Basis and dimension",
  "body": "Basis and dimension \n    Next, we begin with an important result, sometimes known as the  Fundamental Theorem :\n   Fundamental Theorem (Steinitz Exchange Lemma) \n        Suppose  .\n        If   is a linearly independent set of vectors in  ,\n        then  .\n       Strategy \n        We won't give a complete proof of this theorem.\n        The idea is straightforward, but checking all the details takes some work.\n        Since   is a spanning set,\n        each of the vectors in our independent set can be written as a linear combination of  .\n        In particular, we can write\n         \n        for scalars  , and these scalars can't all be zero.\n        (Why? And why is this important?)\n       \n        The next step is to argue that  ;\n        that is, that we can replace   by   without changing the span.\n        This will involve chasing some linear combinations,\n        and remember that we need to check both inclusions to prove set equality.\n        (This step requires us to have assumed that the scalar   is nonzero. Do you see why?)\n       \n        Next, we similarly replace   with  .\n        Note that we can write\n         ,\n        and at least one of the   must be nonzero.\n        (Why can't they all be zero? What does   tell you about  ?)\n       \n        If we assume that   is one of the nonzero scalars,\n        we can solve for   in the equation above, and replace   by   in our spanning set.\n        At this point, you will have successfully argued that  .\n       \n        Now, we repeat the process. If  , we eventually run out of   vectors, and all is well.\n        The question is, what goes wrong if  ? Then we run out of   vectors first.\n        We'll be able to write  ,\n        and there will be some vectors   leftover.\n        Why is this a problem? (What assumption about the   will we contradict?)\n       \n    If a set of vectors spans a vector space  , but it is not independent,\n    we observed that it is possible to remove a vector from the set and still span   using a smaller set.\n    This suggests that spanning sets that are also linearly independent are of particular importance,\n    and indeed, they are important enough to have a name.\n   basis \n    The importance of a basis is that vector vector   can be written in terms of the basis,\n    and this expression as a linear combination of basis vectors is  unique .\n    Another important fact is that every basis has the same number of elements.\n   Invariance Theorem \n        If   and  \n        are both bases of a vector space  , then  .\n       Strategy \n        One way of proving the equality   is to show that   and  .\n        We know that since both sets are bases, both sets are independent, and they both span  .\n        Can you see a way to use   (twice)?\n       \n        Let   and let  .\n        Since both   and   are bases, both sets are linearly independent, and both sets span  .\n        Since   is independent and  , we must have  , by  .\n        Similarly, since   and   is independent, we must have  ,\n        and therefore,  .\n       \n    Suppose  .\n    If this set is not linearly independent,  Theorem \n    tells us that we can remove a vector from the set, and still span  .\n    We can repeat this procedure until we have a linearly independent set of vectors, which will then be a basis.\n    These results let us make a definition.\n   finite-dimensional dimension infinite-dimensional \n        Find a basis for  , if  \n       \n        Let  . Then  ,\n        and  , so the condition  \n        requires:\n         .\n       \n        So  , in which case the first equation   is trivial,\n        and we are left with the single equation  . Thus, our matrix  \n        must be of the form\n         .\n        Since the matrices   and  \n        are not scalar multiples of each other, they must be independent, and therefore, they form a basis for  .\n        (Why do we know these matrices span  ?)\n       Standard bases \n        Most of the vector spaces we work with come equipped with a  standard basis .\n        The standard basis for a vector space is typically a basis such that the scalars needed to express a vector in terms of that basis are the same scalars used to define the vector in the first place.\n        For example, we write an element of   as   (or  ,\n        or  , or  ).\n        We can also write\n         .\n        The set   is the standard basis for  .\n        In general, the vector space   (written this time as column vectors) has standard basis\n         .\n        From this, we can conclude (unsurprisingly) that  .\n       \n        Similarly, a polynomial   is usually written as\n         ,\n        suggesting the standard basis  .\n        As a result, we see that  .\n       \n        For one more example, we note that a   matrix  \n        can be written as\n         ,\n        which suggests a standard basis for  , with similar results for any other matrix space.\n        From this, we can conclude (exercise) that  .\n       \n        Show that the following sets are bases of  .\n       \n           \n         \n          We need to show that the set is independent, and that it spans.\n         \n          The set is independent if the equation\n           \n          has   as its only solution.\n          This equation is equivalent to the system\n           .\n         \n          We know that the solution to this system is unique if the coefficient matrix\n            is invertible.\n          Note that the columns of this matrix are vectors in our set.\n         \n          We can determine invertibility either by showing that the  RREF  of  \n          is the identity, or by showing that the determinant of   is nonzero.\n          Either way, this is most easily done by the computer:\n         \n          Our set of vectors is therefore linearly independent.\n          Now, to show that it spans, we need to show that for any vector  ,\n          the equation\n           \n          has a solution. But we know that this system has the same coefficient matrix as the one above,\n          and that existence of a solution again follows from invertibility of  ,\n          which we have already established.\n         \n          Note that for three vectors in  , once independence has been confirmed,\n          span is automatic. We will soon see that this is not a coincidence.\n         \n           \n         \n          Based on what we learned from the first set,\n          determining whether or not this set is a basis is equivalent to determining whether or not the matrix\n            whose columns consist of the vectors in the set is invertible.\n          We form the matrix\n           \n          and then check invertibility using the computer.\n         \n          Since the determinant is nonzero, our set is a basis.\n         \n    The next two exercises are left to the reader to solve.\n    In each case, your goal should be to turn the questions of independence and span into a system of equations,\n    which you can then solve using the computer.\n   \n        Show that the following is a basis of  :\n         .\n       \n        For independence, consider the linear combination\n         .\n        Combine the left-hand side, and then equate entries of the matrices on either side to obtain a system of equations.\n       \n        Show that   is a basis for  .\n       \n        For independence, consider the linear combination\n         .\n        When dealing with polynomials, we need to collect like terms and equate coefficients:\n         ,\n        so the coefficients   must all equal zero.\n       \n        Find a basis and dimension for the following subspaces of  :\n       \n           \n         \n          By definition,  ,\n          and these vectors are independent, since neither is a scalar multiple of the other.\n          Since there are two vectors in this basis,  .\n         \n           \n         \n          If  , then   for some polynomial  .\n          Since   is a subspace of  , the degree of   is at most 2.\n          Therefore,   for some  , and\n           .\n          Since   was arbitrary, this shows that  .\n         \n          The set   is also independent,\n          since neither vector is a scalar multiple of the other.\n          Therefore, this set is a basis, and  .\n         \n           \n         \n          If  , then   is an even polynomial,\n          and therefore   for  .\n          (If you didn't know this it's easily verified: if\n           ,\n          we can immediately cancel   from each side,\n          and since  , we can cancel   as well.\n          This leaves  , or  , which implies that  .)\n         \n          It follows that the set   spans  ,\n          and since this is a subset of the standard basis   of  ,\n          it must be independent, and is therefore a basis of  ,\n          letting us conclude that  .\n         \n    We've noted a few times now that if  ,\n    then\n     \n    If   is not in the span, we can make another useful observation:\n   Independent Lemma \n        Suppose   is a linearly independent set of vectors in a vector space  .\n        If   but  ,\n        then   is independent.\n       Strategy \n        We want to show that a set of vectors is linearly independent,\n        so we should begin by setting a linear combination of these vectors equal to the zero vector.\n        Our goal is to show that all the coefficients have to be zero.\n       \n        Since the vector   is  special ,\n        its coefficient gets a different treatment, using a familiar tautology:\n        either this coefficient is zero, or it isn't.\n       \n        what if the coefficient of   is nonzero? Does that contradict one of our assumptions?\n        If the coefficient of   is zero, then it disappears from our linear combination.\n        What assumption applies to the remaining vectors?\n       \n        Suppose   is independent,\n        and that  . Suppose we have\n         \n        for scalars  . We must have  ;\n        otherwise, we can multiply by   and rearrange to obtain\n         ,\n        but this would mean that  , contradicting our assumption.\n       \n        With   we're left with\n         ,\n        and since we assumed that the set   is independent,\n        we must have  . Since we already showed  ,\n        this shows that   is independent.\n       \n    This is, in fact, an  if and only if  result.\n    If  , then   is not independent.\n    Above, we argued that if   is finite dimensional,\n    then any spanning set for   can be reduced to a basis.\n    It probably won't surprise you that the following is also true.\n   \n        Let   be a finite-dimensional vector space,\n        and let   be any subspace of  .\n        Then any independent set of vectors   in  \n        can be enlarged to a basis of  .\n       Strategy \n        We have an independent set of vectors that doesn't span our subspace.\n        That means there must be some vector in   that isn't in the span,\n        so   applies:\n        we can add that vector to our set, and get a larger independent set.\n       \n        Now it's just a matter of repeating this process until we get a spanning set.\n        But there's one gap: how do we know the process has to stop?\n        Why can't we just keep adding vectors forever, getting larger and larger independent sets?\n       \n        This follows from  .\n        If our independent set of vectors spans  , then it's a basis and we're done.\n        If not, we can find some vector not in the span,\n        and add it to our set to obtain a larger set that is still independent.\n        We can continue adding vectors in this fashion until we obtain a spanning set.\n       \n        Note that this process  must  terminate:   is finite-dimensional,\n        so there is a finite spanning set for  .\n        By the Steinitz Exchange lemma, our independent set cannot get larger than this spanning set.\n       \n        Any finite-dimensional (non-trivial) vector space   has a basis.\n        Moreover:\n         \n             \n              If   can be spanned by   vectors,\n              then  .\n             \n           \n             \n              Given an independent set   in   that does not span  ,\n              and a basis   of  ,\n              we can enlarge   to a basis of   by adding elements of  .\n             \n           \n       Strategy \n        Much of this theorem sums up some of what we've learned so far:\n        As long as a vector space   contains a nonzero vector  ,\n        the set   is independent and can be enlarged to a basis, by  .\n        The size of any spanning set is at least as big as the dimension of  , by  .\n       \n        To understand why we can enlarge a given independent set using elements of an  existing  basis,\n        we need to think about why there must be some vector in this basis that is not in the span of our independent set,\n        so that we can apply  .\n       \n        Let   be a finite-dimensional, non-trivial vector space.\n        If   is a vector in  , then   is linearly independent.\n        By  , we can enlarge this set to a basis of  ,\n        so   has a basis.\n       \n        Now, suppose  ,\n        and let   be a basis for  .\n        By definition, we have  ,\n        and by  , since   is linearly independent,\n        we must have  .\n       \n        Let us now consider an independent set  .\n        Since   is independent and   spans  , we must have  .\n        If  , there must be some element of   that is not in the span of  :\n        if every element of   is in  , then  \n        by  .\n        And since   is a basis, it spans  , so every element of   is in the span of  ,\n        and we similarly have that  , so  .\n       \n        Since we can find an element of   that is not in the span of  ,\n        we can add that element to  , and the resulting set is still independent.\n        If the new set spans  , we're done. If not, we can repeat the process, adding another vector from  .\n        Since the set   is finite, this process must eventually end.\n       \n        Find a basis of   that contains the vectors\n         .\n       \n        By the previous theorem, we can form a basis by adding vectors from the standard basis\n         .\n        It's easy to check that   is not in the span of  .\n        To get a basis, we need one more vector.\n        Observe that all three of our vectors so far have a zero in the  -entry.\n        Thus,   cannot be in the span of the first three vectors,\n        and adding it gives us our basis.\n       \n        Extend the set   to a basis of  .\n       \n        Again, we only need to add one vector from the standard basis\n         , and it's not too hard to check that any of them will do.\n       \n        Give two examples of infinite-dimensional vector spaces.\n        Support your answer.\n       \n        Determine whether the following statements are true or false.\n       \n          A set of 2 vectors can span  .\n         \n         \n          We know that the standard basis for   contains three vectors,\n          and as a basis, it is linearly independent.\n          According to  , a spanning set cannot be larger than an independent set.\n         \n       \n          It is possible for a set of 2 vectors to be linearly independent in  .\n         \n         \n          There are many such examples, including  .\n         \n       \n          A set of 4 vectors can span  .\n         \n         \n          Add any vector you want to a basis for  , and the resulting set will span.\n         \n       \n          It is possible for a set of 4 vectors to be linearly independent in  .\n         \n         \n          We know that 3 vectors can span  , and an independent set cannot be larger than a spanning set.\n         \n       \n    Let's recap our results so far:\n     \n         \n          A basis for a vector space   is an independent set of vectors that spans  .\n         \n       \n         \n          The number of vectors in any basis of   is a constant, called the dimension of  .\n         \n       \n         \n          The number of vectors in any independent set is always less than or equal to the number of vectors in a spanning set.\n         \n       \n         \n          In a finite-dimensional vector space, any independent set can be enlarged to a basis,\n          and any spanning set can be cut down to a basis by deleting vectors that are in the span of the remaining vectors.\n         \n       \n    Another important aspect of dimension is that it reduces many problems,\n    such as determining equality of subspaces, to counting problems.\n   \n        Let   and   be subspaces of a finite-dimensional vector space  .\n         \n             \n              If  , then  .\n             \n           \n             \n              If   and  , then  .\n             \n           \n       \n         \n             \n              Suppose  , and let  \n              be a basis for  . Since   is a basis, it's independent.\n              And since   and  ,  .\n              Thus,   is an independent subset of  ,\n              and since any basis of   spans  ,\n              we know that  ,\n              by  Theorem .\n             \n           \n             \n              Suppose   and  .\n              Let   be a basis for  .\n              As above,   is an independent subset of  .\n              If  , then there is some   with  .\n              But  , so that would mean that  \n              is a linearly independent set containing   vectors.\n              This is impossible, since  ,\n              so no independent set can contain more than   vectors.\n             \n           \n       \n    An even more useful counting result is the following:\n   \n        Let   be an  -dimensional vector space.\n        If the set   contains   vectors,\n        then   is independent if and only if  .\n       Strategy \n        This result is a combination of three observations:\n         \n             \n              The dimension of   is the size of any basis\n             \n           \n             \n              Any independent set can be enlarged to a basis,\n              and cannot have more vectors than a basis.\n             \n           \n             \n              Any spanning set contains a basis,\n              and cannot have fewer vectors than a basis.\n             \n           \n       \n        If   is independent, then it can be extended to a basis   with  .\n        But   and   both contain   vectors (since  ),\n        so we must have  .\n       \n        If   spans  , then   must contain a basis  ,\n        and as above, since   and   contain the same number of vectors,\n        they must be equal.\n       \n      saves us a lot of time,\n    since it tells us that, when we know the dimension of  ,\n    we do not have to check both independence and span to confirm a basis;\n    checking one of the two implies the other. (And usually independence is easier to check.)\n   \n    We saw this in  :\n    given a set of vectors in  ,\n    we form the matrix   with these vectors as columns.\n    This matrix becomes the coefficient matrix for the system of equations we obtain when checking for independence,\n     and  for the system we obtain when checking for span.\n    In both cases, the condition on   is the same; namely, that it must be invertible.\n   "
},
{
  "id": "theorem-steinitz",
  "level": "2",
  "url": "sec-dimension.html#theorem-steinitz",
  "type": "Theorem",
  "number": "1.7.1",
  "title": "Fundamental Theorem (Steinitz Exchange Lemma).",
  "body": "Fundamental Theorem (Steinitz Exchange Lemma) \n        Suppose  .\n        If   is a linearly independent set of vectors in  ,\n        then  .\n       Strategy \n        We won't give a complete proof of this theorem.\n        The idea is straightforward, but checking all the details takes some work.\n        Since   is a spanning set,\n        each of the vectors in our independent set can be written as a linear combination of  .\n        In particular, we can write\n         \n        for scalars  , and these scalars can't all be zero.\n        (Why? And why is this important?)\n       \n        The next step is to argue that  ;\n        that is, that we can replace   by   without changing the span.\n        This will involve chasing some linear combinations,\n        and remember that we need to check both inclusions to prove set equality.\n        (This step requires us to have assumed that the scalar   is nonzero. Do you see why?)\n       \n        Next, we similarly replace   with  .\n        Note that we can write\n         ,\n        and at least one of the   must be nonzero.\n        (Why can't they all be zero? What does   tell you about  ?)\n       \n        If we assume that   is one of the nonzero scalars,\n        we can solve for   in the equation above, and replace   by   in our spanning set.\n        At this point, you will have successfully argued that  .\n       \n        Now, we repeat the process. If  , we eventually run out of   vectors, and all is well.\n        The question is, what goes wrong if  ? Then we run out of   vectors first.\n        We'll be able to write  ,\n        and there will be some vectors   leftover.\n        Why is this a problem? (What assumption about the   will we contradict?)\n       "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "sec-dimension.html#def-basis",
  "type": "Definition",
  "number": "1.7.2",
  "title": "",
  "body": "basis "
},
{
  "id": "thm-invariance",
  "level": "2",
  "url": "sec-dimension.html#thm-invariance",
  "type": "Theorem",
  "number": "1.7.3",
  "title": "Invariance Theorem.",
  "body": "Invariance Theorem \n        If   and  \n        are both bases of a vector space  , then  .\n       Strategy \n        One way of proving the equality   is to show that   and  .\n        We know that since both sets are bases, both sets are independent, and they both span  .\n        Can you see a way to use   (twice)?\n       \n        Let   and let  .\n        Since both   and   are bases, both sets are linearly independent, and both sets span  .\n        Since   is independent and  , we must have  , by  .\n        Similarly, since   and   is independent, we must have  ,\n        and therefore,  .\n       "
},
{
  "id": "def-dimension",
  "level": "2",
  "url": "sec-dimension.html#def-dimension",
  "type": "Definition",
  "number": "1.7.4",
  "title": "",
  "body": "finite-dimensional dimension infinite-dimensional "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "sec-dimension.html#exercise-23",
  "type": "Exercise",
  "number": "1.7.5",
  "title": "",
  "body": "\n        Find a basis for  , if  \n       \n        Let  . Then  ,\n        and  , so the condition  \n        requires:\n         .\n       \n        So  , in which case the first equation   is trivial,\n        and we are left with the single equation  . Thus, our matrix  \n        must be of the form\n         .\n        Since the matrices   and  \n        are not scalar multiples of each other, they must be independent, and therefore, they form a basis for  .\n        (Why do we know these matrices span  ?)\n       "
},
{
  "id": "ex-standard-bases",
  "level": "2",
  "url": "sec-dimension.html#ex-standard-bases",
  "type": "Example",
  "number": "1.7.6",
  "title": "Standard bases.",
  "body": "Standard bases \n        Most of the vector spaces we work with come equipped with a  standard basis .\n        The standard basis for a vector space is typically a basis such that the scalars needed to express a vector in terms of that basis are the same scalars used to define the vector in the first place.\n        For example, we write an element of   as   (or  ,\n        or  , or  ).\n        We can also write\n         .\n        The set   is the standard basis for  .\n        In general, the vector space   (written this time as column vectors) has standard basis\n         .\n        From this, we can conclude (unsurprisingly) that  .\n       \n        Similarly, a polynomial   is usually written as\n         ,\n        suggesting the standard basis  .\n        As a result, we see that  .\n       \n        For one more example, we note that a   matrix  \n        can be written as\n         ,\n        which suggests a standard basis for  , with similar results for any other matrix space.\n        From this, we can conclude (exercise) that  .\n       "
},
{
  "id": "ex-basis-r3",
  "level": "2",
  "url": "sec-dimension.html#ex-basis-r3",
  "type": "Exercise",
  "number": "1.7.7",
  "title": "",
  "body": "\n        Show that the following sets are bases of  .\n       \n           \n         \n          We need to show that the set is independent, and that it spans.\n         \n          The set is independent if the equation\n           \n          has   as its only solution.\n          This equation is equivalent to the system\n           .\n         \n          We know that the solution to this system is unique if the coefficient matrix\n            is invertible.\n          Note that the columns of this matrix are vectors in our set.\n         \n          We can determine invertibility either by showing that the  RREF  of  \n          is the identity, or by showing that the determinant of   is nonzero.\n          Either way, this is most easily done by the computer:\n         \n          Our set of vectors is therefore linearly independent.\n          Now, to show that it spans, we need to show that for any vector  ,\n          the equation\n           \n          has a solution. But we know that this system has the same coefficient matrix as the one above,\n          and that existence of a solution again follows from invertibility of  ,\n          which we have already established.\n         \n          Note that for three vectors in  , once independence has been confirmed,\n          span is automatic. We will soon see that this is not a coincidence.\n         \n           \n         \n          Based on what we learned from the first set,\n          determining whether or not this set is a basis is equivalent to determining whether or not the matrix\n            whose columns consist of the vectors in the set is invertible.\n          We form the matrix\n           \n          and then check invertibility using the computer.\n         \n          Since the determinant is nonzero, our set is a basis.\n         "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "sec-dimension.html#exercise-25",
  "type": "Exercise",
  "number": "1.7.8",
  "title": "",
  "body": "\n        Show that the following is a basis of  :\n         .\n       \n        For independence, consider the linear combination\n         .\n        Combine the left-hand side, and then equate entries of the matrices on either side to obtain a system of equations.\n       "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "sec-dimension.html#exercise-26",
  "type": "Exercise",
  "number": "1.7.9",
  "title": "",
  "body": "\n        Show that   is a basis for  .\n       \n        For independence, consider the linear combination\n         .\n        When dealing with polynomials, we need to collect like terms and equate coefficients:\n         ,\n        so the coefficients   must all equal zero.\n       "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec-dimension.html#exercise-27",
  "type": "Exercise",
  "number": "1.7.10",
  "title": "",
  "body": "\n        Find a basis and dimension for the following subspaces of  :\n       \n           \n         \n          By definition,  ,\n          and these vectors are independent, since neither is a scalar multiple of the other.\n          Since there are two vectors in this basis,  .\n         \n           \n         \n          If  , then   for some polynomial  .\n          Since   is a subspace of  , the degree of   is at most 2.\n          Therefore,   for some  , and\n           .\n          Since   was arbitrary, this shows that  .\n         \n          The set   is also independent,\n          since neither vector is a scalar multiple of the other.\n          Therefore, this set is a basis, and  .\n         \n           \n         \n          If  , then   is an even polynomial,\n          and therefore   for  .\n          (If you didn't know this it's easily verified: if\n           ,\n          we can immediately cancel   from each side,\n          and since  , we can cancel   as well.\n          This leaves  , or  , which implies that  .)\n         \n          It follows that the set   spans  ,\n          and since this is a subset of the standard basis   of  ,\n          it must be independent, and is therefore a basis of  ,\n          letting us conclude that  .\n         "
},
{
  "id": "lemma-independent",
  "level": "2",
  "url": "sec-dimension.html#lemma-independent",
  "type": "Lemma",
  "number": "1.7.11",
  "title": "Independent Lemma.",
  "body": "Independent Lemma \n        Suppose   is a linearly independent set of vectors in a vector space  .\n        If   but  ,\n        then   is independent.\n       Strategy \n        We want to show that a set of vectors is linearly independent,\n        so we should begin by setting a linear combination of these vectors equal to the zero vector.\n        Our goal is to show that all the coefficients have to be zero.\n       \n        Since the vector   is  special ,\n        its coefficient gets a different treatment, using a familiar tautology:\n        either this coefficient is zero, or it isn't.\n       \n        what if the coefficient of   is nonzero? Does that contradict one of our assumptions?\n        If the coefficient of   is zero, then it disappears from our linear combination.\n        What assumption applies to the remaining vectors?\n       \n        Suppose   is independent,\n        and that  . Suppose we have\n         \n        for scalars  . We must have  ;\n        otherwise, we can multiply by   and rearrange to obtain\n         ,\n        but this would mean that  , contradicting our assumption.\n       \n        With   we're left with\n         ,\n        and since we assumed that the set   is independent,\n        we must have  . Since we already showed  ,\n        this shows that   is independent.\n       "
},
{
  "id": "lem-enlarge-independent",
  "level": "2",
  "url": "sec-dimension.html#lem-enlarge-independent",
  "type": "Lemma",
  "number": "1.7.12",
  "title": "",
  "body": "\n        Let   be a finite-dimensional vector space,\n        and let   be any subspace of  .\n        Then any independent set of vectors   in  \n        can be enlarged to a basis of  .\n       Strategy \n        We have an independent set of vectors that doesn't span our subspace.\n        That means there must be some vector in   that isn't in the span,\n        so   applies:\n        we can add that vector to our set, and get a larger independent set.\n       \n        Now it's just a matter of repeating this process until we get a spanning set.\n        But there's one gap: how do we know the process has to stop?\n        Why can't we just keep adding vectors forever, getting larger and larger independent sets?\n       \n        This follows from  .\n        If our independent set of vectors spans  , then it's a basis and we're done.\n        If not, we can find some vector not in the span,\n        and add it to our set to obtain a larger set that is still independent.\n        We can continue adding vectors in this fashion until we obtain a spanning set.\n       \n        Note that this process  must  terminate:   is finite-dimensional,\n        so there is a finite spanning set for  .\n        By the Steinitz Exchange lemma, our independent set cannot get larger than this spanning set.\n       "
},
{
  "id": "thm-basis-exist",
  "level": "2",
  "url": "sec-dimension.html#thm-basis-exist",
  "type": "Theorem",
  "number": "1.7.13",
  "title": "",
  "body": "\n        Any finite-dimensional (non-trivial) vector space   has a basis.\n        Moreover:\n         \n             \n              If   can be spanned by   vectors,\n              then  .\n             \n           \n             \n              Given an independent set   in   that does not span  ,\n              and a basis   of  ,\n              we can enlarge   to a basis of   by adding elements of  .\n             \n           \n       Strategy \n        Much of this theorem sums up some of what we've learned so far:\n        As long as a vector space   contains a nonzero vector  ,\n        the set   is independent and can be enlarged to a basis, by  .\n        The size of any spanning set is at least as big as the dimension of  , by  .\n       \n        To understand why we can enlarge a given independent set using elements of an  existing  basis,\n        we need to think about why there must be some vector in this basis that is not in the span of our independent set,\n        so that we can apply  .\n       \n        Let   be a finite-dimensional, non-trivial vector space.\n        If   is a vector in  , then   is linearly independent.\n        By  , we can enlarge this set to a basis of  ,\n        so   has a basis.\n       \n        Now, suppose  ,\n        and let   be a basis for  .\n        By definition, we have  ,\n        and by  , since   is linearly independent,\n        we must have  .\n       \n        Let us now consider an independent set  .\n        Since   is independent and   spans  , we must have  .\n        If  , there must be some element of   that is not in the span of  :\n        if every element of   is in  , then  \n        by  .\n        And since   is a basis, it spans  , so every element of   is in the span of  ,\n        and we similarly have that  , so  .\n       \n        Since we can find an element of   that is not in the span of  ,\n        we can add that element to  , and the resulting set is still independent.\n        If the new set spans  , we're done. If not, we can repeat the process, adding another vector from  .\n        Since the set   is finite, this process must eventually end.\n       "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "sec-dimension.html#exercise-28",
  "type": "Exercise",
  "number": "1.7.14",
  "title": "",
  "body": "\n        Find a basis of   that contains the vectors\n         .\n       \n        By the previous theorem, we can form a basis by adding vectors from the standard basis\n         .\n        It's easy to check that   is not in the span of  .\n        To get a basis, we need one more vector.\n        Observe that all three of our vectors so far have a zero in the  -entry.\n        Thus,   cannot be in the span of the first three vectors,\n        and adding it gives us our basis.\n       "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "sec-dimension.html#exercise-29",
  "type": "Exercise",
  "number": "1.7.15",
  "title": "",
  "body": "\n        Extend the set   to a basis of  .\n       \n        Again, we only need to add one vector from the standard basis\n         , and it's not too hard to check that any of them will do.\n       "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "sec-dimension.html#exercise-30",
  "type": "Exercise",
  "number": "1.7.16",
  "title": "",
  "body": "\n        Give two examples of infinite-dimensional vector spaces.\n        Support your answer.\n       "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "sec-dimension.html#exercise-31",
  "type": "Exercise",
  "number": "1.7.17",
  "title": "",
  "body": "\n        Determine whether the following statements are true or false.\n       \n          A set of 2 vectors can span  .\n         \n         \n          We know that the standard basis for   contains three vectors,\n          and as a basis, it is linearly independent.\n          According to  , a spanning set cannot be larger than an independent set.\n         \n       \n          It is possible for a set of 2 vectors to be linearly independent in  .\n         \n         \n          There are many such examples, including  .\n         \n       \n          A set of 4 vectors can span  .\n         \n         \n          Add any vector you want to a basis for  , and the resulting set will span.\n         \n       \n          It is possible for a set of 4 vectors to be linearly independent in  .\n         \n         \n          We know that 3 vectors can span  , and an independent set cannot be larger than a spanning set.\n         \n       "
},
{
  "id": "thm-subspace-dim",
  "level": "2",
  "url": "sec-dimension.html#thm-subspace-dim",
  "type": "Theorem",
  "number": "1.7.18",
  "title": "",
  "body": "\n        Let   and   be subspaces of a finite-dimensional vector space  .\n         \n             \n              If  , then  .\n             \n           \n             \n              If   and  , then  .\n             \n           \n       \n         \n             \n              Suppose  , and let  \n              be a basis for  . Since   is a basis, it's independent.\n              And since   and  ,  .\n              Thus,   is an independent subset of  ,\n              and since any basis of   spans  ,\n              we know that  ,\n              by  Theorem .\n             \n           \n             \n              Suppose   and  .\n              Let   be a basis for  .\n              As above,   is an independent subset of  .\n              If  , then there is some   with  .\n              But  , so that would mean that  \n              is a linearly independent set containing   vectors.\n              This is impossible, since  ,\n              so no independent set can contain more than   vectors.\n             \n           \n       "
},
{
  "id": "thm-half-the-work",
  "level": "2",
  "url": "sec-dimension.html#thm-half-the-work",
  "type": "Theorem",
  "number": "1.7.19",
  "title": "",
  "body": "\n        Let   be an  -dimensional vector space.\n        If the set   contains   vectors,\n        then   is independent if and only if  .\n       Strategy \n        This result is a combination of three observations:\n         \n             \n              The dimension of   is the size of any basis\n             \n           \n             \n              Any independent set can be enlarged to a basis,\n              and cannot have more vectors than a basis.\n             \n           \n             \n              Any spanning set contains a basis,\n              and cannot have fewer vectors than a basis.\n             \n           \n       \n        If   is independent, then it can be extended to a basis   with  .\n        But   and   both contain   vectors (since  ),\n        so we must have  .\n       \n        If   spans  , then   must contain a basis  ,\n        and as above, since   and   contain the same number of vectors,\n        they must be equal.\n       "
},
{
  "id": "sec-subspace-combine",
  "level": "1",
  "url": "sec-subspace-combine.html",
  "type": "Section",
  "number": "1.8",
  "title": "New subspaces from old",
  "body": "New subspaces from old \n    Let   be a finite-dimensional vector space, and let   be subspaces of  .\n    In what ways can we combine   and   to obtain new subspaces?\n   \n    At first, we might try set operations: union, intersection, and difference.\n    The set difference we can rule out right away: since   and   must both contain the zero vector,\n      cannot.\n   \n    What about the union,  ? Before trying to understand this in general,\n    let's try a concrete example: take  , and let   (the   axis, essentially),\n    and   (the   axis). Is their union a subspace?\n   \n        The union of the   axis  and   axis  in   is a subspace of  .\n       \n       \n        Any subspace has to be closed under addition.\n        If we add the vector   (which lies along the   axis)\n        to the vector   (which lies along the   axis),\n        we get the vector  , which does not lie along either axis.\n       \n     \n    With a motivating example under our belts, we can try to tackle the general result.\n    (Note that this result remains true even if   is infinite-dimensional!)\n   \n        Let   and   be subspaces of a vector space  .\n        Then   is a subspace of   if and only if   or  .\n       Strategy \n        We have an  if and only  if statement, which means we have to prove two directions:\n         \n             \n              If   or  , then   is a subspace.\n             \n           \n             \n              If   is a subspace, then   or  .\n             \n           \n       \n        The first direction is the easy one: if  , what can you say about  ?\n       \n        For the other direction, it's not clear how to get started with our hypothesis.\n        When a direct proof seems difficult, remember that we can also try proving the contrapositive:\n        If   and  , then   is not a subspace.\n       \n        Now we have more to work with: negation turns the  or  into an  and ,\n        and proving that something is not a subspace is easier: we just have to show that one part of the subspace test fails.\n        As our motivating example suggests, we should expect closure under addition to be the condition that fails.\n       \n        To get started, we need to answer one more question:\n        if   is not a subset of  , what does that tell us?\n       \n        An important point to keep in mind with this proof:\n        closure under addition means that if a subspace contains   and  , then it must contain  .\n        But if a subspace contains  , that does  not  mean it has to contain   and  .\n        As an example, consider the subspace   of  .\n        It contains the vector  , but it does not contain   or  .\n       \n        Suppose   or  . In the first case,\n         , and in the second case,  .\n        Since both   and   are subspaces,   is a subspace.\n       \n        Now, suppose that  , and  .\n        Since  , there must be some element   such that  .\n        Since  , there must be some element   such that  .\n        We know that  , so we consider the sum,  .\n       \n        If  , then  , or  .\n        Suppose  . Since   and   is a subspace,  .\n        Since   and   is a subspace,\n         .\n        But we assumed that  , so it must be that  .\n       \n        By a similar argument, if  , we can conclude that  ,\n        contradicting the assumption that  .\n        So   does not belong to   or  , so it cannot belong to  .\n        Since   is not closed under addition, it is not a subspace.\n       \n    This leaves us with intersection. Will it fail as well?\n    Fortunately, the answer is no: this operation actually gives us a subspace.\n   \n        If   and   are subspaces of a vector space  ,\n        then   is a subspace.\n       Strategy \n        The key here is that the intersection contains only those vectors that belong to  both  subspaces.\n        So any operation (addition, scalar multiplication) that we do in  \n        can be viewed as taking place in either   or  ,\n        and we know that these are subspaces. After this observation, the rest is the  .\n       \n        Let   and   be subspaces of  .\n        Since   and  , we have  .\n        Now, suppose  .\n        Then  , and  .\n        Since   and   is a subspace,  .\n        Similarly,  , so  .\n        If   is any scalar, then   is in both   and  ,\n        since both sets are subspaces, and therefore,  .\n        By the  ,   is a subspace.\n       \n    The intersection of two subspaces gives us a subspace,\n    but it is a smaller subspace, contained in the two subspaces we're intersecting.\n    Given subspaces   and  , is there a way to construct a  larger  subspace that contains them?\n    We know that   doesn't work, because it isn't closed under addition.\n    But what if we started with  , and threw in all the missing sums? This leads to a definition:\n   \n        Let   and   be subspaces of a vector space  .\n        We define the sum   of these subspaces by\n         .\n       \n    It turns out that this works! Not only is   a subspace of  ,\n    it is the  smallest  subspace containing both   and  .\n   \n        Let   and   be subspaces of a vector space  .\n        Then the sum   is a subspace of  ,\n        and if   is any subspace of   that contains   and  ,\n        then  .\n       Strategy \n        The key to working with   is to understand how to work with the definition.\n        If we say that  , then we are saying there exist vectors\n          and   such that  .\n       \n        We prove that   is a subspace using this observation and the subspace test.\n       \n        To prove the second part, we assume that   and  .\n        We then choose an element  , and using the idea above, show that  .\n       \n        Let   be subspaces. Since  , with   and  ,\n        we see that  .\n       \n        Suppose that  . Then there exist  ,\n        and  , with  , and  .\n        Then\n         ,\n        and we know that  , and  ,\n        since   and   are subspaces.\n        Since   can be written as the sum of an element of  \n        and an element of  , we have  .\n       \n        If   is any scalar, then\n         ,\n        since   and  .\n       \n        Since   contains  , and is closed under both addition and scalar multiplication,\n        it is a subspace.\n       \n        Now, suppose   is a subspace of   such that   and  .\n        Let  . Then   for some   and  .\n        Since   and  ,  .\n        Similarly,  . Since   is a subspace, it is closed under addition,\n        so  . Therefore,  .\n       \n    By choosing bases for two subspaces   and   of a finite-dimensional vector space,\n    we can obtain the following cool dimension-counting result:\n   \n        Let   and   be subspaces of a finite-dimensional vector space  .\n        Then   is finite-dimensional, and\n         .\n       Strategy \n        This is a proof that would be difficult (if not impossible) without using a basis.\n        Your first thought might be to choose bases for the subspaces   and  ,\n        but this runs into trouble: some of the basis vectors for   might be in  ,\n        and vice-versa.\n       \n        Of course, those vectors will be in  , but it gets hard to keep track:\n        without more information (and we have none, since we want to be completely general),\n        how do we tell which basis vectors are in the intersection, and how many?\n       \n        Instead, we  start  with a basis for  .\n        This is useful, because   is a subspace of both   and  .\n        So any basis for   can be extended to a basis of  ,\n        and it can also be extended to a basis of  .\n       \n        The rest of the proof relies on making sure that neither of these extensions have any vectors in common,\n        and that putting everything together gives a basis for  .\n        (This amounts to going back to the definition of a basis:\n        we need to show that it's linearly independent, and that it spans  .)\n       \n        Let   be a basis for  .\n        Extend   to a basis   of  ,\n        and to a basis   of  .\n        Note that we have  ,  , and  .\n       \n        Now, consider the set  .\n        We claim that   is a basis for  .\n        We know that   is linearly independent, since it's a basis for  ,\n        and that  .\n        It remains to show that none of the   are in the span of  ;\n        if so, then   is independent by  .\n       \n        Since  , it suffices to show that none of the   belong to  .\n        But we know that  , so if  , then  .\n        But if  , then  ,\n        which would imply that   is linearly dependent,\n        and since   is a basis, this is impossible.\n       \n        Next, we need to show that  .\n        Let  ; then   for some   and  .\n        Since  , there exist scalars   such that\n         ,\n        and since  , there exist scalars   such that\n         .\n        Thus,\n         ,\n        which shows that  .\n       \n        Finally, we check that this gives the dimension as claimed. We have\n         ,\n        since there are   vectors in  ,   vectors in  ,\n          vectors in  , and   vectors in  .\n       \n    Notice how a vector   can be written as a sum of a vector in   and a vector  ,\n    but  not uniquely , in general: in the above proof,\n    we can change the values of the coefficients   and  ,\n    as long as the sum   remains unchanged.\n    Note that these are the coefficients of the basis vectors for  ,\n    so we can avoid this ambiguity if   and   have no nonzero vectors in common.\n   \n        Let  , and let  \n        be two subspaces.\n       \n          Determine the intersection  .\n         \n          If  , then  , and if  , then  .\n          Therefore,   if and only if  , so\n           .\n         \n          Write the vector   in the form  ,\n          where   and  , in at least two different ways.\n         \n          There are in fact infinitely many ways to do this. Three possible ways include:\n           .\n         direct sum \n    If the sum is direct, then we have simply  .\n    The other reason why direct sums are preferable, is that any  \n    can be written  uniquely  as  \n    where   and  , since we no longer have the ambiguity resulting from the basis vectors in  .\n   \n        For any subspaces   of a vector space  ,\n          if and only if for every  \n        there exist unique   such that  .\n       \n        Suppose that  , and suppose that we have\n         ,\n        for  .\n        Then  ,\n        which implies that\n         .\n        Now,  ,\n        since   is a subspace, and similarly,\n         .\n        But we also have  , which implies that  .\n        (Since   is in  , and this is the same vector as  .)\n        Therefore,  , which implies that  ,\n        so  .\n        But we must also then have  , so  .\n       \n        Conversely, suppose that every   can be written uniquely as  ,\n        with   and  . Suppose that  .\n        Then   and  , so we also have  ,\n        since   is a subspace.\n        But then  , where   and  .\n        On the other hand,  ,\n        and   belongs to both   and  . It follows that  .\n        Since   was arbitrary,  .\n       \n    We end with one last application of the theory we've developed on the existence of a basis for a finite-dimensional vector space.\n    As we continue on to later topics, we'll find that it is often useful to be able to decompose a vector space into a direct sum of subspaces.\n    Using bases, we can show that this is always possible.\n   \n        Let   be a finite-dimensional vector space, and let   be any subspace of  .\n        Then there exists a subspace   such that  .\n       \n        Let   be a basis of  .\n        Since  , the set  \n        is a linearly independent subset of  .\n        Since any linearly independent set can be extended to a basis of  ,\n        there exist vectors   such that\n         \n        is a basis of  .\n       \n        Now, let  .\n        Then   is a subspace, and  \n        is a basis for  . (It spans, and must be independent since it's a subset of an independent set.)\n       \n        Clearly,  , since   contains the basis for   we've constructed.\n        To show the sum is direct, it suffices to show that  .\n        To that end, suppose that  .\n        Since  , we have\n         \n        for scalars  . Since  , we can write\n         \n        for scalars  . But then\n         \n        Since   is a basis for  ,\n        it's independent, and therefore, all of the   must be zero, and therefore,  .\n\n       \n      If a basis has been chosen for  ,\n      one way to construct a complement to a subspace   is to determine which elements of the basis for   are not in  .\n      These vectors will form a basis for a complement of  .\n     complement orthogonal complement complement \n        Let   be the subspace of   consisting of all polynomials   with  .\n       \n          Determine a basis for  .\n         \n          Use the factor theorem.\n         \n          Since  , we know that  , for some  .\n          Thus,  , so a basis is given by\n           .\n         \n          (Another option is  .)\n         \n          Find a complement of  .\n         \n          What is the dimension of  ? (So what must be the dimension of its complement?)\n          What condition ensures that a polynomial does not belong to  ?\n         \n          Since   and  ,\n          we know that any complement of   must be one-dimensional.\n         \n          Therefore, a basis for a complement   of   is given by any polynomial in   that is not in  .\n          In particular, we can choose any polynomial   with  ; for example,  .\n          Therefore,   is a complement of  .\n         \n        Let   be the subspace of   define by\n         .\n       \n          Determine a basis for  .\n         \n          Try plugging in the given conditions, and then decomposing the vector into pieces with one variable each.\n         \n          If  , then\n           .\n         \n          This shows that  .\n          These vectors are also linearly independent,\n          since each one has its first leading (nonzero) entry in a different position.\n          (Think about what this implies for the  RREF  of the resulting matrix.)\n         \n          Find a complement of  .\n         \n          One way to solve this is to ask yourself,\n          what vectors are  not  in the span of the basis you found above?\n          You can do this by solving an appropriate system of equations.\n         \n          Since  , any complement of   must have dimension 2.\n          We therefore need to find two independent vectors that do not belong to  .\n         \n          Recall that   is defined by two conditions:\n            and  .\n          Therefore, a vector is  not  in   if  ,\n           or   .\n          This suggests that we define two vectors, each of which violates one of these conditions.\n         \n          For the first, let us take  .\n          This is not in   because  .\n          For the second, let us take  .\n          This is not in   because  .\n          We know that   is linearly independent,\n          because each vector has nonzero entries in different positions.\n          Therefore,   is a complement of  ,\n          since it is spanned by vectors not in  , and it has the correct dimension.\n         \n        Suppose   and   are 4-dimensional subspaces of  .\n        What are all possible dimensions of  ?\n       \n       \n         \n             \n           \n         \n           \n            What would   say about   in this case?\n            Why is that not possible?\n           \n         \n       \n       \n         \n             \n           \n         \n           \n            Good job! If   (the largest it possibly can),\n            then  .\n           \n         \n       \n       \n         \n             \n           \n         \n           \n            Yes! This will be the case if  .\n           \n         \n       \n       \n         \n             \n           \n         \n           \n            Correct! If  , then  , all with dimension  .\n           \n         \n       \n       \n         \n             \n           \n         \n           \n            Since   contains both   and  , its dimension cannot be less than  .\n           \n         \n       \n     \n        Use  .\n       "
},
{
  "id": "ex-union-subspace",
  "level": "2",
  "url": "sec-subspace-combine.html#ex-union-subspace",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": "\n        The union of the   axis  and   axis  in   is a subspace of  .\n       \n       \n        Any subspace has to be closed under addition.\n        If we add the vector   (which lies along the   axis)\n        to the vector   (which lies along the   axis),\n        we get the vector  , which does not lie along either axis.\n       \n     "
},
{
  "id": "thm-subspace-union",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-subspace-union",
  "type": "Theorem",
  "number": "1.8.2",
  "title": "",
  "body": "\n        Let   and   be subspaces of a vector space  .\n        Then   is a subspace of   if and only if   or  .\n       Strategy \n        We have an  if and only  if statement, which means we have to prove two directions:\n         \n             \n              If   or  , then   is a subspace.\n             \n           \n             \n              If   is a subspace, then   or  .\n             \n           \n       \n        The first direction is the easy one: if  , what can you say about  ?\n       \n        For the other direction, it's not clear how to get started with our hypothesis.\n        When a direct proof seems difficult, remember that we can also try proving the contrapositive:\n        If   and  , then   is not a subspace.\n       \n        Now we have more to work with: negation turns the  or  into an  and ,\n        and proving that something is not a subspace is easier: we just have to show that one part of the subspace test fails.\n        As our motivating example suggests, we should expect closure under addition to be the condition that fails.\n       \n        To get started, we need to answer one more question:\n        if   is not a subset of  , what does that tell us?\n       \n        An important point to keep in mind with this proof:\n        closure under addition means that if a subspace contains   and  , then it must contain  .\n        But if a subspace contains  , that does  not  mean it has to contain   and  .\n        As an example, consider the subspace   of  .\n        It contains the vector  , but it does not contain   or  .\n       \n        Suppose   or  . In the first case,\n         , and in the second case,  .\n        Since both   and   are subspaces,   is a subspace.\n       \n        Now, suppose that  , and  .\n        Since  , there must be some element   such that  .\n        Since  , there must be some element   such that  .\n        We know that  , so we consider the sum,  .\n       \n        If  , then  , or  .\n        Suppose  . Since   and   is a subspace,  .\n        Since   and   is a subspace,\n         .\n        But we assumed that  , so it must be that  .\n       \n        By a similar argument, if  , we can conclude that  ,\n        contradicting the assumption that  .\n        So   does not belong to   or  , so it cannot belong to  .\n        Since   is not closed under addition, it is not a subspace.\n       "
},
{
  "id": "thm-subspace-intersection",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-subspace-intersection",
  "type": "Theorem",
  "number": "1.8.3",
  "title": "",
  "body": "\n        If   and   are subspaces of a vector space  ,\n        then   is a subspace.\n       Strategy \n        The key here is that the intersection contains only those vectors that belong to  both  subspaces.\n        So any operation (addition, scalar multiplication) that we do in  \n        can be viewed as taking place in either   or  ,\n        and we know that these are subspaces. After this observation, the rest is the  .\n       \n        Let   and   be subspaces of  .\n        Since   and  , we have  .\n        Now, suppose  .\n        Then  , and  .\n        Since   and   is a subspace,  .\n        Similarly,  , so  .\n        If   is any scalar, then   is in both   and  ,\n        since both sets are subspaces, and therefore,  .\n        By the  ,   is a subspace.\n       "
},
{
  "id": "def-subspace-sum",
  "level": "2",
  "url": "sec-subspace-combine.html#def-subspace-sum",
  "type": "Definition",
  "number": "1.8.4",
  "title": "",
  "body": "\n        Let   and   be subspaces of a vector space  .\n        We define the sum   of these subspaces by\n         .\n       "
},
{
  "id": "thm-subspace-sum",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-subspace-sum",
  "type": "Theorem",
  "number": "1.8.5",
  "title": "",
  "body": "\n        Let   and   be subspaces of a vector space  .\n        Then the sum   is a subspace of  ,\n        and if   is any subspace of   that contains   and  ,\n        then  .\n       Strategy \n        The key to working with   is to understand how to work with the definition.\n        If we say that  , then we are saying there exist vectors\n          and   such that  .\n       \n        We prove that   is a subspace using this observation and the subspace test.\n       \n        To prove the second part, we assume that   and  .\n        We then choose an element  , and using the idea above, show that  .\n       \n        Let   be subspaces. Since  , with   and  ,\n        we see that  .\n       \n        Suppose that  . Then there exist  ,\n        and  , with  , and  .\n        Then\n         ,\n        and we know that  , and  ,\n        since   and   are subspaces.\n        Since   can be written as the sum of an element of  \n        and an element of  , we have  .\n       \n        If   is any scalar, then\n         ,\n        since   and  .\n       \n        Since   contains  , and is closed under both addition and scalar multiplication,\n        it is a subspace.\n       \n        Now, suppose   is a subspace of   such that   and  .\n        Let  . Then   for some   and  .\n        Since   and  ,  .\n        Similarly,  . Since   is a subspace, it is closed under addition,\n        so  . Therefore,  .\n       "
},
{
  "id": "thm-sum-dimension",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-sum-dimension",
  "type": "Theorem",
  "number": "1.8.6",
  "title": "",
  "body": "\n        Let   and   be subspaces of a finite-dimensional vector space  .\n        Then   is finite-dimensional, and\n         .\n       Strategy \n        This is a proof that would be difficult (if not impossible) without using a basis.\n        Your first thought might be to choose bases for the subspaces   and  ,\n        but this runs into trouble: some of the basis vectors for   might be in  ,\n        and vice-versa.\n       \n        Of course, those vectors will be in  , but it gets hard to keep track:\n        without more information (and we have none, since we want to be completely general),\n        how do we tell which basis vectors are in the intersection, and how many?\n       \n        Instead, we  start  with a basis for  .\n        This is useful, because   is a subspace of both   and  .\n        So any basis for   can be extended to a basis of  ,\n        and it can also be extended to a basis of  .\n       \n        The rest of the proof relies on making sure that neither of these extensions have any vectors in common,\n        and that putting everything together gives a basis for  .\n        (This amounts to going back to the definition of a basis:\n        we need to show that it's linearly independent, and that it spans  .)\n       \n        Let   be a basis for  .\n        Extend   to a basis   of  ,\n        and to a basis   of  .\n        Note that we have  ,  , and  .\n       \n        Now, consider the set  .\n        We claim that   is a basis for  .\n        We know that   is linearly independent, since it's a basis for  ,\n        and that  .\n        It remains to show that none of the   are in the span of  ;\n        if so, then   is independent by  .\n       \n        Since  , it suffices to show that none of the   belong to  .\n        But we know that  , so if  , then  .\n        But if  , then  ,\n        which would imply that   is linearly dependent,\n        and since   is a basis, this is impossible.\n       \n        Next, we need to show that  .\n        Let  ; then   for some   and  .\n        Since  , there exist scalars   such that\n         ,\n        and since  , there exist scalars   such that\n         .\n        Thus,\n         ,\n        which shows that  .\n       \n        Finally, we check that this gives the dimension as claimed. We have\n         ,\n        since there are   vectors in  ,   vectors in  ,\n          vectors in  , and   vectors in  .\n       "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "sec-subspace-combine.html#exercise-33",
  "type": "Exercise",
  "number": "1.8.7",
  "title": "",
  "body": "\n        Let  , and let  \n        be two subspaces.\n       \n          Determine the intersection  .\n         \n          If  , then  , and if  , then  .\n          Therefore,   if and only if  , so\n           .\n         \n          Write the vector   in the form  ,\n          where   and  , in at least two different ways.\n         \n          There are in fact infinitely many ways to do this. Three possible ways include:\n           .\n         "
},
{
  "id": "def-direct-sum",
  "level": "2",
  "url": "sec-subspace-combine.html#def-direct-sum",
  "type": "Definition",
  "number": "1.8.8",
  "title": "",
  "body": "direct sum "
},
{
  "id": "thm-unique-sum",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-unique-sum",
  "type": "Theorem",
  "number": "1.8.9",
  "title": "",
  "body": "\n        For any subspaces   of a vector space  ,\n          if and only if for every  \n        there exist unique   such that  .\n       \n        Suppose that  , and suppose that we have\n         ,\n        for  .\n        Then  ,\n        which implies that\n         .\n        Now,  ,\n        since   is a subspace, and similarly,\n         .\n        But we also have  , which implies that  .\n        (Since   is in  , and this is the same vector as  .)\n        Therefore,  , which implies that  ,\n        so  .\n        But we must also then have  , so  .\n       \n        Conversely, suppose that every   can be written uniquely as  ,\n        with   and  . Suppose that  .\n        Then   and  , so we also have  ,\n        since   is a subspace.\n        But then  , where   and  .\n        On the other hand,  ,\n        and   belongs to both   and  . It follows that  .\n        Since   was arbitrary,  .\n       "
},
{
  "id": "thm-construct-complement",
  "level": "2",
  "url": "sec-subspace-combine.html#thm-construct-complement",
  "type": "Theorem",
  "number": "1.8.10",
  "title": "",
  "body": "\n        Let   be a finite-dimensional vector space, and let   be any subspace of  .\n        Then there exists a subspace   such that  .\n       \n        Let   be a basis of  .\n        Since  , the set  \n        is a linearly independent subset of  .\n        Since any linearly independent set can be extended to a basis of  ,\n        there exist vectors   such that\n         \n        is a basis of  .\n       \n        Now, let  .\n        Then   is a subspace, and  \n        is a basis for  . (It spans, and must be independent since it's a subset of an independent set.)\n       \n        Clearly,  , since   contains the basis for   we've constructed.\n        To show the sum is direct, it suffices to show that  .\n        To that end, suppose that  .\n        Since  , we have\n         \n        for scalars  . Since  , we can write\n         \n        for scalars  . But then\n         \n        Since   is a basis for  ,\n        it's independent, and therefore, all of the   must be zero, and therefore,  .\n\n       "
},
{
  "id": "p-504",
  "level": "2",
  "url": "sec-subspace-combine.html#p-504",
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
  "body": "complement "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "sec-subspace-combine.html#exercise-34",
  "type": "Exercise",
  "number": "1.8.12",
  "title": "",
  "body": "\n        Let   be the subspace of   consisting of all polynomials   with  .\n       \n          Determine a basis for  .\n         \n          Use the factor theorem.\n         \n          Since  , we know that  , for some  .\n          Thus,  , so a basis is given by\n           .\n         \n          (Another option is  .)\n         \n          Find a complement of  .\n         \n          What is the dimension of  ? (So what must be the dimension of its complement?)\n          What condition ensures that a polynomial does not belong to  ?\n         \n          Since   and  ,\n          we know that any complement of   must be one-dimensional.\n         \n          Therefore, a basis for a complement   of   is given by any polynomial in   that is not in  .\n          In particular, we can choose any polynomial   with  ; for example,  .\n          Therefore,   is a complement of  .\n         "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "sec-subspace-combine.html#exercise-35",
  "type": "Exercise",
  "number": "1.8.13",
  "title": "",
  "body": "\n        Let   be the subspace of   define by\n         .\n       \n          Determine a basis for  .\n         \n          Try plugging in the given conditions, and then decomposing the vector into pieces with one variable each.\n         \n          If  , then\n           .\n         \n          This shows that  .\n          These vectors are also linearly independent,\n          since each one has its first leading (nonzero) entry in a different position.\n          (Think about what this implies for the  RREF  of the resulting matrix.)\n         \n          Find a complement of  .\n         \n          One way to solve this is to ask yourself,\n          what vectors are  not  in the span of the basis you found above?\n          You can do this by solving an appropriate system of equations.\n         \n          Since  , any complement of   must have dimension 2.\n          We therefore need to find two independent vectors that do not belong to  .\n         \n          Recall that   is defined by two conditions:\n            and  .\n          Therefore, a vector is  not  in   if  ,\n           or   .\n          This suggests that we define two vectors, each of which violates one of these conditions.\n         \n          For the first, let us take  .\n          This is not in   because  .\n          For the second, let us take  .\n          This is not in   because  .\n          We know that   is linearly independent,\n          because each vector has nonzero entries in different positions.\n          Therefore,   is a complement of  ,\n          since it is spanned by vectors not in  , and it has the correct dimension.\n         "
},
{
  "id": "ex-sum-dimension",
  "level": "2",
  "url": "sec-subspace-combine.html#ex-sum-dimension",
  "type": "Exercise",
  "number": "1.8.14",
  "title": "",
  "body": "\n        Suppose   and   are 4-dimensional subspaces of  .\n        What are all possible dimensions of  ?\n       \n       \n         \n             \n           \n         \n           \n            What would   say about   in this case?\n            Why is that not possible?\n           \n         \n       \n       \n         \n             \n           \n         \n           \n            Good job! If   (the largest it possibly can),\n            then  .\n           \n         \n       \n       \n         \n             \n           \n         \n           \n            Yes! This will be the case if  .\n           \n         \n       \n       \n         \n             \n           \n         \n           \n            Correct! If  , then  , all with dimension  .\n           \n         \n       \n       \n         \n             \n           \n         \n           \n            Since   contains both   and  , its dimension cannot be less than  .\n           \n         \n       \n     \n        Use  .\n       "
},
{
  "id": "sec-lin-tran-intro",
  "level": "1",
  "url": "sec-lin-tran-intro.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition and examples",
  "body": "Definition and examples \n    Let   and   be vector spaces. At their most basic,\n    all vector spaces are sets. Given any two sets, we can consider functions from one to the other.\n    The functions of interest in linear algebra are those that respect the vector space structure of the sets.\n   linear transformation linear operator \n      Note on notation: it is common usage to drop the usual parentheses of function notation\n      when working with linear transformations, as long as this does not cause confusion.\n      That is, one might write   instead of  ,\n      but one should never write   in place of  ,\n      for the same reason that one should never write   in place of  .\n      Mathematicians often think of linear transformations in terms of matrix multiplication,\n      which probably explains this notation to some extent.\n     \n    The properties of a linear transformation tell us that a linear map  \n     preserves  the operations of addition and scalar multiplication.\n    (When the domain and codomain are different vector spaces, we might say that    intertwines \n    the operations of the two vector spaces.)\n    In particular, any linear transformation   must preserve the zero vector,\n    and respect linear combinations.\n   \n        Let   be a linear transformation. Then\n         \n             \n               , and\n             \n           \n             \n              For any scalars   and vectors  ,\n               .\n             \n           \n       Strategy \n        For the first part, remember that old trick we've used a couple of times before:\n         . What happens if you apply   to both sides of this equation?\n       \n        For the second part, note that the addition property of a linear transformation looks an awful lot like a distributive property,\n        and we can distribute over a sum of three or more vectors using the associative property.\n        You'll want to deal with the addition first, and then the scalar multiplication.\n       \n         \n             \n              Since  , we have\n               .\n              Adding   to both sides of the above gives us  .\n             \n           \n             \n              The addition property of a linear transformation can be extended to sums of three or more vectors using associativity.\n              Therefore, we have\n               ,\n              where the second line follows from the scalar multiplication property.\n             \n           \n       \n        Technically, we skipped over some details in the above proof:\n        how exactly, is associativity being applied?\n        It turns out there's actually a proof by induction lurking in the background!\n       \n        By definition, we know that  .\n        For three vectors,\n         .\n       \n        For an abitrary number of vectors  ,\n        we can assume that distribution over addition works for   vectors,\n        and then use associativity to write\n         .\n        The right-hand side is technically a sum of two vectors,\n        so we can apply the definition of a linear transformation directly,\n        and then apply our induction hypothesis to  .\n       \n        Let   and let  .\n        For any   matrix  , the map   defined by\n         \n        is a linear transformation. (This follows immediately from properties of matrix multiplication.)\n       \n        Let   denote the standard basis of  .\n        (See  .)\n        Recall (or convince yourself, with a couple of examples)\n        that   is equal to the  th column of  .\n        Thus, if we know the value of a linear transformation   on each basis vector,\n        we can immediately determine the matrix   such that  :\n         .\n        This is true because   and   agree on the standard basis: for each  ,\n         .\n        Moreover, if two linear transformations agree on a basis, they must be equal.\n        Given any  , we can write   uniquely as a linear combination\n         \n        If   for each  , then by   we have\n         .\n       zero transformation identity transformation evaluation map \n        Which of the following are linear transformations?\n       \n       \n         \n            The function   given by  .\n           \n         \n           \n            Since  , this can't be a linear transformation.\n           \n         \n       \n       \n         \n            The function   given by  .\n           \n         \n           \n            This looks unusual, but it's linear!\n            You can check that  , and  .\n           \n         \n       \n       \n         \n            The function   given by  .\n           \n         \n           \n            Although this function preserves the zero vector,\n            it doesn't preserve addition or scalar multiplication.\n            For example,  ,\n            but  .\n           \n         \n       \n       \n         \n            The function   given by  .\n           \n         \n           \n            Multiplication by   might feel non-linear,\n            but remember that   is not a  variable  as far as the transformation is concerned!\n            It's more of a placeholder. Try checking the definition directly.\n           \n         \n       \n       \n         \n            The function   given by  .\n           \n         \n           \n            Remember that   in general!\n           \n         \n       \n       \n         \n            The function   given by  ,\n            where  , with the vector space structure defined in  .\n           \n         \n           \n            An exponential function that's linear? Seems impossible,\n            but remember that  addition    in   is really multiplication,\n            so  , and similarly,  .\n           \n         \n       \n     \n        Usually, you can expect a linear transformation to involve homogeneous linear expressions.\n        Things like products, powers, and added constants are usually clues that something is nonlinear.\n       \n    For finite-dimensional vector spaces, it is often convenient to work in terms of a basis.\n    The properties of a linear transformation tell us that we can completely define any linear transformation by giving its values on a basis.\n    In fact, it's enough to know the value of a transformation on a spanning set.\n    The argument given in   can be applied to any linear transformation, to obtain the following result.\n   \n        Let   and   be two linear transformations.\n        If   and  \n        for each  , then  .\n       \n     Caution:  If the above spanning set is not also independent,\n    then we can't just define the values   however we want.\n    For example, suppose we want to define  ,\n    and we set  .\n    If   and  ,\n    then we  must  have  .\n    Why? Because  , and if   is to be linear,\n    then we have to have  .\n   \n        If for some reason we already know that our transformation is linear,\n        we might still be concerned about the fact that if a spanning set is not independent,\n        there will be more than one way to express a vector as linear combination of vectors in that set.\n        If we define   by giving its values on a spanning set, will it be well-defined?\n        (That is, could we get two different values for   by expressing   in terms of the spanning set in two different ways?)\n        Suppose that we have scalars   such that\n         \n        We then have\n         .\n       \n        Of course, we can avoid all of this unpleasantness by using a  basis \n        to define a transformation. Given a basis  \n        for a vector space  , we can define a transformation  \n        by setting   for some choice of vectors  \n        and defining\n         .\n        Because each vector   can be written  uniquely  in terms of a basis,\n        we know that our transformation is well-defined.\n       \n    The next theorem seems like an obvious consequence of the above,\n    and indeed, one might wonder where the assumption of a basis is needed.\n    The distinction here is that the vectors  \n    are chosen in advance, and then we  define    by setting  ,\n    rather than simply defining each   as  .\n   \n        Let   be vector spaces. Let  \n        be a basis of  , and let   be any vectors in  .\n        (These vectors need not be distinct.)\n        Then there exists a unique linear transformation   such that\n          for each  ; indeed,\n        we can define   as follows:\n        given  , write  . Then\n         .\n       \n    With the basic theory out of the way, let's look at a few basic examples.\n   \n        Suppose   is a linear transformation.\n        If   and  ,\n        find  .\n       \n        Since we know the value of   on the standard basis,\n        we can use properties of linear transformations to immediately obtain the answer:\n         .\n       \n        Suppose   is a linear transformation.\n        Given that  \n        and  ,\n        find  .\n       \n        At first, this example looks the same as the one above,\n        and to some extent, it is. The difference is that this time,\n        we're given the values of   on a basis that is not the standard one.\n        This means we first have to do some work to determine how to write the given vector in terms of the given basis.\n       \n        Suppose we have  \n        for scalars  . This is equivalent to the matrix equation\n         \n        Solving (perhaps using the code cell below), we get  .\n       \n        Therefore,\n         .\n       \n        Suppose   is defined by\n         \n        Find  .\n       \n        We need to find scalars   such that\n         .\n        We could set up a system and solve, but this time it's easy enough to just work our way through.\n        We must have  , to get the correct coefficient for  . This gives\n         .\n        Now, we have to have  , so  .\n        Putting this in, we get\n         .\n        Simiplifying this leaves us with  . Finally, we find:\n         .\n       \n        Find a linear transformation   such that\n         .\n        Then, determine the value of  .\n       \n        Since   forms a basis of  \n        (the vectors are not parallel and there are two of them),\n        it suffices to determine how to write a general vector in terms of this basis.\n        Suppose\n         \n        for a general element  .\n        This is equivalent to the matrix equation  ,\n        which we can solve as  :\n       \n        This gives us the result\n         \n        Thus,\n         .\n       \n        We conclude that\n         .\n       \n        Let   be a linear transformation.\n        Rearrange the blocks below to create a proof of the following statement:\n       \n        For any vectors  ,\n        if   is linearly independent in  ,\n        then   is linearly independent in  .\n       \n       \n         \n          Suppose that   is linearly independent.\n         \n       \n       \n         \n          We want to show that  \n          is linearly independent, so suppose that we have\n           \n          for some scalars  .\n         \n       \n       \n         \n          We apply   to both sides of the equation above, giving us:\n           .\n         \n       \n       \n         \n          Now we make use of both parts of  Theorem  to get\n           .\n         \n       \n       \n         \n          By hypothesis, the vectors   are linearly independent,\n          so we must have  .\n         \n       \n       \n         \n          Since the only solution to  \n          is  , the set  \n          is linearly independent.\n         \n       \n     \n        This is mostly a matter of using  Theorem ,\n        but it's important to get the logic correct.\n        We have a conditional statement of the form  ,\n        where both   ( the set   is independent )\n        and   ( the set   is independent )\n        are themselves conditional statements.\n       \n        The overall structure therefore looks like  .\n        A direct proof should be structured as follows:\n         \n             \n              Assume the main hypothesis:  .\n             \n           \n             \n              Assume the  sub -hypothesis  .\n             \n           \n             \n              Figure out how to show that  .\n              (This is the  apply   to both sides  step.)\n             \n           \n             \n              If we know  , and we've assumed  , we know  .\n             \n           \n             \n              Realize that  .\n             \n           \n       "
},
{
  "id": "def-lin-trans",
  "level": "2",
  "url": "sec-lin-tran-intro.html#def-lin-trans",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "linear transformation linear operator "
},
{
  "id": "thm-lt-props",
  "level": "2",
  "url": "sec-lin-tran-intro.html#thm-lt-props",
  "type": "Theorem",
  "number": "2.1.2",
  "title": "",
  "body": "\n        Let   be a linear transformation. Then\n         \n             \n               , and\n             \n           \n             \n              For any scalars   and vectors  ,\n               .\n             \n           \n       Strategy \n        For the first part, remember that old trick we've used a couple of times before:\n         . What happens if you apply   to both sides of this equation?\n       \n        For the second part, note that the addition property of a linear transformation looks an awful lot like a distributive property,\n        and we can distribute over a sum of three or more vectors using the associative property.\n        You'll want to deal with the addition first, and then the scalar multiplication.\n       \n         \n             \n              Since  , we have\n               .\n              Adding   to both sides of the above gives us  .\n             \n           \n             \n              The addition property of a linear transformation can be extended to sums of three or more vectors using associativity.\n              Therefore, we have\n               ,\n              where the second line follows from the scalar multiplication property.\n             \n           \n       "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-lin-tran-intro.html#remark-4",
  "type": "Remark",
  "number": "2.1.3",
  "title": "",
  "body": "\n        Technically, we skipped over some details in the above proof:\n        how exactly, is associativity being applied?\n        It turns out there's actually a proof by induction lurking in the background!\n       \n        By definition, we know that  .\n        For three vectors,\n         .\n       \n        For an abitrary number of vectors  ,\n        we can assume that distribution over addition works for   vectors,\n        and then use associativity to write\n         .\n        The right-hand side is technically a sum of two vectors,\n        so we can apply the definition of a linear transformation directly,\n        and then apply our induction hypothesis to  .\n       "
},
{
  "id": "ex-matrix-trans",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-matrix-trans",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "\n        Let   and let  .\n        For any   matrix  , the map   defined by\n         \n        is a linear transformation. (This follows immediately from properties of matrix multiplication.)\n       \n        Let   denote the standard basis of  .\n        (See  .)\n        Recall (or convince yourself, with a couple of examples)\n        that   is equal to the  th column of  .\n        Thus, if we know the value of a linear transformation   on each basis vector,\n        we can immediately determine the matrix   such that  :\n         .\n        This is true because   and   agree on the standard basis: for each  ,\n         .\n        Moreover, if two linear transformations agree on a basis, they must be equal.\n        Given any  , we can write   uniquely as a linear combination\n         \n        If   for each  , then by   we have\n         .\n       "
},
{
  "id": "p-558",
  "level": "2",
  "url": "sec-lin-tran-intro.html#p-558",
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
  "body": "\n        Which of the following are linear transformations?\n       \n       \n         \n            The function   given by  .\n           \n         \n           \n            Since  , this can't be a linear transformation.\n           \n         \n       \n       \n         \n            The function   given by  .\n           \n         \n           \n            This looks unusual, but it's linear!\n            You can check that  , and  .\n           \n         \n       \n       \n         \n            The function   given by  .\n           \n         \n           \n            Although this function preserves the zero vector,\n            it doesn't preserve addition or scalar multiplication.\n            For example,  ,\n            but  .\n           \n         \n       \n       \n         \n            The function   given by  .\n           \n         \n           \n            Multiplication by   might feel non-linear,\n            but remember that   is not a  variable  as far as the transformation is concerned!\n            It's more of a placeholder. Try checking the definition directly.\n           \n         \n       \n       \n         \n            The function   given by  .\n           \n         \n           \n            Remember that   in general!\n           \n         \n       \n       \n         \n            The function   given by  ,\n            where  , with the vector space structure defined in  .\n           \n         \n           \n            An exponential function that's linear? Seems impossible,\n            but remember that  addition    in   is really multiplication,\n            so  , and similarly,  .\n           \n         \n       \n     \n        Usually, you can expect a linear transformation to involve homogeneous linear expressions.\n        Things like products, powers, and added constants are usually clues that something is nonlinear.\n       "
},
{
  "id": "thm-agree-span",
  "level": "2",
  "url": "sec-lin-tran-intro.html#thm-agree-span",
  "type": "Theorem",
  "number": "2.1.6",
  "title": "",
  "body": "\n        Let   and   be two linear transformations.\n        If   and  \n        for each  , then  .\n       "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-lin-tran-intro.html#remark-5",
  "type": "Remark",
  "number": "2.1.7",
  "title": "",
  "body": "\n        If for some reason we already know that our transformation is linear,\n        we might still be concerned about the fact that if a spanning set is not independent,\n        there will be more than one way to express a vector as linear combination of vectors in that set.\n        If we define   by giving its values on a spanning set, will it be well-defined?\n        (That is, could we get two different values for   by expressing   in terms of the spanning set in two different ways?)\n        Suppose that we have scalars   such that\n         \n        We then have\n         .\n       \n        Of course, we can avoid all of this unpleasantness by using a  basis \n        to define a transformation. Given a basis  \n        for a vector space  , we can define a transformation  \n        by setting   for some choice of vectors  \n        and defining\n         .\n        Because each vector   can be written  uniquely  in terms of a basis,\n        we know that our transformation is well-defined.\n       "
},
{
  "id": "thm-define-using-basis",
  "level": "2",
  "url": "sec-lin-tran-intro.html#thm-define-using-basis",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "",
  "body": "\n        Let   be vector spaces. Let  \n        be a basis of  , and let   be any vectors in  .\n        (These vectors need not be distinct.)\n        Then there exists a unique linear transformation   such that\n          for each  ; indeed,\n        we can define   as follows:\n        given  , write  . Then\n         .\n       "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "sec-lin-tran-intro.html#exercise-38",
  "type": "Exercise",
  "number": "2.1.9",
  "title": "",
  "body": "\n        Suppose   is a linear transformation.\n        If   and  ,\n        find  .\n       \n        Since we know the value of   on the standard basis,\n        we can use properties of linear transformations to immediately obtain the answer:\n         .\n       "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "sec-lin-tran-intro.html#exercise-39",
  "type": "Exercise",
  "number": "2.1.10",
  "title": "",
  "body": "\n        Suppose   is a linear transformation.\n        Given that  \n        and  ,\n        find  .\n       \n        At first, this example looks the same as the one above,\n        and to some extent, it is. The difference is that this time,\n        we're given the values of   on a basis that is not the standard one.\n        This means we first have to do some work to determine how to write the given vector in terms of the given basis.\n       \n        Suppose we have  \n        for scalars  . This is equivalent to the matrix equation\n         \n        Solving (perhaps using the code cell below), we get  .\n       \n        Therefore,\n         .\n       "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "sec-lin-tran-intro.html#exercise-40",
  "type": "Exercise",
  "number": "2.1.11",
  "title": "",
  "body": "\n        Suppose   is defined by\n         \n        Find  .\n       \n        We need to find scalars   such that\n         .\n        We could set up a system and solve, but this time it's easy enough to just work our way through.\n        We must have  , to get the correct coefficient for  . This gives\n         .\n        Now, we have to have  , so  .\n        Putting this in, we get\n         .\n        Simiplifying this leaves us with  . Finally, we find:\n         .\n       "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "sec-lin-tran-intro.html#exercise-41",
  "type": "Exercise",
  "number": "2.1.12",
  "title": "",
  "body": "\n        Find a linear transformation   such that\n         .\n        Then, determine the value of  .\n       \n        Since   forms a basis of  \n        (the vectors are not parallel and there are two of them),\n        it suffices to determine how to write a general vector in terms of this basis.\n        Suppose\n         \n        for a general element  .\n        This is equivalent to the matrix equation  ,\n        which we can solve as  :\n       \n        This gives us the result\n         \n        Thus,\n         .\n       \n        We conclude that\n         .\n       "
},
{
  "id": "ex-parsons-lintrans",
  "level": "2",
  "url": "sec-lin-tran-intro.html#ex-parsons-lintrans",
  "type": "Exercise",
  "number": "2.1.13",
  "title": "",
  "body": "\n        Let   be a linear transformation.\n        Rearrange the blocks below to create a proof of the following statement:\n       \n        For any vectors  ,\n        if   is linearly independent in  ,\n        then   is linearly independent in  .\n       \n       \n         \n          Suppose that   is linearly independent.\n         \n       \n       \n         \n          We want to show that  \n          is linearly independent, so suppose that we have\n           \n          for some scalars  .\n         \n       \n       \n         \n          We apply   to both sides of the equation above, giving us:\n           .\n         \n       \n       \n         \n          Now we make use of both parts of  Theorem  to get\n           .\n         \n       \n       \n         \n          By hypothesis, the vectors   are linearly independent,\n          so we must have  .\n         \n       \n       \n         \n          Since the only solution to  \n          is  , the set  \n          is linearly independent.\n         \n       \n     \n        This is mostly a matter of using  Theorem ,\n        but it's important to get the logic correct.\n        We have a conditional statement of the form  ,\n        where both   ( the set   is independent )\n        and   ( the set   is independent )\n        are themselves conditional statements.\n       \n        The overall structure therefore looks like  .\n        A direct proof should be structured as follows:\n         \n             \n              Assume the main hypothesis:  .\n             \n           \n             \n              Assume the  sub -hypothesis  .\n             \n           \n             \n              Figure out how to show that  .\n              (This is the  apply   to both sides  step.)\n             \n           \n             \n              If we know  , and we've assumed  , we know  .\n             \n           \n             \n              Realize that  .\n             \n           \n       "
},
{
  "id": "sec-kernel-image",
  "level": "1",
  "url": "sec-kernel-image.html",
  "type": "Section",
  "number": "2.2",
  "title": "Kernel and Image",
  "body": "Kernel and Image kernel nullspace image range kernel image \n         Caution:  the kernel is the set of vectors that    sends  to zero.\n        Saying that   does  not \n        mean that  ; it means that  .\n        Although it's true that   for any linear transformation,\n        the kernel can contain vectors  other  than the zero vector.\n       \n        In fact, as we'll see in   below,\n        the case where the kernel contains only the zero vector is an important special case.\n       How to use these definitions \n      As you read through the theorems and examples in this section,\n      think carefully about how the definitions of kernel and image are used.\n     \n      For a linear transformation  :\n       \n           \n            If you assume  : you are asserting that  .\n            Similarly, to prove  , you must show that  .\n           \n         \n           \n            If your hypothesis is that   for some subspace  ,\n            you can assume that   for any  .\n           \n         \n           \n            If you need to prove that   for some subspace  ,\n            then you need to prove that if  , then  ,\n            and if  , then  .\n           \n         \n           \n            If you assume  : you are asserting that there exists some  ,\n            such that  , and to prove that  ,\n            you must find some   such that  .\n           \n         \n           \n            If your hypothesis is that   for some subspace  ,\n            then you are assuming that for every  ,\n            there is some   such that  .\n           \n         \n           \n            If you need to prove that   for some subspace  ,\n            then you need to show that for every  , there is some   with  ,\n            and that   for every  .\n           \n         \n     \n        For any linear transformation  ,\n         \n             \n                is a subspace of  .\n             \n           \n             \n                is a subspace of  .\n             \n           \n       Strategy \n        Both parts of the proof rely on the  .\n        So for each set, we first need to explain why it contains the zero vector.\n        Next comes closure under addition: assume you have to elements of the set,\n        then use the definition to explain what that means.\n       \n        Now you have to show that the sum of those elements belongs to the set as well.\n        It's fairly safe to assume that this is going to involve the addition property of a linear transformation!\n       \n        Scalar multiplication is handled similarly, but using the scalar multiplication property of  .\n       \n         \n             \n              To show that   is a subspace, first note that  ,\n              since   for any linear transformation  .\n              Now, suppose that  ; this means that  \n              and  , and therefore,\n               .\n              Similarly, for any scalar  , if   then  , so\n               .\n              By the subspace test,   is a subspace.\n             \n           \n             \n              Again, since  , we see that  .\n              (That is,  , so  .)\n              Now suppose that  . This means that there exist  \n              such that   and  .\n              It follows that\n               ,\n              so  , since it's the image of  .\n              Similarly, if   is any scalar and  ,\n              then\n               ,\n              so  .\n             \n           \n       Null space and column space column space \n    Determining   and   for a given matrix   is,\n    unsurprisingly, a matter of reducing   to row-echelon form.\n    Finding   comes down to describing the set of all solutions to the homogeneous system  .\n    Finding   relies on the following theorem.\n   \n        Let   be an   matrix with columns  .\n        If the reduced row-echelon form of   has leading ones in columns  ,\n        then\n         \n        is a basis for  .\n       \n    For a proof of this result, see Section 5.4 of  Linear Algebra with Applications ,\n    by Keith Nicholson. The proof is fairly long and technical, so we omit it here.\n   \n        Consider the linear transformation   defined by the matrix\n         .\n        Let's determine the  RREF  of  :\n       \n        We see that there are leading ones in the first and second column.\n        Therefore,  .\n        Indeed, note that\n         \n        and\n         ,\n        so that indeed, the third and fourth columns are in the span of the first and second.\n       \n        Furthermore, we can determine the nullspace: if   where\n         , then we must have\n         ,\n        so\n         .\n        It follows that a basis for   is  .\n       \n        The SymPy library for Python has built-in functions for computing nullspace and column space.\n        But it's probably worth your while to know how to determine these from the  RREF  of a matrix,\n        without additional help from the computer.\n        That said, let's see how the computer's output compares to what we found in  .\n       \n        Note that the output from the computer simply states the basis for each space.\n        Of course, for computational purposes, this is typically good enough.\n       rank \n    For a general linear transformation, we can't necessarily speak in terms of rows and columns,\n    but if   is linear, and either   or   is finite-dimensional,\n    then we can define the rank of   as follows.\n   rank nullity \n    Note that if   is finite-dimensional, then so is  ,\n    since it's a subspace of  .\n    On the other hand, if   is finite-dimensional,\n    then we can find a basis   of  ,\n    and the set   will span  ,\n    so again the image is finite-dimensional, so the rank of   is finite.\n    It is possible for either the rank or the nullity of a transformation to be infinite.\n   \n    Knowing that the kernel and image of an operator are subspaces gives us an easy way to define subspaces.\n    From the textbook, we have the following nice example.\n   \n        Let   be defined by  . Show that:\n       \n            is a linear map.\n         \n          You can use the fact that the transpose is linear:   and  .\n         \n          We have   since  .\n          Using proerties of the transpose and matrix algebra, we have\n           \n          and\n           .\n         \n            is equal to the set of all symmetric matrices.\n         \n          A matrix is symmetric if  , or in other words,  .\n         \n          It's clear that if  , then  .\n          On the other hand, if  , then  , so  .\n          Thus, the kernel consists of all symmetric matrices.\n         \n            is equal to the set of all skew-symmetric matrices.\n         \n          A matrix is skew-symmetric if  .\n         \n          If  , then\n           ,\n          so certainly every matrix in   is skew-symmetric.\n          On the other hand, if   is skew-symmetric, then  ,\n          since\n           .\n         injective surjective \n    For a linear transformation  , the property of surjectivity is tied to  \n    by definition:   is onto if  .\n    What might not be immediately obvious is that the kernel tells us if a linear transformation is injective.\n   \n        Let   be a linear transformation.\n        Then   is injective if and only if  .\n       Strategy \n        We have an  if and only if  statement, so we have to make sure to consider both directions.\n        The basic idea is this: we know that   is always in the kernel,\n        so if the kernel contains any other vector  ,\n        we would have  , and   would not be injective.\n       \n        There is one trick to keep in mind: the statement  \n        is equivalent to  , and since   is linear,\n         .\n       \n        Suppose   is injective, and let  .\n        Then  . On the other hand, we know that  .\n        Since   is injective, we must have  .\n\n        Conversely, suppose that   and that  \n        for some  . Then\n         ,\n        so  .\n        Therefore, we must have  ,\n        so  , and it follows that   is injective.\n       \n        Rearrange the blocks below to produce a valid proof of the following statement:\n       \n        If   is injective and\n          is linearly independent in  ,\n        then   is linearly independent in  .\n       \n       \n         \n          Suppose   is injective and   is independent.\n         \n       \n       \n         \n          Assume that  ,\n          for some scalars  .\n         \n       \n       \n         \n          Since   is linear,\n           .\n         \n       \n       \n         \n          Therefore,  .\n         \n       \n       \n         \n          Since   is injective,  .\n         \n       \n       \n         \n          Therefore,  .\n         \n       \n       \n         \n          Since   is independent, we must have\n           .\n         \n       \n       \n         \n          It follows that   is linearly independent.\n         \n       \n     \n        Remember that your goal is to show that  \n        is linearly independent, so after you assume your hypotheses,\n        you should begin by setting a linear combination of these vectors equal to zero.\n       \n        Rearrange the blocks below to produce a valid proof of the following statement:\n       \n        If   is surjective and  ,\n        then  .\n       \n       \n         \n          Suppose   is surjective, and   is independent.\n         \n       \n       \n         \n          Let   be any vector.\n         \n       \n       \n         \n          Since   is a surjection, there is some   such that  .\n         \n       \n       \n         \n          Since   and  ,\n          there are scalars   such that  .\n         \n       \n       \n         \n          Since   is linear,\n           ,\n          so  .\n         \n       \n       \n         \n          Therefore,  ,\n          and since  ,\n          we have  .\n         \n       \n     \n        You need to show that any   can be written as a linear combination of the  .\n        Because   is surjective, you know that   for some  .\n       \n        For the case of a matrix transformation  ,\n        notice that   is simply the set of all solutions to  ,\n        while   is the set of all   for which  \n         has  a solution.\n       \n        Recall from the discussion preceding  \n        that  .\n        It follows that   is surjective if and only if  .\n        On the other hand,   is injective if and only if  ,\n        because we know that the system   has a unique solution\n        if and only if each column of   contains a leading one.\n       \n        This has some interesting consequences. If   (that is, if   is square),\n        then each increase in   produces a corresponding decrease in  ,\n        since both correspond to the  loss  of a leading one. Moreover, if  ,\n        then   is both injective and surjective.\n        Recall that a function is invertible if and only if it is both injective and surjective.\n        It should come as no surprise that invertibility of   (as a function)\n        is equivalent to invertibility of   (as a matrix).\n       \n        Also, note that if  , then  ,\n        so   could be surjective, but can't possibly be injective.\n        On the other hand, if  , then  ,\n        so   could be injective, but can't possibly be surjective.\n        These results generalize to linear transformations between any finite-dimensional vector spaces.\n        The first step towards this is the following theorem,\n        which is sometimes known as the Fundamental Theorem of Linear Transformations.\n       Dimension Theorem \n        Let   be any linear transformation such that\n          and   are finite-dimensional.\n        Then   is finite-dimensional, and\n         .\n       \n        The trick with this proof is that we aren't assuming   is finite-dimensional,\n        so we can't start with a basis of  . But we do know that  \n        is finite-dimensional, so we start with a basis  \n        of  .\n        Of course, every vector in   is the image of some vector in  ,\n        so we can write  , where  ,\n        for  .\n       \n        Since   is a basis,\n        it is linearly independent. The results of  Exercise \n        tell us that the set   must therefore be independent.\n       \n        We now introduce a basis  \n        of  , which we also know to be finite-dimensional.\n        If we can show that the set  \n        is a basis for  , we'd be done, since the number of vectors in this basis\n        is  . We must therefore show that this set is independent,\n        and that it spans  .\n       \n        To see that it's independent, suppose that\n         .\n        Applying   to this equation, and noting that  \n        for each  , by definition of the  , we get\n         .\n        We assumed that the vectors   were independent,\n        so all the   must be zero. But then we get\n         ,\n        and since the   are independent, all the   must be zero.\n       \n        To see that these vectors span, choose any  .\n        Since  , there exist scalars  \n        such that\n         .\n        We'd like to be able to conclude from this that  ,\n        but this would be false, unless   was known to be injective (which it isn't).\n        Failure to be injective involves the kernel -- how do we bring that into the picture?\n       \n        The trick is to realize that the reason we might have  \n        is that we're off by something in the kernel.\n        Indeed,   can be re-written as\n         ,\n        so  .\n        But we have a basis for  , so we can write\n         \n        for some scalars  , and this can be rearanged to give\n         ,\n        which completes the proof.\n       \n    This is sometimes known as the  Rank-Nullity Theorem ,\n    since it can be stated in the form\n     .\n    We will see that this result is frequently useful for providing simple arguments that establish otherwise difficult results.\n    A basic situation where the theorem is useful is as follows:\n    we are given  , where the dimensions of   and   are known.\n    Since   is a subspace of  , we know from  Theorem \n    that   is onto if and only if  .\n    In many cases it is easier to compute   than it is  ,\n    and the Dimension Theorem lets us determine   if we know   and  .\n   \n        Select all statements below that are  true :\n       \n       \n         \n            If  , then  .\n           \n         \n           \n            Remember that   implies  ;\n            this does not necessarily mean  .\n           \n         \n       \n       \n         \n            If   is injective, then it is surjective.\n           \n         \n           \n            By the dimension theorem, the dimension of   cannot be greater than 4,\n            so   can never be surjective.\n           \n         \n       \n       \n         \n            If   is injective, then it is surjective.\n           \n         \n           \n            Correct! If   is injective, then  ,\n            so by the dimension theorem,  .\n            Since   as well,  .\n           \n         \n       \n       \n         \n            It is possible to have an injective linear transformation  .\n           \n         \n           \n            The maximum dimension of   is 3, so the minimum dimension of   is 1.\n           \n         \n       \n       \n         \n            If   is surjective, then  .\n           \n         \n           \n            Correct! If   is surjective, then  ,\n            so  .\n           \n         \n       \n     \n    A useful consequence of this result is that if we know   is finite-dimensional,\n    we can order any basis such that the first vectors in the list are a basis of  ,\n    and the images of the remaining vectors produce a basis of  .\n   \n    Another consequence of the dimension theorem is that we must have\n     .\n    Of course, we must also have  ,\n    since   is a subspace of  .\n    In the case of a matrix transformation  ,\n    this means that the rank of   is at most the minimum of   and  .\n    This once again has consequences for the existence and uniqueness of solutions for linear systems with the coefficient matrix  .\n   \n    We end with an exercise that is both challenging and useful.\n    Do your best to come up with a proof before looking at the solution.\n   \n        Let   and   be finite-dimensional vector spaces. Prove the following:\n       \n            if and only if there exists an injection  .\n         \n          You're dealing with an  if and only if  statement, so be sure to prove both directions.\n          One direction follows immediately from the dimension theorem.\n         \n          What makes the other direction harder is that you need to prove an  existence  statement.\n          To show that a transformation with the required property exists, you're going to need to  construct  it!\n          To do so, try defining your transformation in terms of a basis.\n         \n          Suppose   is injective. Then  , so\n           ,\n          since   is a subspace of  .\n         \n          Conversely, suppose  .\n          Choose a basis   of  ,\n          and a basis   of  , where  .\n          By  Theorem , there exists a linear transformation\n            with   for  .\n          (The main point here is that we run out of basis vectors for   before we run out of basis vectors for  .)\n          This map is injective: if  ,\n          write  .\n          Then\n           .\n          Since   is a subset of a basis, it's independent.\n          Therefore, the scalars   must all be zero, and therefore  .\n         \n            if and only if there exists a surjection  .\n         \n          The hint from the previous part also applies here!\n         \n          Suppose   is surjective. Then  , so\n           .\n          Conversely, suppose  . Again,\n          choose a basis   of  ,\n          and a basis   of  ,\n          where this time,  .\n          We can define a linear transformation as follows:\n           \n          It's easy to check that this map is a surjection:\n          given  , we can write it in terms of our basis as  .\n          Using these same scalars, we can define   such that  .\n         \n          Note that it's not important how we define   when  .\n          The point is that this time, we run out of basis vectors for   before we run out of basis vectors for  .\n          Once each vector in the basis of   is in the image of  , we're guaranteed that   is surjective,\n          and we can define the value of   on any remaining basis vectors however we want.\n         "
},
{
  "id": "p-617",
  "level": "2",
  "url": "sec-kernel-image.html#p-617",
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
  "body": "kernel image "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-kernel-image.html#remark-6",
  "type": "Remark",
  "number": "2.2.2",
  "title": "",
  "body": "\n         Caution:  the kernel is the set of vectors that    sends  to zero.\n        Saying that   does  not \n        mean that  ; it means that  .\n        Although it's true that   for any linear transformation,\n        the kernel can contain vectors  other  than the zero vector.\n       \n        In fact, as we'll see in   below,\n        the case where the kernel contains only the zero vector is an important special case.\n       "
},
{
  "id": "rem-using-ker-im",
  "level": "2",
  "url": "sec-kernel-image.html#rem-using-ker-im",
  "type": "Remark",
  "number": "2.2.3",
  "title": "How to use these definitions.",
  "body": "How to use these definitions \n      As you read through the theorems and examples in this section,\n      think carefully about how the definitions of kernel and image are used.\n     \n      For a linear transformation  :\n       \n           \n            If you assume  : you are asserting that  .\n            Similarly, to prove  , you must show that  .\n           \n         \n           \n            If your hypothesis is that   for some subspace  ,\n            you can assume that   for any  .\n           \n         \n           \n            If you need to prove that   for some subspace  ,\n            then you need to prove that if  , then  ,\n            and if  , then  .\n           \n         \n           \n            If you assume  : you are asserting that there exists some  ,\n            such that  , and to prove that  ,\n            you must find some   such that  .\n           \n         \n           \n            If your hypothesis is that   for some subspace  ,\n            then you are assuming that for every  ,\n            there is some   such that  .\n           \n         \n           \n            If you need to prove that   for some subspace  ,\n            then you need to show that for every  , there is some   with  ,\n            and that   for every  .\n           \n         \n     "
},
{
  "id": "thm-ker-img-subspace",
  "level": "2",
  "url": "sec-kernel-image.html#thm-ker-img-subspace",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "",
  "body": "\n        For any linear transformation  ,\n         \n             \n                is a subspace of  .\n             \n           \n             \n                is a subspace of  .\n             \n           \n       Strategy \n        Both parts of the proof rely on the  .\n        So for each set, we first need to explain why it contains the zero vector.\n        Next comes closure under addition: assume you have to elements of the set,\n        then use the definition to explain what that means.\n       \n        Now you have to show that the sum of those elements belongs to the set as well.\n        It's fairly safe to assume that this is going to involve the addition property of a linear transformation!\n       \n        Scalar multiplication is handled similarly, but using the scalar multiplication property of  .\n       \n         \n             \n              To show that   is a subspace, first note that  ,\n              since   for any linear transformation  .\n              Now, suppose that  ; this means that  \n              and  , and therefore,\n               .\n              Similarly, for any scalar  , if   then  , so\n               .\n              By the subspace test,   is a subspace.\n             \n           \n             \n              Again, since  , we see that  .\n              (That is,  , so  .)\n              Now suppose that  . This means that there exist  \n              such that   and  .\n              It follows that\n               ,\n              so  , since it's the image of  .\n              Similarly, if   is any scalar and  ,\n              then\n               ,\n              so  .\n             \n           \n       "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec-kernel-image.html#example-9",
  "type": "Example",
  "number": "2.2.5",
  "title": "Null space and column space.",
  "body": "Null space and column space column space "
},
{
  "id": "thm-colspace",
  "level": "2",
  "url": "sec-kernel-image.html#thm-colspace",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "",
  "body": "\n        Let   be an   matrix with columns  .\n        If the reduced row-echelon form of   has leading ones in columns  ,\n        then\n         \n        is a basis for  .\n       "
},
{
  "id": "ex-col-null",
  "level": "2",
  "url": "sec-kernel-image.html#ex-col-null",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "\n        Consider the linear transformation   defined by the matrix\n         .\n        Let's determine the  RREF  of  :\n       \n        We see that there are leading ones in the first and second column.\n        Therefore,  .\n        Indeed, note that\n         \n        and\n         ,\n        so that indeed, the third and fourth columns are in the span of the first and second.\n       \n        Furthermore, we can determine the nullspace: if   where\n         , then we must have\n         ,\n        so\n         .\n        It follows that a basis for   is  .\n       "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-kernel-image.html#remark-8",
  "type": "Remark",
  "number": "2.2.8",
  "title": "",
  "body": "\n        The SymPy library for Python has built-in functions for computing nullspace and column space.\n        But it's probably worth your while to know how to determine these from the  RREF  of a matrix,\n        without additional help from the computer.\n        That said, let's see how the computer's output compares to what we found in  .\n       \n        Note that the output from the computer simply states the basis for each space.\n        Of course, for computational purposes, this is typically good enough.\n       "
},
{
  "id": "p-647",
  "level": "2",
  "url": "sec-kernel-image.html#p-647",
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
  "body": "rank nullity "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "sec-kernel-image.html#exercise-43",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "",
  "body": "\n        Let   be defined by  . Show that:\n       \n            is a linear map.\n         \n          You can use the fact that the transpose is linear:   and  .\n         \n          We have   since  .\n          Using proerties of the transpose and matrix algebra, we have\n           \n          and\n           .\n         \n            is equal to the set of all symmetric matrices.\n         \n          A matrix is symmetric if  , or in other words,  .\n         \n          It's clear that if  , then  .\n          On the other hand, if  , then  , so  .\n          Thus, the kernel consists of all symmetric matrices.\n         \n            is equal to the set of all skew-symmetric matrices.\n         \n          A matrix is skew-symmetric if  .\n         \n          If  , then\n           ,\n          so certainly every matrix in   is skew-symmetric.\n          On the other hand, if   is skew-symmetric, then  ,\n          since\n           .\n         "
},
{
  "id": "p-662",
  "level": "2",
  "url": "sec-kernel-image.html#p-662",
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
  "body": "\n        Let   be a linear transformation.\n        Then   is injective if and only if  .\n       Strategy \n        We have an  if and only if  statement, so we have to make sure to consider both directions.\n        The basic idea is this: we know that   is always in the kernel,\n        so if the kernel contains any other vector  ,\n        we would have  , and   would not be injective.\n       \n        There is one trick to keep in mind: the statement  \n        is equivalent to  , and since   is linear,\n         .\n       \n        Suppose   is injective, and let  .\n        Then  . On the other hand, we know that  .\n        Since   is injective, we must have  .\n\n        Conversely, suppose that   and that  \n        for some  . Then\n         ,\n        so  .\n        Therefore, we must have  ,\n        so  , and it follows that   is injective.\n       "
},
{
  "id": "ex-parsons-kernel",
  "level": "2",
  "url": "sec-kernel-image.html#ex-parsons-kernel",
  "type": "Exercise",
  "number": "2.2.12",
  "title": "",
  "body": "\n        Rearrange the blocks below to produce a valid proof of the following statement:\n       \n        If   is injective and\n          is linearly independent in  ,\n        then   is linearly independent in  .\n       \n       \n         \n          Suppose   is injective and   is independent.\n         \n       \n       \n         \n          Assume that  ,\n          for some scalars  .\n         \n       \n       \n         \n          Since   is linear,\n           .\n         \n       \n       \n         \n          Therefore,  .\n         \n       \n       \n         \n          Since   is injective,  .\n         \n       \n       \n         \n          Therefore,  .\n         \n       \n       \n         \n          Since   is independent, we must have\n           .\n         \n       \n       \n         \n          It follows that   is linearly independent.\n         \n       \n     \n        Remember that your goal is to show that  \n        is linearly independent, so after you assume your hypotheses,\n        you should begin by setting a linear combination of these vectors equal to zero.\n       "
},
{
  "id": "ex-parsons-image",
  "level": "2",
  "url": "sec-kernel-image.html#ex-parsons-image",
  "type": "Exercise",
  "number": "2.2.13",
  "title": "",
  "body": "\n        Rearrange the blocks below to produce a valid proof of the following statement:\n       \n        If   is surjective and  ,\n        then  .\n       \n       \n         \n          Suppose   is surjective, and   is independent.\n         \n       \n       \n         \n          Let   be any vector.\n         \n       \n       \n         \n          Since   is a surjection, there is some   such that  .\n         \n       \n       \n         \n          Since   and  ,\n          there are scalars   such that  .\n         \n       \n       \n         \n          Since   is linear,\n           ,\n          so  .\n         \n       \n       \n         \n          Therefore,  ,\n          and since  ,\n          we have  .\n         \n       \n     \n        You need to show that any   can be written as a linear combination of the  .\n        Because   is surjective, you know that   for some  .\n       "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-kernel-image.html#remark-9",
  "type": "Remark",
  "number": "2.2.14",
  "title": "",
  "body": "\n        For the case of a matrix transformation  ,\n        notice that   is simply the set of all solutions to  ,\n        while   is the set of all   for which  \n         has  a solution.\n       \n        Recall from the discussion preceding  \n        that  .\n        It follows that   is surjective if and only if  .\n        On the other hand,   is injective if and only if  ,\n        because we know that the system   has a unique solution\n        if and only if each column of   contains a leading one.\n       \n        This has some interesting consequences. If   (that is, if   is square),\n        then each increase in   produces a corresponding decrease in  ,\n        since both correspond to the  loss  of a leading one. Moreover, if  ,\n        then   is both injective and surjective.\n        Recall that a function is invertible if and only if it is both injective and surjective.\n        It should come as no surprise that invertibility of   (as a function)\n        is equivalent to invertibility of   (as a matrix).\n       \n        Also, note that if  , then  ,\n        so   could be surjective, but can't possibly be injective.\n        On the other hand, if  , then  ,\n        so   could be injective, but can't possibly be surjective.\n        These results generalize to linear transformations between any finite-dimensional vector spaces.\n        The first step towards this is the following theorem,\n        which is sometimes known as the Fundamental Theorem of Linear Transformations.\n       "
},
{
  "id": "thm-dimension-lintrans",
  "level": "2",
  "url": "sec-kernel-image.html#thm-dimension-lintrans",
  "type": "Theorem",
  "number": "2.2.15",
  "title": "Dimension Theorem.",
  "body": "Dimension Theorem \n        Let   be any linear transformation such that\n          and   are finite-dimensional.\n        Then   is finite-dimensional, and\n         .\n       \n        The trick with this proof is that we aren't assuming   is finite-dimensional,\n        so we can't start with a basis of  . But we do know that  \n        is finite-dimensional, so we start with a basis  \n        of  .\n        Of course, every vector in   is the image of some vector in  ,\n        so we can write  , where  ,\n        for  .\n       \n        Since   is a basis,\n        it is linearly independent. The results of  Exercise \n        tell us that the set   must therefore be independent.\n       \n        We now introduce a basis  \n        of  , which we also know to be finite-dimensional.\n        If we can show that the set  \n        is a basis for  , we'd be done, since the number of vectors in this basis\n        is  . We must therefore show that this set is independent,\n        and that it spans  .\n       \n        To see that it's independent, suppose that\n         .\n        Applying   to this equation, and noting that  \n        for each  , by definition of the  , we get\n         .\n        We assumed that the vectors   were independent,\n        so all the   must be zero. But then we get\n         ,\n        and since the   are independent, all the   must be zero.\n       \n        To see that these vectors span, choose any  .\n        Since  , there exist scalars  \n        such that\n         .\n        We'd like to be able to conclude from this that  ,\n        but this would be false, unless   was known to be injective (which it isn't).\n        Failure to be injective involves the kernel -- how do we bring that into the picture?\n       \n        The trick is to realize that the reason we might have  \n        is that we're off by something in the kernel.\n        Indeed,   can be re-written as\n         ,\n        so  .\n        But we have a basis for  , so we can write\n         \n        for some scalars  , and this can be rearanged to give\n         ,\n        which completes the proof.\n       "
},
{
  "id": "ex-mc-kernel",
  "level": "2",
  "url": "sec-kernel-image.html#ex-mc-kernel",
  "type": "Exercise",
  "number": "2.2.16",
  "title": "",
  "body": "\n        Select all statements below that are  true :\n       \n       \n         \n            If  , then  .\n           \n         \n           \n            Remember that   implies  ;\n            this does not necessarily mean  .\n           \n         \n       \n       \n         \n            If   is injective, then it is surjective.\n           \n         \n           \n            By the dimension theorem, the dimension of   cannot be greater than 4,\n            so   can never be surjective.\n           \n         \n       \n       \n         \n            If   is injective, then it is surjective.\n           \n         \n           \n            Correct! If   is injective, then  ,\n            so by the dimension theorem,  .\n            Since   as well,  .\n           \n         \n       \n       \n         \n            It is possible to have an injective linear transformation  .\n           \n         \n           \n            The maximum dimension of   is 3, so the minimum dimension of   is 1.\n           \n         \n       \n       \n         \n            If   is surjective, then  .\n           \n         \n           \n            Correct! If   is surjective, then  ,\n            so  .\n           \n         \n       \n     "
},
{
  "id": "ex-dimension-injection-surjection",
  "level": "2",
  "url": "sec-kernel-image.html#ex-dimension-injection-surjection",
  "type": "Exercise",
  "number": "2.2.17",
  "title": "",
  "body": "\n        Let   and   be finite-dimensional vector spaces. Prove the following:\n       \n            if and only if there exists an injection  .\n         \n          You're dealing with an  if and only if  statement, so be sure to prove both directions.\n          One direction follows immediately from the dimension theorem.\n         \n          What makes the other direction harder is that you need to prove an  existence  statement.\n          To show that a transformation with the required property exists, you're going to need to  construct  it!\n          To do so, try defining your transformation in terms of a basis.\n         \n          Suppose   is injective. Then  , so\n           ,\n          since   is a subspace of  .\n         \n          Conversely, suppose  .\n          Choose a basis   of  ,\n          and a basis   of  , where  .\n          By  Theorem , there exists a linear transformation\n            with   for  .\n          (The main point here is that we run out of basis vectors for   before we run out of basis vectors for  .)\n          This map is injective: if  ,\n          write  .\n          Then\n           .\n          Since   is a subset of a basis, it's independent.\n          Therefore, the scalars   must all be zero, and therefore  .\n         \n            if and only if there exists a surjection  .\n         \n          The hint from the previous part also applies here!\n         \n          Suppose   is surjective. Then  , so\n           .\n          Conversely, suppose  . Again,\n          choose a basis   of  ,\n          and a basis   of  ,\n          where this time,  .\n          We can define a linear transformation as follows:\n           \n          It's easy to check that this map is a surjection:\n          given  , we can write it in terms of our basis as  .\n          Using these same scalars, we can define   such that  .\n         \n          Note that it's not important how we define   when  .\n          The point is that this time, we run out of basis vectors for   before we run out of basis vectors for  .\n          Once each vector in the basis of   is in the image of  , we're guaranteed that   is surjective,\n          and we can define the value of   on any remaining basis vectors however we want.\n         "
},
{
  "id": "sec-isomorphism",
  "level": "1",
  "url": "sec-isomorphism.html",
  "type": "Section",
  "number": "2.3",
  "title": "Isomorphisms, composition, and inverses",
  "body": "Isomorphisms, composition, and inverses \n      We ended the last section with an important result.\n       Exercise \n      showed that existence of an injective linear map  \n      is equivalent to  ,\n      and that existence of a surjective linear map is equivalent to  .\n      It's probably not surprising than that existence of a  bijective  linear map  \n      is equivalent to  .\n     \n      In a certain sense that we will now try to make preceise,\n      vectors spaces of the same dimension are equivalent:\n      they may look very different, but in fact, they contain exactly the same information,\n      presented in different ways.\n     Isomorphisms isomorphism isomorphic \n          For any finite-dimensional vector spaces   and  ,\n            if any only if  .\n         Strategy \n          We again need to prove both directions of an  if and only if .\n          If an isomorphism exists, can you see how to use  \n          to show the dimensions are equal?\n         \n          If the dimensions are equal, you need to construct an isomorphism.\n          Since   and   are finite-dimensional, you can choose a basis for each space.\n          What can you say about the sizes of these bases?\n          How can you use them to define a linear transformation?\n          (You might want to remind yourself what   says.)\n         \n          If   is a bijection, then it is both injective and surjective.\n          Since   is injective,  ,\n          by  Exercise .\n          By this same exercise,  since   is surjective, we must have  .\n          It follows that  .\n         \n          Suppose now that  .\n          Then we can choose bases   of  ,\n          and   of  .\n            then guarantees the existence of a linear map  \n          such that   for each  .\n          Repeating the arguments of   shows that   is a bijection.\n         \n      Buried in the theorem above is the following useful fact:\n       an isomorphism   takes any basis of   to a basis of  .\n      Another remarkable result of the above theorem is that  any two vector spaces of the same dimension are isomorphic !\n      In particular, we have the following theorem.\n     \n          If  , then  .\n         \n          Match each vector space on the left with an isomorphic vector space on the right.\n         \n         \n           \n           \n         \n         \n           \n           \n         \n         \n           \n           \n         \n         \n           \n           \n         \n       ordered basis coefficient isomorphism \n      Note that this is a well-defined map since every vector in   can be written uniquely in terms of the basis  .\n      But also note that the ordering of the vectors in   is important:\n      changing the order changes the position of the coefficients in  .\n     \n      The coefficient isomorphism is especially useful when we want to analyze a linear map computationally.\n      Suppose we're given   where   are finite-dimensional.\n      Let us choose bases   of  \n      and   of  .\n      The choice of these two bases determines scalars  , such that\n       \n      for each  . The resulting matrix  \n      defines a matrix transformation   such that\n       .\n      The relationship among the four maps used here is best captured by the  commutative diagram \n      in  .\n     Defining the matrix of a linear map with respect to choices of basis. \n      The matrix of a linear transformation is studied in more detail in  .\n     Composition and inverses inverse \n      The same is true for composition in the other order:  \n      is the identity function on  .\n      One way of interpreting this is to observe that just as   is the inverse of  ,\n      so is   the inverse of  ; that is,  .\n     \n      Since linear transformations are a special type of function,\n      the above is true for a linear transformation as well.\n      But if we want to keep everything under the umbrella of linear algebra,\n      there are two things we should check: that the composition of two linear transformations is another linear transformation,\n      and that the inverse of a linear transformation is a linear transformation.\n     \n          Show that the composition of two linear maps is again a linear map.\n         \n          Suppose we have linear maps  ,\n          and let  . Then\n           ,\n          and for any scalar  ,\n           .\n\n         \n          Given transformations   and  , show that:\n           \n               \n                 \n               \n             \n               \n                 \n               \n             \n         \n          This is simpler than it looks!\n          It's mostly a matter of chasing the definitions: see  .\n         \n          Let   be a bijective linear transformation.\n          Show that   is a linear transformation.\n         \n          Since   is a bijection, every   can be associated with some  .\n         \n          Let  .\n          Then there exist    with  .\n          We then have\n           .\n          For any scalar  , we similarly have\n           .\n         \n          With this connection between linear maps (in general) and matrices,\n          it can be worthwhile to pause and consider invertibility in the context of matrices.\n          Recall that an   matrix   is  invertible  if there exists a matrix  \n          such that   and  .\n         \n          The same definition can be made for linear maps.\n          We've defined what it means for a map   to be invertible as a  function .\n          In particular, we relied on the fact that any bijection has an inverse.\n         \n          Let   be an  \n          matrix, and let   be an   matrix. Then we have linear maps\n           ,\n          and the composition   satisfies\n           .\n          Note that the rules given in elementary linear algebra, for the relative sizes of matrices that can be multiplied,\n          are simply a manifestation of the fact that to compose functions,\n          the range of the first must be contained in the domain of the second.\n         \n        A note on notation. Given linear maps  ,\n        we typically write the composition   as a  product   .\n        The reason for this is again to mimic the case of matrices:\n        as seen in  ,  \n        for matrix transformations.\n       \n          Show that if  , then   is surjective and   is injective.\n          Conclude that if   and  , then   and   are both bijections.\n         \n          This is true even if the functions aren't linear.\n          In fact, you've probably seen the proof in an earlier course!\n         \n        also tells us why we can only consider invertibility for square matrices:\n      we know that invertible linear maps are only defined between spaces of equal dimension.\n      In analogy with matrices, some texts will define a linear map  \n      to be invertible if there exists a linear map   such that\n       .\n      By  , this implies that   and   are bijections,\n      and therefore   and   are invertible, with  .\n     \n      We end this section with a discussion of inverses and composition.\n      If we have isomorphisms   and  ,\n      what can we say about the composition  ?\n     \n          The inverse of the composition   is  .\n         \n         \n          The composition of   and its inverse should be the identity.\n          Is that the case here? (Remember that order of composition matters!)\n         \n       \n      We know that the composition of two linear transformations is a linear transformation,\n      and that the composition of two bijections is a bijection.\n      It follows that the composition of two isomorphisms is an isomorphism!\n     \n      With this observation, one can show that the relation of isomorphism is an equivalence relation.\n      Two finite-dimensional vector spaces belong to the same equivalence class if and only if they have the same dimension.\n      Here, we see again the importance of dimension in linear algebra.\n     \n        If you got that last exercise incorrect, consider the following:\n        given   and  , we have  .\n        Since   is an isomorphism, it has an inverse, which goes from   to  .\n        This inverse can be expressed in terms of the inverses of   and  ,\n        but we're going backwards, so we have to apply them in the opposite order!\n         \n       "
},
{
  "id": "def-isomorphism",
  "level": "2",
  "url": "sec-isomorphism.html#def-isomorphism",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "isomorphism isomorphic "
},
{
  "id": "thm-iso-dimension",
  "level": "2",
  "url": "sec-isomorphism.html#thm-iso-dimension",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "",
  "body": "\n          For any finite-dimensional vector spaces   and  ,\n            if any only if  .\n         Strategy \n          We again need to prove both directions of an  if and only if .\n          If an isomorphism exists, can you see how to use  \n          to show the dimensions are equal?\n         \n          If the dimensions are equal, you need to construct an isomorphism.\n          Since   and   are finite-dimensional, you can choose a basis for each space.\n          What can you say about the sizes of these bases?\n          How can you use them to define a linear transformation?\n          (You might want to remind yourself what   says.)\n         \n          If   is a bijection, then it is both injective and surjective.\n          Since   is injective,  ,\n          by  Exercise .\n          By this same exercise,  since   is surjective, we must have  .\n          It follows that  .\n         \n          Suppose now that  .\n          Then we can choose bases   of  ,\n          and   of  .\n            then guarantees the existence of a linear map  \n          such that   for each  .\n          Repeating the arguments of   shows that   is a bijection.\n         "
},
{
  "id": "thm-iso-rn",
  "level": "2",
  "url": "sec-isomorphism.html#thm-iso-rn",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": "\n          If  , then  .\n         "
},
{
  "id": "ex-match-iso",
  "level": "2",
  "url": "sec-isomorphism.html#ex-match-iso",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "\n          Match each vector space on the left with an isomorphic vector space on the right.\n         \n         \n           \n           \n         \n         \n           \n           \n         \n         \n           \n           \n         \n         \n           \n           \n         \n       "
},
{
  "id": "p-735",
  "level": "2",
  "url": "sec-isomorphism.html#p-735",
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
  "body": "coefficient isomorphism "
},
{
  "id": "fig_transformation_matrix",
  "level": "2",
  "url": "sec-isomorphism.html#fig_transformation_matrix",
  "type": "Figure",
  "number": "2.3.6",
  "title": "",
  "body": "Defining the matrix of a linear map with respect to choices of basis. "
},
{
  "id": "p-740",
  "level": "2",
  "url": "sec-isomorphism.html#p-740",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "sec-isomorphism.html#exercise-49",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": "\n          Show that the composition of two linear maps is again a linear map.\n         \n          Suppose we have linear maps  ,\n          and let  . Then\n           ,\n          and for any scalar  ,\n           .\n\n         "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "sec-isomorphism.html#exercise-50",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": "\n          Given transformations   and  , show that:\n           \n               \n                 \n               \n             \n               \n                 \n               \n             \n         \n          This is simpler than it looks!\n          It's mostly a matter of chasing the definitions: see  .\n         "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "sec-isomorphism.html#exercise-51",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "",
  "body": "\n          Let   be a bijective linear transformation.\n          Show that   is a linear transformation.\n         \n          Since   is a bijection, every   can be associated with some  .\n         \n          Let  .\n          Then there exist    with  .\n          We then have\n           .\n          For any scalar  , we similarly have\n           .\n         "
},
{
  "id": "rem-composition-product",
  "level": "2",
  "url": "sec-isomorphism.html#rem-composition-product",
  "type": "Remark",
  "number": "2.3.10",
  "title": "",
  "body": "\n          With this connection between linear maps (in general) and matrices,\n          it can be worthwhile to pause and consider invertibility in the context of matrices.\n          Recall that an   matrix   is  invertible  if there exists a matrix  \n          such that   and  .\n         \n          The same definition can be made for linear maps.\n          We've defined what it means for a map   to be invertible as a  function .\n          In particular, we relied on the fact that any bijection has an inverse.\n         \n          Let   be an  \n          matrix, and let   be an   matrix. Then we have linear maps\n           ,\n          and the composition   satisfies\n           .\n          Note that the rules given in elementary linear algebra, for the relative sizes of matrices that can be multiplied,\n          are simply a manifestation of the fact that to compose functions,\n          the range of the first must be contained in the domain of the second.\n         "
},
{
  "id": "ex-inverse-identity",
  "level": "2",
  "url": "sec-isomorphism.html#ex-inverse-identity",
  "type": "Exercise",
  "number": "2.3.11",
  "title": "",
  "body": "\n          Show that if  , then   is surjective and   is injective.\n          Conclude that if   and  , then   and   are both bijections.\n         \n          This is true even if the functions aren't linear.\n          In fact, you've probably seen the proof in an earlier course!\n         "
},
{
  "id": "ex-tf-iso",
  "level": "2",
  "url": "sec-isomorphism.html#ex-tf-iso",
  "type": "Exercise",
  "number": "2.3.12",
  "title": "",
  "body": "\n          The inverse of the composition   is  .\n         \n         \n          The composition of   and its inverse should be the identity.\n          Is that the case here? (Remember that order of composition matters!)\n         \n       "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "sec-isomorphism.html#remark-11",
  "type": "Remark",
  "number": "2.3.13",
  "title": "",
  "body": "\n        If you got that last exercise incorrect, consider the following:\n        given   and  , we have  .\n        Since   is an isomorphism, it has an inverse, which goes from   to  .\n        This inverse can be expressed in terms of the inverses of   and  ,\n        but we're going backwards, so we have to apply them in the opposite order!\n         \n       "
},
{
  "id": "worksheet-transformations",
  "level": "1",
  "url": "worksheet-transformations.html",
  "type": "Worksheet",
  "number": "2.4",
  "title": "Worksheet: matrix transformations",
  "body": "Worksheet: matrix transformations \n        This worksheet deals with matrix transformations, and in particular,\n        kernel and image.\n        The goal is to understand these important subspaces in a familiar context.\n       \n        Let   be an   matrix.\n        We can use   to define a transformation  \n        given by  , where we view  \n        as an   column vector.\n       kernel image \n        Because   is a linear transformation,\n        we can compute it as long as we're given its values on a basis.\n        If   is a basis for  ,\n        then for any   there exist unique scalars  \n        such that\n         ,\n        and since   is linear, we have\n         .\n       \n        The main challenge, computationally speaking, is that if our basis is not the standard basis,\n        some effort will be required to write   in terms of the given basis.\n       \n          Confirm that\n           \n          is a basis for  .\n         \n      To assist with solving this problem, a code cell is provided below.\n      Recall that you can enter the matrix  \n      as  Matrix([[a,b,c],[d,e,f],[g,h,i]])  or as  Matrix(3,3,[a,b,c,d,e,f,g,h,i]) .\n     \n      The reduced row-echeleon form of  A  is given by  A.rref() .\n      The product of matrices  A  and  B  is simply  A*B .\n      The inverse of a matrix  A  can be found using  A.inv()  or simply  A**(-1) .\n     \n      One note of caution: in the  HTML  worksheet,\n      if you don't import  sympy  as your first line of code,\n      you'll instead use Sage syntax. Sage uses  A.inverse()  instead of  A.inv() .\n     \n      In a Jupyter notebook, remember you can generate additional code cells by clicking on the  +  button.\n     \n      You can also use the cell below to write down any necessary explanation.\n     \n          Write each of the standard basis vectors in terms of this basis.\n         \n           Suggestion:  in each case, this can be done by solving a matrix equation,\n          using the inverse of an appropriate matrix.\n         \n      A linear transformation   is now defined as follows:\n       .\n     \n      Let   denote the standard basis for  .\n     \n          Determine   for  ,\n          and in so doing, determine the matrix   such that  .\n         \n          Let   be the matrix whose columns are given by the values of   on the basis  .\n          (This would be the matrix of   if   was actually the standard basis.)\n          Let   be the matrix whose inverse you used to solve part (b).\n          Can you find a way to combine these matrices to obtain the matrix  ?\n          If so, explain why your result makes sense.\n         \n      Next we will compute the kernel and image of the transformation from the previous exercises.\n      Recall that when solving a homogeneous system  ,\n      we find the  RREF  of  ,\n      and any variables whose columns do not contain a leading 1 are assigned as parameters.\n      We then express the general solution   in terms of those parameters.\n     column space \n      Let   be the linear transformation given in the previous exercises.\n     \n          Determine the kernel of  .\n         \n          Determine the image of  .\n         Dimension Theorem "
},
{
  "id": "p-767",
  "level": "2",
  "url": "worksheet-transformations.html#p-767",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "kernel "
},
{
  "id": "p-768",
  "level": "2",
  "url": "worksheet-transformations.html#p-768",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "image "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "worksheet-transformations.html#exercise-54",
  "type": "Worksheet Exercise",
  "number": "2.4.1",
  "title": "",
  "body": "\n          Confirm that\n           \n          is a basis for  .\n         "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "worksheet-transformations.html#exercise-55",
  "type": "Worksheet Exercise",
  "number": "2.4.2",
  "title": "",
  "body": "\n          Write each of the standard basis vectors in terms of this basis.\n         \n           Suggestion:  in each case, this can be done by solving a matrix equation,\n          using the inverse of an appropriate matrix.\n         "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "worksheet-transformations.html#exercise-56",
  "type": "Worksheet Exercise",
  "number": "2.4.3",
  "title": "",
  "body": "\n          Determine   for  ,\n          and in so doing, determine the matrix   such that  .\n         "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "worksheet-transformations.html#exercise-57",
  "type": "Worksheet Exercise",
  "number": "2.4.4",
  "title": "",
  "body": "\n          Let   be the matrix whose columns are given by the values of   on the basis  .\n          (This would be the matrix of   if   was actually the standard basis.)\n          Let   be the matrix whose inverse you used to solve part (b).\n          Can you find a way to combine these matrices to obtain the matrix  ?\n          If so, explain why your result makes sense.\n         "
},
{
  "id": "p-784",
  "level": "2",
  "url": "worksheet-transformations.html#p-784",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column space "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "worksheet-transformations.html#exercise-58",
  "type": "Worksheet Exercise",
  "number": "2.4.5",
  "title": "",
  "body": "\n          Determine the kernel of  .\n         "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "worksheet-transformations.html#exercise-59",
  "type": "Worksheet Exercise",
  "number": "2.4.6",
  "title": "",
  "body": "\n          Determine the image of  .\n         "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "worksheet-transformations.html#exercise-60",
  "type": "Worksheet Exercise",
  "number": "2.4.7",
  "title": "",
  "body": "Dimension Theorem "
},
{
  "id": "worksheet-recurrence",
  "level": "1",
  "url": "worksheet-recurrence.html",
  "type": "Worksheet",
  "number": "2.5",
  "title": "Worksheet: linear recurrences",
  "body": "Worksheet: linear recurrences \n        In this worksheet, we will sketch some of the basic ideas related to linear recurrence.\n        For further reading, and more information, the reader is directed to Section 7.5 of\n         Linear Algebra with Applications , by Keith Nicholson.\n       \n        A  linear recurrence  of length   is a sequence   that is recursively defined,\n        with successive terms in the sequence defined in terms of the previous   terms,\n        via a linear recursion formula of the form\n         .\n        (Here we assume   to have the appropriate length.)\n        The most famous example of a linear recurrence is, of course, the Fibonacci sequence,\n        which is defined by  , and   for all  .\n       \n        Recall from   that the set of all sequences of real numbers\n          is a vector space, denoted by  .\n       \n        The set of all sequences satisfying a linear recursion of length  \n        form a subspace   of the vector space  \n        of all real-valued sequences. (Can you prove this?)\n        Since each sequence is determined by the   initial conditions  ,\n        each such subspace   is isomorphic to  .\n       \n        The goal of this worksheeet is to understand how to obtain  closed form \n        expressions for a recursively defined sequence using linear algebra.\n        That is, rather than having to generate terms of the sequence one-by-one using the recursion formula,\n        we want a function of   that will produce each term   in the sequence.\n       \n        Since we know the dimension of the space   of solutions, it suffices to understand two things:\n         \n             \n              How to produce a basis for  .\n             \n           \n             \n              How to write a given solution in terms of that basis.\n             \n           \n       \n        Consider a geometric sequence, of the form  .\n        If this sequence satisfies the recursion\n         ,\n        then (with  )\n         ,\n        or  .\n        That is,   is a root of the associated polynomial\n         .\n       \n        Thus, if the associated polynomial   has roots  ,\n        we know that the sequences   satisfy our recursion.\n        The remaining difficulty is what to do when   has repeated roots.\n        We will not prove it here, but if   is a factor of  ,\n        then the sequences  \n        all satisfy the recursion.\n       \n        If we can factor   completely over the reals as\n         ,\n        then a basis for the space of solutions is given by\n         .\n       \n        Once we have a basis, we can apply the given coefficients to determine how\n        to write a particular sequence as a linear combination of the basis vectors.\n       \n          Find a basis for the space   of sequences   satisfying the recurrence\n           .\n         \n          Then find a formula for the sequence satisfying the initial conditions  .\n         \n      To solve this problem, you may use Python code, as outlined below.\n      To get started, load the functions you'll need from the SymPy library.\n     \n      First, determine the associated polynomial for the recurrence.\n     \n      (Input your polynomial in the cell below. To get proper formatting, wrap your math in  $  delimiters,\n      and can use  ^  to enter exponents.)\n     \n      Next, factor the polynomial. You can do this using the  factor()  command.\n      In Python, you will need to enter  **  for the exponents.\n     \n      In the cell below, list the roots of the polynomial,\n      and the resulting basis   for the space   of solutions.\n      Recall that if   is a root of the polynomial,\n      then   will be a basis vector for the vector space   of solutions.\n      You may wish to confirm that each of your basis sequences indeed satisfies our recursion.\n     \n      Next, let   be the recursion that satisfies the given initial conditions.\n      We want to write   in terms of the basis we just found.\n      Since our basis has three elements, there is an isomorphism\n       , where   is equal to the sequence   in  \n      that satisfies the initial conditions  .\n      Thus, our desired sequence is given by  .\n     \n      Let   be the vectors such that\n       .\n      (That is, write out the first three terms in each sequence in your basis to get three vectors.)\n      We then need to find scalars   such that\n       .\n      We will then have\n       ,\n      and we recall that the sequences   are the sequences in our basis  .\n     \n      Set up this system, and then use the computer to solve.\n      Let  A  be the coefficient matrix for the system,\n      which you will need to input into the cell below,\n      and let  B  be the column vector containing the initial conditions.\n     \n      Using the solution above, state the answer to this exercise.\n     \n      Now, we leave you with a few more exercises.\n      Recall that if the associated polynomial for your recursion has a repeated root  ,\n      then your basis will include the sequences  .\n     \n          Find a basis for the space   of sequences   satisfying the recurrence\n           .\n          Then find a formula for the sequence satisfying the initial conditions  .\n         \n          Find a basis for the space   of sequences   satisfying the recurrence\n           .\n          Then find a formula for the sequence satisfying the initial conditions  .\n         "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "worksheet-recurrence.html#exercise-61",
  "type": "Worksheet Exercise",
  "number": "2.5.1",
  "title": "",
  "body": "\n          Find a basis for the space   of sequences   satisfying the recurrence\n           .\n         \n          Then find a formula for the sequence satisfying the initial conditions  .\n         "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "worksheet-recurrence.html#exercise-62",
  "type": "Worksheet Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "\n          Find a basis for the space   of sequences   satisfying the recurrence\n           .\n          Then find a formula for the sequence satisfying the initial conditions  .\n         "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "worksheet-recurrence.html#exercise-63",
  "type": "Worksheet Exercise",
  "number": "2.5.3",
  "title": "",
  "body": "\n          Find a basis for the space   of sequences   satisfying the recurrence\n           .\n          Then find a formula for the sequence satisfying the initial conditions  .\n         "
},
{
  "id": "sec-orthogonal-sets",
  "level": "1",
  "url": "sec-orthogonal-sets.html",
  "type": "Section",
  "number": "3.1",
  "title": "Orthogonal sets of vectors",
  "body": "Orthogonal sets of vectors \n      You may recall from elementary linear algebra, or a calculus class,\n      that vectors in   or   are considered to be quantities with both  magnitude  and  direction .\n      Interestingly enough, neither of these properties is inherent to a general vector space.\n      The vector space axioms specify only algebra; they say nothing about geometry.\n      (What, for example, should be the  angle  between two polynomials?)\n     \n      Because vector algebra is often introduced as a consequence of geometry (like the  tip-to-tail  rule),\n      you may not have thought all that carefully about what, exactly,\n      is responsible for making the connection between algebra and geometry.\n      It turns out that the missing link is the humble dot product.\n     \n      You probably encountered the following result, perhaps as a consequence of the law of cosines:\n      for any two vectors  ,\n       ,\n      where   is the angle between   and  .\n      Here we see both magnitude and direction (encoded by the angle) defined in terms of the dot product.\n     \n      While it is possible to generalize the idea of the dot product to something called an  inner product ,\n      we will first focus on the basic dot product in  .\n      Once we have a good understanding of things in that setting, we can move on to consider the abstract counterpart.\n     Basic definitions and properties \n      For most of this chapter (primarily for typographical reasons) we will denote elements of  \n      as ordered  -tuples   rather than as column vectors.\n     dot product norm \n      Note that both the dot product and the norm produce  scalars .\n      Through the Pythagorean Theorem, we recognize the norm as the length of  .\n      The dot product can still be thought of as measuring the angle between vectors,\n      although the simple geometric proof used in two dimensions is not that easily translated to   dimensions.\n      At the very least, the dot product lets us extend the notion of right angles to higher dimensions.\n     orthogonal \n      It should be no surprise that all the familiar properties of the dot product work just as well in any dimension.\n      The folowing properties can be confirmed by direct computation,\n      so the proof is left as an exercise.\n     \n          For any vectors  ,\n           \n               \n                For any scalar  ,  \n               \n             \n               \n                 , and   if and only if  \n               \n             \n         \n          The above properties, when properly abstracted, become the defining properties of a (real) inner product.\n          (A complex inner product also involves complex conjugates.)\n          For a general inner product, the requirement  \n          is referred to as being  positive-definite ,\n          and the property that only the zero vector produces zero when dotted with itself is called  nondegenerate .\n          Note that we have the following connection between norm and dot product:\n           .\n          For a general inner product, this can be used as a  definition  of the norm associated to an inner product.\n         \n          Given that  , and  ,\n          compute  .\n         \n          Use properties of the dot product to expand and simplify.\n         \n          Note that the distributive property, together with symmetry,\n          let us handle this dot product using what is essentially  FOIL :\n           .\n         \n          Show that for any vectors  , we have\n           .\n         \n          Use properties of the dot product to expand and simplify.\n         \n          This is simply an exercise in properties of the dot product. We have\n           .\n         \n          Suppose  .\n          Prove that   if and only if   for each  .\n         \n          Don't forget to prove both directions!\n          Note that the hypothesis allows you to write   as a linear combination of the  .\n         \n          If  , then the result follows immediately from the dot product formula in  .\n          Conversely, suppose   for each  .\n          Since the   span  , there must exist scalars  \n          such that  . But then\n           .\n         \n      There are two important inequalities associated to the dot product and norm.\n      We state them both in the following theorem, without proof.\n     \n          Let   be any vectors in  .\n          Then\n           \n               \n             \n               \n             \n         \n      The first of the above inequalities is called the  Cauchy-Schwarz inequality ,\n      which be viewed as a manifestation of the formula\n       ,\n      since after all,   for any angle  .\n     \n      The usual proof involves some algebraic trickery;\n      the interested reader is invited to search online for the Cauchy-Schwarz inequality,\n      where they will find no shortage of websites offering proofs.\n     \n      The second result, called the   triangle inequality ,\n      follows immediately from the Cauchy-Scwarz inequality and  :\n       .\n     \n      The triangle inequality gets its name from the  tip-to-tail  picture for vector addition.\n      Essentially, it tells us that the length of any side of a triangle must be less than the sum of the lengths of the other two sides.\n      The importance of the triangle inequality is that it tells us that the norm can be used to define distance.\n     distance \n        Using properties of the norm, we can show that this distance function meets the criteria of what's called a  metric .\n        A metric is any function that takes a pair of vectors (or points) as input, and returns a number as output,\n        with the following properties:\n         \n             \n                for any  \n             \n           \n             \n               , and   if and only if  \n             \n           \n             \n                for any  \n             \n           \n        We leave it as an exercise to confirm that the distance function defined above is a metric.\n       \n        In more advanced courses (  topology or analysis) you might go into detailed study of these structures.\n        There are three interrelated structures: inner products, norms, and metrics.\n        You might consider questions like: does every norm come from an inner product? Does every metric come from a norm?\n        (No.) Things get even more interesting for infinite-dimensional spaces.\n        Of special interest are spaces such as  Hilbert spaces  (a special type of infinite-dimensional inner product space)\n        and  Banach spaces  (a special type of infinite-dimensional normed space).\n       \n          Select all vectors that are orthogonal to the vector  \n         \n         \n           \n               \n             \n           \n             \n              Yes!  .\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              You should find that the dot product is  , not  ,\n              so these vectors are not orthogonal.\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              You might be tempted to say that the zero vector is orthogonal to everything,\n              but we can't compare vectors from different vector spaces!\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              Yes! We have to be careful of signs here:  .\n             \n           \n         \n       \n          If   is orthogonal to   and   is orthogonal to  ,\n          then   is orthogonal to  .\n         \n         \n          Consider  ,  , and  .\n         \n       Orthogonal sets of vectors \n      In  , we learn that linear independence and span are important concepts associated to a set of vectors.\n      In this chapter, we learn what it means for a set of vectors to be  orthogonal ,\n      and try to understand why this concept is just as important as independence and span.\n     orthogonal \n          Show that the following is an orthogonal subset of  .\n           \n          Can you find a fourth vector that is orthogonal to each vector in this set?\n         \n          The dot product of the fourth vector with each vector above must be zero.\n          Can you turn this requirement into a system of equations?\n         \n          Clearly, all three vectors are nonzero. To confirm the set is orthogonal, we simply compute dot products:\n           .\n         \n          To find a fourth vector, we proceed as follows. Let  .\n          We want   to be orthogonal to the three vectors in our set.\n          Computing dot products, we must have:\n           .\n          This is simply a homogeneous system of three equations in four variables.\n          Using the Sage cell below, we find that our vector must satisfy\n           .\n         \n          One possible nonzero solution is to take  , giving  .\n          We'll leave the verification that this vector works as an exercise.\n         \n          If   and   are orthogonal sets of vectors in  ,\n          then   is an orthogonal set of vectors.\n         \n         \n          Try to construct an example. The vector   has to be orthogonal to  ,\n          but is there any reason it has to be orthogonal to   or  ?\n         \n       \n      The requirement that the vectors in an orthogonal set be nonzero is partly because the alternative would be boring,\n      and partly because it lets us state the following theorem.\n     \n          Any orthogonal set of vectors is linearly independent.\n         Strategy \n          Any proof of linear independence should start by defining our set of vectors,\n          and assuming that a linear combination of these vectors is equal to the zero vector,\n          with the goal of showing that the scalars have to be zero.\n         \n          Set up the equation (say,  ),\n          with the assumption that your set of vectors is orthogonal.\n          What happens if you take the dot product of both sides with one of these vectors?\n         \n          Suppose   is orthogonal, and suppose\n           \n          for scalars  .\n          Taking the dot product of both sides of the above equation with   gives\n           .\n          Since  , we must have  .\n          We similarly find that all the remaining scalars are zero by taking the dot product with  .\n         \n      Another useful consequence of orthogonality: in two dimensions,\n      we have the Pythagorean Theorem for right-angled triangles.\n      If the  legs  of the triangle are identified with vectors   and  ,\n      and the hypotenuse with  , then  ,\n      since  .\n     \n      In   dimensions, we have the following, which follows from the fact that all  cross terms \n      (dot products of different vectors) will vanish.\n     Pythagorean Theorem \n          For any orthogonal set of vectors   we have\n           .\n         Strategy \n        Remember that\n         ,\n        and use the distributive property of the dot product,\n        along with the fact that each pair of different vectors is orthogonal.\n       \n      Our final initial result about orthogonal sets of vectors relates to span.\n      In general, we know that if  ,\n      then it is possible to solve for scalars  \n      such that  .\n      The trouble is that finding these scalars generally involves setting up,\n      and then solving, a system of linear equations.\n      The great thing about orthogonal sets of vectors is that we can provide explicit formulas for the scalars.\n     Fourier expansion theorem \n          Let   be an orthogonal set of vectors.\n          For any  , we have\n           .\n         Strategy \n          Take the same approach you used in the proof of  ,\n          but this time, with a nonzero vector on the right-hand side.\n         \n          Let  .\n          Taking the dot product of both sides of this equation with  \n          gives\n           ,\n          since the dot product of   with   for   is zero.\n         \n      One use of   is determining whether or not a given vector is in the span of an orthogonal set.\n      If it is in the span, then its coefficients must satisfy the Fourier expansion formula.\n      Therefore, if we compute the right hand side of the above formula and do not get our original vector, then that vector must not be in the span.\n     \n          Determine whether or not the vectors  \n          belong to the span of the vectors  .\n         \n          (We confirmed that   is an orthogonal set in  .)\n         \n          We compute\n           ,\n          so  .\n         \n          On the other hand, repeating the same calculation with  , we find\n           ,\n          so  .\n         \n          Soon, we'll see that the quantity we computed when showing that  \n          is, in fact, the  orthogonal projection  of   onto the subspace  .\n         unit vector \n          Match each vector on the left with a parallel unit vector on the right.\n         \n         \n          Remember that a parallel vector is a scalar multiple of the one you started with.\n         \n       \n         \n           \n           \n         \n         \n           \n           \n         \n         \n           \n           \n         \n         \n           \n           \n         \n       orthonormal basis \n          In   we saw that the set\n           \n          is orthogonal. Since it's orthogonal, it must be independent,\n          and since it's a set of four independent vectors in  ,\n          it must be a basis. To get an orthonormal basis, we normalize each vector:\n           .\n          The set   is then an orthonormal basis of  .\n         \n      The process of creating unit vectors does typically introduce square root coefficients in our vectors.\n      This can seem undesirable, but there remains value in having an orthonormal basis.\n      For example, suppose we wanted to write the vector   in terms of our basis.\n      We can quickly compute\n       ,\n      and so\n       .\n      There's still work to be done, but it is comparatively simpler than solving the corresponding system of equations.\n     "
},
{
  "id": "def-dot-prod-norm",
  "level": "2",
  "url": "sec-orthogonal-sets.html#def-dot-prod-norm",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "dot product norm "
},
{
  "id": "def-orthogonal",
  "level": "2",
  "url": "sec-orthogonal-sets.html#def-orthogonal",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "thm-dot-props",
  "level": "2",
  "url": "sec-orthogonal-sets.html#thm-dot-props",
  "type": "Theorem",
  "number": "3.1.3",
  "title": "",
  "body": "\n          For any vectors  ,\n           \n               \n                For any scalar  ,  \n               \n             \n               \n                 , and   if and only if  \n               \n             \n         "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "sec-orthogonal-sets.html#remark-12",
  "type": "Remark",
  "number": "3.1.4",
  "title": "",
  "body": "\n          The above properties, when properly abstracted, become the defining properties of a (real) inner product.\n          (A complex inner product also involves complex conjugates.)\n          For a general inner product, the requirement  \n          is referred to as being  positive-definite ,\n          and the property that only the zero vector produces zero when dotted with itself is called  nondegenerate .\n          Note that we have the following connection between norm and dot product:\n           .\n          For a general inner product, this can be used as a  definition  of the norm associated to an inner product.\n         "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "sec-orthogonal-sets.html#exercise-64",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "",
  "body": "\n          Given that  , and  ,\n          compute  .\n         \n          Use properties of the dot product to expand and simplify.\n         \n          Note that the distributive property, together with symmetry,\n          let us handle this dot product using what is essentially  FOIL :\n           .\n         "
},
{
  "id": "ex-norm-sum-square",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-norm-sum-square",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "",
  "body": "\n          Show that for any vectors  , we have\n           .\n         \n          Use properties of the dot product to expand and simplify.\n         \n          This is simply an exercise in properties of the dot product. We have\n           .\n         "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "sec-orthogonal-sets.html#exercise-66",
  "type": "Exercise",
  "number": "3.1.7",
  "title": "",
  "body": "\n          Suppose  .\n          Prove that   if and only if   for each  .\n         \n          Don't forget to prove both directions!\n          Note that the hypothesis allows you to write   as a linear combination of the  .\n         \n          If  , then the result follows immediately from the dot product formula in  .\n          Conversely, suppose   for each  .\n          Since the   span  , there must exist scalars  \n          such that  . But then\n           .\n         "
},
{
  "id": "thm-cauchy-triangle",
  "level": "2",
  "url": "sec-orthogonal-sets.html#thm-cauchy-triangle",
  "type": "Theorem",
  "number": "3.1.8",
  "title": "",
  "body": "\n          Let   be any vectors in  .\n          Then\n           \n               \n             \n               \n             \n         "
},
{
  "id": "def-vector-distance",
  "level": "2",
  "url": "sec-orthogonal-sets.html#def-vector-distance",
  "type": "Definition",
  "number": "3.1.9",
  "title": "",
  "body": "distance "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-orthogonal-sets.html#remark-13",
  "type": "Remark",
  "number": "3.1.10",
  "title": "",
  "body": "\n        Using properties of the norm, we can show that this distance function meets the criteria of what's called a  metric .\n        A metric is any function that takes a pair of vectors (or points) as input, and returns a number as output,\n        with the following properties:\n         \n             \n                for any  \n             \n           \n             \n               , and   if and only if  \n             \n           \n             \n                for any  \n             \n           \n        We leave it as an exercise to confirm that the distance function defined above is a metric.\n       \n        In more advanced courses (  topology or analysis) you might go into detailed study of these structures.\n        There are three interrelated structures: inner products, norms, and metrics.\n        You might consider questions like: does every norm come from an inner product? Does every metric come from a norm?\n        (No.) Things get even more interesting for infinite-dimensional spaces.\n        Of special interest are spaces such as  Hilbert spaces  (a special type of infinite-dimensional inner product space)\n        and  Banach spaces  (a special type of infinite-dimensional normed space).\n       "
},
{
  "id": "ex-mc-ortho-vect",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-mc-ortho-vect",
  "type": "Exercise",
  "number": "3.1.11",
  "title": "",
  "body": "\n          Select all vectors that are orthogonal to the vector  \n         \n         \n           \n               \n             \n           \n             \n              Yes!  .\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              You should find that the dot product is  , not  ,\n              so these vectors are not orthogonal.\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              You might be tempted to say that the zero vector is orthogonal to everything,\n              but we can't compare vectors from different vector spaces!\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              Yes! We have to be careful of signs here:  .\n             \n           \n         \n       "
},
{
  "id": "ex-tf-ortho-vect",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-tf-ortho-vect",
  "type": "Exercise",
  "number": "3.1.12",
  "title": "",
  "body": "\n          If   is orthogonal to   and   is orthogonal to  ,\n          then   is orthogonal to  .\n         \n         \n          Consider  ,  , and  .\n         \n       "
},
{
  "id": "def-ortho-set",
  "level": "2",
  "url": "sec-orthogonal-sets.html#def-ortho-set",
  "type": "Definition",
  "number": "3.1.13",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "ex-orthogonal-set",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-orthogonal-set",
  "type": "Exercise",
  "number": "3.1.14",
  "title": "",
  "body": "\n          Show that the following is an orthogonal subset of  .\n           \n          Can you find a fourth vector that is orthogonal to each vector in this set?\n         \n          The dot product of the fourth vector with each vector above must be zero.\n          Can you turn this requirement into a system of equations?\n         \n          Clearly, all three vectors are nonzero. To confirm the set is orthogonal, we simply compute dot products:\n           .\n         \n          To find a fourth vector, we proceed as follows. Let  .\n          We want   to be orthogonal to the three vectors in our set.\n          Computing dot products, we must have:\n           .\n          This is simply a homogeneous system of three equations in four variables.\n          Using the Sage cell below, we find that our vector must satisfy\n           .\n         \n          One possible nonzero solution is to take  , giving  .\n          We'll leave the verification that this vector works as an exercise.\n         "
},
{
  "id": "ex-tf-ortho-vect2",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-tf-ortho-vect2",
  "type": "Exercise",
  "number": "3.1.15",
  "title": "",
  "body": "\n          If   and   are orthogonal sets of vectors in  ,\n          then   is an orthogonal set of vectors.\n         \n         \n          Try to construct an example. The vector   has to be orthogonal to  ,\n          but is there any reason it has to be orthogonal to   or  ?\n         \n       "
},
{
  "id": "thm-ortho-independent",
  "level": "2",
  "url": "sec-orthogonal-sets.html#thm-ortho-independent",
  "type": "Theorem",
  "number": "3.1.16",
  "title": "",
  "body": "\n          Any orthogonal set of vectors is linearly independent.\n         Strategy \n          Any proof of linear independence should start by defining our set of vectors,\n          and assuming that a linear combination of these vectors is equal to the zero vector,\n          with the goal of showing that the scalars have to be zero.\n         \n          Set up the equation (say,  ),\n          with the assumption that your set of vectors is orthogonal.\n          What happens if you take the dot product of both sides with one of these vectors?\n         \n          Suppose   is orthogonal, and suppose\n           \n          for scalars  .\n          Taking the dot product of both sides of the above equation with   gives\n           .\n          Since  , we must have  .\n          We similarly find that all the remaining scalars are zero by taking the dot product with  .\n         "
},
{
  "id": "thm-pythagoras",
  "level": "2",
  "url": "sec-orthogonal-sets.html#thm-pythagoras",
  "type": "Theorem",
  "number": "3.1.17",
  "title": "Pythagorean Theorem.",
  "body": "Pythagorean Theorem \n          For any orthogonal set of vectors   we have\n           .\n         "
},
{
  "id": "proof-42",
  "level": "2",
  "url": "sec-orthogonal-sets.html#proof-42",
  "type": "Proof",
  "number": "3.1.2.1",
  "title": "Strategy.",
  "body": "Strategy \n        Remember that\n         ,\n        and use the distributive property of the dot product,\n        along with the fact that each pair of different vectors is orthogonal.\n       "
},
{
  "id": "thm-fourier-expansion",
  "level": "2",
  "url": "sec-orthogonal-sets.html#thm-fourier-expansion",
  "type": "Theorem",
  "number": "3.1.18",
  "title": "Fourier expansion theorem.",
  "body": "Fourier expansion theorem \n          Let   be an orthogonal set of vectors.\n          For any  , we have\n           .\n         Strategy \n          Take the same approach you used in the proof of  ,\n          but this time, with a nonzero vector on the right-hand side.\n         \n          Let  .\n          Taking the dot product of both sides of this equation with  \n          gives\n           ,\n          since the dot product of   with   for   is zero.\n         "
},
{
  "id": "ex-test-span",
  "level": "2",
  "url": "sec-orthogonal-sets.html#ex-test-span",
  "type": "Exercise",
  "number": "3.1.19",
  "title": "",
  "body": "\n          Determine whether or not the vectors  \n          belong to the span of the vectors  .\n         \n          (We confirmed that   is an orthogonal set in  .)\n         \n          We compute\n           ,\n          so  .\n         \n          On the other hand, repeating the same calculation with  , we find\n           ,\n          so  .\n         \n          Soon, we'll see that the quantity we computed when showing that  \n          is, in fact, the  orthogonal projection  of   onto the subspace  .\n         "
},
{
  "id": "p-890",
  "level": "2",
  "url": "sec-orthogonal-sets.html#p-890",
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
  "number": "3.1.20",
  "title": "",
  "body": "\n          Match each vector on the left with a parallel unit vector on the right.\n         \n         \n          Remember that a parallel vector is a scalar multiple of the one you started with.\n         \n       \n         \n           \n           \n         \n         \n           \n           \n         \n         \n           \n           \n         \n         \n           \n           \n         \n       "
},
{
  "id": "def-onb",
  "level": "2",
  "url": "sec-orthogonal-sets.html#def-onb",
  "type": "Definition",
  "number": "3.1.21",
  "title": "",
  "body": "orthonormal basis "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec-orthogonal-sets.html#example-11",
  "type": "Example",
  "number": "3.1.22",
  "title": "",
  "body": "\n          In   we saw that the set\n           \n          is orthogonal. Since it's orthogonal, it must be independent,\n          and since it's a set of four independent vectors in  ,\n          it must be a basis. To get an orthonormal basis, we normalize each vector:\n           .\n          The set   is then an orthonormal basis of  .\n         "
},
{
  "id": "sec-gram-schmidt",
  "level": "1",
  "url": "sec-gram-schmidt.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Gram-Schmidt Procedure",
  "body": "The Gram-Schmidt Procedure \n    Given an nonzero vector   and a vector  ,\n    the  projection  of   onto   is given by\n     .\n    Note that this looks just like one of the terms in  .\n   \n    The motivation for the projection is as follows:\n    Given the vectors   and  ,\n    we want to find vectors   and   with the following properties:\n     \n         \n          The vector   is parallel to the vector  .\n         \n       \n         \n          The vectors   and   add to  .\n         \n       \n         \n          The vectors   and   are orthogonal.\n         \n       \n   Illustrating the concept of orthogonal projection. \n        The diagram shows two given vectors u and v, along with vectors w and z.\n        The vectors w is parallel to u, while the vector z is orthogonal to u,\n        and the two vectors sum to the vector v.\n        The vector w is the projection of v onto u.\n       \n    Motivation for the construction comes from Physics,\n    where one needs to be able to decompose a force vector into parts that are parallel\n    and orthogonal to a given direction.\n   \n    To derive the formula, we note that the vector   must be a scalar multiple of  ,\n    since it is parallel to  , so   for some scalar  .\n    Next, since  ,  , and   form a right triangle,\n     \n      Assuming that the angle   is acute. If it is obtuse,\n      the scalar   is negative, but so is the dot product, so the signs work out.\n     \n    we know that  .\n    But  .\n    Plugging this in, and solving for  ,\n    we get the formula in  .\n   \n        On the left, pairs of vectors   are given,\n        and on the right, pairs of vectors  .\n        Match each pair on the left with the pair on the right such that\n         , and  .\n       \n       \n        You can solve this problem without actually computing any projections.\n        Think about the relationships between the different vectors.\n       \n     \n       \n         \n           ,  \n         \n         \n           ,  \n         \n       \n       \n         \n           ,  \n         \n         \n           ,  \n         \n       \n       \n         \n           ,  \n         \n         \n           ,  \n         \n       \n     \n    An important part of the projection construction is that the vector\n      is orthogonal to  .\n    Our next result is a generalization of this observation.\n   Orthogonal Lemma \n        Let   be an orthogonal set of vectors in  ,\n        and let   be any vector in  . Define the vector   by\n         .\n        Then:\n         \n             \n                for each  .\n             \n           \n             \n              If  ,\n              then  ,\n              and therefore,   is an orthogonal set.\n             \n           \n       Strategy \n        For the first part, try calculating the dot product, using the definition of  .\n        Don't forget that   if  ,\n        since you are assuming you have an orthogonal set of vectors.\n       \n        For the second part, what does the Fourier Expansion Theorem say?\n       \n         \n             \n              For any  , we have\n               ,\n              since   for  .\n             \n           \n             \n              It follows from the   that  \n              if and only if  ,\n              and the fact that  \n              is an orthogonal set then follows from the first part.\n             \n           \n       \n    It follows from the   that for any subspace  ,\n    any set of orthogonal vectors in   can be extended to an orthogonal basis of  .\n    Since any set containing a single nonzero vector is orthogonal,\n    it follows that every subspace has an orthogonal basis.\n    (If  , we consider the empty basis to be orthogonal.)\n   \n    The procedure for creating an orthogonal basis is clear.\n    Start with a single nonzero vector  , which we'll also call  .\n    If  , choose a vector   with  .\n    The   then provides us with a vector\n     \n    such that   is orthogonal.\n    If  , we're done.\n    Otherwise, we repeat the process, choosing  ,\n    and then using the   to obtain  ,\n    and so on, until an orthogonal basis is obtained.\n   \n    With one minor modification, the above procedure provides us with a major result.\n    Suppose   is a subspace of  , and start with  any  basis   of  .\n    By choosing our   in the procedure above to be these basis vectors, we obtain the\n     Gram-Schmidt algorithm  for constructing an orthogonal basis.\n   Gram-Schmidt Orthonormalization Algorithm \n        Let   be a subspace of  , and let   be a basis of  .\n        Define vectors   in   as follows:\n         .\n        Then   is an orthogonal basis for  .\n        Moreover, for each  , we have\n         .\n       \n    Of course, once we've used Gram-Schmidt to find an orthogonal basis,\n    we can normalize each vector to get an orthonormal basis.\n    The Gram-Schmidt algorithm is ideal when we know how to find  a  basis for a subspace,\n    but we need to know an orthogonal basis.\n    For example, suppose we want an orthonormal basis for the nullspace of the matrix\n     .\n    First, we find  any  basis for the nullspace.\n   \n    Let's make that basis look a little nicer by using some scalar multiplication to clear fractions.\n     \n    This is definitely not an orthogonal basis. So we take  , and\n     ,\n    which equals something we probably don't want to try to simplify. Finally, we find\n     .\n    And now we probably get about five minutes into the fractions and say something that shouldn't appear in print.\n    This sounds like a job for the computer.\n   \n    What if we want our vectors normalized?\n    Turns out the  GramSchmidt  function has an optional argument of true or false.\n    The default is false, which is to not normalize. Setting it to true gives an orthonormal basis:\n   \n    OK, so that's nice, and fairly intimidating looking.\n    Did it work? We can specify the vectors in our list by giving their positions, which are 0, 1, and 2, respectively.\n   \n    Let's compute dot products:\n   \n    Let's also confirm that these are indeed in the nullspace.\n   \n    Boom. Let's try another example. This time we'll keep the vectors a little smaller in case you want to try it by hand.\n   \n        Confirm that the set   is a basis for  ,\n        and use the   to find an orthonormal basis.\n       \n        First, note that we can actually jump right into the Gram-Schmidt procedure.\n        If the set   is not a basis, then it won't be independent,\n        and when we attempt to construct the third vector in our orthonormal basis,\n        its projection on the the subspace spanned by the first two will be the same as the original vector,\n        and we'll get zero when we subtract the two.\n       \n        We let  ,\n        and set  . Then we have\n         .\n       \n          You'll notice that we're using   rather than  \n          in the calculation of  .\n          This lets us avoid fractions (momentarily), and doesn't affect the answer,\n          since for any nonzero scalar  ,\n           .\n         \n        Next, we compute  .\n         .\n       \n        We got it done! But doing this sort of thing by hand makes it possible that we made a calculation error somewhere.\n        To check our work, we can turn to the computer.\n       "
},
{
  "id": "fig-ortho-proj",
  "level": "2",
  "url": "sec-gram-schmidt.html#fig-ortho-proj",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": "Illustrating the concept of orthogonal projection. \n        The diagram shows two given vectors u and v, along with vectors w and z.\n        The vectors w is parallel to u, while the vector z is orthogonal to u,\n        and the two vectors sum to the vector v.\n        The vector w is the projection of v onto u.\n       "
},
{
  "id": "ex-match-projection",
  "level": "2",
  "url": "sec-gram-schmidt.html#ex-match-projection",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "\n        On the left, pairs of vectors   are given,\n        and on the right, pairs of vectors  .\n        Match each pair on the left with the pair on the right such that\n         , and  .\n       \n       \n        You can solve this problem without actually computing any projections.\n        Think about the relationships between the different vectors.\n       \n     \n       \n         \n           ,  \n         \n         \n           ,  \n         \n       \n       \n         \n           ,  \n         \n         \n           ,  \n         \n       \n       \n         \n           ,  \n         \n         \n           ,  \n         \n       \n     "
},
{
  "id": "thm-orthogonal-lemma",
  "level": "2",
  "url": "sec-gram-schmidt.html#thm-orthogonal-lemma",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "Orthogonal Lemma.",
  "body": "Orthogonal Lemma \n        Let   be an orthogonal set of vectors in  ,\n        and let   be any vector in  . Define the vector   by\n         .\n        Then:\n         \n             \n                for each  .\n             \n           \n             \n              If  ,\n              then  ,\n              and therefore,   is an orthogonal set.\n             \n           \n       Strategy \n        For the first part, try calculating the dot product, using the definition of  .\n        Don't forget that   if  ,\n        since you are assuming you have an orthogonal set of vectors.\n       \n        For the second part, what does the Fourier Expansion Theorem say?\n       \n         \n             \n              For any  , we have\n               ,\n              since   for  .\n             \n           \n             \n              It follows from the   that  \n              if and only if  ,\n              and the fact that  \n              is an orthogonal set then follows from the first part.\n             \n           \n       "
},
{
  "id": "thm-gram-schmidt",
  "level": "2",
  "url": "sec-gram-schmidt.html#thm-gram-schmidt",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "Gram-Schmidt Orthonormalization Algorithm.",
  "body": "Gram-Schmidt Orthonormalization Algorithm \n        Let   be a subspace of  , and let   be a basis of  .\n        Define vectors   in   as follows:\n         .\n        Then   is an orthogonal basis for  .\n        Moreover, for each  , we have\n         .\n       "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "sec-gram-schmidt.html#exercise-74",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": "\n        Confirm that the set   is a basis for  ,\n        and use the   to find an orthonormal basis.\n       \n        First, note that we can actually jump right into the Gram-Schmidt procedure.\n        If the set   is not a basis, then it won't be independent,\n        and when we attempt to construct the third vector in our orthonormal basis,\n        its projection on the the subspace spanned by the first two will be the same as the original vector,\n        and we'll get zero when we subtract the two.\n       \n        We let  ,\n        and set  . Then we have\n         .\n       \n          You'll notice that we're using   rather than  \n          in the calculation of  .\n          This lets us avoid fractions (momentarily), and doesn't affect the answer,\n          since for any nonzero scalar  ,\n           .\n         \n        Next, we compute  .\n         .\n       \n        We got it done! But doing this sort of thing by hand makes it possible that we made a calculation error somewhere.\n        To check our work, we can turn to the computer.\n       "
},
{
  "id": "section-projection",
  "level": "1",
  "url": "section-projection.html",
  "type": "Section",
  "number": "3.3",
  "title": "Orthogonal Projection",
  "body": "Orthogonal Projection \n    In  Exercise , we saw that the  \n    gives us an efficient way of testing whether or not a vector belongs to the span of an orthogonal set.\n    When the answer is  no , the quantity we compute while testing turns out to be very useful:\n    it gives the  orthogonal projection  of that vector onto the span of our orthogonal set.\n    This turns out to be exactly the ingredient needed to solve certain minimum distance problems.\n   \n    We hinted above that the calculations we've been doing have a lot to do with projection.\n    Since any single nonzero vector forms an orthogonal basis for its span,\n    the projection\n     \n    can be viewed as the orthogonal projection of the vector  ,\n    not onto the vector  , but onto the subspace  .\n    This is, after all, how we viewed projections in elementary linear algebra:\n    we drop the perpendicular from the tip of   onto the  line  in the direction of  .\n   \n    Now that we know how to define an orthogonal basis for a subspace,\n    we can define orthogonal projection onto subspaces of dimension greater than one.\n   orthogonal projection \n    Note that   is indeed an element of  , since it's a linear combination of its basis vectors.\n    In the case of the trivial subspace  , we define orthogonal projection of any vector to be  ,\n    since really, what other choice do we have? (This case isn't really of any interest, we just like being thorough.)\n   \n    Let's see how this might be put to use in a classic problem: finding the distance from a point to a plane.\n   \n      One limitation of this approach to projection is that we must project onto a  subspace .\n      Given a plane like  , we would need to modify our approach.\n      One way to do it would be to find a point on the plane,\n      and then try to translate everything to the origin.\n      It's interesting to think about how this might be accomplished\n      (in particular, in what direction would the translation have to be performed?)\n      but someone external to the questions we're interested in here.\n     \n        Find the distance from the point   to the plane  \n        defined by  .\n       Using projection onto a normal vector \n        In an elementary linear algebra (or calculus) course, we would solve this problem as follows.\n        First, we would need two vectors parallel to the plane.\n        If   lies in the plane, then  , so  , and\n         ,\n        so   and   are parallel to the plane.\n        We then compute the normal vector\n         ,\n        and compute the projection of the position vector   for the point   onto  .\n        This gives the vector\n         .\n       \n        Now, this vector is  parallel  to  , so it's perpendicular to the plane.\n        Subtracting it from   gives a vector parallel to the plane, and this is the position vector for the point we seek.\n         \n        so the closest point is  .\n        We weren't asked for it, but note that if we wanted the distance from the point   to the plane,\n        this is given by  .\n       Using orthogonal projection \n        Let's solve the same problem using orthogonal projection.\n        First, we have to deal with the fact that the vectors   and   are probably not orthogonal.\n        To get around this, we replace   with\n         .\n        We now set\n         .\n        Lo and behold, we get the same answer as before.\n       \n    The only problem with   is that it appears to depend on the choice of orthogonal basis.\n    To see that it doesn't, we need one more definition.\n   orthogonal complement \n    The term  complement  comes from terminology we mentioned early on,\n    but didn't spend much time on.  Theorem \n    told us that for any subspace   of a vector space  ,\n    it is possible to construct another subspace   of  \n    such that  .\n    The subspace   is known as a complement of  .\n    A complement is not unique, but the orthogonal complement is.\n    As you might guess from the name,   is also a subspace of  .\n   \n        Show that   is a subspace of  .\n       \n        The trusty   is your friend here.\n        Just be careful to work correctly with the definition of  .\n       Projection Theorem \n        Let   be a subspace of  , let   be any vector in  ,\n        and let  . Then:\n         \n             \n               , and  .\n             \n           \n             \n                is the  closest  vector in   to the vector  ,\n              in the sense that the distance   is minimal among all vectors in  .\n              That is, for all  , we have\n               .\n             \n           \n       Strategy \n        For the first part, review the  ,\n        and convince yourself that this says the same thing.\n        The second part is the hard part, and it requires a trick:\n        we can write   as  ,\n        and then notice that  .\n        What can we say using the first part, and the Pythagorean theorem?\n       \n        By  ,   is a linear combination\n        of elements in  , so  .\n        The fact that   follows directly from the  .\n       \n        Choose any   with  , and write\n         .\n        Since   and  ,\n        we know that these two vectors are orthogonal, and therefore,\n         ,\n        by the  .\n       \n        Show that  .\n        Use this fact to show that   does not depend on the choice orthogonal basis.\n       \n        Suppose we find vectors   and   using basis   and  .\n        Note that  , but also that\n         \n        Now use  .\n       \n    Finally, we note one more useful fact. The process of sending a vector to its orthogonal projection defines an operator on  ,\n    and yes, it's linear.\n   \n        Let   be a subspace of  , and define a function   by\n         .\n        Then   is a linear operator such that   and  .\n       Strategy \n        The fact that   is linear follows from properties of the dot product, and some careful checking.\n        We know that   by definition of the projection,\n        and you can show that   acts as the identity on   using the  .\n       \n        If  , then   by definition of  .\n        (Recall that it is defined using dot products with vectors in  .)\n        If  , use the  ,\n        to show that  .\n       \n        It follows from this result and the   that\n         ,\n        and since  ,   is indeed a complement of  \n        in the sense introduced in  Theorem .\n        It's also fairly easy to see that   directly.\n        If  , and  \n        is a basis for  , then we have\n         ,\n        and for an unknown  , this is simply a homogeneous system of   equations with   variables.\n        Moreover, they are  independent  equations, since the   form a basis.\n        We thus expect   free parameters in the general solution.\n       \n        For any subspace   of  , we have\n         .\n       \n      Note that if  , then  ,\n      and if  , then  .\n      (Can you prove this?)\n     \n        Given subspaces   of   with  ,\n        if  , then  .\n       \n       \n        A subspace can have many complements, but only one orthgonal complement.\n        For example, a complement to the   axis in   is given by\n        any other line through the origin, but only the   axis is orthogonal.\n       \n     \n        Let   be a subspace of  , with basis  .\n        Let   be the   matrix whose columns are the basis vectors for  .\n        Then  .\n       \n      tells us that we can find a basis for  \n    by solving the homogeneous system  .\n    Make sure you can see why this is true!\n   \n        Let  .\n        Determine a basis for  .\n       \n        First, we note that for a general element of  , we have\n         ,\n        so   is a basis for  .\n        (We have just shown that this set spans  ;\n        it is independent since the first two vectors are not parallel,\n        and the third vector cannot be in the span of the first two, since its third entry is nonzero.)\n        As in  ,\n        we set  .\n       \n        To find a basis for  , we simply need to find the nullspace of  ,\n        which we do below.\n       \n        Prove that for any subspace  ,\n          is the identity operator on  .\n       \n        Given  , can you write it as a sum of an element of  \n        and an element of  ?\n       \n        Prove that for any subspace  ,  .\n       \n        Show that  , and then use  \n        to show that the two spaces must have the same dimension.\n       \n        Let   and   be subspaces of  .\n        Prove that  .\n       \n        One inclusion is easier than the other.\n        Use   and  \n        to show that the dimensions must be equal.\n       "
},
{
  "id": "def-ortho-projection",
  "level": "2",
  "url": "section-projection.html#def-ortho-projection",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "orthogonal projection "
},
{
  "id": "example-12",
  "level": "2",
  "url": "section-projection.html#example-12",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "\n        Find the distance from the point   to the plane  \n        defined by  .\n       Using projection onto a normal vector \n        In an elementary linear algebra (or calculus) course, we would solve this problem as follows.\n        First, we would need two vectors parallel to the plane.\n        If   lies in the plane, then  , so  , and\n         ,\n        so   and   are parallel to the plane.\n        We then compute the normal vector\n         ,\n        and compute the projection of the position vector   for the point   onto  .\n        This gives the vector\n         .\n       \n        Now, this vector is  parallel  to  , so it's perpendicular to the plane.\n        Subtracting it from   gives a vector parallel to the plane, and this is the position vector for the point we seek.\n         \n        so the closest point is  .\n        We weren't asked for it, but note that if we wanted the distance from the point   to the plane,\n        this is given by  .\n       Using orthogonal projection \n        Let's solve the same problem using orthogonal projection.\n        First, we have to deal with the fact that the vectors   and   are probably not orthogonal.\n        To get around this, we replace   with\n         .\n        We now set\n         .\n        Lo and behold, we get the same answer as before.\n       "
},
{
  "id": "def-ortho-comp",
  "level": "2",
  "url": "section-projection.html#def-ortho-comp",
  "type": "Definition",
  "number": "3.3.3",
  "title": "",
  "body": "orthogonal complement "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "section-projection.html#exercise-75",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": "\n        Show that   is a subspace of  .\n       \n        The trusty   is your friend here.\n        Just be careful to work correctly with the definition of  .\n       "
},
{
  "id": "thm-projection",
  "level": "2",
  "url": "section-projection.html#thm-projection",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "Projection Theorem.",
  "body": "Projection Theorem \n        Let   be a subspace of  , let   be any vector in  ,\n        and let  . Then:\n         \n             \n               , and  .\n             \n           \n             \n                is the  closest  vector in   to the vector  ,\n              in the sense that the distance   is minimal among all vectors in  .\n              That is, for all  , we have\n               .\n             \n           \n       Strategy \n        For the first part, review the  ,\n        and convince yourself that this says the same thing.\n        The second part is the hard part, and it requires a trick:\n        we can write   as  ,\n        and then notice that  .\n        What can we say using the first part, and the Pythagorean theorem?\n       \n        By  ,   is a linear combination\n        of elements in  , so  .\n        The fact that   follows directly from the  .\n       \n        Choose any   with  , and write\n         .\n        Since   and  ,\n        we know that these two vectors are orthogonal, and therefore,\n         ,\n        by the  .\n       "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "section-projection.html#exercise-76",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "\n        Show that  .\n        Use this fact to show that   does not depend on the choice orthogonal basis.\n       \n        Suppose we find vectors   and   using basis   and  .\n        Note that  , but also that\n         \n        Now use  .\n       "
},
{
  "id": "thm-proj-operator",
  "level": "2",
  "url": "section-projection.html#thm-proj-operator",
  "type": "Theorem",
  "number": "3.3.7",
  "title": "",
  "body": "\n        Let   be a subspace of  , and define a function   by\n         .\n        Then   is a linear operator such that   and  .\n       Strategy \n        The fact that   is linear follows from properties of the dot product, and some careful checking.\n        We know that   by definition of the projection,\n        and you can show that   acts as the identity on   using the  .\n       \n        If  , then   by definition of  .\n        (Recall that it is defined using dot products with vectors in  .)\n        If  , use the  ,\n        to show that  .\n       "
},
{
  "id": "rem-orth-comp-dim",
  "level": "2",
  "url": "section-projection.html#rem-orth-comp-dim",
  "type": "Remark",
  "number": "3.3.8",
  "title": "",
  "body": "\n        It follows from this result and the   that\n         ,\n        and since  ,   is indeed a complement of  \n        in the sense introduced in  Theorem .\n        It's also fairly easy to see that   directly.\n        If  , and  \n        is a basis for  , then we have\n         ,\n        and for an unknown  , this is simply a homogeneous system of   equations with   variables.\n        Moreover, they are  independent  equations, since the   form a basis.\n        We thus expect   free parameters in the general solution.\n       "
},
{
  "id": "thm-ortho-comp",
  "level": "2",
  "url": "section-projection.html#thm-ortho-comp",
  "type": "Theorem",
  "number": "3.3.9",
  "title": "",
  "body": "\n        For any subspace   of  , we have\n         .\n       "
},
{
  "id": "ex-tf-orth-comp",
  "level": "2",
  "url": "section-projection.html#ex-tf-orth-comp",
  "type": "Exercise",
  "number": "3.3.10",
  "title": "",
  "body": "\n        Given subspaces   of   with  ,\n        if  , then  .\n       \n       \n        A subspace can have many complements, but only one orthgonal complement.\n        For example, a complement to the   axis in   is given by\n        any other line through the origin, but only the   axis is orthogonal.\n       \n     "
},
{
  "id": "thm-complement-matrix",
  "level": "2",
  "url": "section-projection.html#thm-complement-matrix",
  "type": "Theorem",
  "number": "3.3.11",
  "title": "",
  "body": "\n        Let   be a subspace of  , with basis  .\n        Let   be the   matrix whose columns are the basis vectors for  .\n        Then  .\n       "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "section-projection.html#exercise-78",
  "type": "Exercise",
  "number": "3.3.12",
  "title": "",
  "body": "\n        Let  .\n        Determine a basis for  .\n       \n        First, we note that for a general element of  , we have\n         ,\n        so   is a basis for  .\n        (We have just shown that this set spans  ;\n        it is independent since the first two vectors are not parallel,\n        and the third vector cannot be in the span of the first two, since its third entry is nonzero.)\n        As in  ,\n        we set  .\n       \n        To find a basis for  , we simply need to find the nullspace of  ,\n        which we do below.\n       "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "section-projection.html#exercise-79",
  "type": "Exercise",
  "number": "3.3.13",
  "title": "",
  "body": "\n        Prove that for any subspace  ,\n          is the identity operator on  .\n       \n        Given  , can you write it as a sum of an element of  \n        and an element of  ?\n       "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "section-projection.html#exercise-80",
  "type": "Exercise",
  "number": "3.3.14",
  "title": "",
  "body": "\n        Prove that for any subspace  ,  .\n       \n        Show that  , and then use  \n        to show that the two spaces must have the same dimension.\n       "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "section-projection.html#exercise-81",
  "type": "Exercise",
  "number": "3.3.15",
  "title": "",
  "body": "\n        Let   and   be subspaces of  .\n        Prove that  .\n       \n        One inclusion is easier than the other.\n        Use   and  \n        to show that the dimensions must be equal.\n       "
},
{
  "id": "worksheet-dual-basis",
  "level": "1",
  "url": "worksheet-dual-basis.html",
  "type": "Worksheet",
  "number": "3.4",
  "title": "Worksheet: dual basis.",
  "body": "Worksheet: dual basis. linear functional \n        Here are some examples of linear functionals:\n         \n             \n              The map   given by  .\n             \n           \n             \n              The evaluation map   given by  .\n              (For example,  .)\n             \n           \n             \n              The map   given by  ,\n              where   denotes the space of all continuous functions on  .\n             \n           \n       \n        Note that for any vector spaces  ,\n        the set   of linear transformations from   to  \n        is itself a vector space, if we define\n         .\n        In particular, given a vector space  ,\n        we denote the set of all linear functionals on   by  ,\n        and call this the  dual space  of  .\n       \n        We make the following observations:\n         \n             \n              If   and  , then  \n              is isomorphic to the space   of   matrices,\n              so it has dimension  .\n             \n           \n             \n              Since  , if   is finite-dimensional,\n              then   has dimension  .\n             \n           \n             \n              Since  ,   and   are isomorphic.\n             \n           \n       \n        Here is a basic example that is intended as a guide to your intuition regarding dual spaces.\n        Take  . Given any  ,\n        define a map   by   (the usual dot product).\n       \n        One way to think about this: if we write   as a column vector  ,\n        then we can identify   with  , where the action is via multiplication:\n         .\n        It turns out that this example can be generalized,\n        but the definition of   involves the dot product, which is particular to  .\n       \n        There is a generalization of the dot product, known as an inner product.\n        (See Chapter 10 of Nicholson, for example.)\n        On any inner product space,\n        we can associate each vector   to a linear functional   using the procedure above.\n       \n        Another way to work concretely with dual vectors (without the need for inner products)\n        is to define things in terms of a basis.\n       dual basis \n        For the standard basis on  ,\n        note that the corresponding dual basis functionals are given by\n         .\n        That is, these are the  coordinate functions  on  .\n       \n          Show that the dual basis is indeed a basis for  .\n         \n          We know that  .\n          Since there are   vectors in the dual basis,\n          it's enough to show that they're linearly independent. Suppose that\n           \n          for some scalars  .\n         \n          This means that   for all  ;\n          in particular, this must be true for the basis vectors  .\n         \n          By the definition of the dual basis, for each   we have\n           .\n          Thus,   for each  , and therefore, the   are linearly independent.\n         \n      Next, let   and   be vector spaces,\n      and let   be a linear transformation.\n      For any such  , we can define the  dual map   \n      by   for each  .\n     \n          Confirm that (a)   does indeed define an element of  ;\n          that is, a linear map from   to  , and (b) that   is linear.\n         \n          There are two things to check. First, we show that  \n          for each  . Since   and  ,\n          it follows that   is a map from   to  .\n          But we must also show that it's linear.\n         \n          Given  , we have\n           .\n          Similarly, for any scalar  ,\n           .\n          This shows that  .\n         \n          Next, we need to show that   is a linear map.\n          Let  , and let   be a scalar. We have:\n           ,\n          and\n           .\n          This follows from the vector space structure on any space of functions.\n          For a vector  , we have\n           .\n         \n          Let   be the space of all polynomials,\n          and let   be the derivative transformation  .\n          Let   be the linear functional defined by  .\n         \n          What is the linear functional  ?\n         \n          Let   be a polynomial. Then\n           .\n          By the Fundamental Theorem of Calculus (or a tedious calculation, if you prefer), we get\n           .\n         \n          Show that dual maps satisfy the following properties:\n          for any   and  ,\n           \n         \n          In item  , assume   and  .\n          (Reminder: the notation   is sometimes referred to as the  product \n          of   and  , in analogy with matrices, but actually represents the composition  .)\n         \n          Let  . We have\n           ,\n          since   is linear. Similarly,\n           .\n          Finally, we have\n           .\n          since composition is associative.\n         annihilator \n          Determine a basis (in terms of the standard dual basis for  )\n          for the annihilator   of the subspace   given by\n           .\n         \n          Write  ,\n          and note that each   simply gives the  th component of a vector in  .\n         \n          As per the hint, suppose  ,\n          and that  . Then\n           .\n         \n          We wish for this to be zero for all possible values of   and  .\n          Therefore, we must have\n           .\n          Solving gives us   and  , so\n           .\n          This gives us the following basis for  :\n           .\n         \n        Here is a fun theorem about annihilators that I won't ask you to prove.\n       \n            Let   be a finite dimensional vector space. For any subspace   of  ,\n             .\n           \n        Here's an outline of the proof. For any subspace  ,\n        we can define the  inclusion  map  , given by  .\n        (This is not the identity on   since it's only defined on  .\n        In particular, it is not onto unless  , although it is clearly one-to-one.)\n       \n        Then   is a map from   to  .\n        Moreover, note that for any  ,   satisfies, for any  ,\n         .\n        Thus,   if and only if  ,\n        which is if and only if   for all  ,\n        which is if and only if  . Therefore,  .\n       \n        By the dimension theorem, we have:\n         .\n        With a bit of work, one can show that  ,\n        and we get the result from the fact that   and  .\n       \n        There are a number of interesting results of this flavour.\n        For example, one can show that a map   is injective if and only if   is surjective, and vice-versa.\n       \n        One final, optional task: return to the example of  ,\n        viewed as column vectors, and consider a matrix transformation\n          given by   as usual.\n        Viewing   as row vectors, convince yourself that  ;\n        that is, that what we've really been talking about all along is just the transpose of a matrix!\n       "
},
{
  "id": "p-975",
  "level": "2",
  "url": "worksheet-dual-basis.html#p-975",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear functional "
},
{
  "id": "p-989",
  "level": "2",
  "url": "worksheet-dual-basis.html#p-989",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dual basis "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "worksheet-dual-basis.html#exercise-82",
  "type": "Worksheet Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "\n          Show that the dual basis is indeed a basis for  .\n         \n          We know that  .\n          Since there are   vectors in the dual basis,\n          it's enough to show that they're linearly independent. Suppose that\n           \n          for some scalars  .\n         \n          This means that   for all  ;\n          in particular, this must be true for the basis vectors  .\n         \n          By the definition of the dual basis, for each   we have\n           .\n          Thus,   for each  , and therefore, the   are linearly independent.\n         "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "worksheet-dual-basis.html#exercise-83",
  "type": "Worksheet Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "\n          Confirm that (a)   does indeed define an element of  ;\n          that is, a linear map from   to  , and (b) that   is linear.\n         \n          There are two things to check. First, we show that  \n          for each  . Since   and  ,\n          it follows that   is a map from   to  .\n          But we must also show that it's linear.\n         \n          Given  , we have\n           .\n          Similarly, for any scalar  ,\n           .\n          This shows that  .\n         \n          Next, we need to show that   is a linear map.\n          Let  , and let   be a scalar. We have:\n           ,\n          and\n           .\n          This follows from the vector space structure on any space of functions.\n          For a vector  , we have\n           .\n         "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "worksheet-dual-basis.html#exercise-84",
  "type": "Worksheet Exercise",
  "number": "3.4.3",
  "title": "",
  "body": "\n          Let   be the space of all polynomials,\n          and let   be the derivative transformation  .\n          Let   be the linear functional defined by  .\n         \n          What is the linear functional  ?\n         \n          Let   be a polynomial. Then\n           .\n          By the Fundamental Theorem of Calculus (or a tedious calculation, if you prefer), we get\n           .\n         "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "worksheet-dual-basis.html#exercise-85",
  "type": "Worksheet Exercise",
  "number": "3.4.4",
  "title": "",
  "body": "\n          Show that dual maps satisfy the following properties:\n          for any   and  ,\n           \n         \n          In item  , assume   and  .\n          (Reminder: the notation   is sometimes referred to as the  product \n          of   and  , in analogy with matrices, but actually represents the composition  .)\n         \n          Let  . We have\n           ,\n          since   is linear. Similarly,\n           .\n          Finally, we have\n           .\n          since composition is associative.\n         "
},
{
  "id": "p-1006",
  "level": "2",
  "url": "worksheet-dual-basis.html#p-1006",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "annihilator "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "worksheet-dual-basis.html#exercise-86",
  "type": "Worksheet Exercise",
  "number": "3.4.5",
  "title": "",
  "body": "\n          Determine a basis (in terms of the standard dual basis for  )\n          for the annihilator   of the subspace   given by\n           .\n         \n          Write  ,\n          and note that each   simply gives the  th component of a vector in  .\n         \n          As per the hint, suppose  ,\n          and that  . Then\n           .\n         \n          We wish for this to be zero for all possible values of   and  .\n          Therefore, we must have\n           .\n          Solving gives us   and  , so\n           .\n          This gives us the following basis for  :\n           .\n         "
},
{
  "id": "thm-anihilator-dimension",
  "level": "2",
  "url": "worksheet-dual-basis.html#thm-anihilator-dimension",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "",
  "body": "\n            Let   be a finite dimensional vector space. For any subspace   of  ,\n             .\n           "
},
{
  "id": "worksheet-least-squares",
  "level": "1",
  "url": "worksheet-least-squares.html",
  "type": "Worksheet",
  "number": "3.5",
  "title": "Worksheet: Least squares approximation",
  "body": "Worksheet: Least squares approximation overdetermined \n        An overdetermined system is quite likely to be inconsistent.\n        That is, our problem requires finding a solution to a system  ,\n        where no such solution exists!\n        When no solution is possible, we can ask whether it is instead possible to find a  best approximation .\n       \n        What would a best approximation look like in this case?\n        Let   denote the column space of  ,\n        which we know is a subspace of   (assuming   is an   matrix).\n        The subspace   is precisely the set of all vectors   such that   has a solution.\n        Among these vectors, we would like to find the one that is  closest  to  ,\n        in the sense that   is as small as possible.\n       \n        But we know exactly what this vector   should be:\n        the orthogonal projection of   onto  .\n       \n      The presentation in this worksheet is based on the one given in the text by Nicholson (see Section 5.6).\n      Further details may be found there, or, for the more statistically inclined,\n      on  Wikipedia .\n     \n      Given an inconsistent system  ,\n      we have two problems to solve:\n       \n           \n            Find the vector  , where  \n           \n         \n           \n            Find a vector   such that  \n           \n         \n      The vector   is then our approximate solution.\n     \n      This can be done directly, of course:\n       \n           \n            Find a basis for  \n           \n         \n           \n            Use the   to construct an orthogonal basis for  \n           \n         \n           \n            Use this orthogonal basis to compute  \n           \n         \n           \n            Solve the system  .\n           \n         \n     \n      But there is another way to proceed: we know that  ,\n      so for any vector  ,  . Therefore,\n       ,\n      for any vector  .\n     normal equations \n      To begin, let's compare the two methods discussed above for finding an approximate solution.\n      Consider the system of equations  , where\n       .\n     \n          Confirm that the system has no solution.\n         \n          Find an orthogonal basis for the column space of  .\n         \n          Compute the projection   of   onto the column space of  .\n         \n          Solve the system   for  .\n         \n          Solve the normal equations   for  .\n         \n      Next, we want to consider a problem found in many introductory science labs:\n      finding a line of  best fit . The situation is as follows:\n      in some experiment, data points  \n      have been found.\n      We would like to find a function   such that for each  ,\n      the value of   is as close as possible to  .\n     residuals \n      A measure of the overall error in the fit of the line is given by the sum of squares\n       ,\n      and this is the quantity that we want to minimize. (Hence the name,  least squares .)\n     \n      Let  , and note that  .\n      Set   and  .\n      Then\n       ,\n      where  .\n      (Note that we are using   to denote a different sort of vector than on the previous page.)\n     \n      We can safely assume that an exact solution   is impossible,\n      so we search for an approximate one, with   as small as possible.\n      (Note that the magnitude of   satisfies  .)\n      But a solution   that makes  \n      as small as possible is exactly the sort of approximate solution that we just learned to calculate!\n      Solving the normal equations for  , we find that\n       .\n     \n          Find the equation of the best fit line for the following set of data points:\n           .\n         \n          Suppose we were instead trying to find the best  quadratic  fit for a dataset.\n          What would our parameters be? What would the matrix   look like?\n          Illustrate with an example of your own.\n         "
},
{
  "id": "p-1018",
  "level": "2",
  "url": "worksheet-least-squares.html#p-1018",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "overdetermined "
},
{
  "id": "p-1032",
  "level": "2",
  "url": "worksheet-least-squares.html#p-1032",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal equations "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "worksheet-least-squares.html#exercise-87",
  "type": "Worksheet Exercise",
  "number": "3.5.1",
  "title": "",
  "body": "\n          Confirm that the system has no solution.\n         "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "worksheet-least-squares.html#exercise-88",
  "type": "Worksheet Exercise",
  "number": "3.5.2",
  "title": "",
  "body": "\n          Find an orthogonal basis for the column space of  .\n         "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "worksheet-least-squares.html#exercise-89",
  "type": "Worksheet Exercise",
  "number": "3.5.3",
  "title": "",
  "body": "\n          Compute the projection   of   onto the column space of  .\n         "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "worksheet-least-squares.html#exercise-90",
  "type": "Worksheet Exercise",
  "number": "3.5.4",
  "title": "",
  "body": "\n          Solve the system   for  .\n         "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "worksheet-least-squares.html#exercise-91",
  "type": "Worksheet Exercise",
  "number": "3.5.5",
  "title": "",
  "body": "\n          Solve the normal equations   for  .\n         "
},
{
  "id": "p-1040",
  "level": "2",
  "url": "worksheet-least-squares.html#p-1040",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "residuals "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "worksheet-least-squares.html#exercise-92",
  "type": "Worksheet Exercise",
  "number": "3.5.6",
  "title": "",
  "body": "\n          Find the equation of the best fit line for the following set of data points:\n           .\n         "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "worksheet-least-squares.html#exercise-93",
  "type": "Worksheet Exercise",
  "number": "3.5.7",
  "title": "",
  "body": "\n          Suppose we were instead trying to find the best  quadratic  fit for a dataset.\n          What would our parameters be? What would the matrix   look like?\n          Illustrate with an example of your own.\n         "
},
{
  "id": "sec-eigen-basics",
  "level": "1",
  "url": "sec-eigen-basics.html",
  "type": "Section",
  "number": "4.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": "Eigenvalues and Eigenvectors eigenvalue eigenvector \n      You might reasonably wonder: where does this definition come from?\n      And why should I care?\n      We are assuming that you saw at least a basic introduction to eigenvalues\n      in your first course on linear algebra, but that course probably focused on mechanics.\n      Possibly you learned that diagonalizing a matrix lets you compute powers of that matrix.\n     \n      But why should we be interested in computing powers\n      (in particular,  large  powers) of a matrix?\n      An important context comes from the study of\n       discrete linear dynamical systems ,\n      as well as  Markov chains ,\n      where the evolution of a state is modelled by repeated multiplication of a vector by a matrix.\n     \n      When we're able to diagonalize our matrix using eigenvalues and eigenvectors,\n      not only does it become easy to compute powers of a matrix,\n      it also enables us to see that the entire process is just a linear combination of geometric sequences!\n      If you have completed  ,\n      you probably will not be surprised to learn that the polynomial roots you found are,\n      in fact, eigenvalues of a suitable matrix.\n       \n     \n        Eigenvalues and eigenvectors can just as easily be defined for a general linear operator  .\n        In this context, and eigenvector   is sometimes referred to as a  characteristic vector  (or characteristic direction)\n        for  , since the property  \n        simply states that the transformed vector   is parallel to the original vector  .\n        Some linear algebra textbooks that focus more on general linear transformations frame this topic in the context of\n         invariant subspaces  for a linear operator.\n       \n        A subspace   is  invariant  with respect to   if   for all  .\n        Note that if   is an eigenvector of  , then   is an invariant subspace.\n        To see this, note that if   and  , then\n         .\n       \n        For the matrix  ,\n        match each vector on the left with the corresponding eigenvalue on the right.\n        (For typographical reasons, column vectors have been transposed.)\n       \n       \n         \n         \n       \n       \n         \n         \n       \n       \n         \n         \n       \n       \n         \n         Not an eigenvector \n       \n     \n        Use  .\n       \n    Note that if   is an eigenvector of the matrix  , then we have\n     ,\n    where   denotes the   identity matrix.\n    Thus, if   is an eigenvalue of  ,\n    any corresponding eigenvector is an element of  .\n   eigenspace \n    Since we know that the null space of any matrix is a subspace,\n    it follows that eigenspaces are subspaces of  .\n   \n    Note that   can be defined for any real number  ,\n    whether or not   is an eigenvalue.\n    However, the eigenvalues of   are distinguished by the property that there is a\n     nonzero  solution to  .\n    Furthermore, we know that   can only have nontrivial solutions if the matrix  \n    is not invertible. We also know that   is non-invertible if and only if  .\n    This gives us the following theorem.\n   \n        The following are equivalent for any   matrix   and real number  :\n         \n             \n                is an eigenvalue of  .\n             \n           \n             \n           \n             \n           \n       Strategy \n        To prove a theorem involving a  the following are equivalent  statement,\n        a good strategy is to show that the first implies the second,\n        the second implies the third, and the third implies the first.\n        The ideas needed for the proof are given in the paragraph preceding the theorem.\n        See if you can turn them into a formal proof.\n       characteristic polynomial characteristic equation \n        In order for certain properties of a matrix   to be satisfied,\n        the eigenvalues of   need to have particular values.\n        Match each property of a matrix   on the left with the corresponding information about the eigenvalues of   on the right.\n        Be sure that you can justify your answers with a suitable proof.\n       \n       \n          is invertible \n          is not an eigenvalue of  \n       \n       \n          for some integar  \n          is the only eigenvalue of  \n       \n       \n         \n          and   are the only eigenvalues of  \n       \n       \n         \n          and   are the only eigenvalues of  \n       \n       \n         \n         ,  , and   are the eigenvalues of  \n       \n     similar diagonalizable diagonalizable \n    The following results will frequently be useful.\n   \n        The relation   if and only if   is similar to   is an equivalence relation.\n        Moreover, if  , then:\n         \n             \n           \n             \n           \n             \n           \n        In other words,   and   have the same determinant, trace, and characteristic polynomial\n        (and thus, the same eigenvalues).\n       \n        The first two follow directly from properties of the determinant and trace.\n        For the last, note that if  , then\n         ,\n        so  , and therefore  .\n       \n        Determine the eigenvalues and eigenvectors of  .\n       \n        We begin with the characteristic polynomial. We have\n         .\n       \n        The roots of the characteristic polynomial are our eigenvalues,\n        so we have   and  .\n        Note that the first eigenvalue comes from a repeated root.\n        This is typically where things get interesting.\n        If an eigenvalue does not come from a repeated root,\n        then there will only be one (independent) eigenvector that corresponds to it.\n        (That is,  .)\n        If an eigenvalue is repeated, it could have more than one eigenvector,\n        but this is not guaranteed.\n       \n        We find that  ,\n        which has reduced row-echelon form  .\n        Solving for the nullspace, we find that there are two independent eigenvectors:\n         ,\n        so\n         .\n       \n        For the second eigenvector, we have  ,\n        which has reduced row-echelon form  .\n        An eigenvector in this case is given by\n         .\n       multiplicity \n    The  eigenvects  command in SymPy takes a square matrix as input,\n    and outputs a list of lists (one list for each eigenvalue).\n    For a given eigenvalue, the corresponding list has the form\n     (eigenvalue, multiplicity, eigenvectors) .\n    Using SymPy to solve   looks as follows:\n   \n    An important result about multiplicity is the following.\n   \n        Let   be an eigenvalue of   of multiplicity  .\n        Then  .\n       \n      Some textbooks refer to the multiplicity   of an eigenvalue as the\n       algebraic multiplicity  of  , and the number  \n      as the  geometric multiplicity  of  .\n     \n    To prove   we need the following lemma,\n    which we've borrowed from Section 5.5 of Nicholson's textbook.\n   \n        Let   be a set of linearly independent eigenvectors of a matrix  ,\n        with corresponding eigenvalues   (not necessarily distinct).\n        Extend this set to a basis  ,\n        and let  \n        be the matrix whose columns are the basis vectors. (Note that   is necessarily invertible.)\n        Then\n         ,\n        where   has size  , and   has size  .\n       \n        We have\n         .\n        For  , we have\n         .\n        But   is the  th column of  ,\n        which proves the result.\n       \n    We can use   to prove that   as follows.\n    Suppose   is a basis for  .\n    Then this is a linearly independent set of eigenvectors, so our lemma guarantees the existence of a matrix  \n     such that\n      .\n     Let  . On the one hand, since  ,\n     we have  .\n     On the other hand,\n      .\n     This shows that   is divisible by  .\n     Since   is the largest integer such that   is divisible by  ,\n     we must have  .\n   \n    Another important result is the following.\n    The proof is a bit tricky: it requires mathematical induction,\n    and a couple of clever observations.\n   \n        Let   be eigenvectors corresponding to distinct\n        eigenvalues   of a matrix  .\n        Then   is linearly independent.\n       \n        The proof is by induction on the number   of distinct eigenvalues.\n        Since eigenvectors are nonzero, any set consisting of a single eigenvector   is independent.\n        Suppose, then, that a set of eigenvectors corresponding to   distinct eigenvalues is independent,\n        and let   be eigenvectors corresponding to distinct eigenvalues  .\n       \n        Consider the equation\n         ,\n        for scalars  . Multiplying both sides by the matrix  , we have\n         .\n       \n        On the other hand, we can also multiply both sides by the eigenvalue  , giving\n         .\n        Subtracting   from  ,\n        the first temrs cancel, and we get\n         .\n       \n        By hypothesis, the set   of   eigenvectors is linearly independent.\n        We know that   for  ,\n        since the eigenvalues are all distinct.\n        Therefore, the only way this linear combination can equal zero is if  .\n        This leaves us with  , but  , so   as well.\n       \n      tells us that vectors from different eigenspaces are independent.\n    In particular, a union of bases from each eigenspace will be an independent set.\n    Therefore,   provides an initial criterion for diagonalization:\n    if the dimension of each eigenspace   is equal to the multiplicity of  ,\n    then   is diagonalizable.\n   \n    Our focus in the next section will be on diagonalization of  symmetric \n    matrices, and soon we will see that for such matrices, eigenvectors corresponding to different eigenvalues are\n    not just independent, but  orthogonal .\n   "
},
{
  "id": "def-eigenvalue",
  "level": "2",
  "url": "sec-eigen-basics.html#def-eigenvalue",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "eigenvalue eigenvector "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "sec-eigen-basics.html#remark-15",
  "type": "Remark",
  "number": "4.1.2",
  "title": "",
  "body": "\n      You might reasonably wonder: where does this definition come from?\n      And why should I care?\n      We are assuming that you saw at least a basic introduction to eigenvalues\n      in your first course on linear algebra, but that course probably focused on mechanics.\n      Possibly you learned that diagonalizing a matrix lets you compute powers of that matrix.\n     \n      But why should we be interested in computing powers\n      (in particular,  large  powers) of a matrix?\n      An important context comes from the study of\n       discrete linear dynamical systems ,\n      as well as  Markov chains ,\n      where the evolution of a state is modelled by repeated multiplication of a vector by a matrix.\n     \n      When we're able to diagonalize our matrix using eigenvalues and eigenvectors,\n      not only does it become easy to compute powers of a matrix,\n      it also enables us to see that the entire process is just a linear combination of geometric sequences!\n      If you have completed  ,\n      you probably will not be surprised to learn that the polynomial roots you found are,\n      in fact, eigenvalues of a suitable matrix.\n       \n     "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "sec-eigen-basics.html#remark-16",
  "type": "Remark",
  "number": "4.1.3",
  "title": "",
  "body": "\n        Eigenvalues and eigenvectors can just as easily be defined for a general linear operator  .\n        In this context, and eigenvector   is sometimes referred to as a  characteristic vector  (or characteristic direction)\n        for  , since the property  \n        simply states that the transformed vector   is parallel to the original vector  .\n        Some linear algebra textbooks that focus more on general linear transformations frame this topic in the context of\n         invariant subspaces  for a linear operator.\n       \n        A subspace   is  invariant  with respect to   if   for all  .\n        Note that if   is an eigenvector of  , then   is an invariant subspace.\n        To see this, note that if   and  , then\n         .\n       "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "sec-eigen-basics.html#exercise-94",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "\n        For the matrix  ,\n        match each vector on the left with the corresponding eigenvalue on the right.\n        (For typographical reasons, column vectors have been transposed.)\n       \n       \n         \n         \n       \n       \n         \n         \n       \n       \n         \n         \n       \n       \n         \n         Not an eigenvector \n       \n     \n        Use  .\n       "
},
{
  "id": "def-eigenspace",
  "level": "2",
  "url": "sec-eigen-basics.html#def-eigenspace",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": "eigenspace "
},
{
  "id": "thm-eigenspace-nonzero",
  "level": "2",
  "url": "sec-eigen-basics.html#thm-eigenspace-nonzero",
  "type": "Theorem",
  "number": "4.1.6",
  "title": "",
  "body": "\n        The following are equivalent for any   matrix   and real number  :\n         \n             \n                is an eigenvalue of  .\n             \n           \n             \n           \n             \n           \n       Strategy \n        To prove a theorem involving a  the following are equivalent  statement,\n        a good strategy is to show that the first implies the second,\n        the second implies the third, and the third implies the first.\n        The ideas needed for the proof are given in the paragraph preceding the theorem.\n        See if you can turn them into a formal proof.\n       "
},
{
  "id": "p-1063",
  "level": "2",
  "url": "sec-eigen-basics.html#p-1063",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic polynomial characteristic equation "
},
{
  "id": "ex-match-eigen",
  "level": "2",
  "url": "sec-eigen-basics.html#ex-match-eigen",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "",
  "body": "\n        In order for certain properties of a matrix   to be satisfied,\n        the eigenvalues of   need to have particular values.\n        Match each property of a matrix   on the left with the corresponding information about the eigenvalues of   on the right.\n        Be sure that you can justify your answers with a suitable proof.\n       \n       \n          is invertible \n          is not an eigenvalue of  \n       \n       \n          for some integar  \n          is the only eigenvalue of  \n       \n       \n         \n          and   are the only eigenvalues of  \n       \n       \n         \n          and   are the only eigenvalues of  \n       \n       \n         \n         ,  , and   are the eigenvalues of  \n       \n     "
},
{
  "id": "p-1065",
  "level": "2",
  "url": "sec-eigen-basics.html#p-1065",
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
  "number": "4.1.8",
  "title": "",
  "body": "diagonalizable "
},
{
  "id": "thm-similar-properties",
  "level": "2",
  "url": "sec-eigen-basics.html#thm-similar-properties",
  "type": "Theorem",
  "number": "4.1.9",
  "title": "",
  "body": "\n        The relation   if and only if   is similar to   is an equivalence relation.\n        Moreover, if  , then:\n         \n             \n           \n             \n           \n             \n           \n        In other words,   and   have the same determinant, trace, and characteristic polynomial\n        (and thus, the same eigenvalues).\n       \n        The first two follow directly from properties of the determinant and trace.\n        For the last, note that if  , then\n         ,\n        so  , and therefore  .\n       "
},
{
  "id": "example-eigenvectors",
  "level": "2",
  "url": "sec-eigen-basics.html#example-eigenvectors",
  "type": "Example",
  "number": "4.1.10",
  "title": "",
  "body": "\n        Determine the eigenvalues and eigenvectors of  .\n       \n        We begin with the characteristic polynomial. We have\n         .\n       \n        The roots of the characteristic polynomial are our eigenvalues,\n        so we have   and  .\n        Note that the first eigenvalue comes from a repeated root.\n        This is typically where things get interesting.\n        If an eigenvalue does not come from a repeated root,\n        then there will only be one (independent) eigenvector that corresponds to it.\n        (That is,  .)\n        If an eigenvalue is repeated, it could have more than one eigenvector,\n        but this is not guaranteed.\n       \n        We find that  ,\n        which has reduced row-echelon form  .\n        Solving for the nullspace, we find that there are two independent eigenvectors:\n         ,\n        so\n         .\n       \n        For the second eigenvector, we have  ,\n        which has reduced row-echelon form  .\n        An eigenvector in this case is given by\n         .\n       "
},
{
  "id": "p-1075",
  "level": "2",
  "url": "sec-eigen-basics.html#p-1075",
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
  "number": "4.1.11",
  "title": "",
  "body": "\n        Let   be an eigenvalue of   of multiplicity  .\n        Then  .\n       "
},
{
  "id": "lem-block-eigen",
  "level": "2",
  "url": "sec-eigen-basics.html#lem-block-eigen",
  "type": "Lemma",
  "number": "4.1.12",
  "title": "",
  "body": "\n        Let   be a set of linearly independent eigenvectors of a matrix  ,\n        with corresponding eigenvalues   (not necessarily distinct).\n        Extend this set to a basis  ,\n        and let  \n        be the matrix whose columns are the basis vectors. (Note that   is necessarily invertible.)\n        Then\n         ,\n        where   has size  , and   has size  .\n       \n        We have\n         .\n        For  , we have\n         .\n        But   is the  th column of  ,\n        which proves the result.\n       "
},
{
  "id": "thm-eigen-independent",
  "level": "2",
  "url": "sec-eigen-basics.html#thm-eigen-independent",
  "type": "Theorem",
  "number": "4.1.13",
  "title": "",
  "body": "\n        Let   be eigenvectors corresponding to distinct\n        eigenvalues   of a matrix  .\n        Then   is linearly independent.\n       \n        The proof is by induction on the number   of distinct eigenvalues.\n        Since eigenvectors are nonzero, any set consisting of a single eigenvector   is independent.\n        Suppose, then, that a set of eigenvectors corresponding to   distinct eigenvalues is independent,\n        and let   be eigenvectors corresponding to distinct eigenvalues  .\n       \n        Consider the equation\n         ,\n        for scalars  . Multiplying both sides by the matrix  , we have\n         .\n       \n        On the other hand, we can also multiply both sides by the eigenvalue  , giving\n         .\n        Subtracting   from  ,\n        the first temrs cancel, and we get\n         .\n       \n        By hypothesis, the set   of   eigenvectors is linearly independent.\n        We know that   for  ,\n        since the eigenvalues are all distinct.\n        Therefore, the only way this linear combination can equal zero is if  .\n        This leaves us with  , but  , so   as well.\n       "
},
{
  "id": "subsec-ortho-diag",
  "level": "1",
  "url": "subsec-ortho-diag.html",
  "type": "Section",
  "number": "4.2",
  "title": "Diagonalization of symmetric matrices",
  "body": "Diagonalization of symmetric matrices symmetric \n      For inner product spaces, the above is taken as the  definition  of what it means for an operator to be symmetric.\n     \n        Prove that if   for any  ,\n        then   is symmetric.\n       \n        If this condition is true for all  ,\n        then it is true in particular for the vectors in the standard basis for  .\n       \n        Take   and  ,\n        where   is the standard basis for  .\n        Then with   we have\n         ,\n        which shows that  .\n       \n    A useful property of symmetric matrices, mentioned earlier,\n    is that eigenvectors corresponding to distinct eigenvalues are orthogonal.\n   \n        If   is a symmetric matrix, then eigenvectors corresponding to  distinct  eigenvalues are orthogonal.\n       Strategy \n        We want to show that if   are eigenvectors corresponding to distinct eigenvalues  ,\n        then  .\n        It was pointed out above that since   is symmetric,\n        we know  .\n        Can you see how to use this, and the fact that   are eigenvectors,\n        to prove the result?\n       \n        To see this, suppose   is symmetric, and that we have\n         ,\n        with  , and  .\n        We then have, since   is symmetric, and using the result above,\n         .\n        It follows that  ,\n        and since  ,\n        we must have  .\n       \n    The procedure for diagonalizing a matrix is as follows:\n    assuming that   is equal to the multiplicity of  \n    for each distinct eigenvalue  , we find a basis for  .\n    The union of the bases for each eigenspace is then a basis of eigenvectors for  ,\n    and the matrix   whose columns are those eigenvectors will satisfy  ,\n    where   is a diagonal matrix whose diagonal entries are the eigenvalues of  .\n   \n    If   is symmetric, we know that eigenvectors from  different  eigenspaces will be orthogonal to each other.\n    If we further choose an orthogonal basis of eigenvectors for each eigenspace (which is possible via the Gram-Schmidt procedure),\n    then we can construct an orthogonal basis of eigenvectors for  .\n    Furthermore, if we normalize each vector, then we'll have an orthonormal basis.\n    The matrix   whose columns consist of these orthonormal basis vectors has a name.\n   orthogonal \n        A matrix   is orthogonal if and only if the columns of   form an orthonormal basis for  .\n       Strategy \n        This more or less amounts to the fact that   if and only if  ,\n        and thinking about the matrix product in terms of dot products.\n       \n    A fun fact is that if the columns of   are orthonormal, then so are the rows.\n    But this is not true if we ask for the columns to be merely orthogonal.\n    For example, the columns of   are orthogonal,\n    but (as you can check) the rows are not. But if we normalize the columns, we get\n     ,\n    which, as you can confirm, is an orthogonal matrix.\n   \n        An   matrix   is said to be  orthogonally diagonalizable \n        if there exists an orthogonal matrix   such that   is diagonal.\n       \n    The above definition leads to the following result, also known as the Principal Axes Theorem.\n    A careful proof is quite difficult, and omitted from this book.\n    The hard part is showing that any symmetric matrix is orthogonally diagonalizable.\n    There are a few ways to do this, most requiring induction on the size of the matrix.\n    A common approach actually uses multivariable calculus! (Optimization via Lagrange multipliers, to be precise.)\n    If you are reading this along with the book by Nicholson, there is a gap in his proof:\n    in the induction step, he assumes the existence of a real eigenalue of  ,\n    but this has to be proved!\n   Real Spectral Theorem \n        The following are equivalent for a real   matrix  :\n         \n             \n                is symmetric.\n             \n           \n             \n              There is an orthonormal basis for   consisting of eigenvectors of  .\n             \n           \n             \n                is orthogonally diagonalizable.\n             \n           \n       \n        Determine the eigenvalues of  ,\n        and find an orthogonal matrix   such that   is diagonal.\n       \n        We'll solve this problem with the help of the computer.\n       \n        We get  , so our eigenvalues are   and  .\n        For   we have  :\n       \n        For   we have  .\n       \n        The approach above is useful as we're trying to remind ourselves how eigenvalues and eigenvectors are defined and computed.\n        Eventually we might want to be more efficient. Fortunately, there's a command for that.\n       \n        Note that the output above lists each eigenvalue, followed by its multiplicity, and then the associated eigenvectors.\n       \n        This gives us a basis for   consisting of eigenvalues of  , but we want an orthogonal basis.\n        Note that the eigenvector corresponding to   is orthogonal to both of the eigenvectors corresponding to  .\n        But these eigenvectors are not orthogonal to each other.\n        To get an orthogonal basis for  , we apply the Gram-Schmidt algorithm.\n       \n        This gives us an orthogonal basis of eigenvectors. Scaling to clear fractions, we have\n         \n        From here, we need to normalize each vector to get the matrix  .\n        But we might not like that the last vector has norm  .\n        One option to consider is to apply Gram-Schmidt with the vectors in the other order.\n       \n        That gives us the (slightly nicer) basis\n         .\n        The corresponding orthonormal basis is\n         .\n        This gives us the matrix  .\n        Let's confirm that   is orthogonal.\n       \n        Since  , we can conclude that  , so   is orthogonal, as required.\n        Finally, we diagonalize  .\n       \n        Incidentally, the SymPy library for Python does have a diagaonalization routine;\n        however, it does not do orthogonal diagonalization by default.\n        Here is what it provides for our matrix  .\n       "
},
{
  "id": "p-1092",
  "level": "2",
  "url": "subsec-ortho-diag.html#p-1092",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "subsec-ortho-diag.html#exercise-96",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": "\n        Prove that if   for any  ,\n        then   is symmetric.\n       \n        If this condition is true for all  ,\n        then it is true in particular for the vectors in the standard basis for  .\n       \n        Take   and  ,\n        where   is the standard basis for  .\n        Then with   we have\n         ,\n        which shows that  .\n       "
},
{
  "id": "thm-ortho-eigen-symm",
  "level": "2",
  "url": "subsec-ortho-diag.html#thm-ortho-eigen-symm",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "",
  "body": "\n        If   is a symmetric matrix, then eigenvectors corresponding to  distinct  eigenvalues are orthogonal.\n       Strategy \n        We want to show that if   are eigenvectors corresponding to distinct eigenvalues  ,\n        then  .\n        It was pointed out above that since   is symmetric,\n        we know  .\n        Can you see how to use this, and the fact that   are eigenvectors,\n        to prove the result?\n       \n        To see this, suppose   is symmetric, and that we have\n         ,\n        with  , and  .\n        We then have, since   is symmetric, and using the result above,\n         .\n        It follows that  ,\n        and since  ,\n        we must have  .\n       "
},
{
  "id": "def-orthogonal-matrix",
  "level": "2",
  "url": "subsec-ortho-diag.html#def-orthogonal-matrix",
  "type": "Definition",
  "number": "4.2.3",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "thm-ortho-matrix",
  "level": "2",
  "url": "subsec-ortho-diag.html#thm-ortho-matrix",
  "type": "Theorem",
  "number": "4.2.4",
  "title": "",
  "body": "\n        A matrix   is orthogonal if and only if the columns of   form an orthonormal basis for  .\n       Strategy \n        This more or less amounts to the fact that   if and only if  ,\n        and thinking about the matrix product in terms of dot products.\n       "
},
{
  "id": "def-ortho-diag",
  "level": "2",
  "url": "subsec-ortho-diag.html#def-ortho-diag",
  "type": "Definition",
  "number": "4.2.5",
  "title": "",
  "body": "\n        An   matrix   is said to be  orthogonally diagonalizable \n        if there exists an orthogonal matrix   such that   is diagonal.\n       "
},
{
  "id": "thm-real-spectral",
  "level": "2",
  "url": "subsec-ortho-diag.html#thm-real-spectral",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "Real Spectral Theorem.",
  "body": "Real Spectral Theorem \n        The following are equivalent for a real   matrix  :\n         \n             \n                is symmetric.\n             \n           \n             \n              There is an orthonormal basis for   consisting of eigenvectors of  .\n             \n           \n             \n                is orthogonally diagonalizable.\n             \n           \n       "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "subsec-ortho-diag.html#exercise-97",
  "type": "Exercise",
  "number": "4.2.7",
  "title": "",
  "body": "\n        Determine the eigenvalues of  ,\n        and find an orthogonal matrix   such that   is diagonal.\n       \n        We'll solve this problem with the help of the computer.\n       \n        We get  , so our eigenvalues are   and  .\n        For   we have  :\n       \n        For   we have  .\n       \n        The approach above is useful as we're trying to remind ourselves how eigenvalues and eigenvectors are defined and computed.\n        Eventually we might want to be more efficient. Fortunately, there's a command for that.\n       \n        Note that the output above lists each eigenvalue, followed by its multiplicity, and then the associated eigenvectors.\n       \n        This gives us a basis for   consisting of eigenvalues of  , but we want an orthogonal basis.\n        Note that the eigenvector corresponding to   is orthogonal to both of the eigenvectors corresponding to  .\n        But these eigenvectors are not orthogonal to each other.\n        To get an orthogonal basis for  , we apply the Gram-Schmidt algorithm.\n       \n        This gives us an orthogonal basis of eigenvectors. Scaling to clear fractions, we have\n         \n        From here, we need to normalize each vector to get the matrix  .\n        But we might not like that the last vector has norm  .\n        One option to consider is to apply Gram-Schmidt with the vectors in the other order.\n       \n        That gives us the (slightly nicer) basis\n         .\n        The corresponding orthonormal basis is\n         .\n        This gives us the matrix  .\n        Let's confirm that   is orthogonal.\n       \n        Since  , we can conclude that  , so   is orthogonal, as required.\n        Finally, we diagonalize  .\n       \n        Incidentally, the SymPy library for Python does have a diagaonalization routine;\n        however, it does not do orthogonal diagonalization by default.\n        Here is what it provides for our matrix  .\n       "
},
{
  "id": "sec-quadratic",
  "level": "1",
  "url": "sec-quadratic.html",
  "type": "Section",
  "number": "4.3",
  "title": "Quadratic forms",
  "body": "Quadratic forms \n    If you've done a couple of calculus courses, you've probably encountered conic sections,\n    like the ellipse   or the parabola  .\n    You might also recall that your instructor was careful to avoid conic sections with equations including\n     cross-terms  like  .\n    The reason for this is that sketching a conic section like   requires the techniques of the previous section.\n   \n    A basic fact about orthogonal matrices is that they  preserve length .\n    Indeed, for any vector   in   and any orthogonal matrix  ,\n     ,\n    since  .\n   \n    Note also that since   and  , we have\n     ,\n    so  . If  , we have what is called a  special orthogonal matrix .\n    In   or  , multiplication by a special orthogonal matrix is simply a rotation.\n    (If  , there is also a reflection.)\n   \n    We mentioned in the previous section that the  \n    is also referred to as the principal axes theorem.\n    The name comes from the fact that one way to interpret the orthogonal diagonalization of a symmetric matrix is that we are rotating our coordinate system.\n    The original coordinate axes are rotated to new coordinate axes, with respect to which the matrix   is diagonal.\n    This will become more clear once we apply these ideas to the problem of conic sections mentioned above.\n    First, a definition.\n   quadratic form \n    For example,   and   are quadratic forms.\n    Note that each term in a quadratic form is of degree two.\n    We omit linear terms, since these can be absorbed by completing the square.\n    The important observation is that every quadratic form can be associated to a symmetric matrix.\n    The diagonal entries are the coefficients   appearing in  ,\n    while the off-diagonal entries are  half  the corresponding coefficients  .\n   \n    For example the two quadratic forms given above have the following associated matrices:\n     .\n    The reason for this is that we can then write\n     \n    and\n     .\n   \n    Of course, the reason for wanting to associate a  symmetric  matrix to a quadratic form is that it can be orthogonally diagonalized.\n    Consider the matrix  .\n   \n    We find distinct eigenvalues   and  .\n    Since   is symmetric, we know the corresponding eigenvectors will be orthogonal.\n   \n    The resulting orthogonal matrix is  ,\n    and we find\n     \n    where  . If we define new variables   by\n     ,\n    then we find that\n     .\n    Note that there is no longer any cross term.\n   \n    Now, suppose we want to graph the conic  .\n    By changing to the variables   this becomes  , or  .\n    This is the standard from of an ellipse, but in terms of new variables.\n    How do we graph it? Returning to the definition of our new variables, we find  \n    and  .\n    The   axis should be the line  , or  .\n    (Note that this line points in the direction of the eigenvector  .)\n    The   axis should be the line  , or  , which is in the direction of the eigenvector  .\n   \n    This lets us see that our new coordinate axes are simply a rotation (by  ) of the old coordinate axes,\n    and our conic section is, accordingly, an ellipse that has been rotated by the same angle.\n   "
},
{
  "id": "def-quadratic-form",
  "level": "2",
  "url": "sec-quadratic.html#def-quadratic-form",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "quadratic form "
},
{
  "id": "sec-complex",
  "level": "1",
  "url": "sec-complex.html",
  "type": "Section",
  "number": "4.4",
  "title": "Diagonalization of complex matrices",
  "body": "Diagonalization of complex matrices \n      Recall that when we first defined vector spaces,\n      we mentioned that a vector space can be defined over any  field   .\n      To keep things simple, we've mostly assumed  .\n      But most of the theorems and proofs we've encountered go through unchanged if we work over a general field.\n      (This is not quite true: over a  finite  field things can get more complicated.\n      For example, if  ,\n      then we get weird results like  , since  .)\n     \n      In fact, if we replace   by  ,\n      about the only thing we'd have to go back and change is the definition of the dot product.\n      The reason for this is that although the complex numbers seem computationally more complicated,\n      (which might mostly be because you don't use them often enough)\n      they follow the exact same algebraic rules as the real numbers.\n      In other words, the  arithmetic  might be different, but the  algebra  is the same.\n      There is one key difference between the two fields: over the complex numbers,\n      every polynomial can be factored. This is important if you're interested in finding eigenvalues.\n     \n      This section is written based on the assumption that complex numbers were covered in a previous course.\n      If this was not the case, or to review this material,\n      see   before proceeding.\n     Complex vectors \n      A complex vector space is simply a vector space where the scalars are elements of   rather than  .\n      Examples include polynomials with complex coefficients, complex-valued functions, and  ,\n      which is defined exactly how you think it should be.\n      In fact, one way to obtain   is to start with the exact same standard basis we use for  ,\n      and then take linear combinations using complex scalars.\n     \n      We'll write elements of   as  .\n      The complex conjugate of   is given by\n       .\n     \n      The standard inner product on   looks a lot like the dot product on  ,\n      with one important difference: we apply a complex conjugate to the second vector.\n     standard inner product \n      If   are real, this is just the usual dot product.\n      The reason for using the complex conjugate is to ensure that we still have a positive-definite inner product on  :\n       ,\n      which shows that  ,\n      and   if and only if  .\n     \n          Compute the dot product of   and  .\n         hermitian conjugate \n      Again, you might want to wrap that last term in  simplify()  (in which case you'll get   for the dot product).\n      Above, we saw that the complex inner product is designed to be positive definite, like the real inner product.\n      The remaining properties of the complex inner product are given as follows.\n     \n          For any vectors   and any complex number  ,\n           \n               \n                  and\n                 .\n               \n             \n               \n                 \n                and  .\n               \n             \n               \n                 \n               \n             \n               \n                 , and   if and only if  .\n               \n             \n         \n           \n               \n                Using the distributive properties of matrix multiplication and the transpose,\n                 .\n                The proof is similar when addition is in the second component.\n                (But not identical -- you'll need the fact that the complex conjugate is distributive, rather than the transpose.)\n               \n             \n               \n                These again follow from writing the inner product as a matrix product.\n                 ,\n                and\n                 .\n               \n             \n               \n                Note that for any vectors  ,   is a number,\n                and therefore equal to its own transpose.\n                Thus, we have  , and\n                 .\n               \n             \n               \n                This was already demonstrated above.\n               \n             \n         norm \n      Note that much like the real norm, the complex norm satisfies  \n      for any (complex) scalar  .\n     \n          The norm of a complex vector is always a real number.\n         \n         \n          Since the norm is computed using the modulus, which is always real and non-negative,\n          the norm will be a real number as well.\n          If you ever get a complex number for your norm,\n          you've probably forgotten the complex conjugate somewhere.\n         \n       Complex matrices \n      Linear transformations are defined in exactly the same way,\n      and a complex matrix is simply a matrix whose entries are complex numbers.\n      There are two important operations defined on complex matrices:\n      the conjugate, and the conjugate transpose (also known as the hermitian transpose).\n     conjugate conjugate transpose \n      Note that many textbooks use the notation   for the conjugate transpose.\n     hermitian unitary skew-hermitian \n      hermitian and unitary matrices (or more accurately, linear operators) are very important in quantum mechanics.\n      Indeed, hermitian matrices represent  observable  quantities,\n      in part because their eigenvalues are real, as we'll soon see.\n      For us, hermitian and unitary matrices can simply be viewed as the complex counterparts of symmetric and orthogonal matrices,\n      respectively. In fact, a real symmetric matrix  is  hermitian,\n      since the conjugate has no effect on it, and similarly, a real orthogonal matrix is technically unitary.\n      As with orthogonal matrices, a unitary matrix can also be characterized by the property that its rows and columns both form orthonormal bases.\n     \n          Show that the matrix   is hermitian,\n          and that the matrix   is unitary.\n         \n          We have  ,\n          so\n           ,\n          and\n           ,\n          so that  .\n         \n      When using SymPy, the hermitian conjugate of a matrix  A  is executed using  A.H .\n      (There appears to also be an equivalent operation named  Dagger  coming from  sympy.physics.quantum ,\n      but I've had more success with  .H .) The complex unit is entered as  I .\n      So for the exercise above, we can do the following.\n     \n      The last line verifies that  .\n      We could also replace it with  A,A.H  to explicitly see the two matrices side by side.\n      Now, let's confirm that   is unitary.\n     \n      Hmm... That doesn't look like the identity on the right. Maybe try replacing  B*B.H  with  simplify(B*B.H) .\n      (You will want to add  from sympy import simplify  at the top of the cell.)\n      Or you could try  B.H, B**-1  to compare results.\n      Actually, what's interesting is that in a Sage cell,  B.H == B**-1  yields  False ,\n      but  B.H == simplify(B**-1)  yields  True !\n     \n      As mentioned above, hermitian matrices are the complex analogue of symmetric matrices.\n      Recall that a key property of a symmetric matrix is its symmetry with respect to the dot product.\n      For a symmetric matrix  , we had  .\n      Hermtian matrices exhibit the same behaviour with respect to the complex inner product.\n     \n          An   complex matrix   is hermitian if and only if\n           \n          for any  \n         \n          Note that the property   is equivalent to  .\n          This gives us\n           .\n          Conversely, suppose   for all  ,\n          and let   denote the standard basis for  . Then\n           ,\n          which shows that  .\n         \n      Next, we've noted that one advantage of doing linear algebra over   is that every polynomial can be completely factored,\n      including the characteristic polynomial. This means that we can always find eigenvalues for a matrix.\n      When that matrix is hermitian, we get a surprising result.\n     \n          For any hermitian matrix  ,\n           \n               \n                The eigenvalues of   are real.\n               \n             \n               \n                Eigenvectors corresponding to distinct eigenvalues are orthogonal.\n               \n             \n         \n           \n               \n                Suppose   for some   and  .\n                Then\n                 .\n                Thus,  , and since  , we must have  , which means  .\n               \n             \n               \n                Similarly, suppose   are eigenvalues of  ,\n                with corresponding eigenvectors  . Then\n                 .\n                This gives us  .\n                And since we already know   must be real,\n                and  , we must have  .\n               \n             \n         \n      In light of  ,\n      we realize that diagonalization of hermitian matrices will follow the same script as for symmetric matrices.\n      Indeed,   applies equally well in  ,\n      as long as we replace the dot product with the complex inner product.\n      This suggests the following.\n     Spectral Theorem \n          If   is an   hermitian matrix,\n          then there exists an orthonormal basis of   consisting of eigenvectors of  .\n          Moreover, the matrix   whose columns consist of those eigenvectors is unitary,\n          and the matrix   is diagonal.\n         \n          Confirm that the matrix   is hermitian.\n          Then, find the eigenvalues of  , and a unitary matrix   such that   is diagonal.\n         \n          Confirming that   is almost immediate.\n          We will use the computer below to compute the eigenvalues and eigenvectors of  ,\n          but it's useful to attempt this at least once by hand. We have\n           ,\n          so the eigenvalues are   and  ,\n          which are both real, as expected.\n         \n          Finding eigenvectors can seem trickier than with real numbers,\n          mostly because it is no longer immediately apparent when one row or a matrix is a multiple of another.\n          But we know that the rows of   must be parallel for a   matrix,\n          which lets proceed nonetheless.\n         \n          For  , we have\n           .\n          There are two ways one can proceed from here.\n          We could use row operations to get to the reduced row-echelon form of  .\n          If we take this approach, we multiply row 1 by  ,\n          and then take   times the new row 1 and add it to row 2, to create a zero, and so on.\n         \n          Easier is to realize that if we haven't made a mistake calculating our eigenvalues,\n          then the above matrix can't be invertible, so there must be some nonzero vector in the kernel.\n          If  , then we must have\n           ,\n          when we multiply by the first row of  .\n          This suggests that we take   and  ,\n          to get   as our first eigenvector.\n          To make sure we've done things correctly, we multiply by the second row of  :\n           .\n          Success! Now we move onto the second eigenvalue.\n         \n          For  , we get\n           .\n          If we attempt to read off the answer like last time,\n          the first row of   suggests the vector  .\n          Checking the second row to confirm, we find:\n           ,\n          as before.\n         \n          Finally, we note that\n           ,\n          so the two eigenvectors are orthogonal, as expected. We have\n           ,\n          so our orthogonal matrix is\n           .\n          With a bit of effort, we can finally confirm that\n           ,\n          as expected.\n         \n      To do the above exercise using SymPy, we first define   and ask for the eigenvectors.\n     \n      We can now manually determine the matrix  , as we did above, and input it:\n     \n      To confirm it's unitary, add the line  U*U.H  to the above,\n      and confirm that you get the identity matrix as output.\n      You might need to use  simplify(U*U.H)  if the result is not clear.\n      Now, to confirm that   really is diagonal, go back to the cell above, and enter it.\n      Try  (U.H)*A*U , just to remind yourself that adding the  simplify  command is often a good idea.\n     \n      If you want to cut down on the manual labour involved, we can make use of some of the other tools SymPy provides.\n      In the next cell, we're going to assign the output of  A.eigenvects()  to a list.\n      The only trouble is that the output of the eigenvector command is a list of lists.\n      Each list item is a list  (eigenvalue, multiplicity, [eigenvectors]) .\n     \n      Try the above modifications, in sequence.\n      First, replacing the second line by  L[0]  will give the first list item, which is another list:\n       .\n      We want the third item in the list, so try  (L[0])[2] .\n      But note the extra set of brackets! There could (in theory) be more than one eigenvector,\n      so this is a list with one item. To finally get the vector out, try  ((L[0])[2])[0] .\n      (There is probably a better way to do this. Someone who is more fluent in Python is welcome to advise.)\n     \n      Now that we know how to extract the eigenvectors, we can normalize them, and join them to make a matrix.\n      The norm of a vector is simnply  v.norm() , and to join column vectors  u1  and  u2  to make a matrix,\n      we can use the command  u1.row_join(u2) . We already defined the matrix  A  and list  L  above,\n      but here is the whole routine in one cell, in case you didn't run all the cells above.\n     \n      Believe me, you want the simplify command on that last matrix.\n     \n      While   guarantees that any hermitian matrix can be  unitarily diagonalized ,\n      there are also non-hermitian matrices for which this can be done as well.\n      A classic example of this is the rotation matrix  .\n      This is a real matrix with complex eigenvalues  ,\n      and while it is neither symmetric nor hermitian, it can be orthogonally diagonalized.\n      This should be contrasted with the real spectral theorem,\n      where any matrix that can be orthogonally diagonalized is necessarily symmetric.\n     \n      This suggests that perhaps hermitian matrices are not quite the correct class of matrix for which the spectral theorem should be stated.\n      Indeed, it turns out there is a somewhat more general class of matrix: the  normal  matrices.\n     normal \n        Select all matrices below that are normal.\n       \n         \n           \n               \n             \n           \n             \n              This matrix is hermitian, and we know that every hermitian matrix is normal.\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              This matrix is not normal; this can be confirmed by direct computation,\n              or by noting that it cannot be diagonalized.\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              This matrix is unitary, and every unitary matrix is normal.\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              This matrix is neither hermitian nor unitary,\n              but it is normal, which can be verified by direct computation.\n             \n           \n         \n       \n      It turns out that a matrix   is normal if and only if  \n      for some unitary matrix   and diagonal matrix  .\n      A further generalization is known as  Schur's Theorem .\n     \n          For  any  complex   matrix  ,\n          there exists a unitary matrix   such that   is upper-triangular,\n          and such that the diagonal entries of   are the eigenvalues of  .\n         \n      Using Schur's Theorem, we can obtain a famous result, known as the Cayley-Hamilton Theorem,\n      for the case of complex matrices. (It is true for real matrices as well, but we don't yet have the tools to prove it.)\n      The Cayley-Hamilton Theorem states that substituting any matrix into its characteristic polynomial results in the zero matrix.\n      To understand this result, we should first explain how to define a polynomial of a matrix.\n     \n      Given a polynomial  , we define   as\n       .\n      (Note the presence of the identity matrix in the first term, since it does not make sense to add a scalar to a matrix.)\n      Note further that since   for any invertible matrix   and positive integer  ,\n      we have   for any polynomial   and unitary matrix  .\n     \n          Let   be an   complex matrix,\n          and let   denote the characteristic polynomial of  .\n          Then we have  .\n         \n          By  , there exists a unitary matrix   such that  ,\n          where   is upper triangular, and has the eigenvalues of   as diagonal entries.\n          Since  , and   (since   and   are similar)\n          it suffices to show that   when   is upper-triangular.\n          (If you like, we are showing that  , and deducing that  .)\n          But if   is upper-triangular, so is  ,\n          and therefore,   is just the product of the diagonal entries. That is,\n           ,\n          so\n           .\n         \n          Since the first column of   is  ,\n          the first column of   is identically zero.\n          The second column of   similarly has the form  \n          for some number  .\n         \n          It follows that the first two columns of   are identically zero.\n          Since only the first two entries in the third column of   can be nonzero,\n          we find that the first three columns of   are zero,\n          and so on.\n         "
},
{
  "id": "def-complex-inner",
  "level": "2",
  "url": "sec-complex.html#def-complex-inner",
  "type": "Definition",
  "number": "4.4.1",
  "title": "",
  "body": "standard inner product "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "sec-complex.html#exercise-98",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": "\n          Compute the dot product of   and  .\n         "
},
{
  "id": "p-1145",
  "level": "2",
  "url": "sec-complex.html#p-1145",
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
  "body": "\n          For any vectors   and any complex number  ,\n           \n               \n                  and\n                 .\n               \n             \n               \n                 \n                and  .\n               \n             \n               \n                 \n               \n             \n               \n                 , and   if and only if  .\n               \n             \n         \n           \n               \n                Using the distributive properties of matrix multiplication and the transpose,\n                 .\n                The proof is similar when addition is in the second component.\n                (But not identical -- you'll need the fact that the complex conjugate is distributive, rather than the transpose.)\n               \n             \n               \n                These again follow from writing the inner product as a matrix product.\n                 ,\n                and\n                 .\n               \n             \n               \n                Note that for any vectors  ,   is a number,\n                and therefore equal to its own transpose.\n                Thus, we have  , and\n                 .\n               \n             \n               \n                This was already demonstrated above.\n               \n             \n         "
},
{
  "id": "def-complex-norm",
  "level": "2",
  "url": "sec-complex.html#def-complex-norm",
  "type": "Definition",
  "number": "4.4.4",
  "title": "",
  "body": "norm "
},
{
  "id": "rs-tf-cnorm",
  "level": "2",
  "url": "sec-complex.html#rs-tf-cnorm",
  "type": "Exercise",
  "number": "4.4.5",
  "title": "",
  "body": "\n          The norm of a complex vector is always a real number.\n         \n         \n          Since the norm is computed using the modulus, which is always real and non-negative,\n          the norm will be a real number as well.\n          If you ever get a complex number for your norm,\n          you've probably forgotten the complex conjugate somewhere.\n         \n       "
},
{
  "id": "def-conjugate-transpose",
  "level": "2",
  "url": "sec-complex.html#def-conjugate-transpose",
  "type": "Definition",
  "number": "4.4.6",
  "title": "",
  "body": "conjugate conjugate transpose "
},
{
  "id": "def-hermitian-unitary",
  "level": "2",
  "url": "sec-complex.html#def-hermitian-unitary",
  "type": "Definition",
  "number": "4.4.7",
  "title": "",
  "body": "hermitian unitary skew-hermitian "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "sec-complex.html#exercise-100",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "",
  "body": "\n          Show that the matrix   is hermitian,\n          and that the matrix   is unitary.\n         \n          We have  ,\n          so\n           ,\n          and\n           ,\n          so that  .\n         "
},
{
  "id": "thm-hermitian-symmetry",
  "level": "2",
  "url": "sec-complex.html#thm-hermitian-symmetry",
  "type": "Theorem",
  "number": "4.4.9",
  "title": "",
  "body": "\n          An   complex matrix   is hermitian if and only if\n           \n          for any  \n         \n          Note that the property   is equivalent to  .\n          This gives us\n           .\n          Conversely, suppose   for all  ,\n          and let   denote the standard basis for  . Then\n           ,\n          which shows that  .\n         "
},
{
  "id": "thm-hermitian-eigen-real",
  "level": "2",
  "url": "sec-complex.html#thm-hermitian-eigen-real",
  "type": "Theorem",
  "number": "4.4.10",
  "title": "",
  "body": "\n          For any hermitian matrix  ,\n           \n               \n                The eigenvalues of   are real.\n               \n             \n               \n                Eigenvectors corresponding to distinct eigenvalues are orthogonal.\n               \n             \n         \n           \n               \n                Suppose   for some   and  .\n                Then\n                 .\n                Thus,  , and since  , we must have  , which means  .\n               \n             \n               \n                Similarly, suppose   are eigenvalues of  ,\n                with corresponding eigenvectors  . Then\n                 .\n                This gives us  .\n                And since we already know   must be real,\n                and  , we must have  .\n               \n             \n         "
},
{
  "id": "thm-complex-spectral",
  "level": "2",
  "url": "sec-complex.html#thm-complex-spectral",
  "type": "Theorem",
  "number": "4.4.11",
  "title": "Spectral Theorem.",
  "body": "Spectral Theorem \n          If   is an   hermitian matrix,\n          then there exists an orthonormal basis of   consisting of eigenvectors of  .\n          Moreover, the matrix   whose columns consist of those eigenvectors is unitary,\n          and the matrix   is diagonal.\n         "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "sec-complex.html#exercise-101",
  "type": "Exercise",
  "number": "4.4.12",
  "title": "",
  "body": "\n          Confirm that the matrix   is hermitian.\n          Then, find the eigenvalues of  , and a unitary matrix   such that   is diagonal.\n         \n          Confirming that   is almost immediate.\n          We will use the computer below to compute the eigenvalues and eigenvectors of  ,\n          but it's useful to attempt this at least once by hand. We have\n           ,\n          so the eigenvalues are   and  ,\n          which are both real, as expected.\n         \n          Finding eigenvectors can seem trickier than with real numbers,\n          mostly because it is no longer immediately apparent when one row or a matrix is a multiple of another.\n          But we know that the rows of   must be parallel for a   matrix,\n          which lets proceed nonetheless.\n         \n          For  , we have\n           .\n          There are two ways one can proceed from here.\n          We could use row operations to get to the reduced row-echelon form of  .\n          If we take this approach, we multiply row 1 by  ,\n          and then take   times the new row 1 and add it to row 2, to create a zero, and so on.\n         \n          Easier is to realize that if we haven't made a mistake calculating our eigenvalues,\n          then the above matrix can't be invertible, so there must be some nonzero vector in the kernel.\n          If  , then we must have\n           ,\n          when we multiply by the first row of  .\n          This suggests that we take   and  ,\n          to get   as our first eigenvector.\n          To make sure we've done things correctly, we multiply by the second row of  :\n           .\n          Success! Now we move onto the second eigenvalue.\n         \n          For  , we get\n           .\n          If we attempt to read off the answer like last time,\n          the first row of   suggests the vector  .\n          Checking the second row to confirm, we find:\n           ,\n          as before.\n         \n          Finally, we note that\n           ,\n          so the two eigenvectors are orthogonal, as expected. We have\n           ,\n          so our orthogonal matrix is\n           .\n          With a bit of effort, we can finally confirm that\n           ,\n          as expected.\n         "
},
{
  "id": "def-normal-matrix",
  "level": "2",
  "url": "sec-complex.html#def-normal-matrix",
  "type": "Definition",
  "number": "4.4.13",
  "title": "",
  "body": "normal "
},
{
  "id": "rs-mc-normal",
  "level": "2",
  "url": "sec-complex.html#rs-mc-normal",
  "type": "Exercise",
  "number": "4.4.14",
  "title": "",
  "body": "\n        Select all matrices below that are normal.\n       \n         \n           \n               \n             \n           \n             \n              This matrix is hermitian, and we know that every hermitian matrix is normal.\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              This matrix is not normal; this can be confirmed by direct computation,\n              or by noting that it cannot be diagonalized.\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              This matrix is unitary, and every unitary matrix is normal.\n             \n           \n         \n         \n           \n               \n             \n           \n             \n              This matrix is neither hermitian nor unitary,\n              but it is normal, which can be verified by direct computation.\n             \n           \n         \n       "
},
{
  "id": "thm-schurr",
  "level": "2",
  "url": "sec-complex.html#thm-schurr",
  "type": "Theorem",
  "number": "4.4.15",
  "title": "",
  "body": "\n          For  any  complex   matrix  ,\n          there exists a unitary matrix   such that   is upper-triangular,\n          and such that the diagonal entries of   are the eigenvalues of  .\n         "
},
{
  "id": "thm-cayley-hamilton-c",
  "level": "2",
  "url": "sec-complex.html#thm-cayley-hamilton-c",
  "type": "Theorem",
  "number": "4.4.16",
  "title": "",
  "body": "\n          Let   be an   complex matrix,\n          and let   denote the characteristic polynomial of  .\n          Then we have  .\n         \n          By  , there exists a unitary matrix   such that  ,\n          where   is upper triangular, and has the eigenvalues of   as diagonal entries.\n          Since  , and   (since   and   are similar)\n          it suffices to show that   when   is upper-triangular.\n          (If you like, we are showing that  , and deducing that  .)\n          But if   is upper-triangular, so is  ,\n          and therefore,   is just the product of the diagonal entries. That is,\n           ,\n          so\n           .\n         \n          Since the first column of   is  ,\n          the first column of   is identically zero.\n          The second column of   similarly has the form  \n          for some number  .\n         \n          It follows that the first two columns of   are identically zero.\n          Since only the first two entries in the third column of   can be nonzero,\n          we find that the first three columns of   are zero,\n          and so on.\n         "
},
{
  "id": "worksheet-dynamical",
  "level": "1",
  "url": "worksheet-dynamical.html",
  "type": "Worksheet",
  "number": "4.5",
  "title": "Worksheet: linear dynamical systems",
  "body": "Worksheet: linear dynamical systems \n        Suppose we have a sequence   defined by a linear recurrence of length  ,\n        as in  :\n         .\n       linear dynamical system \n        To determine the long term evolution of the system, we would like to be able to compute\n         \n        without first finding all the intermediate states,\n        so this is a situation where we would like to be able to efficiently compute powers of a matrix.\n        Fortunately, we know how to do this when   is diagonalizable:\n         , where   is a diagonal matrix whose entries are the eigenvalues of  ,\n        and   is the matrix of corresponding eigenvectors of  .\n       \n          Consider a recurrence of length 2, of the form\n           .\n         \n            According to  , what is the polynomial associated to this recurrence?\n           \n            Let  , for each  ,\n            and let  . Show that\n             .\n           \n            Compute the characteristic polynomial of  . What do you observe?\n           \n          For a recurrence of length 3, given by\n           :\n         \n            Determine a matrix   such that  ,\n            where  .\n           \n            Compute the characteristic polynomial of  ,\n            and compare it to the associated polynomial of the recurrence.\n           \n            Show that if   is an eigenvalue of  ,\n            then   is an associated eigenvector.\n           \n          Consider the Fibonacci sequence, defined by  ,\n          and  . Let   be the matrix associated to this sequence.\n         \n            State the matrix  , and show that   has eigenvalues  ,\n            with associated eigenvectors  .\n           \n            Let  ,\n            let  ,\n            and let  ,\n            where   gives the initial values of the sequence.\n           \n            Show that\n             .\n           \n            Note that   tells us that although the Fibonacci sequence is not a geometric sequence,\n            it is the  sum  of two geometric sequences!\n           \n            By considering the numerical values of the eigenvalues   and  ,\n            explain why we can nonetheless treat the Fibonacci sequence as  approximately  geometric when   is large.\n           dominant eigenvalue Challenge\/Project Problem: Predator-Prey Systems \n          As a more practical example, consider the following (over-simplified) predator-prey system.\n          It is based on an example in  Interactive Linear Algebra ,\n          by Margalit, Rabinoff, and Williams, but adapted to the wildlife here in Lethbridge.\n          An ecosystem contains both coyotes and deer.\n          Initially, there is a population of   coyotes, and   deer.\n         \n          We assume the following:\n           \n               \n                the share of the deer population eaten by a typical coyote in a year is   deer\n               \n             \n               \n                in the absence of the coyotes, the deer population would increase by  % per year\n               \n             \n               \n                 % of the coyote population dies each year of natural causes\n               \n             \n               \n                the growth rate of the coyote population depends on the number of deer:\n                for each 100 deer,   coyote pups will survive to adulthood.\n               \n             \n         \n          If we let   denote the number of deer after   years,\n          and   the number of coyotes, then we have\n           ,\n          or, in matrix form,\n           ,\n          where   and  .\n         \n          After   years, the two populations will be given by  ,\n          where   gives the initial populations of the two species.\n          If possible, we would like to be able to find a closed-form formula for  ,\n          which would allow us to analyze the long-term predictions of our model.\n         \n            Analyze the eigenvalues of this matrix, and diagonalize.\n            The  sympy  library won't be up to the task.\n            Instead, some combination of  numpy  and  scipy ,\n            as described by  Patrick Walls on his website ,\n            will be needed.\n           \n            The eigenvalues turn out to be complex! What does that tell you about the nature of the system?\n            What is the long-term behaviour of this system?\n           \n            Remember that those complex terms can be combined using sine and cosine functions:\n            since   is a real matrix, the eigenvalues will have the form\n             ,\n            where   and   are real. In polar form,  \n            for some   and  , and by de Moivre's Theorem,\n             .\n           \n            What if you adjust the parameters? Can you come up with a system where both species flourish?\n            Or one where they both disappear? Or one where the populations oscillate regularly?\n           \n            Referring to the hint from  ,\n            note that the size of the populations will depend on the modulus  \n            of the eigenvalues.\n            For what values of   will the populations decline\/increase\/remain steady?\n           \n            You may have read this while wondering,\n             Does Sean actually know anything about ecology and population dynamics?\n            Did he just make up those numbers? \n           \n            The answers are, respectively, no, and yes.\n            Can you come up with numbers that are based on a realistic example?\n            What does our model predict in that case? Is it accurate?\n           Challenge\/Project Problem: Markov Chains stochastic transition probabilities \n          If a system can be in one of   possible states,\n          we represent the system by an   vector  ,\n          whose entries indicate the probability that the system is in a given state at time  .\n          If we know that the system starts out in a particular state,\n          then   will have a   in one of its entries, and   everywhere else.\n         \n          A Markov chain is given by such an initial vector, and a stochastic matrix.\n          As an example, we will consider the following scenario,\n          described in the book  Shape , by Jordan Ellenberg:\n         \n          A mosquito is born in a swamp, which we will call Swamp A.\n          There is another nearby swamp, called Swamp B.\n          Observational data suggests that when a mosquito is at Swamp A,\n          there is a 40% chance that it will remain there,\n          and a 60% chance that it will move to Swamp B.\n          When the mosquito is at Swamp B, there is a 70% chance that it will remain,\n          and a 30% chance that it will return to Swamp A.\n         \n            Give a stochastic matrix   and a vector  \n            that represent the transition probabilities and initial state given above.\n           \n            By diagonalizing the matrix  ,\n            determine the long-term probability that the mosquito will be found in either swamp.\n           steady-state vector \n            Confirm that if the eigenvector   is rescaled so that its entries sum to 1,\n            the resulting values agree with the long-term probabilities found in the previous part.\n           regular \n            Prove that if   is a   stochastic matrix with no entry equal to zero,\n            then   is an eigenvalue of  .\n           \n            Prove that the product of two   stochastic matrices is stochastic.\n            Conclude that if   is stochastic, so is   for each  .\n           \n            Also prove that if   has positive entries for some  ,\n            then   is an eigenvalue of  .\n           \n            You have already proved that a stochastic matrix with positive entries has eigenvalue  ,\n            and that a power of a stochastic matrix is stochastic.\n            If   has positive entries for some  , what eigenvalue must it have?\n            You may assume (it is true, but you do not have to prove it)\n            that   will also have positive entries.\n           \n          By searching online or in other textbooks,\n          find and state a more interesting\/complicated example of a Markov chain problem,\n          and show how to solve it.\n         "
},
{
  "id": "p-1217",
  "level": "2",
  "url": "worksheet-dynamical.html#p-1217",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear dynamical system "
},
{
  "id": "exercise-103",
  "level": "2",
  "url": "worksheet-dynamical.html#exercise-103",
  "type": "Worksheet Exercise",
  "number": "4.5.1",
  "title": "",
  "body": "\n          Consider a recurrence of length 2, of the form\n           .\n         \n            According to  , what is the polynomial associated to this recurrence?\n           \n            Let  , for each  ,\n            and let  . Show that\n             .\n           \n            Compute the characteristic polynomial of  . What do you observe?\n           "
},
{
  "id": "exercise-104",
  "level": "2",
  "url": "worksheet-dynamical.html#exercise-104",
  "type": "Worksheet Exercise",
  "number": "4.5.2",
  "title": "",
  "body": "\n          For a recurrence of length 3, given by\n           :\n         \n            Determine a matrix   such that  ,\n            where  .\n           \n            Compute the characteristic polynomial of  ,\n            and compare it to the associated polynomial of the recurrence.\n           \n            Show that if   is an eigenvalue of  ,\n            then   is an associated eigenvector.\n           "
},
{
  "id": "exercise-105",
  "level": "2",
  "url": "worksheet-dynamical.html#exercise-105",
  "type": "Worksheet Exercise",
  "number": "4.5.3",
  "title": "",
  "body": "\n          Consider the Fibonacci sequence, defined by  ,\n          and  . Let   be the matrix associated to this sequence.\n         \n            State the matrix  , and show that   has eigenvalues  ,\n            with associated eigenvectors  .\n           \n            Let  ,\n            let  ,\n            and let  ,\n            where   gives the initial values of the sequence.\n           \n            Show that\n             .\n           \n            Note that   tells us that although the Fibonacci sequence is not a geometric sequence,\n            it is the  sum  of two geometric sequences!\n           \n            By considering the numerical values of the eigenvalues   and  ,\n            explain why we can nonetheless treat the Fibonacci sequence as  approximately  geometric when   is large.\n           dominant eigenvalue "
},
{
  "id": "exercise-106",
  "level": "2",
  "url": "worksheet-dynamical.html#exercise-106",
  "type": "Worksheet Exercise",
  "number": "4.5.4",
  "title": "",
  "body": "\n          As a more practical example, consider the following (over-simplified) predator-prey system.\n          It is based on an example in  Interactive Linear Algebra ,\n          by Margalit, Rabinoff, and Williams, but adapted to the wildlife here in Lethbridge.\n          An ecosystem contains both coyotes and deer.\n          Initially, there is a population of   coyotes, and   deer.\n         \n          We assume the following:\n           \n               \n                the share of the deer population eaten by a typical coyote in a year is   deer\n               \n             \n               \n                in the absence of the coyotes, the deer population would increase by  % per year\n               \n             \n               \n                 % of the coyote population dies each year of natural causes\n               \n             \n               \n                the growth rate of the coyote population depends on the number of deer:\n                for each 100 deer,   coyote pups will survive to adulthood.\n               \n             \n         \n          If we let   denote the number of deer after   years,\n          and   the number of coyotes, then we have\n           ,\n          or, in matrix form,\n           ,\n          where   and  .\n         \n          After   years, the two populations will be given by  ,\n          where   gives the initial populations of the two species.\n          If possible, we would like to be able to find a closed-form formula for  ,\n          which would allow us to analyze the long-term predictions of our model.\n         \n            Analyze the eigenvalues of this matrix, and diagonalize.\n            The  sympy  library won't be up to the task.\n            Instead, some combination of  numpy  and  scipy ,\n            as described by  Patrick Walls on his website ,\n            will be needed.\n           \n            The eigenvalues turn out to be complex! What does that tell you about the nature of the system?\n            What is the long-term behaviour of this system?\n           \n            Remember that those complex terms can be combined using sine and cosine functions:\n            since   is a real matrix, the eigenvalues will have the form\n             ,\n            where   and   are real. In polar form,  \n            for some   and  , and by de Moivre's Theorem,\n             .\n           \n            What if you adjust the parameters? Can you come up with a system where both species flourish?\n            Or one where they both disappear? Or one where the populations oscillate regularly?\n           \n            Referring to the hint from  ,\n            note that the size of the populations will depend on the modulus  \n            of the eigenvalues.\n            For what values of   will the populations decline\/increase\/remain steady?\n           \n            You may have read this while wondering,\n             Does Sean actually know anything about ecology and population dynamics?\n            Did he just make up those numbers? \n           \n            The answers are, respectively, no, and yes.\n            Can you come up with numbers that are based on a realistic example?\n            What does our model predict in that case? Is it accurate?\n           "
},
{
  "id": "exercise-107",
  "level": "2",
  "url": "worksheet-dynamical.html#exercise-107",
  "type": "Worksheet Exercise",
  "number": "4.5.5",
  "title": "",
  "body": "stochastic transition probabilities \n          If a system can be in one of   possible states,\n          we represent the system by an   vector  ,\n          whose entries indicate the probability that the system is in a given state at time  .\n          If we know that the system starts out in a particular state,\n          then   will have a   in one of its entries, and   everywhere else.\n         \n          A Markov chain is given by such an initial vector, and a stochastic matrix.\n          As an example, we will consider the following scenario,\n          described in the book  Shape , by Jordan Ellenberg:\n         \n          A mosquito is born in a swamp, which we will call Swamp A.\n          There is another nearby swamp, called Swamp B.\n          Observational data suggests that when a mosquito is at Swamp A,\n          there is a 40% chance that it will remain there,\n          and a 60% chance that it will move to Swamp B.\n          When the mosquito is at Swamp B, there is a 70% chance that it will remain,\n          and a 30% chance that it will return to Swamp A.\n         \n            Give a stochastic matrix   and a vector  \n            that represent the transition probabilities and initial state given above.\n           \n            By diagonalizing the matrix  ,\n            determine the long-term probability that the mosquito will be found in either swamp.\n           steady-state vector \n            Confirm that if the eigenvector   is rescaled so that its entries sum to 1,\n            the resulting values agree with the long-term probabilities found in the previous part.\n           "
},
{
  "id": "exercise-108",
  "level": "2",
  "url": "worksheet-dynamical.html#exercise-108",
  "type": "Worksheet Exercise",
  "number": "4.5.6",
  "title": "",
  "body": "regular \n            Prove that if   is a   stochastic matrix with no entry equal to zero,\n            then   is an eigenvalue of  .\n           \n            Prove that the product of two   stochastic matrices is stochastic.\n            Conclude that if   is stochastic, so is   for each  .\n           \n            Also prove that if   has positive entries for some  ,\n            then   is an eigenvalue of  .\n           \n            You have already proved that a stochastic matrix with positive entries has eigenvalue  ,\n            and that a power of a stochastic matrix is stochastic.\n            If   has positive entries for some  , what eigenvalue must it have?\n            You may assume (it is true, but you do not have to prove it)\n            that   will also have positive entries.\n           "
},
{
  "id": "exercise-109",
  "level": "2",
  "url": "worksheet-dynamical.html#exercise-109",
  "type": "Worksheet Exercise",
  "number": "4.5.7",
  "title": "",
  "body": "\n          By searching online or in other textbooks,\n          find and state a more interesting\/complicated example of a Markov chain problem,\n          and show how to solve it.\n         "
},
{
  "id": "section-matrix-factor",
  "level": "1",
  "url": "section-matrix-factor.html",
  "type": "Section",
  "number": "4.6",
  "title": "Matrix Factorizations and Eigenvalues",
  "body": "Matrix Factorizations and Eigenvalues \n      This section is a rather rapid tour of some cool ideas that get a lot of use in applied linear algebra.\n      We are rather light on details here. The interested reader can consult sections 8.3 8.6 in\n      the Nicholson textbook.\n     Matrix Factorizations Positive Operators self-adjoint positive positive-definite \n          Some books will define positive-definite operators by the condition  \n          without the requirement that   is self-adjoint.\n          However, we will stick to the simpler definition.\n         \n        The definition of a positive matrix is equivalent to requiring that all its eigenvalues are non-negative.\n        Every positive matrix   has a unique positive square root: a matrix   such that  .\n        Since   is symmetric\/hermitian, it can be diagonalized.\n        Writing   where   is orthogonal\/unitary and\n         ,\n        we have  , where\n         .\n       \n        The following theorem gives us a simple way of generating positive matrices.\n       \n            For any   matrix  , the matrix   is positive.\n            Moreover, if   is invertible, then   is positive-definite.\n           \n            For any   in  ,\n             .\n           Cholesky factorization \n        Even better is that there is a very simple algorithm for obtaining the factorization:\n        Carry the matrix   to triangular form, using only row operations of the type\n         . Then divide each row by the square root of the diagonal entry.\n       \n        The SymPy library contains the  cholesky()  algorithm.\n        Note however that it produces a lower triangular matrix, rather than upper triangular.\n        (That is, the output gives   rather than  , so you will have  .)\n        Let's give it a try. First, let's create a positive-definite matrix.\n       \n        Next, find the Cholesky factorization:\n       \n        Note that   is  not  the same as the matrix  !\n       Singular Value Decomposition \n        For any   matrix  , the matrices   and   are both positive. (Exercise!)\n        This means that we can define  , even if   itself is not symmetric or positive.\n       singular values \n        The SymPy library has a function for computing the singular values of a matrix.\n        Given a matrix  A , the command  A.singular_values()  will return its singular values.\n        Try this for a few different matrices below:\n       \n        In fact, SymPy can even return singular values for a matrix with variable entries!\n        Try the following example from the  SymPy documentation .\n       \n        For an   matrix  , we might not be able to diagonalize  \n        (with a single orthonormal basis).\n        However, it turns out that it's  always  possible to find a pair of orthonormal bases\n          such that\n         .\n        In matrix form,   for orthogonal matrices  .\n       \n        In fact, this can be done even if   is not square,\n        which is arguably the more interesting case! Let   be an   matrix.\n        We will find an   orthogonal matrix   and   orthogonal matrix  ,\n        such that  , where   is also  .\n       \n          If   is symmetric and positive-definite,\n          the singular values of   are just the eigenvalues of  ,\n          and the singular value decomposition is the same as diagonalization.\n         \n        The basis   is an orthonormal basis for  ,\n        and the matrix   is the matrix whose columns are the vectors  .\n        As a result,   is orthogonal.\n       \n        The matrix   is the same size as  .\n        First, we list the positive singular values of   in decreasing order:\n         .\n        Then, we let  ,\n        and set\n         .\n        That is, we put   in the upper-left, and then fill in zeros as needed,\n        until   is the same size as  .\n       \n        Next, we compute the vectors  , for  .\n        As shown in Nicolson,   will be an orthonormal basis for the column space of  .\n        The matrix   is constructed by extending this to an orthonormal basis of  .\n       \n        All of this is a lot of work to do by hand, but it turns out that it can be done numerically,\n        and more importantly,  efficiently , by a computer.\n        The SymPy library has an  SVD  algorithm,\n        but it will not be efficient for larger matrices.\n        In practice, most Python users will use the  SVD  algorithm provided by NumPy;\n        we will stick with SymPy for simplicity and consistency.\n       \n            The version of the  SVD  given above is not used in computations,\n            since it tends to be more resource intensive.\n            In particular, it requires us to store more information than necessary:\n            the last   rows of  , and the last   columns of  ,\n            get multiplied by columns\/rows of zeros in  ,\n            so we don't really need to keep track of these columns.\n           \n            Instead, most algorithms that you find will give the   diagonal matrix  ,\n            consisting of the nonzero singular values,\n            and   will be replaced by the   matrix consisting of its first   columns,\n            while   gets replaced by the   matrix consisting of its first   rows.\n            The resulting product is still equal to the original matrix.\n           \n            In some cases, even the matrix   is too large,\n            and a decision is made to truncate to some smaller subset of singular values.\n            In this case, the resulting product is no longer equal to the original matrix,\n            but it does provide an approximation. A discussion can be found\n             on Wikipedia .\n           \n            Find the singular value decomposition of the matrix  .\n           \n            Using SymPy, we get the  condensed SVD .\n            First, let's check the singular values.\n           \n             Note that the values are not listed in decreasing order.\n             Now, let's ask for the singular value decomposition.\n             The output consists of three matrices;\n             the first line below assigns those matrices to the names  P,S,Q .\n           \n            Note that the output is the  condensed  version, which doesn't match the exposition above.\n            It also doesn't follow the same ordering convention: we'll need to swap columns in each of the matrices.\n            But it does give us a decomposition of the matrix  :\n           \n            To match our earlier presentation, we first set  .\n            Next, we need to extend the   matrix in the output above to a   matrix.\n            We can do this by choosing any vector orthogonal to the two existing columns, and normalizing.\n            Let's use entries  .\n            Noting that we also need to swap the first two columns (to match the fact that we swapped columns in  ),\n            we get the matrix\n             .\n            Let's check that it is indeed orthogonal.\n           \n            Finally, we take   (again swapping columns),\n            which is just the identity matrix. We therefore should expect that\n             .\n            Let's check.\n           \n            It worked!\n           \n        The Singular Value Decomposition has a lot of useful appplications,\n        some of which are described in Nicholson's book.\n        On a very fundamental level the  SVD  provides us with information on some of the most essential properties of the matrix  ,\n        and any system of equations with   as its coefficient matrix.\n       rank column space row space null space \n        There are some interesting relationships among these spaces,\n        which are left as an exercise.\n       \n            Let   be an   matrix. Prove the following statements.\n           \n               \n             \n              Note that   if and only if  ,\n              and   if and only if  \n              for each row   of  .\n             \n              Note also that   is the (dot) product of  \n              with each column of  , and each column of   is a row of  .\n             \n               \n             \n              Notice that   if and only if  ,\n              and that  .\n              Your reasoning should be similar to that of the previous part.\n             \n        Here's the cool thing about the  SVD .\n        Let   be the positive singular values of  .\n        Let   be the orthonormal basis of eigenvectors for  ,\n        and let  \n        be the orthonormal basis of   constructed in the  SVD  algorithm. Then:\n       \n         \n             \n               \n             \n           \n             \n                form a basis for  .\n             \n           \n             \n                form a basis for  \n              (and thus, the  row rank  and  column rank  of   are the same).\n             \n           \n             \n                form a basis for  .\n              (And these are therefore the basis solutions of  !)\n             \n           \n             \n                form a basis for  .\n             \n           \n       \n        If you want to explore this further, have a look at the excellent\n         notebook by Dr. Juan H Klopper .\n        The  ipynb  file can be found  on his GitHub page .\n        In it, he takes you through various approaches to finding the singular value decomposition,\n        using the method above, as well as using NumPy and SciPy (which, for industrial applications, are superior to SymPy).\n       QR Factorization \n        Suppose   is an   matrix with independent columns.\n        (Question: for this to happen, which is true    , or  ?)\n       \n        A  -factorization of   is a factorization of the form  ,\n        where   is  , with orthonormal columns,\n        and   is an invertible upper-triangular ( ) matrix with positive diagonal entries.\n        If   is a square matrix,   will be orthogonal.\n       \n        A lot of the methods we're looking at here involve more sophisticated numerical techniques than SymPy is designed to handle.\n        If we wanted to spend time on these topics, we'd have to learn a bit about the NumPy package,\n        which has built in tools for finding things like polar decomposition and singular value decomposition.\n        However, SymPy does know how to do   factorization. After defining a matrix  A , we can use the command\n         \n          Q, R = A.QRdecomposition()\n         .\n       \n        Let's check that the matrix   really is orthogonal:\n       \n        Details of how to perform the QR factorization can be found in Nicholson's textbook.\n        It's essentially a consequence of performing the Gram-Schmidt algorithm on the columns of  ,\n        and keeping track of our work.\n       \n        The calculation above is a symbolic computation, which is nice for understanding what's going on.\n        The reason why the   factorization is useful in practice is that there are efficient numerical methods for doing it\n        (with good control over rounding errors).\n        Our next topic looks at a useful application of the   factorization.\n       Computing Eigenvalues \n        Our first method focuses on the dominant eigenvalue of a matrix.\n        An eigenvalue is dominant if it is larger in absolute value than all other eigenvalues.\n        For example, if   has eigenvalues  , then   is the dominant eigenvalue.\n       \n        If   has eigenvalues   then there is no dominant eigenvalue.\n        Any eigenvector corresponding to a dominant eigenvalue is called a dominant eigenvector.\n       The Power Method \n        If a matrix   has a dominant eigenvalue,\n        there is a method for finding it (approximately)\n        that does not involve finding and factoring the characteristic polynomial of  .\n       \n        We start with some initial guess   for a dominant eigenvector.\n        We then set   for each  , giving a sequence\n         .\n        We expect (for reasons we'll explain) that   as  ,\n        where   is a dominant eigenvector. Let's try an example.\n       \n        The dominant eigenvalue is  . Let's try an initial guess of\n          and see what happens.\n       \n        We might want to confirm whether that rather large fraction is close to  .\n        To do so, we can get the computer to divide the numerator by the denominator.\n       \n        The above might show you the fraction rather than its decimal approximation.\n        (This may depend on whether you're on Sage or Jupyter.)\n        To get the decimal, try wrapping the above in  float()  (or  N , or append with  .evalf() ).\n       \n        For the eigenvalue, we note that if  , then\n         .\n        This leads us to consider the Rayleigh quotients\n         .\n       \n        We can convert a rational number r to a float using either  N(r)  or  r.evalf() .\n        (The latter seems to be the better bet when working with a list.)\n       The QR Algorithm \n        Given an   matrix  , we know we can write  ,\n        with   orthogonal and   upper-triangular.\n        The  -algorithm exploits this fact. We set  , and write  .\n       \n        Then we set  , and factor:  .\n        Notice  . Since   is similar to  ,\n          has the same eigenvalues as  .\n       \n        Next, set  , and factor as  .\n        Since  ,   has the same eigenvalues as  .\n        In fact,  .\n       \n        After   steps we have  ,\n        which still has the same eigenvalues as  .\n        By some sort of dark magic, this sequence of matrices converges to an upper triangular matrix with eigenvalues on the diagonal!\n       \n        Consider the matrix  \n       \n        Now we repeat the process:\n       \n        Do this a few more times, and see what results!\n        (If someone can come up with a way to code this as a loop, let me know!)\n        The diagonal entries should get closer to  , respectively,\n        and the   entry should get closer to  .\n       "
},
{
  "id": "p-1265",
  "level": "2",
  "url": "section-matrix-factor.html#p-1265",
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
  "body": "positive positive-definite "
},
{
  "id": "thm-positive-prod",
  "level": "2",
  "url": "section-matrix-factor.html#thm-positive-prod",
  "type": "Theorem",
  "number": "4.6.2",
  "title": "",
  "body": "\n            For any   matrix  , the matrix   is positive.\n            Moreover, if   is invertible, then   is positive-definite.\n           \n            For any   in  ,\n             .\n           "
},
{
  "id": "p-1272",
  "level": "2",
  "url": "section-matrix-factor.html#p-1272",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cholesky factorization "
},
{
  "id": "p-1278",
  "level": "2",
  "url": "section-matrix-factor.html#p-1278",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular values "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "section-matrix-factor.html#remark-17",
  "type": "Remark",
  "number": "4.6.3",
  "title": "",
  "body": "\n            The version of the  SVD  given above is not used in computations,\n            since it tends to be more resource intensive.\n            In particular, it requires us to store more information than necessary:\n            the last   rows of  , and the last   columns of  ,\n            get multiplied by columns\/rows of zeros in  ,\n            so we don't really need to keep track of these columns.\n           \n            Instead, most algorithms that you find will give the   diagonal matrix  ,\n            consisting of the nonzero singular values,\n            and   will be replaced by the   matrix consisting of its first   columns,\n            while   gets replaced by the   matrix consisting of its first   rows.\n            The resulting product is still equal to the original matrix.\n           \n            In some cases, even the matrix   is too large,\n            and a decision is made to truncate to some smaller subset of singular values.\n            In this case, the resulting product is no longer equal to the original matrix,\n            but it does provide an approximation. A discussion can be found\n             on Wikipedia .\n           "
},
{
  "id": "example-svd",
  "level": "2",
  "url": "section-matrix-factor.html#example-svd",
  "type": "Example",
  "number": "4.6.4",
  "title": "",
  "body": "\n            Find the singular value decomposition of the matrix  .\n           \n            Using SymPy, we get the  condensed SVD .\n            First, let's check the singular values.\n           \n             Note that the values are not listed in decreasing order.\n             Now, let's ask for the singular value decomposition.\n             The output consists of three matrices;\n             the first line below assigns those matrices to the names  P,S,Q .\n           \n            Note that the output is the  condensed  version, which doesn't match the exposition above.\n            It also doesn't follow the same ordering convention: we'll need to swap columns in each of the matrices.\n            But it does give us a decomposition of the matrix  :\n           \n            To match our earlier presentation, we first set  .\n            Next, we need to extend the   matrix in the output above to a   matrix.\n            We can do this by choosing any vector orthogonal to the two existing columns, and normalizing.\n            Let's use entries  .\n            Noting that we also need to swap the first two columns (to match the fact that we swapped columns in  ),\n            we get the matrix\n             .\n            Let's check that it is indeed orthogonal.\n           \n            Finally, we take   (again swapping columns),\n            which is just the identity matrix. We therefore should expect that\n             .\n            Let's check.\n           \n            It worked!\n           "
},
{
  "id": "p-1303",
  "level": "2",
  "url": "section-matrix-factor.html#p-1303",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rank column space row space null space "
},
{
  "id": "exercise-110",
  "level": "2",
  "url": "section-matrix-factor.html#exercise-110",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "",
  "body": "\n            Let   be an   matrix. Prove the following statements.\n           \n               \n             \n              Note that   if and only if  ,\n              and   if and only if  \n              for each row   of  .\n             \n              Note also that   is the (dot) product of  \n              with each column of  , and each column of   is a row of  .\n             \n               \n             \n              Notice that   if and only if  ,\n              and that  .\n              Your reasoning should be similar to that of the previous part.\n             "
},
{
  "id": "worksheet-svd",
  "level": "1",
  "url": "worksheet-svd.html",
  "type": "Worksheet",
  "number": "4.7",
  "title": "Worksheet: Singular Value Decomposition",
  "body": "Worksheet: Singular Value Decomposition \n        For this worksheet, the reader is directed to  .\n        Further details may be found in Section 8.6 of\n         Linear Algebra with Applications , by Keith Nicholson.\n        (See also  notebook by Dr. Juan H Klopper .)\n       \n        In   we saw that the  singular_value_decomposition \n        algorithm in SymPy does things a little bit differently than in  .\n        If we start with a square matrix  , the results are the same,\n        but if   is not square, the decomposition   looks a little different.\n        In particular, if   is  ,\n        the matrix   defined in   will also be  ,\n        but it will contain some rows or columns of zeros that are added to get the desired size.\n        The matrix   is an orthogonal   matrix whose columns are an orthonormal basis of eigenvectors for  .\n        The matrix   is an orthogonal   matrix whose columns are an orthonormal basis of  .\n        (The first   columns of   are given by  , where   is the eigenvector of   corresponding to the positive singular value  .)\n       \n        The algorithm provided by SymPy replaces   by the   diagonal matrix of nonzero singular values.\n        (This is common in most algorithms, since we don't want to bother storing data we don't need.)\n        The matrix   is replaced by the   matrix whose columns are the first   eigenvectors of  ,\n        and the matrix   is replaced by the   matrix whose columns are the orthonormal basis for the column space of  .\n        (Note that the rank of   is equal to the rank of  ,\n        which is equal to the number   of nonzero eigenvectors of   (counted with multiplicity).)\n       \n        The product   will be the same in both cases, and the matrix   is the same as well.\n       \n      This time, rather than using the SymPy algorithm,\n      we will work through the process outlined in   step-by-step.\n      First, we will work through (again)  .\n      Let  .\n      First, we get the singular values:\n     \n      Next, we get the eigenvalues and eigenvectors of  :\n     \n      Now we need to normalize the eigenvectors, in the correct order.\n      Note that the eigenvectors were listed in  increasing  order of eigenvalue,\n      so we need to reverse the order. Note that  L1  is a list of lists.\n      The eigenvector is the third entry (index 2) in the list (eigenvalue, multiplicity, eigenvector).\n      We also need to turn list elements into matrices.\n      So, for example the second eigenvector is  Matrix(L1[1][2]) .\n     \n      Next, we can assemble these vectors into a matrix, and confirm that it's orthogonal.\n     \n      We've made the matrix  ! Next, we construct  .\n      This we will do by hand.\n     \n      Alternatively, you could do  SigA = diag(L0[0],L0[1]).row_join(Matrix([0,0])) .\n      Finally, we need to make the matrix  .\n      First, we find the vectors   and normalize.\n      (Note that  , so this vector is unneeded, as expected.)\n     \n      Note that the matrix   is already the correct size, because  .\n      In general, for an   matrix  , if  ,\n      we would have to extend the set   to a basis for  .\n      Finally, we check that our matrices work as advertised.\n     \n      For convenience, here is all of the above code, with all print commands (except the last one) removed.\n     \n        from sympy import Matrix,BlockMatrix,init_printing\n        init_printing()\n        A = Matrix([[1,1,1],[1,0,-1]])\n        B=(A.T)*A\n        L0=A.singular_values()\n        L1=B.eigenvects()\n        R1=Matrix(L1[2][2])\n        R2=Matrix(L1[1][2])\n        R3=Matrix(L1[0][2])\n        Q1 = (1\/R1.norm())*R1\n        Q2 = (1\/R2.norm())*R2\n        Q3 = (1\/R3.norm())*R3\n        Q = Matrix(BlockMatrix([Q1,Q2,Q3]))\n        SigA = diag(L0[0],L0[1]).row_join(Matrix([0,0]))\n        S1 = A*Q1\n        S2 = A*Q2\n        P1 = (1\/S1.norm())*S1\n        P2 = (1\/S2.norm())*S2\n        P = Matrix(BlockMatrix([P1,P2]))\n        P,SigA,Q,P*SigA*Q.T\n       \n          Do Exercise 8.6.9 in Nicholson: compute the SVD for the matrices\n           .\n           Note that for these matrices, you will need to do some additional work to extend the  \n           vectors to an orthonormal basis. You can adapt the code above,\n           but you will have to think about how to implement additional code to construct any extra vectors you need.\n         \n          Either by reading Nicholson or by searching online (or both),\n          come up with a couple of answers to the question:\n           Why are people interested in the singular value decomposition? \n         "
},
{
  "id": "exercise-111",
  "level": "2",
  "url": "worksheet-svd.html#exercise-111",
  "type": "Worksheet Exercise",
  "number": "4.7.1",
  "title": "",
  "body": "\n          Do Exercise 8.6.9 in Nicholson: compute the SVD for the matrices\n           .\n           Note that for these matrices, you will need to do some additional work to extend the  \n           vectors to an orthonormal basis. You can adapt the code above,\n           but you will have to think about how to implement additional code to construct any extra vectors you need.\n         "
},
{
  "id": "exercise-112",
  "level": "2",
  "url": "worksheet-svd.html#exercise-112",
  "type": "Worksheet Exercise",
  "number": "4.7.2",
  "title": "",
  "body": "\n          Either by reading Nicholson or by searching online (or both),\n          come up with a couple of answers to the question:\n           Why are people interested in the singular value decomposition? \n         "
},
{
  "id": "sec-matrix-of-transformation",
  "level": "1",
  "url": "sec-matrix-of-transformation.html",
  "type": "Section",
  "number": "5.1",
  "title": "The matrix of a linear transformation",
  "body": "The matrix of a linear transformation \n    Recall from  Example  in  Chapter \n    that given any   matrix  , we can define the matrix transformation\n      by  ,\n    where we view   as an   column vector.\n   \n    Conversely, given any linear map  ,\n    if we let   denote the standard basis of  ,\n    then the matrix\n     \n    is such that  .\n   \n    We have already discussed the fact that this idea generalizes:\n    given a linear transformation  ,\n    where   and   are finite-dimensional vector spaces,\n    it is possible to represent   as a matrix transformation.\n   \n    The representation depends on choices of bases for both   and  .\n    Recall the definition of the coefficient isomorphism,\n    from  Definition  in  Section .\n    If   and  ,\n    this gives us isomorphisms   and  \n    depending on the choice of a basis   for   and a basis   for  .\n    These isomorphisms define a matrix transformation  \n    according to the diagram we gave in  Figure .\n   \n    We should stress one important point about the coefficient isomorphism, however.\n    It depends on the choice of basis, but also on the  order  of the basis elements.\n    Thus, we generally will work with an  ordered basis  in this chapter.\n    That is, rather than simply thinking of our basis as a set,\n    we will think of it as an ordered list.\n    Order matters, since given a basis  ,\n    we rely on the fact that we can write any vector   uniquely as\n     \n    in order to make the assignment  .\n   \n        Show that the coefficient isomorphism is, indeed,\n        a linear isomorphism from   to  .\n       \n        It's clear that  ,\n        since the only way to write the zero vector in   in terms of  \n        (or, indeed, any independent set) is to set all the scalars equal to zero.\n       \n        If we have two vectors   given by\n         ,\n        then\n         ,\n        so\n         .\n       \n        Finally, for any scalar  , we have\n         .\n       \n        This shows that   is linear.\n        To see that   is an isomorphism, we can simply note that  \n        takes the basis   to the standard basis of  .\n        Alternatively, we can give the inverse:   is given by\n         .\n       \n    Given   and coefficient isomorphisms  ,\n    the map   is a linear transformation,\n    and the matrix of this transformation gives a representation of  .\n    Explicitly, let   be an ordered basis for  ,\n    and let   be an ordered basis for  .\n    Since   for each  ,\n    there exist unique scalars  , with  \n    and   such that\n     \n    for  . This gives us the   matrix  .\n    Notice that the first column of   is  ,\n    the second column is  , and so on.\n   \n    Given  , write  ,\n    so that  . Then\n     .\n   \n    On the other hand,\n     .\n    Therefore,\n     .\n    Thus, we see that  , or  , as expected.\n   The matrix   of a linear map matrix \n    In other words,   is the unique   matrix such that  .\n    This gives the defining property\n     ,\n    as was demonstrated above.\n   \n        Suppose   is given by\n         .\n        Compute the matrix of   with respect to the bases\n          of   and\n          of  .\n       \n        We have\n         .\n        Thus,\n         .\n        To confirm, note that\n         ,\n        while on the other hand,\n         .\n\n       \n    When we compute the matrix of a transformation with respect to a non-standard basis,\n    we don't have to worry about how to write vectors in the domain in terms of that basis.\n    Instead, we simply plug the basis vectors into the transformation,\n    and then determine how to write the output in terms of the basis of the codomain.\n    However, if we want to  use  this matrix to compute values of  ,\n    then we need a systematic way of writing elements of   in terms of the given basis.\n   Working with the matrix of a transformation \n        Let   be a linear transformation whose matrix is given by\n         \n        with respect to the ordered bases   of   \n        and   of  . Find the value of  .\n       \n        We need to write the input   in terms of the basis  .\n        This amounts to solving the system of equations given by\n         .\n        Of course, we can easily set up and solve this system,\n        but let's try to be systematic, and obtain a more useful result for future problems.\n        Since we can easily determine how to write any polynomial in terms of the standard basis  ,\n        it suffices to know how to write these three polynomials in terms of our basis.\n       \n        At first, this seems like more work. After all, we now have three systems to solve:\n         .\n        However, all three systems have the same coefficient matrix,\n        so we can solve them simultaneously, by adding three  constants \n        columns to our augmented matrix.\n       \n        We get the matrix\n         .\n        But this is exactly the augmented matrix we'd right down if we were trying to find the inverse of the matrix\n         \n        whose columns are the coefficient representations of our given basis vectors in terms of the standard basis.\n       \n        To compute  , we use the computer:\n       \n        Next, we find  :\n       \n        This matrix first converts the coefficient vector for a polynomial  \n        with respect to the standard basis into the coefficient vector for our given basis  ,\n        and then multiplies by the matrix representing our transformation.\n        The result will be the coefficient vector for   with respect to the basis  .\n       \n        The polynomial   has coefficient vector  \n        with respect to the standard basis. We find that  :\n       \n        The coefficients   and   are the coefficients of  \n        with repsect to the basis  . Thus,\n         .\n        Note that in the last step we gave the  simplified  answer  ,\n        which is simplified primarily in that it is expressed with respect to the standard basis.\n       \n        Note that we can also introduce the matrix  \n        whose columns are the coefficient vectors of the vectors in the basis  \n        with respect to the standard basis.\n        The effect of multiplying by   is to convert from coefficients with respect to  \n        into a coefficient vector with respect to the standard basis.\n        We can then write a new matrix  ;\n        this new matrix is now the matrix representation of   with respect to the\n         standard  bases of   and  .\n       \n        We check that\n         ,\n        as before.\n       \n        We find that  .\n        This lets us determine that for a general polynomial  ,\n         ,\n        and therefore, our original transformation must have been\n         .\n\n       \n    The previous example illustrated some important observations that are true in general.\n    We won't give the general proof, but we sum up the results in a theorem.\n   \n        Suppose   is a linear transformation,\n        and suppose   is the matrix of   with respect to bases   of   and   of  .\n        Let   and   be any other choice of basis for   and  , respectively.\n        Let\n         \n        be matrices whose columns are the coefficient vectors of the vectors in   with respect to  .\n        Then the matrix of   with respect to the bases   and   is\n         .\n       \n    The relationship between the different maps is illustrated in   below.\n    In this figure, the maps   and   are the identity maps,\n    corresponding to representing the same vector with respect to two different bases.\n    The vertical arrows are the coefficient isomorphisms  .\n   \n    In the  HTML  version of the book, you can click and drag to rotate the figure below.\n   Diagramming matrix of a transformation with respect to two different choices of basis \n    We generally apply   in the case that  \n    are the  standard  bases for  , since in this case,\n    the matrices   are easy to determine,\n    and we can use a computer to calculate   and the product  .\n   \n        Suppose   has the matrix\n         \n        with respect to the bases\n         \n        of   and   of  .\n        Determine a formula for   in terms of a general input  .\n       \n        We must first write our general input in terms of the given basis.\n        With respect to the standard basis\n         ,\n        we have the matrix  ,\n        representing the change from the basis   the basis  .\n        The basis   of   is already the standard basis,\n        so we need the matrix  :\n       \n        For a matrix   we find\n         .\n        But this is equal to  , so\n         .\n       \n    In textbooks such as Sheldon Axler's  Linear Algebra Done Right  that focus primarily on linear transformations,\n    the above construction of the matrix of a transformation with respect to choices of bases can be used as a primary motivation for introducing matrices,\n    and determining their algebraic properties. In particular, the rule for matrix multiplication, which can seem peculiar at first,\n    can be seen as a consequence of the composition of linear maps.\n   \n        Let   be finite-dimensional vectors spaces,\n        with ordered bases  , respectively.\n        Let   and   be linear maps. Then\n         .\n       \n        Let  . Then  .\n        On the other hand,\n         .\n        Since   is invertible, the result follows.\n       \n    Being able to express a general linear transformation in terms of a matrix is useful,\n    since questions about linear transformations can be converted into questions about matrices that we already know how to solve.\n    In particular,\n     \n         \n            is an isomorphism if and only if   is invertible for some\n          (and hence, all) choice of bases   of   and   of  .\n         \n       \n         \n          The rank of    is equal to the rank of   (and this does not depend on the choice of basis).\n         \n       \n         \n          The kernel of   is isomorphic to the nullspace of  .\n         \n       \n   \n    Next, we will want to look at two topics in particular.\n    First, if   is a linear operator, then it makes sense to consider the matrix  \n    obtained by using the same basis for both domain and codomain.\n    Second, we will want to know how this matrix changes if we change the choice of basis.\n   "
},
{
  "id": "exercise-113",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#exercise-113",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": "\n        Show that the coefficient isomorphism is, indeed,\n        a linear isomorphism from   to  .\n       \n        It's clear that  ,\n        since the only way to write the zero vector in   in terms of  \n        (or, indeed, any independent set) is to set all the scalars equal to zero.\n       \n        If we have two vectors   given by\n         ,\n        then\n         ,\n        so\n         .\n       \n        Finally, for any scalar  , we have\n         .\n       \n        This shows that   is linear.\n        To see that   is an isomorphism, we can simply note that  \n        takes the basis   to the standard basis of  .\n        Alternatively, we can give the inverse:   is given by\n         .\n       "
},
{
  "id": "def-transformation-matrix",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#def-transformation-matrix",
  "type": "Definition",
  "number": "5.1.2",
  "title": "The matrix <span class=\"process-math\">\\(M_{DB}(T)\\)<\/span> of a linear map.",
  "body": "The matrix   of a linear map matrix "
},
{
  "id": "exercise-114",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#exercise-114",
  "type": "Exercise",
  "number": "5.1.3",
  "title": "",
  "body": "\n        Suppose   is given by\n         .\n        Compute the matrix of   with respect to the bases\n          of   and\n          of  .\n       \n        We have\n         .\n        Thus,\n         .\n        To confirm, note that\n         ,\n        while on the other hand,\n         .\n\n       "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#example-15",
  "type": "Example",
  "number": "5.1.4",
  "title": "Working with the matrix of a transformation.",
  "body": "Working with the matrix of a transformation \n        Let   be a linear transformation whose matrix is given by\n         \n        with respect to the ordered bases   of   \n        and   of  . Find the value of  .\n       \n        We need to write the input   in terms of the basis  .\n        This amounts to solving the system of equations given by\n         .\n        Of course, we can easily set up and solve this system,\n        but let's try to be systematic, and obtain a more useful result for future problems.\n        Since we can easily determine how to write any polynomial in terms of the standard basis  ,\n        it suffices to know how to write these three polynomials in terms of our basis.\n       \n        At first, this seems like more work. After all, we now have three systems to solve:\n         .\n        However, all three systems have the same coefficient matrix,\n        so we can solve them simultaneously, by adding three  constants \n        columns to our augmented matrix.\n       \n        We get the matrix\n         .\n        But this is exactly the augmented matrix we'd right down if we were trying to find the inverse of the matrix\n         \n        whose columns are the coefficient representations of our given basis vectors in terms of the standard basis.\n       \n        To compute  , we use the computer:\n       \n        Next, we find  :\n       \n        This matrix first converts the coefficient vector for a polynomial  \n        with respect to the standard basis into the coefficient vector for our given basis  ,\n        and then multiplies by the matrix representing our transformation.\n        The result will be the coefficient vector for   with respect to the basis  .\n       \n        The polynomial   has coefficient vector  \n        with respect to the standard basis. We find that  :\n       \n        The coefficients   and   are the coefficients of  \n        with repsect to the basis  . Thus,\n         .\n        Note that in the last step we gave the  simplified  answer  ,\n        which is simplified primarily in that it is expressed with respect to the standard basis.\n       \n        Note that we can also introduce the matrix  \n        whose columns are the coefficient vectors of the vectors in the basis  \n        with respect to the standard basis.\n        The effect of multiplying by   is to convert from coefficients with respect to  \n        into a coefficient vector with respect to the standard basis.\n        We can then write a new matrix  ;\n        this new matrix is now the matrix representation of   with respect to the\n         standard  bases of   and  .\n       \n        We check that\n         ,\n        as before.\n       \n        We find that  .\n        This lets us determine that for a general polynomial  ,\n         ,\n        and therefore, our original transformation must have been\n         .\n\n       "
},
{
  "id": "thm-change-basis-transformation",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#thm-change-basis-transformation",
  "type": "Theorem",
  "number": "5.1.5",
  "title": "",
  "body": "\n        Suppose   is a linear transformation,\n        and suppose   is the matrix of   with respect to bases   of   and   of  .\n        Let   and   be any other choice of basis for   and  , respectively.\n        Let\n         \n        be matrices whose columns are the coefficient vectors of the vectors in   with respect to  .\n        Then the matrix of   with respect to the bases   and   is\n         .\n       "
},
{
  "id": "fig-basis-cube",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#fig-basis-cube",
  "type": "Figure",
  "number": "5.1.6",
  "title": "",
  "body": "Diagramming matrix of a transformation with respect to two different choices of basis "
},
{
  "id": "exercise-115",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#exercise-115",
  "type": "Exercise",
  "number": "5.1.7",
  "title": "",
  "body": "\n        Suppose   has the matrix\n         \n        with respect to the bases\n         \n        of   and   of  .\n        Determine a formula for   in terms of a general input  .\n       \n        We must first write our general input in terms of the given basis.\n        With respect to the standard basis\n         ,\n        we have the matrix  ,\n        representing the change from the basis   the basis  .\n        The basis   of   is already the standard basis,\n        so we need the matrix  :\n       \n        For a matrix   we find\n         .\n        But this is equal to  , so\n         .\n       "
},
{
  "id": "thm-matrix-multiplication",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#thm-matrix-multiplication",
  "type": "Theorem",
  "number": "5.1.8",
  "title": "",
  "body": "\n        Let   be finite-dimensional vectors spaces,\n        with ordered bases  , respectively.\n        Let   and   be linear maps. Then\n         .\n       \n        Let  . Then  .\n        On the other hand,\n         .\n        Since   is invertible, the result follows.\n       "
},
{
  "id": "sec-matrix-operator",
  "level": "1",
  "url": "sec-matrix-operator.html",
  "type": "Section",
  "number": "5.2",
  "title": "The matrix of a linear operator",
  "body": "The matrix of a linear operator linear operator similar \n    Since the domain and codomain of a linear operator are the same,\n    we can consider the matrix   where   and   are the  same  ordered basis.\n    This leads to the next definition.\n   -matrix \n    The following result collects several useful properties of the  -matrix of an operator.\n    Most of these were already encountered for the matrix   of a transformation,\n    although not all were stated formally. (Formal statements can be found in the textbook by Nicholson.)\n   \n        Let   be a linear operator, and let   be a basis for  .\n        Then\n          for all  . If   is another operator, then  .  is an isomorphism if and only if   is invertible. If   is an isomorphism, then  . . \n       \n        Find the  -matrix of the operator   given by\n         , with respect to the ordered basis\n         .\n       \n        We compute\n         .\n        We now need to write each of these in terms of the basis  .\n        We can do this by working out how to write each polynomial above in terms of  .\n        Or we can be systematic.\n       \n        Let  \n        be the matrix whose columns are given by the coefficient representations of the polynomials in  \n        with respect to the  standard basis   .\n        For   we need to solve the equation\n         \n        for scalars  . But this is equivalent to the system\n         ,\n        which, in turn, is equivalent to the matrix equation\n         ;\n        that is,  . Thus,\n         .\n        Similarly,  , and\n         .\n        Using the computer, we find:\n       \n        That is,\n         .\n       \n        Let's confirm that this works. Suppose we have\n         .\n        Then  , and we find\n         .\n        On the other hand,\n         .\n        The results agree, but possibly leave us a little confused.\n       \n    In general, given an ordered basis   for a vector space  \n    with standard basis  , if we let\n     ,\n    then\n     .\n   \n    As we saw above, this gives us the result, but doesn't shed much light on the problem,\n    unless we have an easy way to write vectors in terms of the basis  .\n    Let's revisit the problem. Instead of using the given basis  ,\n    let's use the standard basis  .\n    We quickly find\n     ,\n    so with respect to the standard basis,  .\n    Now, recall that\n     \n    and note that for any polynomial  ,  . But\n     ,\n    so we get\n     .\n   \n    Now we have a much more efficient method for arriving at the matrix  .\n    The matrix   is easy to determine, the matrix   is easy to determine,\n    and with the help of the computer, it's easy to compute  .\n   \n        Determine the matrix of the operator   given by\n         \n        with respect to the ordered basis\n         .\n        (You may want to use the Sage cell below for computational assistance.)\n       \n        With respect to the standard basis, we have\n         ,\n        and the matrix   is given by  .\n        Thus, we find\n         .\n       \n    The matrix   used in the above examples is known as a  change  matrix.\n    If the columns of   are the coefficient vectors of  \n    with respect to another basis  , then we have\n     .\n    In other words,   is the matrix of the identity transformation  ,\n    where we use the basis   for the domain, and the basis   for the codomain.\n   change matrix \n        Let   and   be two ordered bases of  .\n        Then\n         ,\n        and satisfies   for all  .\n       \n        The matrix   is invertible, and  .\n        Moreover, if   is a third ordered basis, then\n         .\n       \n        Let   and let   be ordered bases of  .\n        Find the change matrix  .\n       \n        Finding this matrix requires us to first write the vectors in   in terms of the vectors in  .\n        However, it's much easier to do this the other way around. We easily find\n         ,\n        and by  , we have\n         .\n       \n    Note that the change matrix notation is useful for linear transformations between different vector spaces as well.\n    Recall  , which gave the result\n     ,\n    where (using our new notation)   and  .\n    In this notation, we have\n     ,\n    which seems more intiutive.\n   \n    The above results give a straightforward procedure for determining the matrix of any operator,\n    with respect to any basis, if we let   be the standard basis.\n    The importance of these results is not just their computational simplicity, however.\n    The most important outcome of the above is that if   and  \n    give the matrix of   with respect to two different bases, then\n     ,\n    so that the two matrices are  similar .\n   \n    Recall from  Theorem \n    that similar matrices have the same determinant, trace, and eigenvalues.\n    This means that we can unambiguously define the determinant and trace of an   operator ,\n    and that we can compute eigenvalues of an operator using any matrix representation of that operator.\n   "
},
{
  "id": "p-1405",
  "level": "2",
  "url": "sec-matrix-operator.html#p-1405",
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
  "body": "-matrix "
},
{
  "id": "thm-bmatrix-properties",
  "level": "2",
  "url": "sec-matrix-operator.html#thm-bmatrix-properties",
  "type": "Theorem",
  "number": "5.2.2",
  "title": "",
  "body": "\n        Let   be a linear operator, and let   be a basis for  .\n        Then\n          for all  . If   is another operator, then  .  is an isomorphism if and only if   is invertible. If   is an isomorphism, then  . . \n       "
},
{
  "id": "example-16",
  "level": "2",
  "url": "sec-matrix-operator.html#example-16",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "\n        Find the  -matrix of the operator   given by\n         , with respect to the ordered basis\n         .\n       \n        We compute\n         .\n        We now need to write each of these in terms of the basis  .\n        We can do this by working out how to write each polynomial above in terms of  .\n        Or we can be systematic.\n       \n        Let  \n        be the matrix whose columns are given by the coefficient representations of the polynomials in  \n        with respect to the  standard basis   .\n        For   we need to solve the equation\n         \n        for scalars  . But this is equivalent to the system\n         ,\n        which, in turn, is equivalent to the matrix equation\n         ;\n        that is,  . Thus,\n         .\n        Similarly,  , and\n         .\n        Using the computer, we find:\n       \n        That is,\n         .\n       \n        Let's confirm that this works. Suppose we have\n         .\n        Then  , and we find\n         .\n        On the other hand,\n         .\n        The results agree, but possibly leave us a little confused.\n       "
},
{
  "id": "exercise-116",
  "level": "2",
  "url": "sec-matrix-operator.html#exercise-116",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "",
  "body": "\n        Determine the matrix of the operator   given by\n         \n        with respect to the ordered basis\n         .\n        (You may want to use the Sage cell below for computational assistance.)\n       \n        With respect to the standard basis, we have\n         ,\n        and the matrix   is given by  .\n        Thus, we find\n         .\n       "
},
{
  "id": "def-change-matrix",
  "level": "2",
  "url": "sec-matrix-operator.html#def-change-matrix",
  "type": "Definition",
  "number": "5.2.5",
  "title": "",
  "body": "change matrix "
},
{
  "id": "thm-change-matrix",
  "level": "2",
  "url": "sec-matrix-operator.html#thm-change-matrix",
  "type": "Theorem",
  "number": "5.2.6",
  "title": "",
  "body": "\n        Let   and   be two ordered bases of  .\n        Then\n         ,\n        and satisfies   for all  .\n       \n        The matrix   is invertible, and  .\n        Moreover, if   is a third ordered basis, then\n         .\n       "
},
{
  "id": "example-17",
  "level": "2",
  "url": "sec-matrix-operator.html#example-17",
  "type": "Example",
  "number": "5.2.7",
  "title": "",
  "body": "\n        Let   and let   be ordered bases of  .\n        Find the change matrix  .\n       \n        Finding this matrix requires us to first write the vectors in   in terms of the vectors in  .\n        However, it's much easier to do this the other way around. We easily find\n         ,\n        and by  , we have\n         .\n       "
},
{
  "id": "sec-direct-sum",
  "level": "1",
  "url": "sec-direct-sum.html",
  "type": "Section",
  "number": "5.3",
  "title": "Direct Sums and Invariant Subspaces",
  "body": "Direct Sums and Invariant Subspaces \n      This section continues the discussion of direct sums (from  )\n      and invariant subspaces (from  ),\n      to better understand the structure of linear operators.\n     Invariant subspaces invariant \n      Given a basis   of  ,\n      note that   is  -invariant if and only if   for each  .\n     \n      For any operator  , there are four subspaces that are always  -invariant:\n       .\n      Of course, some of these subspaces might be the same; for example,\n      if   is invertible, then   and  .\n     \n          Show that for any linear operator  ,\n          the subspaces   and   are  -invariant.\n         \n          In each case, choose an element   of the subspace.\n          What does the definition of the space tell you about that element?\n          (For example, if  , what is the value of  ?)\n          Then show that   also fits the defintion of that space.\n         \n      A subspace   is  -invariant if   does not map any vectors in   outside of  .\n      Notice that if we shrink the domain of   to  , then we get an operator from   to  ,\n      since the image   is contained in  .\n     restriction \n      Notice that the restriction   is defined by the same  rule  as  ,\n      but its domain is the subspace   instead of the entire vector space  .\n     \n      A lot can be learned by studying the restrictions of an operator to invariant subspaces.\n      Indeed, the textbook by Axler does almost everything from this point of view.\n      One reason to study invariant subspaces is that they allow us to put the matrix of   into simpler forms.\n     \n          Let   be a linear operator, and let   be a  -invariant subspace.\n          Let   be a basis of  , and extend this to a basis\n           \n          of  . Then the matrix   with respect to this basis has the block-triangular form\n           \n          for some   matrix  .\n         \n      Reducing a matrix to block triangular form is useful,\n      because it simplifies computations such as determinants and eigenvalues\n      (and determinants and eigenvalues are computationally expensive).\n      In particular, if a matrix   has the block form\n       ,\n      where the diagonal blocks are square matrices,\n      then  \n      and  .\n     Eigenspaces \n      An important source of invariant subspaces is eigenspaces.\n      Recall that for any real number  ,\n      and any operator  , we define\n       .\n      For most values of  , we'll have  .\n      The values of   for which   is non-trivial are precisely the eigenvalues of  .\n      Note that since similar matrices have the same characteristic polynomial, any matrix representation  \n      will have the same eigenvalues. They do  not  generally have the same eigenspaces,\n      but we do have the following.\n     \n          Let   be a linear operator. For any scalar  ,\n          the eigenspace   is  -invariant.\n          Moreover, for any ordered basis   of  ,\n          the coefficient isomorphism   induces an isomorphism\n           .\n         Direct Sums \n      Recall that for any subspaces   of a vector space  ,\n      the sets\n       \n      are subspaces of  . Saying that   means that  \n      can be written as a sum of a vector in   and a vector in  .\n      However, this sum may not be unique. If  ,   and  ,\n      then we can write  ,\n      giving two different representations of a vector as an element of  .\n     \n      We proved in   in  \n      that for any  , there exist  unique  vectors\n        and   such that  ,\n      if and only if  .\n     direct sum complement Finding a complement by extending a basis \n          The easiest way to determine a direct sum decomposition (or equivalently, a complement)\n          is through the use of a basis. Suppose   is a subspace of   with basis\n           , and extend this to a basis\n           \n          of  . Let  .\n          Then clearly  , and  ,\n          since if  , then   and  , so we have\n           ,\n          which gives\n           ,\n          so   by the linear independence of  , showing that  .\n         \n          Conversely, if  , and we have bases   of  \n          and   of  , then\n           \n          is a basis for  . Indeed,   spans  ,\n          since every element of   can be written as   with  .\n          Independence follows by reversing the argument above: if\n           \n          then  ,\n          and equality is only possible if both sides belong to  .\n          Since   is independent, the   have to be zero,\n          and since   is independent, the   have to be zero.\n         \n      The argument given in the second part of   has an immediate,\n      but important consequence.\n     \n          Suppose  , where   and  .\n          Then   is finite-dimensional, and  .\n         \n          Suppose  , where   and   are  -invariant subspaces\n          for some operator  . Let   and let  \n          be bases for   and  , respectively.\n          Determine the matrix of   with respect to the basis   of  .\n         \n          Since we don't know the map   or anything about the bases  ,\n          we're looking for a fairly general statement here.\n          Since   is  -invariant, we must have   for each  .\n          Similarly,   for each  . This means that we have\n           \n          for some scalars  . If we set  \n          and  , then we have\n           .\n          Moreover, we can also see that  , and  .\n         "
},
{
  "id": "def-invariant-subspace",
  "level": "2",
  "url": "sec-direct-sum.html#def-invariant-subspace",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": "invariant "
},
{
  "id": "exercise-117",
  "level": "2",
  "url": "sec-direct-sum.html#exercise-117",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": "\n          Show that for any linear operator  ,\n          the subspaces   and   are  -invariant.\n         \n          In each case, choose an element   of the subspace.\n          What does the definition of the space tell you about that element?\n          (For example, if  , what is the value of  ?)\n          Then show that   also fits the defintion of that space.\n         "
},
{
  "id": "def-restriction",
  "level": "2",
  "url": "sec-direct-sum.html#def-restriction",
  "type": "Definition",
  "number": "5.3.3",
  "title": "",
  "body": "restriction "
},
{
  "id": "thm-invariant-block-triangular",
  "level": "2",
  "url": "sec-direct-sum.html#thm-invariant-block-triangular",
  "type": "Theorem",
  "number": "5.3.4",
  "title": "",
  "body": "\n          Let   be a linear operator, and let   be a  -invariant subspace.\n          Let   be a basis of  , and extend this to a basis\n           \n          of  . Then the matrix   with respect to this basis has the block-triangular form\n           \n          for some   matrix  .\n         "
},
{
  "id": "thm-eigenspace-invariant",
  "level": "2",
  "url": "sec-direct-sum.html#thm-eigenspace-invariant",
  "type": "Theorem",
  "number": "5.3.5",
  "title": "",
  "body": "\n          Let   be a linear operator. For any scalar  ,\n          the eigenspace   is  -invariant.\n          Moreover, for any ordered basis   of  ,\n          the coefficient isomorphism   induces an isomorphism\n           .\n         "
},
{
  "id": "p-1445",
  "level": "2",
  "url": "sec-direct-sum.html#p-1445",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct sum "
},
{
  "id": "p-1446",
  "level": "2",
  "url": "sec-direct-sum.html#p-1446",
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
  "number": "5.3.6",
  "title": "Finding a complement by extending a basis.",
  "body": "Finding a complement by extending a basis \n          The easiest way to determine a direct sum decomposition (or equivalently, a complement)\n          is through the use of a basis. Suppose   is a subspace of   with basis\n           , and extend this to a basis\n           \n          of  . Let  .\n          Then clearly  , and  ,\n          since if  , then   and  , so we have\n           ,\n          which gives\n           ,\n          so   by the linear independence of  , showing that  .\n         \n          Conversely, if  , and we have bases   of  \n          and   of  , then\n           \n          is a basis for  . Indeed,   spans  ,\n          since every element of   can be written as   with  .\n          Independence follows by reversing the argument above: if\n           \n          then  ,\n          and equality is only possible if both sides belong to  .\n          Since   is independent, the   have to be zero,\n          and since   is independent, the   have to be zero.\n         "
},
{
  "id": "thm-direct-sum-dimension",
  "level": "2",
  "url": "sec-direct-sum.html#thm-direct-sum-dimension",
  "type": "Theorem",
  "number": "5.3.7",
  "title": "",
  "body": "\n          Suppose  , where   and  .\n          Then   is finite-dimensional, and  .\n         "
},
{
  "id": "eg-invariant-block",
  "level": "2",
  "url": "sec-direct-sum.html#eg-invariant-block",
  "type": "Example",
  "number": "5.3.8",
  "title": "",
  "body": "\n          Suppose  , where   and   are  -invariant subspaces\n          for some operator  . Let   and let  \n          be bases for   and  , respectively.\n          Determine the matrix of   with respect to the basis   of  .\n         \n          Since we don't know the map   or anything about the bases  ,\n          we're looking for a fairly general statement here.\n          Since   is  -invariant, we must have   for each  .\n          Similarly,   for each  . This means that we have\n           \n          for some scalars  . If we set  \n          and  , then we have\n           .\n          Moreover, we can also see that  , and  .\n         "
},
{
  "id": "worksheet-gen-eigen",
  "level": "1",
  "url": "worksheet-gen-eigen.html",
  "type": "Worksheet",
  "number": "5.4",
  "title": "Worksheet: generalized eigenvectors",
  "body": "Worksheet: generalized eigenvectors \n      Let   be a finite-dimensional vector space, and let   be a linear operator.\n      Assume that   has all real eigenvalues (alternatively, assume we're working over the complex numbers).\n      Let   be the matrix of   with respect to some standard basis   of  .\n     \n      Our goal will be to replace the basis   with a basis   such that the matrix of   with respect to   is as simple as possible.\n      (Where we agree that the \"simplest\" possible matrix would be diagonal.)\n     \n      Recall the following results that we've observed so far:\n       \n           \n            The characteristic polynomial   of   does not depend on the choice of basis.\n           \n         \n           \n            The eigenvalues of   are the roots of this polynomial.\n           \n         \n           \n            The eigenspaces   are  -invariant subspaces of  .\n           \n         \n           \n            The matrix   can be diagonalized if and only if there is a basis of   consisting of eigenvectors of  .\n           \n         \n           \n            Suppose\n             .\n            Then   can be diagonalized if and only if   for each  .\n           \n         \n      \n        In the case where   can be diagonalized, we have the direct sum decomposition\n         .\n       \n        The question is: what do we do if there aren't enough eigenvectors to form a basis of  ?\n        When that happens, the direct sum of all the eigenspaces will not give us all of  .\n       generalized eigenspace \n        Our candidate: instead of  ,\n        we use  , where   is the multiplicity of  .\n        \n          Recall that in class we proved that   and   are  -invariant subspaces.\n          Let   be any polynomial, and prove that   and   are also  -invariant.\n         \n           Hint:  first show that   for any polynomial  .\n         \n      Applying the result of Problem 1 to the polynomial   shows that   is  -invariant.\n      It is possible to show that   but I won't ask you to do that.\n      (A proof is in the book by Nicholson if you really want to see it.)\n     \n      Instead, we will try to understand what's going on by exploring an example.\n     \n      Consider the following matrix.\n     \n          Find (and factor) the characteristic polynomial of  .\n          For the commands you might need,  refer to the textbook .\n         \n          Find the eigenvectors. What are the dimensions of the eigenspaces? Based on this observation, can   be diagonalized?\n         \n          Prove that for any   matrix  , we have\n           .\n         \n      It turns out that at some point, the null spaces stabilize.\n      If   for some  ,\n      then   for all  .\n     \n          For each eigenvalue found in  , compute the nullspace of  ,\n           ,  ,   until you find two consecutive nullspaces that are the same.\n         \n          By  , any vector in   will also be a vector in  .\n          In particular, at each step, we can find a basis for   that includes the basis for  .\n         \n          For each eigenvalue found in  , determine such a basis for the corresponding generalized eigenspace.\n          You will want to list your vectors so that the vectors from the basis of the nullspace for   come first,\n          then the vectors for the basis of the nullspace for  , and so on.\n         \n          Finally, let's see how all of this works. Let   be the matrix whose columns consist of the vectors found in Problem 4.\n          What do you get when you compute the matrix  ?\n         "
},
{
  "id": "p-1463",
  "level": "2",
  "url": "worksheet-gen-eigen.html#p-1463",
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
  "body": "\n          Recall that in class we proved that   and   are  -invariant subspaces.\n          Let   be any polynomial, and prove that   and   are also  -invariant.\n         \n           Hint:  first show that   for any polynomial  .\n         "
},
{
  "id": "ws-ge-ex2",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex2",
  "type": "Worksheet Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "\n          Find (and factor) the characteristic polynomial of  .\n          For the commands you might need,  refer to the textbook .\n         "
},
{
  "id": "ws-ge-ex3",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex3",
  "type": "Worksheet Exercise",
  "number": "5.4.3",
  "title": "",
  "body": "\n          Find the eigenvectors. What are the dimensions of the eigenspaces? Based on this observation, can   be diagonalized?\n         "
},
{
  "id": "ws-ge-ex4",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex4",
  "type": "Worksheet Exercise",
  "number": "5.4.4",
  "title": "",
  "body": "\n          Prove that for any   matrix  , we have\n           .\n         "
},
{
  "id": "ws-ge-ex5",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex5",
  "type": "Worksheet Exercise",
  "number": "5.4.5",
  "title": "",
  "body": "\n          For each eigenvalue found in  , compute the nullspace of  ,\n           ,  ,   until you find two consecutive nullspaces that are the same.\n         \n          By  , any vector in   will also be a vector in  .\n          In particular, at each step, we can find a basis for   that includes the basis for  .\n         \n          For each eigenvalue found in  , determine such a basis for the corresponding generalized eigenspace.\n          You will want to list your vectors so that the vectors from the basis of the nullspace for   come first,\n          then the vectors for the basis of the nullspace for  , and so on.\n         "
},
{
  "id": "ws-ge-ex6",
  "level": "2",
  "url": "worksheet-gen-eigen.html#ws-ge-ex6",
  "type": "Worksheet Exercise",
  "number": "5.4.6",
  "title": "",
  "body": "\n          Finally, let's see how all of this works. Let   be the matrix whose columns consist of the vectors found in Problem 4.\n          What do you get when you compute the matrix  ?\n         "
},
{
  "id": "sec-gen-eigen",
  "level": "1",
  "url": "sec-gen-eigen.html",
  "type": "Section",
  "number": "5.5",
  "title": "Generalized eigenspaces",
  "body": "Generalized eigenspaces \n    Example   showed us that if  ,\n    where   and   are  -invariant,\n    then the matrix   has block diagonal form  ,\n    as long as the basis   is the union of bases of   and  .\n   \n    We want to take this idea further. If  ,\n    where each subspace   is  -invariant,\n    then with respect to a basis   consisting of basis vectors for each subspace,\n    we will have\n     ,\n    where each   is the matrix of   with respect to some basis of  .\n   \n    Our goal moving forward is twofold: one, to make the blocks as small as possible,\n    so that   is as close to diagonal as possible,\n    and two, to make the blocks as simple as possible.\n    Of course, if   is diagonalizable, then we can get all blocks down to size  ,\n    but this is not always possible.\n   \n    Recall from  Section  that if the characteristic polynomial of  \n    (or equivalently, any matrix representation   of  ) is\n     ,\n    then   for each  ,\n    and   is diagonalizable if and only if we have equality for each  .\n    (This guarantees that we have sufficiently many independent eigenvectors to form a basis of  .)\n   \n    Since eigenspaces are  -invariant, we see that being able to diagonalize   is equivalent to having the direct sum decomposition\n     .\n    If   cannot be diagonalized, it's because we came up short on the number of eigenvectors,\n    and the direct sum of all eigenspaces only produces some subspace of   of lower dimension.\n    We now consider how one might enlarge a set of independent eigenvectors in some standard,\n    and ideally optimal, way.\n   \n    First, we note that for any operator  , the restriction of   to   is the zero operator,\n    since by definition,   for all  .\n    Since we define  ,\n    it follows that   restricts to the zero operator on the eigenspace  .\n    The idea is to relax the condition  identically zero  to something that will allow us to potentially enlarge some of our eigenspaces,\n    so that we end up with enough vectors to span  .\n   \n    It turns out that the correct replacement for  identically zero  is  nilpotent .\n    What we would like to find is some subspace   such that the restriction of  \n    to   will be nilpotent.\n    (Recall that this means   for some integer   when restricted to  .)\n    The only problem is that we don't (yet) know what this subspace should be.\n    To figure it out, we rely on some ideas you may have explored in your last assignment.\n   \n        Let   be a linear operator. Then:\n         \n             \n           \n             \n              If   for some  , then   for all  .\n             \n           \n             \n              If  , then  .\n             \n           \n       \n    In other words, for any operator  , the kernels of successive powers of   can get bigger,\n    but the moment the kernel doesn't change for the next highest power,\n    it stops changing for all further powers of  .\n    That is, we have a sequence of kernels of strictly greater dimension until we reach a maximum,\n    at which point the kernels stop growing. And of course, the maximum dimension cannot be more than the dimension of  .\n   generalized eigenspace \n    Some remarks are in order. First, we can actually define   for any scalar  .\n    But this space will be trivial if   is not an eigenvalue.\n    Second, it is possible to show (although we will not do so here)\n    that if   is an eigenvalue with multiplicity  ,\n    then  .\n    (The kernel will usually have stopped growing well before we hit  ,\n    but we know they're all eventually equal, so using   guarantees we have everything).\n   \n    We will not prove it here (see Nicholson, or Axler),\n    but the advantage of using generalized eigenspaces is that they're just big enough to cover all of  .\n   \n        Let   be a complex vector space, and let   be a linear operator.\n        (We can take   to be real if we assume that   has all real eigenvalues.)\n        Let   be the distinct eigenvalues of  .\n        Then each generalized eigenspace   is  -invariant,\n        and we have the direct sum decomposition\n         .\n       \n    For each eigenvalue   of  , let   denote the  smallest \n    integer power such that  .\n    Then certainly we have   for each  .\n    (Note also that if  , then  .)\n   minimal polynomial \n    In  , we'll explore a systematic method for determining the generalized eigenspaces of a matrix,\n    and in particular, for computing a basis for each generalized eigenspace,\n    with respect to which the corresponding block in the block-diagonal form is especially simple.\n   "
},
{
  "id": "thm-nullspace-power",
  "level": "2",
  "url": "sec-gen-eigen.html#thm-nullspace-power",
  "type": "Theorem",
  "number": "5.5.1",
  "title": "",
  "body": "\n        Let   be a linear operator. Then:\n         \n             \n           \n             \n              If   for some  , then   for all  .\n             \n           \n             \n              If  , then  .\n             \n           \n       "
},
{
  "id": "def-generalized-eigenspace",
  "level": "2",
  "url": "sec-gen-eigen.html#def-generalized-eigenspace",
  "type": "Definition",
  "number": "5.5.2",
  "title": "",
  "body": "generalized eigenspace "
},
{
  "id": "thm-gen-eigen-decomp",
  "level": "2",
  "url": "sec-gen-eigen.html#thm-gen-eigen-decomp",
  "type": "Theorem",
  "number": "5.5.3",
  "title": "",
  "body": "\n        Let   be a complex vector space, and let   be a linear operator.\n        (We can take   to be real if we assume that   has all real eigenvalues.)\n        Let   be the distinct eigenvalues of  .\n        Then each generalized eigenspace   is  -invariant,\n        and we have the direct sum decomposition\n         .\n       "
},
{
  "id": "p-1494",
  "level": "2",
  "url": "sec-gen-eigen.html#p-1494",
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
  "body": "Jordan Canonical Form \n    The results of   and  \n    tell us that for an eigenvalue   of   with multiplicity  ,\n    we have a sequence of subspace inclusions\n     .\n    Not all subspaces in this sequence are necessarily distinct.\n    Indeed, it is entirely possible that  ,\n    in which case  .\n    In geeral there will be some   such that  .\n   \n    Our goal in this section is to determine a basis for   in a standard way.\n    We begin with a couple of important results, which we state without proof.\n    The first can be found in Axler's book; the second in Nicholson's.\n   \n        Suppose   is a complex vector space, and   is a linear operator.\n        Let   denote the distinct eigenvalues of  .\n        (We can assume   is real if we also assume that all eigenvalues of   are real.)\n        Then:\n         \n             \n              Generalized eigenvectors corresponding to  distinct  eigenvalues are linearly independent.\n             \n           \n             \n              Each generalize eigenspace   is  -invariant.\n             \n           \n             \n              Each restriction   is nilpotent.\n             \n           \n       \n        Let   be a linear operator. If the characteristic polynomial of   is given by\n         ,\n        then   for each  .\n       \n        Moreover, if we let  ,\n        where   is any basis for   for  ,\n        then   is a basis for   (this follows immediately from  )\n        and the matrix of   with respect to this basis has the block-diagonal form\n         ,\n        where each   has size  .\n       \n    A few remarks are called for here.\n     \n         \n          One of the ways to see that   is to consider  .\n          This will have the form  ,\n          where   is the matrix of  ,\n          restricted to  .\n          If  ,   restricts to an invertible operator on  ,\n          but its restriction to   is nilpotent, by  .\n          So   is nilpotent (with  ), and has size  ,\n          while   is invertible if  .\n          The matrix   thus ends up with a   block of zeros,\n          so  .\n         \n       \n         \n          If the previous point wasn't clear, note that with an appropriate choice of basis,\n          the block   in   has the form\n           .\n          Thus,   will have blocks that are upper triangular,\n          with diagonal entries   when  ,\n          but when   we get a matrix that is strictly upper triangular,\n          and therefore nilpotent, since its diagonal entries will be  .\n         \n       \n         \n          if   is the  least  integer such that  ,\n          then it is possible to choose the basis of   so that   is itself block-diagonal,\n          with the largest block having size  .\n          The remainder of this section is devoted to determining how to choose such a basis.\n         \n       \n   \n    The basic principle for choosing a basis for each generalized eigenspace is as follows.\n    We know that   for each eigenvalue  .\n    So we start with a basis for  , by finding eigenvectors as usual.\n    If  , then we're done:  .\n    Otherwise, we enlarge the basis for   to a basis of  .\n    If  , then we're done,\n    and  .\n    If not, we enlarge our existing basis to a basis of  .\n    We continue this process until we reach some power   such that  .\n    (This is guaranteed to happen by  .)\n    We then conclude that  .\n   \n    The above produces  a  basis for  ,\n    but we want what is, in some sense, the  best  basis.\n    For our purposes, the best basis is the one in which the matrix of   restricted to each generalized eigenspace is block diagonal,\n    where each block is a  Jordan block .\n   Jordan block \n        The following are examples of Jordan blocks:\n         .\n       Finding a chain basis  \n      A Jordan block corresponds to basis vectors   with the following properties:\n       ,\n      and so on. Notice that   is an eigenvector, and for each  ,\n       .\n     chain basis \n      If   we might have to repeat this process for each eigenvector in a basis for the eigenspace.\n      The full matrix of   might have several Jordan blocks of possibly different sizes for each eigenvalue.\n     \n        Determine a Jordan basis for the operator  \n        whose matrix with respect to the standard basis is given by\n         \n       \n        First, we need the characteristic polynomial.\n       \n        The characteristic polynomial of   is given by\n         .\n        We thus have two eigenvalues:  , of multiplicity  ,\n        and  , of multiplicity  .\n        We next find the   eigenspace.\n       \n        The computer gives us\n         ,\n        so we have only one independent eigenvector, which means that  .\n       \n        Following  , we extend  \n        to a basis of   by solving the system\n         .\n       \n        Using the results above from the computer (or Gaussian elimination), we find a general solution\n         .\n        Note that our solution is of the form  .\n        We set  , and get  .\n       \n        Next, we consider the eigenvalue  .\n        The computer gives us the following:\n       \n         Rescaling to remove fractions, we find\n         .\n        Again, we're one eigenvector short of the multiplicity, so we need to consider  .\n       \n        In the next cell, note that we doubled the eigenvectors in  E3  to avoid fractions.\n        To follow the solution in our example, we append  2*E3[0] , and reduce the resulting matrix.\n        You should find that using the eigenvector   corresponding to  E3[0] \n        leads to an inconsistent system. Once you confirm this, replace  E3[0]  with  E3[1] \n        and re-run the cell to see that we get an inconsistent system using   as well!\n       \n        The systems   and   are both inconsistent,\n        but we can salvage the situation by replacing the eigenvector   by some linear combination\n         . We row-reduce, and look for values of   and   that give a consistent system.\n       \n        The  rref  command takes things a bit farther than we'd like,\n        so we use the command  echelon_form()  instead. Note that if  ,\n        the system is inconsistent.\n       \n        We find that   does the job, so we set\n         .\n       \n        Solving the system  , using the code above, we find\n         .\n       \n        We let  , and check that\n         ,\n        as required:\n       \n        This gives us the basis   for  ,\n        and with respect to this basis, we have the Jordan canonical form\n         .\n       \n        Now that we've done all the work required for  ,\n        we should confess that there was an easier way all along:\n       \n        The  jordan_form()  command returns a pair  ,\n        where   is the Jordan canonical form of  ,\n        and   is an invertible matrix such that  .\n        You might find that the computer's answer is not quite the same as ours.\n        This is because the Jordan canonical form is only unique up to permutation of the Jordan blocks.\n        Changing the order of the blocks amounts to changing the order of the columns of  ,\n        which are given by a basis of (generalized eigenvectors).\n       \n        Determine a Jordan basis for the linear operator  \n        given by\n         .\n        A code cell is given below in case you want to try performing the operations demonstrated in  .\n       \n        With respect to the standard basis of  , the matrix of   is\n         .\n        We find (perhaps using the Sage cell provided below, and the code from the example above) that\n         ,\n        so   has eigenvalues   (of multiplicity  ), and   (of multiplicity  ).\n       \n        We tackle the repeated eigenvalue first. The reduced row-echelon form of   is given by\n         ,\n        so\n         .\n        We now attempt to solve  . We find\n         ,\n        so  , where  .\n        We take   as our first generalized eigenvector.\n        Note that  , so  , as expected.\n       \n        Finally, we look for an element of   of the form  ,\n        where  . We set up and solve the system   as follows:\n         ,\n        so  , where  .\n       \n        Finally, we deal with the eigenvalue  . The reduced row-echelon form of   is\n         ,\n        so\n         .\n       \n        Our basis of column vectors is therefore  .\n        Note that by design,\n         .\n        The corresponding Jordan basis for   is\n         ,\n        and with respect to this basis, we have\n         .\n       \n    One final note: we mentioned above that the minimal polynomial of an operator has the form\n     ,\n    where for each  ,   is the size of the largest Jordan block corresponding to  .\n    Knowing the minimal polynomial therefore tells as a lot about the Jordan canonical form, but not everything.\n    Of course, if   for all  , then our operator can be diagaonalized.\n    If  , the minimal polynomial tells us everything, except for the order of the Jordan blocks.\n   \n    In  , the minimal polynomial is  ,\n    the same as the characteristic polynomial. If we knew this in advance,\n    then the only possible Jordan canonical forms would be\n     .\n    If instead the minimal polynomial had turned out to be  \n    (with the same characteristic polynomial), then, up to permutation of the Jordan blocks,\n    our Jordan canonical form would be\n     .\n   \n    However, once we hit matrices of size   or larger, some ambiguity creeps in.\n    For example, suppose   with  .\n    Then the largest Jordan block is  ,\n    but we could have two   blocks and a  ,\n    or three   blocks and one  .\n   "
},
{
  "id": "thm-gen-eigen-props",
  "level": "2",
  "url": "sec-jordan-form.html#thm-gen-eigen-props",
  "type": "Theorem",
  "number": "5.6.1",
  "title": "",
  "body": "\n        Suppose   is a complex vector space, and   is a linear operator.\n        Let   denote the distinct eigenvalues of  .\n        (We can assume   is real if we also assume that all eigenvalues of   are real.)\n        Then:\n         \n             \n              Generalized eigenvectors corresponding to  distinct  eigenvalues are linearly independent.\n             \n           \n             \n              Each generalize eigenspace   is  -invariant.\n             \n           \n             \n              Each restriction   is nilpotent.\n             \n           \n       "
},
{
  "id": "thm-block-eigen",
  "level": "2",
  "url": "sec-jordan-form.html#thm-block-eigen",
  "type": "Theorem",
  "number": "5.6.2",
  "title": "",
  "body": "\n        Let   be a linear operator. If the characteristic polynomial of   is given by\n         ,\n        then   for each  .\n       \n        Moreover, if we let  ,\n        where   is any basis for   for  ,\n        then   is a basis for   (this follows immediately from  )\n        and the matrix of   with respect to this basis has the block-diagonal form\n         ,\n        where each   has size  .\n       "
},
{
  "id": "def-jordan-block",
  "level": "2",
  "url": "sec-jordan-form.html#def-jordan-block",
  "type": "Definition",
  "number": "5.6.3",
  "title": "",
  "body": "Jordan block "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-jordan-form.html#example-20",
  "type": "Example",
  "number": "5.6.4",
  "title": "",
  "body": "\n        The following are examples of Jordan blocks:\n         .\n       "
},
{
  "id": "jordan-chain-basis",
  "level": "2",
  "url": "sec-jordan-form.html#jordan-chain-basis",
  "type": "Insight",
  "number": "5.6.5",
  "title": "Finding a chain basis.",
  "body": "Finding a chain basis  \n      A Jordan block corresponds to basis vectors   with the following properties:\n       ,\n      and so on. Notice that   is an eigenvector, and for each  ,\n       .\n     chain basis \n      If   we might have to repeat this process for each eigenvector in a basis for the eigenspace.\n      The full matrix of   might have several Jordan blocks of possibly different sizes for each eigenvalue.\n     "
},
{
  "id": "ex-jordan-form1",
  "level": "2",
  "url": "sec-jordan-form.html#ex-jordan-form1",
  "type": "Example",
  "number": "5.6.6",
  "title": "",
  "body": "\n        Determine a Jordan basis for the operator  \n        whose matrix with respect to the standard basis is given by\n         \n       \n        First, we need the characteristic polynomial.\n       \n        The characteristic polynomial of   is given by\n         .\n        We thus have two eigenvalues:  , of multiplicity  ,\n        and  , of multiplicity  .\n        We next find the   eigenspace.\n       \n        The computer gives us\n         ,\n        so we have only one independent eigenvector, which means that  .\n       \n        Following  , we extend  \n        to a basis of   by solving the system\n         .\n       \n        Using the results above from the computer (or Gaussian elimination), we find a general solution\n         .\n        Note that our solution is of the form  .\n        We set  , and get  .\n       \n        Next, we consider the eigenvalue  .\n        The computer gives us the following:\n       \n         Rescaling to remove fractions, we find\n         .\n        Again, we're one eigenvector short of the multiplicity, so we need to consider  .\n       \n        In the next cell, note that we doubled the eigenvectors in  E3  to avoid fractions.\n        To follow the solution in our example, we append  2*E3[0] , and reduce the resulting matrix.\n        You should find that using the eigenvector   corresponding to  E3[0] \n        leads to an inconsistent system. Once you confirm this, replace  E3[0]  with  E3[1] \n        and re-run the cell to see that we get an inconsistent system using   as well!\n       \n        The systems   and   are both inconsistent,\n        but we can salvage the situation by replacing the eigenvector   by some linear combination\n         . We row-reduce, and look for values of   and   that give a consistent system.\n       \n        The  rref  command takes things a bit farther than we'd like,\n        so we use the command  echelon_form()  instead. Note that if  ,\n        the system is inconsistent.\n       \n        We find that   does the job, so we set\n         .\n       \n        Solving the system  , using the code above, we find\n         .\n       \n        We let  , and check that\n         ,\n        as required:\n       \n        This gives us the basis   for  ,\n        and with respect to this basis, we have the Jordan canonical form\n         .\n       \n        Now that we've done all the work required for  ,\n        we should confess that there was an easier way all along:\n       \n        The  jordan_form()  command returns a pair  ,\n        where   is the Jordan canonical form of  ,\n        and   is an invertible matrix such that  .\n        You might find that the computer's answer is not quite the same as ours.\n        This is because the Jordan canonical form is only unique up to permutation of the Jordan blocks.\n        Changing the order of the blocks amounts to changing the order of the columns of  ,\n        which are given by a basis of (generalized eigenvectors).\n       "
},
{
  "id": "ex-jordan-form2",
  "level": "2",
  "url": "sec-jordan-form.html#ex-jordan-form2",
  "type": "Exercise",
  "number": "5.6.7",
  "title": "",
  "body": "\n        Determine a Jordan basis for the linear operator  \n        given by\n         .\n        A code cell is given below in case you want to try performing the operations demonstrated in  .\n       \n        With respect to the standard basis of  , the matrix of   is\n         .\n        We find (perhaps using the Sage cell provided below, and the code from the example above) that\n         ,\n        so   has eigenvalues   (of multiplicity  ), and   (of multiplicity  ).\n       \n        We tackle the repeated eigenvalue first. The reduced row-echelon form of   is given by\n         ,\n        so\n         .\n        We now attempt to solve  . We find\n         ,\n        so  , where  .\n        We take   as our first generalized eigenvector.\n        Note that  , so  , as expected.\n       \n        Finally, we look for an element of   of the form  ,\n        where  . We set up and solve the system   as follows:\n         ,\n        so  , where  .\n       \n        Finally, we deal with the eigenvalue  . The reduced row-echelon form of   is\n         ,\n        so\n         .\n       \n        Our basis of column vectors is therefore  .\n        Note that by design,\n         .\n        The corresponding Jordan basis for   is\n         ,\n        and with respect to this basis, we have\n         .\n       "
},
{
  "id": "appendix-complex-review",
  "level": "1",
  "url": "appendix-complex-review.html",
  "type": "Appendix",
  "number": "A",
  "title": "Review of complex numbers",
  "body": "Review of complex numbers \n    Let's quickly review some basic facts about complex numbers that are typically covered in an earlier course.\n    First, we define the set of complex numbers by\n     \n    where  . We have a bijection   given by  ;\n    because of this, we often picture   as the  complex plane , with a  real    axis,\n    and an  imaginary    axis.\n   \n    Arithmetic with complex numbers is defined by\n     .\n    The multiplication rule looks complicated, but it's really just  FOIL ,\n    along with the fact that  .\n    Note that if   is real, we have  ,\n    so that   has the structure of a two dimensional vector space over   (isomorphic to  ).\n   complex conjugate modulus \n    Now, given   and  , we have\n     .\n    And of course, we have   unless  , and as usual, we don't divide by zero.\n   \n    An important thing to keep in mind when working with complex numbers is that they follow the same algebraic rules as real numbers.\n    For example, given   all complex, and  , where  ,\n    if we want to solve for  , the answer is  , as it would be in  .\n    The difference between   and   only really materializes when we want to  compute \n     , by plugging in values for   and  .\n   polar form \n    This idea of putting a complex number in an exponential function seems odd at first.\n    If you take a course in complex variables, you'll get a better understanding of why this makes sense.\n    But for now, we can take it as a convenient piece of notation.\n    The reason it's convenient is that the rules for complex arithmetic turn out to align quite nicely with properties of the exponential function.\n    For example, de Moivre's Theorem states that\n     .\n    This can be proved by induction (and the proof is not even all that bad),\n    but it seems perfectly obvious in exponential notation:\n     ,\n    since you multiply exponents when you raise a power to a power.\n   \n    Similarly, if we want to multiply two unit complex numbers, we have\n     .\n    But in exponential notation, this is simply\n     ,\n    which makes sense, since when you multiply exponentials, you add the exponents.\n   \n    Generally, problems involving addition and subtraction are best handled in  rectangular  ( )\n    form, while problems involving multiplication and powers are best handled in polar form.\n   "
},
{
  "id": "p-1543",
  "level": "2",
  "url": "appendix-complex-review.html#p-1543",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex conjugate modulus "
},
{
  "id": "p-1546",
  "level": "2",
  "url": "appendix-complex-review.html#p-1546",
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
  "body": "Jupyter Syzygy Jupyter Hub \n    Note: if you click the login button and nothing happens, click the back button and try again.\n    Sometimes there's a problem with our single sign-on service.\n   Jupyter notebook cells Markdown \n    If you want  display math , use double dollar signs.\n    Unfortunately, entering matrices is a bit tedious.\n    For example,  $$A = \\begin{bmatrix}1 & 2 & 3\\\\4 & 5 & 6 &\\end{bmatrix}$$ \n    produces\n     .\n    Later we'll see how to enter things like matrices in Python.\n   \n    It's also possible to use markdown to add  emphasis , images, URLs,  .\n    For details, see the following  Markdown cheatsheet ,\n    or this  quick reference \n    from  .\n   \n    What's cool about a Jupyter notebook is that in addition to markdown cells,\n    which can present content and provide explanation,\n    we can also include  code cells . Jupyter supports many different programming languages,\n    but we will stick mainly to Python.\n   "
},
{
  "id": "p-1550",
  "level": "2",
  "url": "section-jupyter.html#p-1550",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Syzygy Jupyter Hub "
},
{
  "id": "p-1552",
  "level": "2",
  "url": "section-jupyter.html#p-1552",
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
  "body": "Python basics \n    OK, so you've logged into Syzygy and you're ready to write some code.\n    What does basic code look like in Python?\n    The good news is that you don't need to be a programmer to do linear algebra in Python.\n    Python includes many different  libraries  that keep most of the code under the hood,\n    so all you have to remember is what command you need to use to accomplish a task.\n    That said, it won't hurt to learn a little bit of basic coding.\n   \n    Basic arithmetic operations are understood, and you can simply type them in.\n    Hit  shift+enter  in a code cell to execute the code and see the result.\n   \n      OK, great. But sometimes we want to do calculations with more than one step.\n      For that, we can assign variables.\n     \n      Sometimes you might need input that's a string, rather than a number.\n      We can do that, too.\n     \n      Another basic construction is a list.\n      Getting the hang of lists is useful, because in a sense,\n      matrices are just really fancy lists.\n     \n      Once you have an empty list, you might want to add something to it.\n      This can be done with the  append  command.\n     \n      Go back and re-run the above code cell two or three more times.\n      What happens? Probably you can guess what the  len  command is for.\n      Now let's get really carried away and do some  for real  coding, like loops!\n     \n      Notice the indentation in the second line.\n      This is how Python handles things like for loops, with indentation rather than bracketing.\n      We could say more about lists but perhaps it's time to talk about matrices.\n      For further reading, you can  start here .\n     "
},
{
  "id": "sec-sympy",
  "level": "1",
  "url": "sec-sympy.html",
  "type": "Section",
  "number": "B.3",
  "title": "SymPy for linear algebra",
  "body": "SymPy for linear algebra SymPy \n      Another advantage of SymPy is sophisticated  pretty-printing .\n      In fact, we can enable MathJax within SymPy,\n      so that output is rendered in the same way as when LaTeX is entered in a markdown cell.\n     SymPy basics \n      Running the following Sage cell will load the SymPy library and turn on MathJax.\n     \n       Note:  the command  from sympy import * \n      given above is  not  best practice.\n      It can be convenient when you want to do a quick calculation\n      (for example, on a test), but can have unintended consequences.\n      It is better to only load those parts of a library you are going to use;\n      for example,  from sympy import Matrix, init_printing .\n     \n      If you are going to be working with multiple libraries,\n      and more than one of them defines a certain command,\n      you can use prefixes to indicate what library you want to use.\n      For example, if you enter  import sympy as sy ,\n      each SymPy command will need to be appended with  sy ; for example,\n      you might write  sy.Matrix  instead of simply  Matrix .\n      Let's use SymPy to create a   matrix.\n     \n      The  A  on the second line asks Python to print the matrix using SymPy's printing support.\n      If we use Python's  print  command, we get something different;\n      note that the next Sage cell remembers the values from the previous one,\n      if you are using the  HTML  version of the book.\n     \n      We'll have more on matrices in  .\n      For now, let's look at some more basic constructions.\n      One basic thing to be mindful of is the type of numbers we're working with.\n      For example, if we enter  2\/7  in a code cell,\n      Python will interpret this as a floating point number (essentially, a division).\n     \n      (If you are using Sage cells in HTML rather than Jupyter, this will automatically be interpreted as a fraction.)\n     \n      But we often do linear algebra over the rational numbers,\n      and so SymPy will let you specify this.\n      First, you'll need to load the  Rational  function.\n     \n      You might not think to add the comma above, because you're used to writing fractions like  .\n      Fortunately, the SymPy authors thought of that:\n     \n      Hmm... You might have got the output you expected in the cell above, but maybe not.\n      If you got a much worse looking fraction, read on.\n     \n      Another cool command is the  sympify  command, which can be called with the shortcut  S .\n      The input  2  is interpreted as an  int  by Python, but  S(2)  is a  SymPy  Integer :\n     \n      Of course, sometimes you  do  want to use floating point, and you can specify this, too:\n     \n      One note of caution:  Float  is part of SymPy, and not the same as the core Python  float  command.\n      You can also put decimals into the Rational command and get the corresponding fraction:\n     \n      The only thing to beware of is that computers convert from decimal to binary and then back again,\n      and sometimes weird things can happen:\n     \n      Of course, there are workarounds. One way is to enter   as a string:\n     \n      Another is to limit the size of the denominator:\n     \n      Try some other examples above. Some inputs to try are  1.23  and  23e-10 \n     \n      We can also deal with repeating decimals. These are entered as strings, with square brackets around the repeating part.\n      Then we can  sympify :\n     \n      Finally, SymPy knows about mathematical constants like  ,\n      which you'll need from time to time in linear algebra.\n      If you ever need  , this is entered as  oo .\n     \n      Finally, from time to time you may need to include parameters (variables) in an expression.\n      Typical code for this is of the form  a, b, c = symbols('a b c', real = True, constant = True) .\n      Here, we introduce the symbols  a,b,c  with the specification that they represent real-valued constants.\n     Matrices in SymPy \n      Here we collect some of the SymPy commands used throughout this text,\n      for ease of reference. For further details, please consult the\n       online documentation .\n     \n      To create a   matrix, we can write either  A=Matrix(2,3,[1,2,3,4,5,6]) \n      or  A=Matrix([[1,2,3],[4,5,6]]) , where of course the size and entries can be changed to whatever you want.\n      The former method is a bit faster, but once your matrices get a bit bigger, the latter method is less prone to typos.\n     \n      Also of note: a column vector   can be entered using  Matrix([1,2,3]) .\n      There are also certain built in special matrices.\n      To get an   identity matrix, use  eye(n) .\n      To get an   zero matrix, use  zeros(m,n) , or  zeros(n)  for a square matrix.\n      There is also syntax for diagonal matrices, such as  diag(1,2,3) .\n      What's cool is that you can even use this for block diagonal matrices:\n     \n      To get the reduced row-echelon form of the matrix  , simply use  A.rref() .\n      Addition, subtraction, and multiplication use the obvious syntax:\n       A+B ,  A*B ,  .\n      The determinant of a square matrix is given by  A.det() .\n      Inverses can be computed using  A.inv()  or  A**-1 .\n      The latter is rather natural, since powers in general are entered as  A**n  for  .\n     \n      In most cases where you want to reduce a matrix, you're going to want to simply use the  rref  function.\n      But there are times where this can be overzealous; for example, if you have a matrix with one or more symbols.\n      One option is to replace  A.rref()  with  A.echelon_form() .\n      The  echelon_form  function creates zeros in the pivot columns,\n      but does not create leading on ones.\n     \n      For example, let's take the matrix  .\n      Note the difference in output between  rref  and  echelon_form .\n     \n      It is possible to manually perform row operations when you need additional control.\n      This is achieved using the function  A.elementary_row_op(<arguments>) ,\n      with arguments  op,row,k,row1,row2 .\n     \n      We have the following general syntax:\n       \n           \n            To swap two rows:\n             \n                 \n                   op='n<->m' \n                 \n               \n                 \n                   row1=i , where  i  is the index of the first row being swapped\n                  (remembering that rows are indexed starting with   for the first row).\n                 \n               \n                 \n                   row2=j , where  j  is the index of the second row being swapped.\n                 \n               \n           \n         \n           \n            To rescale a row:\n             \n                 \n                   op='n->kn' \n                 \n               \n                 \n                   row=i , where  i  is the index of the row being rescaled.\n                 \n               \n                 \n                   k=c , where  c  is the value of the scalar you want to multiply by.\n                 \n               \n           \n         \n           \n            To add a multiple of one row to another:\n             \n                 \n                   op='n->n+km' \n                 \n               \n                 \n                   row=i , where  i  is the index of the row you want to change.\n                 \n               \n                 \n                   k=c , where  c  is the multiple of the other row.\n                 \n               \n                 \n                   row2=j , where  j  is the index of the other row.\n                 \n               \n           \n         \n     \n      When studying matrix transformations, we are often interested in the  null space \n      and  column space , since these correspond to the kernel and image of a linear transformation.\n      This is achieved, simply enough, using  A.nullspace()  and  A.colspace() .\n      The output will be a basis of column vectors for these spaces,\n      and these are exactly the ones you'd find doing Gaussian elimination by hand.\n     \n      Once you get to orthogonality, you'll want to be able to compute things like dot products, and transpose.\n      These are simple enough. The dot product of vectors  X,Y  is simply  X.dot(Y) .\n      The transpose of a matrix  A  is  A.T . As we should expect,  X\\dotp Y = X^TY .\n     \n      Of course, nobody wants to do things like the Gram Schmidt algorithm by hand.\n      Fortunately, there's a function for that.\n      If we have vectors  X,Y,Z , we can make a list  L=[X,Y,Z] ,\n      and perform Gram Schmidt with  GramSchmidt(L) .\n      If you want your output to be an orthonormal basis (and not merely orthogonal),\n      then you can use  GramSchmidt(L,true) .\n     \n      It's useful to note that the output from functions like  nullspace() \n      are automatically treated as lists. So one can use simple code like the following:\n     \n      If for some reason you need to reference particular vectors in a list,\n      this can be done by specifying the index.\n      If  L=[X,Y,Z] , then  L[0]==X ,  L[1]==Y , and  L[2]==Z .\n     \n      Next up is eigenvalues and eigenvectors.\n      Given an   matrix  , we have the following:\n       \n           \n            For the characteristic polynomial, use  A.charpoly() .\n            However, the result will give you something SymPy calls a  PurePoly ,\n            and the  factor  command will have no effect.\n            Instead, use  A.charpoly().as_expr() .\n           \n         \n           \n            If we know that   is an eigenvalue of a   matrix  ,\n            one way to get a basis for the eigenspace   is to do:\n             \n               B=A-3*eye(4) \n               B.nullspace() \n             \n            If you just want all the eigenvalues and eigenvectors without going through the steps,\n            then you can simply execute  A.eigenvects() .\n            The result is a list of lists   each list in the list is of the form:\n            eigenvalue, multiplicity, basis for the eigenspace.\n           \n\n           \n            For diagonalization, one can do  A.diagonalize() .\n            But this will not necessarily produce orthogonal diagonalization for a symmetric matrix.\n           \n         \n     hermitian conjugate \n      Don't forget that when entering complex matrices, the complex unit is entered as  I .\n      Also, complex expressions are not simplified by default,\n      so you will often need to wrap your output line in  simplify() .\n      The Sage Cell below contains complete code for the unitary diagonalization of a  \n      hermitian matrix with distinct eigenvalues.\n      When doing a problem like this in a Sage cell, it's a good idea to execute each line of code\n      (and display output) before moving on to the next.\n      In this case, printing the output for the list  L  given by  A.eigenvects() \n      helps explain the complicated-looking definitions of the vectors  v,w .\n      Of course, if we had a matrix with repeated eigenvalues, we'd need to add steps involving Gram Schmidt.\n     \n      There are a few other commands that might come in handy as you work through this material:\n       \n           \n            Two matrices can be glued together. If matrices  A,B  have the same number of rows,\n            the command  A.row_join(B)  will glue the matrices together, left-to-right.\n            If they have the same number of columns,  A.col_join(B)  will glue them together top-to-bottom.\n           \n         \n           \n            To insert a column  C  into a matrix  M  (of appropriate size)\n            as the  th column, you can do  M.col_insert(j,C) .\n            Just remember that columns are indexed starting at zero,\n            so you might want  j-1  instead of  j .\n            This can be useful for things like solving a system  ,\n            where you want to append the column   to the matrix  .\n           \n         \n           \n            A  -factorization can be performed using  Q,R=A.QRdecomposition() \n           \n         \n           \n            The Jordan canonical form   of a matrix   can be obtained\n            (along with the matrix   whose columns are a Jordan basis)\n            using  P,M=A.jordan_form() .\n           \n         \n     "
},
{
  "id": "p-1564",
  "level": "2",
  "url": "sec-sympy.html#p-1564",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "SymPy "
},
{
  "id": "p-1615",
  "level": "2",
  "url": "sec-sympy.html#p-1615",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hermitian conjugate "
},
{
  "id": "solutions-1",
  "level": "1",
  "url": "solutions-1.html",
  "type": "Appendix",
  "number": "C",
  "title": "Solutions to Selected Exercises",
  "body": "Solutions to Selected Exercises "
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
