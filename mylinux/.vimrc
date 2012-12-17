"pathogen plugin
"call pathogen#runtime_append_all_bundles()
filetype off
se ls=0

"vundle plugin
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

Bundle 'gmarik/vundle'

"my bundle
Bundle 'vimwiki'
Bundle 'scrooloose/nerdtree'
Bundle 'scrooloose/nerdcommenter'

"not for vi
se nowrap
syntax on
se hlsearch
se smarttab
se ruler
set ft=javascript
"encodings
"se encoding=utf-8
"se fileencoding=utf-8
"se fileencodings=ucs-bom,utf-8,chinese,taiwan,japan,koren,latin1
"se helplang=cn
let &termencoding=&encoding
set fileencodings=utf-8,gbk,ucs-bom,cp936 

"indent
se linespace=4
se shiftwidth=4
se tabstop=4
"se softtabstop=4

se expandtab
se autoindent

se showmatch
se matchpairs=(:),{:},[:],<:>
se whichwrap=b,s,<,>,[,]

"macvim
    "no toolbar
    "se guifont=Vera\ Sans\ YuanTi\ Mono\ 12
    se background=dark
    colo moria
    "colorscheme evening
    "se transparency=0

    se cc=141
    "取消默认快捷键

    se nocompatible
    filetype plugin on 
    filetype plugin indent on
    se ru
    se ls
    se hls
    se number
    se autochdir
    se guioptions-=T


    "se imactivatekey=C-space
    "inoremap <ESC> <ESC>:se iminsert=0<CR>--> 

"vim wiki
let g:vimwiki_use_mouse = 1
let g:vimwiki_list = [{'path' : '~/wiki/',
    \'path_html' : '~/wiki/html/',
    \'html_header' : '~/wiki/template/header.tpl'}]
:hi VimwikiHeader1 guifg=#FF0000
:hi VimwikiHeader2 guifg=#00FF00
:hi VimwikiHeader3 guifg=#0000FF
:hi VimwikiHeader4 guifg=#FF00FF
:hi VimwikiHeader5 guifg=#00FFFF
:hi VimwikiHeader6 guifg=#FFFF00



"autocmd
""""""""""""""""""""""""""
"indent
let g:indent_guides_auto_colors = 0
autocmd VimEnter,Colorscheme * :hi IndentGuidesOdd  guibg=red   ctermbg=3
autocmd VimEnter,Colorscheme * :hi IndentGuidesEven guibg=green ctermbg=4
autocmd! bufwritepost .vimrc source ~/.vimrc
autocmd! bufwritepost vimrc source ~/.vimrc

"autocmd! BufWinEnter * lcd pwd

"se local dir
map <Leader>cd :exe 'cd ' .expand ("%:p:h")<CR>

":inoremap ( ()<ESC>i
":inoremap ) <c-r>=ClosePair(')')<CR>
":inoremap { {}<ESC>i
":inoremap } <c-r>=ClosePair('}')<CR>
":inoremap [ []<ESC>i
":inoremap ] <c-r>=ClosePair(']')<CR>

"function! ClosePair(char)
"    if getline('.')[col('.') - 1] == a:char
"        return "<Right>"
"    else
"        return a:char
"    endif
"endf 

" 失去焦点，就自动保存
au FocusLost * :wa 
"copy all
map <F2> ggvG$"*y
"beautify css
map <F3> :%s/{/{\r/g<CR>:%s/;/;\r/g<CR>:%s/;}/}/g<CR>:%s/}/;\r}/g<CR>:g/^$/d<CR>ggvG=gg
"cp936 charset
map <F4> :se fenc=cp936<CR>:w<CR>
"utf-8 charset
map <F5> :se fenc=utf-8<CR>:w<CR>
"replace space row
map <F6> :g/^$/d<CR>
"open calendar
map <F7> :tabnew<CR>:Calendar<CR>
"open folder
map <F8> :exe 'cd ' .expand ("%:p:h")<CR>:NERDTree<CR>

"for add \' endline
map <F10> <ESC>k$a'<ESC>
"move back to ~/.tmp/backups/
se backupdir=~/.tmp/backups
se dir=~/.tmp/backups
se nobackup
"持久撤消
se undofile
se undodir=~/.tmp/backups
se ul=2000
se uc=50

"命令行补全
se wildmenu
se showcmd
"显示模式
se showmode
"实时显示查找结果
se incsearch
