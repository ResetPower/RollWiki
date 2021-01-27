from django.shortcuts import render, redirect
from RollWiki.settings import _settings


def index(req):
    return redirect('/en/home')


def base(req):
    return render(req, 'base.html', {"site": _settings['site']})
