from django.shortcuts import render

# Create your views here.


# --------------------------- Intro page of the website ---------------------------

def index(request):
    
    return render(request, 'index.html')





# --------------------------- Login page of the website ---------------------------

def signup(request):
    
    return render(request, 'signup.html')





# --------------------------- Login page of the website ---------------------------

def login(request):
    
    return render(request, 'login.html')





# --------------------------- Profile page of the website ---------------------------

def profile(request):
    
    return render(request, 'profile.html')





# --------------------------- Home page of the website ----------------------------

def home(request):

    return render(request, 'home.html')





# -------------------------- Wishlist page of the website --------------------------

def wishlist(request):

    return render(request, 'wishlist.html')





# ---------------------------- Cart page of the website ----------------------------

def cart(request):

    return render(request, 'cart.html')





# --------------------------- Orders page of the website ---------------------------

def orders(request):

    return render(request, 'orders.html')





# -------------------------- Checkout page of the website --------------------------

def checkout(request):

    return render(request, 'checkout.html')





# --------------------------- Intro page of the website ---------------------------

def signup(request):
    
    return render(request, 'signup.html')





# --------------------------- Logout page of the website ---------------------------

def logout(request):
    
    return render(request, 'logout.html')




