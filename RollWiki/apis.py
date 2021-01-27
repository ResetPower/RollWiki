from django.http import JsonResponse

from RollWiki.utils import *
from RollWikiApp.models import *


def search(req, query):
    qsw = Wiki.objects.filter(name__contains=query)
    qsd = Doc.objects.filter(name__contains=query)
    wikis = []
    docs = []
    for i in qsw:
        wikis.append(gen_wiki_dict(i))
    for i in qsd:
        wikis.append(gen_doc_dict(i))
    return JsonResponse({
        'wiki': wikis,
        'doc': docs,
    })


def wiki(req, lang, name):
    qs = Wiki.objects.filter(name=name, lang=lang)
    if not qs.exists():
        return JsonResponse({'message': 'Wiki Not Found'}, status=404)
    return JsonResponse(gen_wiki_dict(qs[0]))


def doc(req, lang, name):
    qs = Doc.objects.filter(name=name, lang=lang)
    if not qs.exists():
        return JsonResponse({'message': 'Document Not Found'}, status=404)
    return JsonResponse(gen_doc_dict(qs[0]))


def post(req):
    pass
