<?xml version='1.0'?> <!-- As XML file -->

<!-- Created by Sean Fitzpatrick, August 2020                           -->
<!-- Borrows liberally from the style file for Sound Writing  by        -->
<!-- Cody Chun, Kieran O'Neil, Kylie Young, Julie Nelson Christoph.     -->
<!-- With additional... err... inspiration from style files from        -->
<!-- ORCCA, CLP, and the PreTeXt guide.                                 -->

<!--NB: move this file from APEXCalculusPTX/style to mathbook/user !!!  -->

<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "./core/entities.ent">
    %entities;
]>

<!-- Identify as a stylesheet -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:xml="http://www.w3.org/XML/1998/namespace"
    xmlns:exsl="http://exslt.org/common"
    xmlns:date="http://exslt.org/dates-and-times"
    xmlns:str="http://exslt.org/strings"
    xmlns:pi="http://pretextbook.org/2020/pretext/internal"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    extension-element-prefixes="exsl date str"
    exclude-result-prefixes="pi"
>

<!-- import official pretext-latex style sheet -->
<xsl:import href="./core/pretext-latex.xsl"/>

<xsl:output method="text"/>

<!-- ########## -->
<!-- Font Setup -->
<!-- ########## -->

<!-- Old Style figures for the body, but reversed to Lining many  -->
<!-- other places. "Old Style" is a lowercase style, "Lining" is  -->
<!-- a (now traditional) uppercase style.  Ornamentation for page -->
<!-- header happens to be specific Unicode characters of the same -->
<!-- font used for the text.  Relevant font table here:           -->
<!-- http://mirrors.ctan.org/fonts/libertinus-fonts/documentation/LibertinusSerif-Regular-Table.pdf -->
<xsl:template name="font-xelatex-main">
    <xsl:text>%% XeLaTeX font configuration from PreTeXt Guide style&#xa;</xsl:text>
    <xsl:text>%% We rely on a font installed at the system level,&#xa;</xsl:text>
    <xsl:text>%% so that we can exercise specific font features&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:call-template name="xelatex-font-check">
        <xsl:with-param name="font-name" select="'Carlito-Regular'"/>
    </xsl:call-template>
    <xsl:text>\setmainfont{Carlito-Regular}&#xa;</xsl:text>
</xsl:template>


<!-- define tcolorboxes for theorem and friends -->

<xsl:template match="list" mode="tcb-style">
    <xsl:text>enhanced jigsaw,middle=1ex, blockspacingstyle, opacityback=0, opacitybacktitle=0, coltitle=black, frame hidden, titlerule=-0.3pt,</xsl:text>
</xsl:template>

<xsl:template match="insight" mode="tcb-style">
    <xsl:text>before upper app={\setparstyle}, fonttitle=\normalfont\bfseries, colbacktitle=red!60!black!20, colframe=red!30!black!50, colback=white!95!red, coltitle=black, titlerule=-0.3pt,</xsl:text>
</xsl:template>

<xsl:template match="&DEFINITION-LIKE;" mode="tcb-style">
    <xsl:text>before upper app={\setparstyle}, fonttitle=\normalfont\bfseries, colbacktitle=yellow!90!black!30, colframe=yellow!95!black!60, colback=white!95!yellow, coltitle=black, titlerule=-0.3pt,</xsl:text>
</xsl:template>

<xsl:template match="&THEOREM-LIKE;" mode="tcb-style">
    <xsl:text>before upper app={\setparstyle}, fonttitle=\normalfont\bfseries, colbacktitle=green!60!black!20, colframe=green!30!black!50, colback=white!95!green, coltitle=black, titlerule=-0.3pt,</xsl:text>
</xsl:template>

<xsl:template match="assemblage" mode="tcb-style">
    <xsl:text>fonttitle=\normalfont\bfseries, colbacktitle=blue!20, colframe=blue!75!black, colback=blue!5, coltitle=black, titlerule=-0.3pt,</xsl:text>
</xsl:template>

<xsl:template match="&ASIDE-LIKE;" mode="tcb-style">
    <xsl:text>enhanced, colback=white, colframe=white,&#xa;</xsl:text>
    <xsl:text>coltitle=black, fonttitle=\bfseries, attach title to upper, after title={\space},left=1pt,</xsl:text>
</xsl:template>

<xsl:template match="figure" mode="tcb-style">
    <xsl:text>bwminimalstyle, middle=1ex, blockspacingstyle, fontlower=\blocktitlefont, after skip=\baselineskip</xsl:text>
</xsl:template>

<xsl:template match="example" mode="tcb-style">
    <xsl:text>blockspacingstyle, after title={\space}, before upper ={\setparstyle},&#xa; </xsl:text>
    <xsl:text>fonttitle=\normalfont\bfseries, colback=white, colframe=black, colbacktitle=white, coltitle=black,
      enhanced,
      breakable,
      frame hidden,
      overlay unbroken={
          \draw[thick] ([yshift=-2ex]frame.north west)--([yshift=2ex]frame.south west)--([xshift=2ex,yshift=2ex]frame.south west);
      },
      overlay first={
          \draw[thick] ([yshift=-2ex]frame.north west)--(frame.south west);
      },
      overlay middle={
          \draw[thick] ([yshift=-2ex]frame.north west)--(frame.south west);
      },
      overlay last={
          \draw[thick] ([yshift=-2ex]frame.north west)--([yshift=2ex]frame.south west)--([xshift=2ex,yshift=2ex]frame.south west);
      },
    </xsl:text>
</xsl:template>

<xsl:template match="exercise" mode="tcb-style">
    <xsl:text>fonttitle=\normalfont\bfseries, colback=white, colframe=black, colbacktitle=white, coltitle=black,
      enhanced,
      breakable,
      frame hidden,
      overlay unbroken={
          \draw[thick] ([yshift=-2ex]frame.north west)--([yshift=2ex]frame.south west)--([xshift=2ex,yshift=2ex]frame.south west);
      },
      overlay first={
          \draw[thick] ([yshift=-2ex]frame.north west)--(frame.south west);
      },
      overlay middle={
          \draw[thick] ([yshift=-2ex]frame.north west)--(frame.south west);
      },
      overlay last={
          \draw[thick] ([yshift=-2ex]frame.north west)--([yshift=2ex]frame.south west)--([xshift=2ex,yshift=2ex]frame.south west);
      },
    </xsl:text>
</xsl:template>

<!-- use original APEX geometry definitions -->
<!-- <xsl:param name="latex.geometry" select="'inner=1in,textheight=9in,textwidth=340pt,marginparwidth=140pt,marginparsep=20pt,bottom=1in,footskip=29pt'"/> -->
<!-- this is now controlled in the publisher file -->

<!-- apply exercise geometry -->
<xsl:template match="exercises|solutions" mode="latex-division-heading">
    <!-- \newgeometry includes a \clearpage -->
    <xsl:apply-templates select="." mode="new-geometry"/>
    <xsl:text>\begin{</xsl:text>
    <xsl:apply-templates select="." mode="division-environment-name" />
    <!-- possibly numberless -->
    <xsl:apply-templates select="." mode="division-environment-name-suffix" />
    <xsl:text>}</xsl:text>
    <xsl:text>{</xsl:text>
    <xsl:apply-templates select="." mode="type-name"/>
    <xsl:text>}</xsl:text>
    <xsl:text>{</xsl:text>
    <xsl:apply-templates select="." mode="title-full"/>
    <xsl:text>}</xsl:text>
    <xsl:text>{</xsl:text>
    <!-- subtitle here -->
    <xsl:text>}</xsl:text>
    <xsl:text>{</xsl:text>
    <xsl:apply-templates select="." mode="title-short"/>
    <xsl:text>}</xsl:text>
    <xsl:text>{</xsl:text>
    <!-- author here -->
    <xsl:text>}</xsl:text>
    <xsl:text>{</xsl:text>
    <!-- subtitle here -->
    <xsl:text>}</xsl:text>
    <xsl:text>{</xsl:text>
    <xsl:apply-templates select="." mode="unique-id" />
    <xsl:text>}</xsl:text>
    <xsl:text>&#xa;</xsl:text>
</xsl:template>


<!-- define exercise geometry -->
<xsl:template match="exercises|appendix|solutions" mode="new-geometry">
    <xsl:text>\newgeometry{</xsl:text>
    <xsl:text>inner=72pt</xsl:text>
    <xsl:text>, outer=72pt</xsl:text>
    <xsl:text>, textheight=9.25in</xsl:text>
    <xsl:text>, tmargin=.75in</xsl:text>
    <xsl:text>, marginparwidth=150pt</xsl:text>
    <xsl:text>, marginparsep=12pt</xsl:text>
    <xsl:text>}&#xa;</xsl:text>
</xsl:template>

<!-- restore geometry for next section -->
<xsl:template match="exercises|appendix|solutions" mode="latex-division-footing">
    <xsl:text>\end{</xsl:text>
    <xsl:apply-templates select="." mode="division-environment-name" />
    <!-- possibly numberless -->
    <xsl:apply-templates select="." mode="division-environment-name-suffix" />
    <xsl:text>}&#xa;</xsl:text>
      <!-- \restoregeometry includes a \clearpage -->
    <xsl:text>\restoregeometry&#xa;</xsl:text>
</xsl:template>

<!-- tabular in sidebyside without scaling -->
<xsl:template match="tabular[ancestor::sidebyside]">
    <xsl:text>{%&#xa;</xsl:text>
    <xsl:apply-templates select="." mode="tabular-inclusion"/>
    <xsl:text>}%&#xa;</xsl:text>
</xsl:template>

<!-- figures in the margin -->
<!-- LaTeX code for margin box formatting thanks to Simon Dispa via
https://tex.stackexchange.com/questions/605955/can-i-avoid-indentation-of-margin-items-when-using-parbox-false-in-a-tcolorbox -->
<xsl:param name="latex.preamble.early" select="'
\usepackage{xcoffins}&#xa;
\NewCoffin\Framex&#xa;
\NewCoffin\Theox
  '"/>

<xsl:param name="latex.preamble.late" select="'
\hypersetup{breaklinks=true}&#xa;
\newlength{\Textw} % save textwidth outside the boxes&#xa;
\setlength{\Textw}{\textwidth}&#xa;
\newlength{\Hshift}&#xa;
\newlength{\Mshift}&#xa;
\newcommand*{\calculateMshift}{%&#xa;
  \setlength{\Mshift}{\marginparsep}&#xa;
}&#xa;
&#xa;
\newcommand*{\calculateHshift}{%&#xa;
  \setlength{\Hshift}{\dimexpr\Textw/2-\tcbtextwidth/2\relax}&#xa;
}&#xa;
\newcommand{\tcbmarginbox}[2]{%&#xa;
  \par %start a new line&#xa;
  \calculateMshift&#xa;
  \calculateHshift&#xa;
  \SetHorizontalCoffin\Framex{} %clear box Framex&#xa;
  \SetVerticalCoffin\Theox{\marginparwidth}{#1}% fill box \Theox&#xa;
  \JoinCoffins*\Framex[r,vc]\Theox[l,vc](\dimexpr\Mshift+\textwidth\relax,#2)%join boxes&#xa;
  \noindent\TypesetCoffin\Framex(\Hshift,0pt)\\[-2\baselineskip] %typset assembly&#xa;
}&#xa;
\newcommand{\listmarginbox}[2]{%&#xa;
  \par %start a new line&#xa;
  \calculateMshift&#xa;
  \calculateHshift&#xa;
  \SetHorizontalCoffin\Framex{\color{black}\rule{\tcbtextwidth}{0pt}} %clear box Framex&#xa;
  \SetVerticalCoffin\Theox{\marginparwidth}{#1}% fill box \Theox&#xa;
  \JoinCoffins*\Framex[r,vc]\Theox[l,vc](\dimexpr\Mshift+\Hshift-9mm\relax,#2)%join boxes&#xa;
  \noindent\TypesetCoffin\Framex\\[-2\baselineskip] %typeset assembly&#xa;
}&#xa;
\newcommand{\parmarginbox}[2]{%&#xa;
  \par %start a new line&#xa;
  \calculateMshift&#xa;
  \SetHorizontalCoffin\Framex{}&#xa;
  \SetVerticalCoffin\Theox{\marginparwidth}{#1}&#xa;
  \JoinCoffins*\Framex[r,vc]\Theox[l,vc](\dimexpr\Mshift+\textwidth\relax,#2)&#xa;
  \noindent\TypesetCoffin\Framex(0mm,0pt)\\[-2\baselineskip]&#xa;
}'"/>


<!-- we want images in margin to be the full margin width -->
<xsl:template match="image[not(ancestor::sidebyside) and (descendant::latex-image or descendant::asymptote) and not(ancestor::exercise)]">
  <xsl:choose>
    <xsl:when test="ancestor::figure/@vshift">
      <xsl:text>\begin{image}</xsl:text>
      <xsl:text>{0.02</xsl:text>
      <xsl:text>}</xsl:text>
      <xsl:text>{0.96</xsl:text>
      <xsl:text>}</xsl:text>
      <xsl:text>{0.02</xsl:text>
      <xsl:text>}{}%&#xa;</xsl:text>
      <xsl:apply-templates select="." mode="image-inclusion" />
      <xsl:text>\end{image}%&#xa;</xsl:text>
    </xsl:when>
    <xsl:otherwise>
      <xsl:variable name="rtf-layout">
        <xsl:apply-templates select="." mode="layout-parameters" />
      </xsl:variable>
      <xsl:variable name="layout" select="exsl:node-set($rtf-layout)" />
      <xsl:text>\begin{image}</xsl:text>
      <xsl:text>{</xsl:text>
      <xsl:value-of select="$layout/left-margin div 100"/>
      <xsl:text>}</xsl:text>
      <xsl:text>{</xsl:text>
      <xsl:value-of select="$layout/width div 100"/>
      <xsl:text>}</xsl:text>
      <xsl:text>{</xsl:text>
      <xsl:value-of select="$layout/right-margin div 100"/>
      <xsl:text>}</xsl:text>
      <xsl:text>{</xsl:text>
      <xsl:apply-templates select="." mode="vertical-adjustment"/>
      <xsl:text>}%&#xa;</xsl:text>
      <xsl:apply-templates select="." mode="image-inclusion" />
      <xsl:text>\end{image}%&#xa;</xsl:text>
    </xsl:otherwise>
  </xsl:choose> 
</xsl:template>

<!-- enable a few necessary page breaks to place images correctly -->
<xsl:template match="pagebreak-latex">
  <xsl:text>&#xa;</xsl:text>
  <xsl:text>\pagebreak</xsl:text>
  <xsl:text>&#xa;</xsl:text>
</xsl:template>

<!-- and enable occasional enlarging of a page to avoid orphans -->
<xsl:template match="enlarge-page">
  <xsl:text>&#xa;</xsl:text>
  <xsl:text>\enlargethispage{</xsl:text>
    <xsl:value-of select="skipsize"/>
  <xsl:text>\baselineskip}&#xa;</xsl:text>
  <xsl:text>&#xa;</xsl:text>
</xsl:template>

<!-- "aside" -->
<!-- The assembalge template, applied to aside, to change a setting -->
<xsl:template match="aside" mode="environment">
    <!-- Names of various pieces use the element name -->
    <xsl:variable name="environment-name">
        <xsl:value-of select="local-name(.)"/>
    </xsl:variable>
    <xsl:text>%% </xsl:text>
    <xsl:value-of select="$environment-name"/>
    <xsl:text>: regular aside, but not breakable&#xa;</xsl:text>
    <xsl:text>\tcbset{ </xsl:text>
    <xsl:value-of select="$environment-name"/>
    <xsl:text>style/.style={</xsl:text>
    <xsl:apply-templates select="." mode="tcb-style"/>
    <xsl:text>} }&#xa;</xsl:text>
    <xsl:text>\newtcolorbox{</xsl:text>
    <xsl:value-of select="$environment-name"/>
    <xsl:text>}[3]{title={\notblank{#2}{#2}{}}, </xsl:text>
    <xsl:text>phantomlabel={#3}, parbox=false, before upper app={\setlength{\parindent}{\normalparindent}}, </xsl:text>
    <xsl:value-of select="$environment-name"/>
    <xsl:text>style}&#xa;</xsl:text>
</xsl:template>

<!-- move vshift figures to the margin -->
<xsl:template match="figure">
    <xsl:if test="@vshift">
      <xsl:text>&#xa;</xsl:text>
      <xsl:choose>
        <xsl:when test="ancestor::example and not(ancestor::ul or ancestor::ol)">
          <xsl:text>\tcbmarginbox{%&#xa;</xsl:text>
        </xsl:when>
        <xsl:when test="ancestor::example and (ancestor::ul or ancestor::ol)">
          <xsl:text>\listmarginbox{%&#xa;</xsl:text>
        </xsl:when>
        <xsl:otherwise>
          <xsl:text>\parmarginbox{%&#xa;</xsl:text>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:if>
    <xsl:if test="@hstretch">
      <xsl:text>&#xa;</xsl:text>
      <xsl:text>{\tcbset{text width=</xsl:text>
        <xsl:value-of select="@hstretch"/>
      <xsl:text>pt}&#xa;</xsl:text>  
    </xsl:if>
    <xsl:apply-imports/>
    <xsl:if test="@vshift">
      <xsl:text>}{</xsl:text><xsl:value-of select="@vshift"/><xsl:text>cm}&#xa;</xsl:text>
      <xsl:text>&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="@hstretch">
      <xsl:text>}&#xa;</xsl:text>
    </xsl:if>
</xsl:template>

<!-- Adjust width of some tcolorboxes that aren't wide enough to fit their content -->

<xsl:template match="definition|theorem|insight|sidebyside">
  <xsl:if test="@hstretch">
    <xsl:text>&#xa;</xsl:text>
    <xsl:text>{\tcbset{text width=</xsl:text>
      <xsl:value-of select="@hstretch"/>
    <xsl:text>pt}&#xa;</xsl:text>  
  </xsl:if>
  <xsl:apply-imports/>
  <xsl:if test="@hstretch">
    <xsl:text>}&#xa;</xsl:text>
  </xsl:if>
</xsl:template>

<!-- asides in the margin -->
<!-- simple asides, with no styling available -->
<xsl:template match="aside">
    <xsl:text>&#xa;</xsl:text>
    <xsl:choose>
      <xsl:when test="ancestor::example and not(ancestor::ul or ancestor::ol)">
        <xsl:text>\tcbmarginbox{%&#xa;</xsl:text>
      </xsl:when>
      <xsl:when test="(ancestor::example or ancestor::theorem) and (ancestor::ul or ancestor::ol)">
        <xsl:text>\listmarginbox{%&#xa;</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:text>\parmarginbox{%&#xa;</xsl:text>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:text>\begin{</xsl:text>
    <xsl:value-of select="local-name(.)" />
    <xsl:text>}</xsl:text>
    <xsl:apply-templates select="." mode="block-options"/>
    <xsl:text>%&#xa;</xsl:text>
    <!-- Coordinate with schema, since we enforce it here -->
    <xsl:apply-templates select="p|blockquote|pre|image|video|program|console|tabular"/>
    <xsl:text>\end{</xsl:text>
    <xsl:value-of select="local-name(.)" />
    <xsl:text>}&#xa;</xsl:text>
    <xsl:apply-templates select="." mode="pop-footnote-text"/>
    <xsl:text>}{</xsl:text><xsl:value-of select="@vshift"/><xsl:text>cm}%&#xa;</xsl:text>
    <xsl:text>&#xa;</xsl:text>
</xsl:template>

<!-- Change True/False formatting -->

<xsl:template match="*[@exercise-interactive = 'truefalse']" mode="runestone-to-static">
    <!-- metadata (idx, title) -->
    <xsl:copy-of select="statement/preceding-sibling::*"/>
    <!-- prompt, followed by ordered list of choices -->
    <statement>
      <p>True or False?</p>
      <xsl:copy-of select="statement/node()"/>
    </statement>
    <!-- Hints are authored, not derived from problem formulation -->
    <xsl:copy-of select="hint"/>
    <!-- Any authored answers, not derived from problem formulation.  -->
    <!-- *Before* automatic ones, so numbering matches interactive    -->
    <!-- versions on authored ones.                                   -->
    <xsl:copy-of select="answer"/>
    <!-- the answer, simply "True" or "False" -->
    <answer>
        <xsl:choose>
            <xsl:when test="statement/@correct = 'yes'">
                <p>True.</p>
            </xsl:when>
            <xsl:when test="statement/@correct = 'no'">
                <p>False.</p>
            </xsl:when>
            <xsl:otherwise/>
        </xsl:choose>
    </answer>
    <!-- Any authored solutions, not derived from problem formulation. -->
    <!-- *Before* automatic ones, so numbering matches interactive     -->
    <!-- versions on authored ones.                                    -->
    <xsl:copy-of select="solution"/>
    <!-- Answer, as above, plus explication with feedback -->
    <!-- TODO: experiment with a one-item "dl" for a slightly more       -->
    <!--       appealing presentation, rather than a one-word paragraph. -->
    <solution>
        <xsl:choose>
            <xsl:when test="statement/@correct = 'yes'">
                <p>True.</p>
            </xsl:when>
            <xsl:when test="statement/@correct = 'no'">
                <p>False.</p>
            </xsl:when>
            <xsl:otherwise/>
        </xsl:choose>
        <xsl:copy-of select="feedback/node()"/>
    </solution>
</xsl:template>

<!-- To modify sagecell appearance in print. -->
<!-- Code support -->
<xsl:template name="code-support">
    <!-- Inconsolata font, sponsored by TUG: http://levien.com/type/myfonts/inconsolata.html            -->
    <!-- As seen on: http://tex.stackexchange.com/questions/50810/good-monospace-font-for-code-in-latex -->
    <!-- "Fonts for Displaying Program Code in LaTeX":  http://nepsweb.co.uk/docs%/progfonts.pdf        -->
    <!-- Fonts and xelatex:  http://tex.stackexchange.com/questions/102525/use-type-1-fonts-with-xelatex -->
    <!--   http://tex.stackexchange.com/questions/179448/beramono-in-xetex -->
    <!-- http://tex.stackexchange.com/questions/25249/how-do-i-use-a-particular-font-for-a-small-section-of-text-in-my-document -->
    <!-- Bitstream Vera Font names within: https://github.com/timfel/texmf/blob/master/fonts/map/vtex/bera.ali -->
    <!-- Coloring listings: http://tex.stackexchange.com/questions/18376/beautiful-listing-for-csharp -->
    <!-- Song and Dance for font changes: http://jevopi.blogspot.com/2010/03/nicely-formatted-listings-in-latex-with.html -->
    <xsl:if test="$b-has-program or $b-has-console or $b-has-sage">
        <xsl:text>%% Program listing support: for listings, programs, consoles, and Sage code&#xa;</xsl:text>
        <!-- NB: the "listingsutf8" package is not a panacea, as it only       -->
        <!-- cooperates with UTF-8 characters when code snippets are read      -->
        <!-- in from external files.  We do condition on the LaTeX engines     -->
        <!-- since (a) it is easy and (b) the tcolorbox documentation warns    -->
        <!-- about not being careful.  NB: LuaTeX is not tested nor supported. -->
        <xsl:text>\ifthenelse{\boolean{xetex} \or \boolean{luatex}}%&#xa;</xsl:text>
        <xsl:text>  {\tcbuselibrary{listings}}%&#xa;</xsl:text>
        <xsl:text>  {\tcbuselibrary{listingsutf8}}%&#xa;</xsl:text>
        <xsl:text>%% We define the listings font style to be the default "ttfamily"&#xa;</xsl:text>
        <xsl:text>%% To fix hyphens/dashes rendered in PDF as fancy minus signs by listing&#xa;</xsl:text>
        <xsl:text>%% http://tex.stackexchange.com/questions/33185/listings-package-changes-hyphens-to-minus-signs&#xa;</xsl:text>
        <xsl:text>\makeatletter&#xa;</xsl:text>
        <xsl:text>\lst@CCPutMacro\lst@ProcessOther {"2D}{\lst@ttfamily{-{}}{-{}}}&#xa;</xsl:text>
        <xsl:text>\@empty\z@\@empty&#xa;</xsl:text>
        <xsl:text>\makeatother&#xa;</xsl:text>
        <xsl:text>%% We define a null language, free of any formatting or style&#xa;</xsl:text>
        <xsl:text>%% for use when a language is not supported, or pseudo-code, or consoles&#xa;</xsl:text>
        <xsl:text>%% Not necessary for Sage code, so in limited cases included unnecessarily&#xa;</xsl:text>
        <xsl:text>\lstdefinelanguage{none}{identifierstyle=,commentstyle=,stringstyle=,keywordstyle=}&#xa;</xsl:text>
        <xsl:text>\ifthenelse{\boolean{xetex}}{}{%&#xa;</xsl:text>
        <xsl:text>%% begin: pdflatex-specific listings configuration&#xa;</xsl:text>
        <xsl:text>%% translate U+0080 - U+00F0 to their textmode LaTeX equivalents&#xa;</xsl:text>
        <xsl:text>%% Data originally from https://www.w3.org/Math/characters/unicode.xml, 2016-07-23&#xa;</xsl:text>
        <xsl:text>%% Lines marked in XSL with "$" were converted from mathmode to textmode&#xa;</xsl:text>
        <!-- encoding, etc: http://tex.stackexchange.com/questions/24528/ -->
        <!-- Format: {Unicode}{TeX}{rendered-length} Unicode name (in numerical order) -->
        <xsl:text>\lstset{extendedchars=true}&#xa;</xsl:text>
        <xsl:text>\lstset{literate=</xsl:text>
        <xsl:text>{&#x00A0;}{{~}}{1}</xsl:text>    <!--NO-BREAK SPACE-->
        <xsl:text>{&#x00A1;}{{\textexclamdown }}{1}</xsl:text>    <!--INVERTED EXCLAMATION MARK-->
        <xsl:text>{&#x00A2;}{{\textcent }}{1}</xsl:text>    <!--CENT SIGN-->
        <xsl:text>{&#x00A3;}{{\textsterling }}{1}</xsl:text>    <!--POUND SIGN-->
        <xsl:text>{&#x00A4;}{{\textcurrency }}{1}</xsl:text>    <!--CURRENCY SIGN-->
        <xsl:text>{&#x00A5;}{{\textyen }}{1}</xsl:text>    <!--YEN SIGN-->
        <xsl:text>{&#x00A6;}{{\textbrokenbar }}{1}</xsl:text>    <!--BROKEN BAR-->
        <xsl:text>{&#x00A7;}{{\textsection }}{1}</xsl:text>    <!--SECTION SIGN-->
        <xsl:text>{&#x00A8;}{{\textasciidieresis }}{1}</xsl:text>    <!--DIAERESIS-->
        <xsl:text>{&#x00A9;}{{\textcopyright }}{1}</xsl:text>    <!--COPYRIGHT SIGN-->
        <xsl:text>{&#x00AA;}{{\textordfeminine }}{1}</xsl:text>    <!--FEMININE ORDINAL INDICATOR-->
        <xsl:text>{&#x00AB;}{{\guillemotleft }}{1}</xsl:text>    <!--LEFT-POINTING DOUBLE ANGLE QUOTATION MARK-->
        <xsl:text>{&#x00AC;}{{\textlnot }}{1}</xsl:text>    <!--NOT SIGN-->  <!-- $ -->
        <xsl:text>{&#x00AD;}{{\-}}{1}</xsl:text>    <!--SOFT HYPHEN-->
        <xsl:text>{&#x00AE;}{{\textregistered }}{1}</xsl:text>    <!--REGISTERED SIGN-->
        <xsl:text>{&#x00AF;}{{\textasciimacron }}{1}</xsl:text>    <!--MACRON-->
        <xsl:text>{&#x00B0;}{{\textdegree }}{1}</xsl:text>    <!--DEGREE SIGN-->
        <xsl:text>{&#x00B1;}{{\textpm }}{1}</xsl:text>    <!--PLUS-MINUS SIGN-->  <!-- $ -->
        <xsl:text>{&#x00B2;}{{\texttwosuperior }}{1}</xsl:text>    <!--SUPERSCRIPT TWO-->  <!-- $ -->
        <xsl:text>{&#x00B3;}{{\textthreesuperior }}{1}</xsl:text>    <!--SUPERSCRIPT THREE-->   <!-- $ -->
        <xsl:text>{&#x00B4;}{{\textasciiacute }}{1}</xsl:text>    <!--ACUTE ACCENT-->
        <xsl:text>{&#x00B5;}{{\textmu }}{1}</xsl:text>    <!--MICRO SIGN-->  <!-- $ -->
        <xsl:text>{&#x00B6;}{{\textparagraph }}{1}</xsl:text>    <!--PILCROW SIGN-->
        <xsl:text>{&#x00B7;}{{\textperiodcentered }}{1}</xsl:text>    <!--MIDDLE DOT-->  <!-- $ -->
        <xsl:text>{&#x00B8;}{{\c{}}}{1}</xsl:text>    <!--CEDILLA-->
        <xsl:text>{&#x00B9;}{{\textonesuperior }}{1}</xsl:text>    <!--SUPERSCRIPT ONE-->  <!-- $ -->
        <xsl:text>{&#x00BA;}{{\textordmasculine }}{1}</xsl:text>    <!--MASCULINE ORDINAL INDICATOR-->
        <xsl:text>{&#x00BB;}{{\guillemotright }}{1}</xsl:text>    <!--RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK-->
        <xsl:text>{&#x00BC;}{{\textonequarter }}{1}</xsl:text>    <!--VULGAR FRACTION ONE QUARTER-->
        <xsl:text>{&#x00BD;}{{\textonehalf }}{1}</xsl:text>    <!--VULGAR FRACTION ONE HALF-->
        <xsl:text>{&#x00BE;}{{\textthreequarters }}{1}</xsl:text>    <!--VULGAR FRACTION THREE QUARTERS-->
        <xsl:text>{&#x00BF;}{{\textquestiondown }}{1}</xsl:text>    <!--INVERTED QUESTION MARK-->
        <xsl:text>{&#x00C0;}{{\`{A}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER A WITH GRAVE-->
        <xsl:text>{&#x00C1;}{{\'{A}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER A WITH ACUTE-->
        <xsl:text>{&#x00C2;}{{\^{A}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER A WITH CIRCUMFLEX-->
        <xsl:text>{&#x00C3;}{{\~{A}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER A WITH TILDE-->
        <xsl:text>{&#x00C4;}{{\"{A}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER A WITH DIAERESIS-->
        <xsl:text>{&#x00C5;}{{\AA }}{1}</xsl:text>    <!--LATIN CAPITAL LETTER A WITH RING ABOVE-->
        <xsl:text>{&#x00C6;}{{\AE }}{1}</xsl:text>    <!--LATIN CAPITAL LETTER AE-->
        <xsl:text>{&#x00C7;}{{\c{C}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER C WITH CEDILLA-->
        <xsl:text>{&#x00C8;}{{\`{E}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER E WITH GRAVE-->
        <xsl:text>{&#x00C9;}{{\'{E}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER E WITH ACUTE-->
        <xsl:text>{&#x00CA;}{{\^{E}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER E WITH CIRCUMFLEX-->
        <xsl:text>{&#x00CB;}{{\"{E}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER E WITH DIAERESIS-->
        <xsl:text>{&#x00CC;}{{\`{I}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER I WITH GRAVE-->
        <xsl:text>{&#x00CD;}{{\'{I}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER I WITH ACUTE-->
        <xsl:text>{&#x00CE;}{{\^{I}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER I WITH CIRCUMFLEX-->
        <xsl:text>{&#x00CF;}{{\"{I}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER I WITH DIAERESIS-->
        <xsl:text>{&#x00D0;}{{\DH }}{1}</xsl:text>    <!--LATIN CAPITAL LETTER ETH-->
        <xsl:text>{&#x00D1;}{{\~{N}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER N WITH TILDE-->
        <xsl:text>{&#x00D2;}{{\`{O}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER O WITH GRAVE-->
        <xsl:text>{&#x00D3;}{{\'{O}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER O WITH ACUTE-->
        <xsl:text>{&#x00D4;}{{\^{O}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER O WITH CIRCUMFLEX-->
        <xsl:text>{&#x00D5;}{{\~{O}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER O WITH TILDE-->
        <xsl:text>{&#x00D6;}{{\"{O}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER O WITH DIAERESIS-->
        <xsl:text>{&#x00D7;}{{\texttimes }}{1}</xsl:text>    <!--MULTIPLICATION SIGN-->
        <xsl:text>{&#x00D8;}{{\O }}{1}</xsl:text>    <!--LATIN CAPITAL LETTER O WITH STROKE-->
        <xsl:text>{&#x00D9;}{{\`{U}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER U WITH GRAVE-->
        <xsl:text>{&#x00DA;}{{\'{U}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER U WITH ACUTE-->
        <xsl:text>{&#x00DB;}{{\^{U}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER U WITH CIRCUMFLEX-->
        <xsl:text>{&#x00DC;}{{\"{U}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER U WITH DIAERESIS-->
        <xsl:text>{&#x00DD;}{{\'{Y}}}{1}</xsl:text>    <!--LATIN CAPITAL LETTER Y WITH ACUTE-->
        <xsl:text>{&#x00DE;}{{\TH }}{1}</xsl:text>    <!--LATIN CAPITAL LETTER THORN-->
        <xsl:text>{&#x00DF;}{{\ss }}{1}</xsl:text>    <!--LATIN SMALL LETTER SHARP S-->
        <xsl:text>{&#x00E0;}{{\`{a}}}{1}</xsl:text>    <!--LATIN SMALL LETTER A WITH GRAVE-->
        <xsl:text>{&#x00E1;}{{\'{a}}}{1}</xsl:text>    <!--LATIN SMALL LETTER A WITH ACUTE-->
        <xsl:text>{&#x00E2;}{{\^{a}}}{1}</xsl:text>    <!--LATIN SMALL LETTER A WITH CIRCUMFLEX-->
        <xsl:text>{&#x00E3;}{{\~{a}}}{1}</xsl:text>    <!--LATIN SMALL LETTER A WITH TILDE-->
        <xsl:text>{&#x00E4;}{{\"{a}}}{1}</xsl:text>    <!--LATIN SMALL LETTER A WITH DIAERESIS-->
        <xsl:text>{&#x00E5;}{{\aa }}{1}</xsl:text>    <!--LATIN SMALL LETTER A WITH RING ABOVE-->
        <xsl:text>{&#x00E6;}{{\ae }}{1}</xsl:text>    <!--LATIN SMALL LETTER AE-->
        <xsl:text>{&#x00E7;}{{\c{c}}}{1}</xsl:text>    <!--LATIN SMALL LETTER C WITH CEDILLA-->
        <xsl:text>{&#x00E8;}{{\`{e}}}{1}</xsl:text>    <!--LATIN SMALL LETTER E WITH GRAVE-->
        <xsl:text>{&#x00E9;}{{\'{e}}}{1}</xsl:text>    <!--LATIN SMALL LETTER E WITH ACUTE-->
        <xsl:text>{&#x00EA;}{{\^{e}}}{1}</xsl:text>    <!--LATIN SMALL LETTER E WITH CIRCUMFLEX-->
        <xsl:text>{&#x00EB;}{{\"{e}}}{1}</xsl:text>    <!--LATIN SMALL LETTER E WITH DIAERESIS-->
        <xsl:text>{&#x00EC;}{{\`{\i}}}{1}</xsl:text>    <!--LATIN SMALL LETTER I WITH GRAVE-->
        <xsl:text>{&#x00ED;}{{\'{\i}}}{1}</xsl:text>    <!--LATIN SMALL LETTER I WITH ACUTE-->
        <xsl:text>{&#x00EE;}{{\^{\i}}}{1}</xsl:text>    <!--LATIN SMALL LETTER I WITH CIRCUMFLEX-->
        <xsl:text>{&#x00EF;}{{\"{\i}}}{1}</xsl:text>    <!--LATIN SMALL LETTER I WITH DIAERESIS-->
        <xsl:text>{&#x00F0;}{{\dh }}{1}</xsl:text>    <!--LATIN SMALL LETTER ETH-->
        <xsl:text>{&#x00F1;}{{\~{n}}}{1}</xsl:text>    <!--LATIN SMALL LETTER N WITH TILDE-->
        <xsl:text>{&#x00F2;}{{\`{o}}}{1}</xsl:text>    <!--LATIN SMALL LETTER O WITH GRAVE-->
        <xsl:text>{&#x00F3;}{{\'{o}}}{1}</xsl:text>    <!--LATIN SMALL LETTER O WITH ACUTE-->
        <xsl:text>{&#x00F4;}{{\^{o}}}{1}</xsl:text>    <!--LATIN SMALL LETTER O WITH CIRCUMFLEX-->
        <xsl:text>{&#x00F5;}{{\~{o}}}{1}</xsl:text>    <!--LATIN SMALL LETTER O WITH TILDE-->
        <xsl:text>{&#x00F6;}{{\"{o}}}{1}</xsl:text>    <!--LATIN SMALL LETTER O WITH DIAERESIS-->
        <xsl:text>{&#x00F7;}{{\textdiv }}{1}</xsl:text>    <!--DIVISION SIGN-->  <!-- $ -->
        <xsl:text>{&#x00F8;}{{\o }}{1}</xsl:text>    <!--LATIN SMALL LETTER O WITH STROKE-->
        <xsl:text>{&#x00F9;}{{\`{u}}}{1}</xsl:text>    <!--LATIN SMALL LETTER U WITH GRAVE-->
        <xsl:text>{&#x00FA;}{{\'{u}}}{1}</xsl:text>    <!--LATIN SMALL LETTER U WITH ACUTE-->
        <xsl:text>{&#x00FB;}{{\^{u}}}{1}</xsl:text>    <!--LATIN SMALL LETTER U WITH CIRCUMFLEX-->
        <xsl:text>{&#x00FC;}{{\"{u}}}{1}</xsl:text>    <!--LATIN SMALL LETTER U WITH DIAERESIS-->
        <xsl:text>{&#x00FD;}{{\'{y}}}{1}</xsl:text>    <!--LATIN SMALL LETTER Y WITH ACUTE-->
        <xsl:text>{&#x00FE;}{{\th }}{1}</xsl:text>    <!--LATIN SMALL LETTER THORN-->
        <xsl:text>{&#x00FF;}{{\"{y}}}{1}</xsl:text>    <!--LATIN SMALL LETTER Y WITH DIAERESIS-->
        <xsl:text>}&#xa;</xsl:text> <!-- end of literate set -->
        <xsl:text>%% end: pdflatex-specific listings configuration&#xa;</xsl:text>
        <xsl:text>}&#xa;</xsl:text>
        <xsl:text>%% End of generic listing adjustments&#xa;</xsl:text>
        <xsl:if test="$b-has-program">
            <xsl:text>%% Program listings via new tcblisting environment&#xa;</xsl:text>
            <xsl:text>%% First a universal color scheme for parts of any language&#xa;</xsl:text>
            <xsl:if test="not($b-latex-print)" >
                <xsl:text>%% Colors match a subset of Google prettify "Default" style&#xa;</xsl:text>
                <xsl:text>%% Full colors for "electronic" version&#xa;</xsl:text>
                <xsl:text>%% http://code.google.com/p/google-code-prettify/source/browse/trunk/src/prettify.css&#xa;</xsl:text>
                <xsl:text>\definecolor{identifiers}{rgb}{0.375,0,0.375}&#xa;</xsl:text>
                <xsl:text>\definecolor{comments}{rgb}{0.5,0,0}&#xa;</xsl:text>
                <xsl:text>\definecolor{strings}{rgb}{0,0.5,0}&#xa;</xsl:text>
                <xsl:text>\definecolor{keywords}{rgb}{0,0,0.5}&#xa;</xsl:text>
            </xsl:if>
            <xsl:if test="$b-latex-print" >
                <xsl:text>%% All-black colors for "print" version&#xa;</xsl:text>
                <xsl:text>\definecolor{identifiers}{rgb}{0,0,0}&#xa;</xsl:text>
                <xsl:text>\definecolor{comments}{rgb}{0,0,0}&#xa;</xsl:text>
                <xsl:text>\definecolor{strings}{rgb}{0,0,0}&#xa;</xsl:text>
                <xsl:text>\definecolor{keywords}{rgb}{0,0,0}&#xa;</xsl:text>
            </xsl:if>
            <xsl:text>%% Options passed to the listings package via tcolorbox&#xa;</xsl:text>
            <xsl:text>\lstdefinestyle{programcodestyle}{identifierstyle=\color{identifiers},commentstyle=\color{comments},stringstyle=\color{strings},keywordstyle=\color{keywords}, breaklines=true, breakatwhitespace=true, columns=fixed, extendedchars=true, aboveskip=0pt, belowskip=0pt}&#xa;</xsl:text>
            <!-- This variant style is what will turn on line numbering -->
            <xsl:text>\lstdefinestyle{programcodenumberedstyle}{style=programcodestyle, numbers=left}&#xa;</xsl:text>
            <!-- We want a "program" to be able to break across pages -->
            <!-- 2020-10-07: "breakable" seems ineffective            -->
            <!-- 3 ex left margin moves code off of leftrule by a generous amount -->
            <xsl:text>\tcbset{ programboxstyle/.style={left=3ex, right=0pt, top=0ex, bottom=0ex, middle=0pt, toptitle=0pt, bottomtitle=0pt, boxsep=0pt, &#xa;</xsl:text>
            <xsl:text>listing only, fontupper=\small\ttfamily,&#xa;</xsl:text>
            <xsl:text>colback=white, sharp corners, boxrule=-0.3pt, leftrule=0.5pt, toprule at break=-0.3pt, bottomrule at break=-0.3pt,&#xa;</xsl:text>
            <xsl:text>breakable,&#xa;</xsl:text>
            <xsl:text>} }&#xa;</xsl:text>
            <!-- Repeat the box style, but move numbers out of the margin and past -->
            <!-- the left rule with a 6ex space.  Plenty of room for double-digit  -->
            <!-- line numbers, and should be OK for triple-digits                   -->
            <xsl:text>%% Overwrite the margin to make room for numbers (up to line 999)&#xa;</xsl:text>
            <xsl:text>\tcbset{ programboxnumberedstyle/.style={programboxstyle, left=6ex} }&#xa;</xsl:text>
            <!-- Two "tcblisting" environments for numbered v. not numbered,            -->
            <!-- see switching between them in employment in body                       -->
            <!-- Arguments: language, left margin, width, right margin (latter ignored) -->
            <xsl:text>\newtcblisting{program}[4]{programboxstyle, left skip=#2\linewidth, width=#3\linewidth, listing options={language=#1, style=programcodestyle}}&#xa;</xsl:text>
            <xsl:text>\newtcblisting{programnumbered}[4]{programboxnumberedstyle, left skip=#2\linewidth, width=#3\linewidth, listing options={language=#1, style=programcodenumberedstyle}}&#xa;</xsl:text>
            <!-- Arguments: language, body text. body text must start and end with a    -->
            <!-- single character delimeter not in the text itself.                     -->
            <xsl:text>\newcommand{\programfragment}[2]{\lstinline[language=#1, style=programcodestyle, basicstyle=\ttfamily]#2}&#xa;</xsl:text>
        </xsl:if>
        <xsl:if test="$document-root//console">
            <xsl:text>%% Console session with prompt, input, output&#xa;</xsl:text>
            <xsl:text>%% listings allows for escape sequences to enable LateX,&#xa;</xsl:text>
            <xsl:text>%% so we bold the input commands via the following macro&#xa;</xsl:text>
            <xsl:text>\newcommand{\consoleinput}[1]{\textbf{#1}}&#xa;</xsl:text>
            <!-- https://tex.stackexchange.com/questions/299401/bold-just-one-line-inside-of-lstlisting/299406 -->
            <!-- Syntax highlighting is not so great for "language=bash" -->
            <!-- Line-breaking off to match old behavior, prebreak option fails inside LaTeX for input -->
            <xsl:text>\lstdefinestyle{consolecodestyle}{language=none, escapeinside={(*}{*)}, identifierstyle=, commentstyle=, stringstyle=, keywordstyle=, breaklines=true, breakatwhitespace=true, columns=fixed, extendedchars=true, aboveskip=0pt, belowskip=0pt}&#xa;</xsl:text>
            <!--  -->
            <xsl:text>\tcbset{ consoleboxstyle/.style={left=0pt, right=0pt, top=0ex, bottom=0ex, middle=0pt, toptitle=0pt, bottomtitle=0pt, boxsep=0pt,&#xa;</xsl:text>
            <xsl:text>listing only, fontupper=\small\ttfamily,&#xa;</xsl:text>
            <xsl:text>colback=white, boxrule=-0.3pt, toprule at break=-0.3pt, bottomrule at break=-0.3pt,&#xa;</xsl:text>
            <xsl:text>breakable,&#xa;</xsl:text>
            <xsl:text>} }&#xa;</xsl:text>
            <!-- Arguments: left margin, width, right margin (latter ignored) -->
            <xsl:text>\newtcblisting{console}[3]{consoleboxstyle, left skip=#1\linewidth, width=#2\linewidth, listing options={style=consolecodestyle}}&#xa;</xsl:text>
       </xsl:if>
        <xsl:if test="$b-has-sage">
            <xsl:text>%% The listings package as tcolorbox for Sage code&#xa;</xsl:text>
            <xsl:text>%% We do as much styling as possible with tcolorbox, not listings&#xa;</xsl:text>
            <xsl:text>%% Sage's blue is 50%, we go way lighter (blue!05 would also work)&#xa;</xsl:text>
            <xsl:text>%% Note that we defuse listings' default "aboveskip" and "belowskip"&#xa;</xsl:text>
            <!-- NB: tcblisting "forgets" its colors as it breaks across pages, -->
            <!-- and "frame empty" on the output is not sufficient.  So we set  -->
            <!-- the frame color to white.                                      -->
            <!-- See: https://tex.stackexchange.com/questions/240246/           -->
            <!-- problem-with-tcblisting-at-page-break                          -->
            <!-- TODO: integrate into the LaTeX styling schemes -->
            <xsl:text>\definecolor{sageblue}{rgb}{0.95,0.95,1}&#xa;</xsl:text>
            <xsl:text>\tcbset{ sagestyle/.style={left=0pt, right=0pt, top=0ex, bottom=0ex, middle=0pt, toptitle=0pt, bottomtitle=0pt,&#xa;</xsl:text>
            <xsl:text>boxsep=4pt, listing only, fontupper=\small\ttfamily,&#xa;</xsl:text>
            <xsl:text>breakable, parbox=false,&#xa;</xsl:text>
            <xsl:text>listing options={language=Python,breaklines=true,breakatwhitespace=true, extendedchars=true, aboveskip=0pt, belowskip=0pt}} }&#xa;</xsl:text>
            <xsl:text>\newtcblisting{sageinput}{sagestyle, colback=sageblue, enhanced, sharp corners, borderline east={0.5pt}{0pt}{black}, borderline west={0.5pt}{0pt}{black},borderline north={0.5pt}{0pt}{black},before skip=10pt, after skip=0pt,frame hidden,}&#xa;</xsl:text>
            <xsl:text>\newtcolorbox{sageoutput}{colback=white, enhanced, borderline east={0.5pt}{0pt}{black},&#xa;</xsl:text>
            <xsl:text>borderline west={0.5pt}{0pt}{black}, borderline south={0.5pt}{0pt}{black},&#xa;</xsl:text>
            <xsl:text>borderline north={0.5pt}{0pt}{black,dashed}, sharp corners, before skip=0pt, after skip=10pt, frame hidden,}&#xa;</xsl:text>
        </xsl:if>
    </xsl:if>
    <xsl:if test="$document-root//pre|$document-root//cd|$document-root//fragment">
        <xsl:text>%% Fancy Verbatim for consoles, preformatted, code display, literate programming&#xa;</xsl:text>
        <xsl:text>\usepackage{fancyvrb}&#xa;</xsl:text>
        <xsl:if test="$document-root//pre|$document-root//fragment">
            <xsl:text>%% Pre-formatted text, a peer of paragraphs&#xa;</xsl:text>
            <xsl:text>\DefineVerbatimEnvironment{preformatted}{Verbatim}{}&#xa;</xsl:text>
        </xsl:if>
        <!-- see commit d2560edd0cc3974c for removal of code for a centered box of verbatim text -->
        <xsl:if test="$document-root//cd">
            <xsl:text>%% code display (cd), by analogy with math display (md)&#xa;</xsl:text>
            <xsl:text>%% (a) indented slightly, so a paragraph appears to hang together&#xa;</xsl:text>
            <xsl:text>\DefineVerbatimEnvironment{codedisplay}{Verbatim}{xleftmargin=4ex}&#xa;</xsl:text>
            <xsl:text>%% (b) flush left works well in exceptions like list items, etc&#xa;</xsl:text>
            <xsl:text>\DefineVerbatimEnvironment{codedisplayleft}{Verbatim}{}&#xa;</xsl:text>
        </xsl:if>
    </xsl:if>
</xsl:template>
</xsl:stylesheet>
