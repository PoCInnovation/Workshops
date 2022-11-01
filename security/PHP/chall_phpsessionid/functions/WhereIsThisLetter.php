<?php
function WhereIsThisLetter($letter, $word)
{
    for ($i = 0; $i != strlen($word); $i++)
    {
        if ($word[$i] === $letter)
            return ($i);
    }
}
?>